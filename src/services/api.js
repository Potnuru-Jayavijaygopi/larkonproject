/**
 * Centralized API Service for Larkon Frontend
 * Connects to Backend Larkon REST APIs (Express + PostgreSQL)
 */

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

// Token Management
export const getAuthToken = () => {
  try {
    const directToken = localStorage.getItem('token') || localStorage.getItem('accessToken');
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
  return null;
};

export const setAuthData = (token, user = null) => {
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
  localStorage.removeItem('user');
};

/**
 * Ensure the client has a valid session token.
 * Automatically authenticates with default admin credentials if no token is found.
 */
export const ensureAuthenticated = async () => {
  let token = getAuthToken();
  if (token) return token;

  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@larkon.com',
        password: 'Password123!',
      }),
    });

    if (res.ok) {
      const data = await res.json();
      const accessToken = data.data?.accessToken || data.token || data.accessToken;
      if (accessToken) {
        setAuthData(accessToken, data.data?.user || data.user);
        return accessToken;
      }
    }
  } catch (e) {
    console.warn('Auto-auth attempt failed:', e.message);
  }
  return null;
};

/**
 * Standard fetch helper with headers and authentication
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    Accept: 'application/json',
    ...(options.headers || {}),
  };

  // If payload is not FormData, ensure Content-Type is JSON
  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

  // Attach auth token if available
  let token = getAuthToken();
  if (!token && options.requiresAuth !== false) {
    token = await ensureAuthenticated();
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Handle unauthorized with a single auto-retry after re-authenticating
    if (response.status === 401 && !options._retry) {
      clearAuthData();
      const newToken = await ensureAuthenticated();
      if (newToken) {
        headers['Authorization'] = `Bearer ${newToken}`;
        return fetch(url, {
          ...options,
          _retry: true,
          headers,
        }).then(async (res) => {
          const resData = await res.json().catch(() => ({}));
          if (!res.ok) {
            throw new Error(resData.message || `Request failed with status ${res.status}`);
          }
          return resData;
        });
      }
    }

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      const errorMsg = data.message || data.error || `HTTP ${response.status}: ${response.statusText}`;
      const err = new Error(errorMsg);
      err.status = response.status;
      err.data = data;
      throw err;
    }

    return data;
  } catch (error) {
    console.error(`API Error [${options.method || 'GET'} ${endpoint}]:`, error);
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
    const token = res.data?.accessToken || res.accessToken || res.token;
    if (token) {
      setAuthData(token, res.data?.user || res.user);
    }
    return res;
  },

  register: async (userData) => {
    const res = await request('/auth/register', {
      method: 'POST',
      requiresAuth: false,
      body: JSON.stringify(userData),
    });
    const token = res.data?.accessToken || res.accessToken || res.token;
    if (token) {
      setAuthData(token, res.data?.user || res.user);
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
