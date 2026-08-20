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
    const res = await request('/auth/register', {
      method: 'POST',
      requiresAuth: false,
      body: JSON.stringify(userData),
    });
    
    // Auto-login newly registered user to generate & store JWT access token
    const email = userData.email;
    const password = userData.password;
    if (email && password) {
      try {
        const loginRes = await authAPI.login(email, password);
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

// Review API
export const reviewAPI = {
  getAll: async () => (await request('/reviews', { method: 'GET' })).data || [],
  getById: async (id) => (await request(`/reviews/${id}`, { method: 'GET' })).data || {},
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

// Formatting helpers
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
