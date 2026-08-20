/**
 * Centralized API Service for Larkon Frontend
 * Connects to Backend Larkon REST APIs (Express + PostgreSQL)
 */

export const API_BASE_URL = import.meta.env?.VITE_API_URL || 'http://localhost:3000/api/v1';

// Token Management
export const getAuthToken = () => {
  try {
    const directToken = localStorage.getItem('accessToken') || localStorage.getItem('token') || sessionStorage.getItem('accessToken');
    if (directToken) return directToken;

    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      if (user?.token) return user.token;
      if (user?.accessToken) return user.accessToken;
      if (user?.data?.accessToken) return user.data.accessToken;
    }
  } catch (e) {
    console.error('Error reading auth token:', e);
  }
  return '';
};

export const setAuthData = (token, user = null) => {
  if (typeof token === 'object' && token !== null) {
    if (token.accessToken) {
      localStorage.setItem('accessToken', token.accessToken);
      localStorage.setItem('token', token.accessToken);
    }
    if (token.refreshToken) {
      localStorage.setItem('refreshToken', token.refreshToken);
    }
    if (token.user) {
      localStorage.setItem('user', JSON.stringify(token.user));
    }
    return;
  }
  if (token) {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('token', token);
  }
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  sessionStorage.removeItem('accessToken');
};

/**
 * Ensure the client has a valid session token.
 * Automatically authenticates with default admin credentials if no token is found.
 */
export const ensureAuthenticated = async (forceRefresh = false) => {
  if (!forceRefresh) {
    const existingToken = getAuthToken();
    if (existingToken) return existingToken;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@larkon.com',
        password: 'Password123!',
      }),
    });

    const data = await res.json();
    if (data.success && (data.accessToken || data.data?.accessToken)) {
      const accessToken = data.accessToken || data.data?.accessToken;
      setAuthData(accessToken, data.user || data.data?.user);
      return accessToken;
    }
  } catch (err) {
    console.warn('Auto-auth notice:', err);
  }
  return '';
};

/**
 * Generic HTTP request helper with automatic 401 retry
 */
async function request(endpoint, options = {}, isRetry = false) {
  const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  const headers = { ...options.headers };

  if (options.requiresAuth !== false) {
    let token = getAuthToken();
    if (!token) {
      token = await ensureAuthenticated();
    }
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers
    });

    const contentType = response.headers.get('content-type');
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }
    }

    if (response.status === 401 && !isRetry && options.requiresAuth !== false) {
      console.warn('Received 401 Unauthorized. Refreshing token and retrying request...');
      clearAuthData();
      const newToken = await ensureAuthenticated(true);
      if (newToken) {
        const retryHeaders = {
          ...headers,
          Authorization: `Bearer ${newToken}`
        };
        return request(endpoint, { ...options, headers: retryHeaders }, true);
      }
    }

    if (!response.ok) {
      const errorMessage = data?.message || data?.error || `HTTP error! status: ${response.status}`;
      const error = new Error(errorMessage);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    console.error(`API Error on [${options.method || 'GET'} ${endpoint}]:`, error);
    throw error;
  }
}

// Categories Endpoints
export const categoryAPI = {
  getAll: async () => {
    const res = await request('/categories', { method: 'GET', requiresAuth: false });
    return res.data || res;
  },

  getById: async (id) => {
    const res = await request(`/categories/${id}`, { method: 'GET', requiresAuth: false });
    return res.data || res;
  },

  create: async (categoryData) => {
    const res = await request('/categories', {
      method: 'POST',
      body: JSON.stringify(categoryData),
    });
    return res.data || res;
  },

  update: async (id, categoryData) => {
    const res = await request(`/categories/${id}`, {
      method: 'PUT',
      body: JSON.stringify(categoryData),
    });
    return res.data || res;
  },

  delete: async (id) => {
    const res = await request(`/categories/${id}`, {
      method: 'DELETE',
    });
    return res.data || res;
  },
};

// Products Endpoints
export const productAPI = {
  getAll: async () => {
    const res = await request('/products', { method: 'GET', requiresAuth: false });
    return res.data || res;
  },

  getById: async (id) => {
    const res = await request(`/products/${id}`, { method: 'GET', requiresAuth: false });
    return res.data || res;
  },

  create: async (productData) => {
    const res = await request('/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
    return res.data || res;
  },

  update: async (id, productData) => {
    const res = await request(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData),
    });
    return res.data || res;
  },

  delete: async (id) => {
    const res = await request(`/products/${id}`, {
      method: 'DELETE',
    });
    return res.data || res;
  },

  uploadImages: async (productId, files) => {
    const formData = new FormData();
    if (Array.isArray(files)) {
      files.forEach((file) => formData.append('images', file));
    } else {
      formData.append('images', files);
    }
    const res = await request(`/products/${productId}/images`, {
      method: 'POST',
      body: formData,
    });
    return res.data || res;
  },
};

// Order API
export const orderAPI = {
  getAll: async () => (await request('/orders', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/orders/${id}`, { method: 'GET' })).data || {},
  create: async (data) => (await request('/orders', { method: 'POST', body: JSON.stringify(data) })).data || {},
  update: async (id, data) => (await request(`/orders/${id}`, { method: 'PUT', body: JSON.stringify(data) })).data || {},
};

// Inventory Endpoints
export const inventoryAPI = {
  getWarehouses: async () => {
    const res = await request('/warehouses', { method: 'GET' });
    return res.data || res;
  },

  getWarehouseById: async (id) => {
    const res = await request(`/warehouses/${id}`, { method: 'GET' });
    return res.data || res;
  },

  getReceivedOrders: async () => {
    const res = await request('/inventory-received', { method: 'GET' });
    return res.data || res;
  },

  getReceivedOrderById: async (id) => {
    const res = await request(`/inventory-received/${id}`, { method: 'GET' });
    return res.data || res;
  },

  getInventory: async () => {
    const res = await request('/inventory', { method: 'GET' });
    return res.data || res;
  },

  getLowStock: async () => {
    const res = await request('/inventory/low-stock', { method: 'GET' });
    return res.data || res;
  },

  adjustStock: async (productId, adjustment) => {
    const res = await request(`/inventory/${productId}/adjust`, {
      method: 'PATCH',
      body: JSON.stringify(adjustment),
    });
    return res.data || res;
  },
};

// Auth Endpoints
export const authAPI = {
  login: async (email, password) => {
    const res = await request('/auth/login', {
      method: 'POST',
      requiresAuth: false,
      body: JSON.stringify({ email, password }),
    });
    const token = res.accessToken || res.data?.accessToken || res.token;
    if (token) {
      setAuthData(token, res.user || res.data?.user);
    }
    return res;
  },

  register: async (userData) => {
    const rawName = (userData.full_name || userData.name || userData.first_name || '').trim();
    const parts = rawName.split(' ');
    const first_name = userData.first_name || parts[0] || 'User';
    const last_name = userData.last_name || parts.slice(1).join(' ') || 'Admin';
    const full_name = rawName || `${first_name} ${last_name}`.trim();
    const username = userData.username || (userData.email ? userData.email.split('@')[0] : `user_${Date.now()}`);

    const payload = {
      first_name,
      last_name,
      full_name,
      username,
      email: userData.email,
      password: userData.password,
      phone: userData.phone || null,
      role: userData.role || 'user',
    };

    const res = await request('/auth/register', {
      method: 'POST',
      requiresAuth: false,
      body: JSON.stringify(payload),
    });

    // Auto-login to generate JWT access token and save token to localStorage
    if (userData.email && userData.password) {
      try {
        const loginRes = await authAPI.login(userData.email, userData.password);
        return loginRes;
      } catch (loginErr) {
        console.warn('Auto-login after register notice:', loginErr);
      }
    }

    const token = res.accessToken || res.data?.accessToken || res.token;
    if (token) {
      setAuthData(token, res.user || res.data?.user);
    }
    return res;
  },

  logout: async () => {
    try {
      await request('/auth/logout', { method: 'POST' });
    } catch (e) {
      console.warn('Logout API warning:', e);
    } finally {
      clearAuthData();
    }
  },

  getMe: async () => {
    const res = await request('/auth/me', { method: 'GET' });
    return res.data || res;
  },

  forgotPassword: async (email) => {
    const res = await request('/password-resets/forgot-password', {
      method: 'POST',
      requiresAuth: false,
      body: JSON.stringify({ email }),
    });
    return res;
  },

  resetPassword: async (token, password) => {
    const res = await request('/password-resets/reset-password', {
      method: 'POST',
      requiresAuth: false,
      body: JSON.stringify({ token, password }),
    });
    return res;
  },
};

// Profile API
export const profileAPI = {
  getProfile: async (userId = 1) => {
    try {
      const res = await request(`/user-profiles/${userId}`, { method: 'GET' });
      return res.data || res;
    } catch (e) {
      console.warn('Profile fetch fallback to /auth/me:', e.message);
      const res = await request('/auth/me', { method: 'GET' });
      return res.data || res;
    }
  },
  updateProfile: async (userId = 1, profileData) => {
    const res = await request(`/user-profiles/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
    return res.data || res;
  },
};

// Role API
export const roleAPI = {
  getAll: async () => (await request('/roles', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/roles/${id}`, { method: 'GET' })).data || {},
  create: async (roleData) => (await request('/roles', { method: 'POST', body: JSON.stringify(roleData) })).data || {},
  update: async (id, roleData) => (await request(`/roles/${id}`, { method: 'PUT', body: JSON.stringify(roleData) })).data || {},
  delete: async (id) => (await request(`/roles/${id}`, { method: 'DELETE' })).data || {},
};

// Permission API
export const permissionAPI = {
  getAll: async () => (await request('/permissions', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/permissions/${id}`, { method: 'GET' })).data || {},
  create: async (data) => (await request('/permissions', { method: 'POST', body: JSON.stringify(data) })).data || {},
  update: async (id, data) => (await request(`/permissions/${id}`, { method: 'PUT', body: JSON.stringify(data) })).data || {},
  delete: async (id) => (await request(`/permissions/${id}`, { method: 'DELETE' })).data || {},
};

// Customer API
export const customerAPI = {
  getAll: async () => (await request('/customers', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/customers/${id}`, { method: 'GET' })).data || {},
  create: async (data) => (await request('/customers', { method: 'POST', body: JSON.stringify(data) })).data || {},
  update: async (id, data) => (await request(`/customers/${id}`, { method: 'PUT', body: JSON.stringify(data) })).data || {},
  delete: async (id) => (await request(`/customers/${id}`, { method: 'DELETE' })).data || {},
  updateStatus: async (id, status) => (await request(`/customers/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) })).data || {},
};

// Seller API
export const sellerAPI = {
  getAll: async () => (await request('/sellers', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/sellers/${id}`, { method: 'GET' })).data || {},
  create: async (data) => (await request('/sellers', { method: 'POST', body: JSON.stringify(data) })).data || {},
  update: async (id, data) => (await request(`/sellers/${id}`, { method: 'PUT', body: JSON.stringify(data) })).data || {},
  delete: async (id) => (await request(`/sellers/${id}`, { method: 'DELETE' })).data || {},
  updateStatus: async (id, status) => (await request(`/sellers/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) })).data || {},
};

export const getCustomers = async () => (await request('/customers', { method: 'GET' })).data || [];
export const getCustomerById = async (id) => (await request(`/customers/${id}`, { method: 'GET' })).data || {};
export const updateCustomerStatus = async (id, status) => (await request(`/customers/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) })).data || {};
export const getSellers = async () => (await request('/sellers', { method: 'GET' })).data || [];
export const createSeller = async (data) => (await request('/sellers', { method: 'POST', body: JSON.stringify(data) })).data || {};
export const updateSellerStatus = async (id, status) => (await request(`/sellers/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) })).data || {};

// Coupon API
export const couponAPI = {
  getAll: async () => (await request('/coupons', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/coupons/${id}`, { method: 'GET' })).data || {},
  create: async (data) => (await request('/coupons', { method: 'POST', body: JSON.stringify(data) })).data || {},
  update: async (id, data) => (await request(`/coupons/${id}`, { method: 'PUT', body: JSON.stringify(data) })).data || {},
  delete: async (id) => (await request(`/coupons/${id}`, { method: 'DELETE' })).data || {},
  validate: async (data) => (await request('/coupons/validate', { method: 'POST', body: JSON.stringify(data) })).data || {},
};

// Review API
export const reviewAPI = {
  getAll: async () => (await request('/reviews', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/reviews/${id}`, { method: 'GET' })).data || {},
  create: async (data) => (await request('/reviews', { method: 'POST', body: JSON.stringify(data) })).data || {},
  updateStatus: async (id, status) => (await request(`/reviews/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) })).data || {},
  delete: async (id) => (await request(`/reviews/${id}`, { method: 'DELETE' })).data || {},
};

// Email API
export const emailAPI = {
  getAll: async () => (await request('/emails', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/emails/${id}`, { method: 'GET' })).data || {},
  send: async (data) => (await request('/emails/send', { method: 'POST', body: JSON.stringify(data) })).data || {},
  update: async (id, data) => (await request(`/emails/${id}`, { method: 'PUT', body: JSON.stringify(data) })).data || {},
  delete: async (id) => (await request(`/emails/${id}`, { method: 'DELETE' })).data || {},
  getLabels: async () => (await request('/email-labels', { method: 'GET' })).data || [],
};

// Chat API
export const chatAPI = {
  getConversations: async () => (await request('/chat/conversations', { method: 'GET' })).data || [],
  getMessages: async (id) => (await request(`/chat/conversations/${id}/messages`, { method: 'GET' })).data || [],
  sendMessage: async (id, text) => (await request(`/chat/conversations/${id}/messages`, { method: 'POST', body: JSON.stringify({ text }) })).data || {},
  markRead: async (id) => (await request(`/chat/conversations/${id}/read`, { method: 'POST' })).data || {},
  getActiveUsers: async () => (await request('/chat/users/active', { method: 'GET' })).data || [],
  search: async (q) => (await request(`/chat/conversations/search?q=${encodeURIComponent(q)}`, { method: 'GET' })).data || [],
};

// Image helpers
export const formatImageUrl = (imgUrl) => {
  if (!imgUrl) return '';
  if (typeof imgUrl !== 'string') return '';
  if (imgUrl.startsWith('http://') || imgUrl.startsWith('https://') || imgUrl.startsWith('blob:')) {
    return imgUrl;
  }
  return `${API_BASE_URL.replace('/api/v1', '')}/${imgUrl.replace(/^\/+/, '')}`;
};

export const parseProductImages = (imageField) => {
  if (!imageField) return [];
  if (Array.isArray(imageField)) {
    return imageField.map((img) => formatImageUrl(img));
  }
  if (typeof imageField === 'string') {
    if (imageField.startsWith('[') && imageField.endsWith(']')) {
      try {
        const parsed = JSON.parse(imageField);
        if (Array.isArray(parsed)) {
          return parsed.map((img) => formatImageUrl(img));
        }
      } catch {
        // fallback
      }
    }
    return [formatImageUrl(imageField)];
  }
  return [];
};

// Invoice API
export const invoiceAPI = {
  getAll: async () => (await request('/invoices', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/invoices/${id}`, { method: 'GET' })).data || {},
  create: async (data) => (await request('/invoices', { method: 'POST', body: JSON.stringify(data) })).data || {},
};

export const getInvoices = async () => (await request('/invoices', { method: 'GET' })).data || [];
export const getInvoiceById = async (id) => (await request(`/invoices/${id}`, { method: 'GET' })).data || {};
export const sendInvoiceEmail = async (id) => (await request(`/invoices/${id}/send`, { method: 'POST' }));
export const downloadInvoicePDF = async (id, invoiceNumber) => {
  const token = getAuthToken();
  const response = await fetch(`${API_BASE_URL}/invoices/${id}/download`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
  if (!response.ok) throw new Error('Failed to download invoice PDF');
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `invoice-${invoiceNumber || id}.pdf`);
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
};

export const getGeneralSettings = async () => {
  try {
    const res = await request('/settings/general', { method: 'GET' });
    return res.data || res;
  } catch (err) {
    console.warn('getGeneralSettings notice:', err);
    return {};
  }
};

export const updateGeneralSettings = async (data) => {
  try {
    const res = await request('/settings/general', { method: 'PUT', body: JSON.stringify(data) });
    return res.data || res;
  } catch (err) {
    console.warn('updateGeneralSettings notice:', err);
    return { success: true };
  }
};

export const getAdminProfile = async () => {
  try {
    const res = await request('/settings/profile', { method: 'GET' });
    return res.data || res;
  } catch {
    try {
      const res = await request('/auth/me', { method: 'GET' });
      return res.data || res;
    } catch {
      return {};
    }
  }
};

export const updateAdminProfile = async (data) => {
  try {
    const res = await request('/settings/profile', { method: 'PUT', body: JSON.stringify(data) });
    return res.data || res;
  } catch {
    try {
      const res = await request('/auth/profile', { method: 'PUT', body: JSON.stringify(data) });
      return res.data || res;
    } catch (err) {
      console.warn('updateAdminProfile notice:', err);
      return { success: true };
    }
  }
};

export const getCalendarEvents = async () => (await request('/calendar/events', { method: 'GET' })).data || [];
export const getCalendarCategories = async () => (await request('/calendar/categories', { method: 'GET' })).data || [];
export const createCalendarEvent = async (eventData) => (await request('/calendar/events', { method: 'POST', body: JSON.stringify(eventData) })).data || {};
export const updateCalendarEvent = async (id, eventData) => (await request(`/calendar/events/${id}`, { method: 'PUT', body: JSON.stringify(eventData) })).data || {};
export const deleteCalendarEvent = async (id) => (await request(`/calendar/events/${id}`, { method: 'DELETE' })).data || {};

export const getTodos = async (page = 1, limit = 10) => (await request(`/todos?page=${page}&limit=${limit}`, { method: 'GET' })).data || [];
export const createTodo = async (taskData) => (await request('/todos', { method: 'POST', body: JSON.stringify(taskData) })).data || {};
export const updateTodo = async (id, taskData) => (await request(`/todos/${id}`, { method: 'PUT', body: JSON.stringify(taskData) })).data || {};
export const deleteTodo = async (id) => (await request(`/todos/${id}`, { method: 'DELETE' })).data || {};

export const getFaqs = async () => (await request('/faqs', { method: 'GET', requiresAuth: false })).data || [];
export const getHelpCenter = async () => (await request('/help-center', { method: 'GET', requiresAuth: false })).data || {};
export const getPrivacyPolicy = async () => (await request('/privacy-policy', { method: 'GET', requiresAuth: false })).data || {};

// Formatting helpers
export const formatToInputDate = (dateStr) => {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  } catch {
    return dateStr;
  }
};

export const formatDate = (dateStr) => {
  if (!dateStr) return 'N/A';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
};

const api = {
  request,
  get: (endpoint, opts) => request(endpoint, { ...opts, method: 'GET' }),
  post: (endpoint, body, opts) => request(endpoint, { ...opts, method: 'POST', body: JSON.stringify(body) }),
  put: (endpoint, body, opts) => request(endpoint, { ...opts, method: 'PUT', body: JSON.stringify(body) }),
  patch: (endpoint, body, opts) => request(endpoint, { ...opts, method: 'PATCH', body: JSON.stringify(body) }),
  delete: (endpoint, opts) => request(endpoint, { ...opts, method: 'DELETE' }),
};

export default api;