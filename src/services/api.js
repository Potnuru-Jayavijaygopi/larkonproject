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

// Coupons Endpoints
export const couponAPI = {
  getAll: async () => {
    const res = await request('/coupons', { method: 'GET' });
    return res.data || res;
  },

  getById: async (id) => {
    try {
      const all = await couponAPI.getAll();
      if (Array.isArray(all)) {
        const found = all.find((c) => String(c.id) === String(id));
        if (found) return found;
      }
    } catch (e) {
      console.warn('Could not find in all coupons:', e);
    }
    const res = await request(`/coupons/${id}`, { method: 'GET' });
    return res.data || res;
  },

  create: async (couponData) => {
    const res = await request('/coupons', {
      method: 'POST',
      body: JSON.stringify(couponData),
    });
    return res.data || res;
  },

  update: async (id, couponData) => {
    const res = await request(`/coupons/${id}`, {
      method: 'PUT',
      body: JSON.stringify(couponData),
    });
    return res.data || res;
  },

  delete: async (id) => {
    const res = await request(`/coupons/${id}`, {
      method: 'DELETE',
    });
    return res.data || res;
  },

  validate: async ({ couponCode, cartTotal, cartItems }) => {
    const res = await request('/coupons/validate', {
      method: 'POST',
      requiresAuth: false,
      body: JSON.stringify({ couponCode, cartTotal, cartItems }),
    });
    return res.data || res;
  },
};

// Reviews Endpoints
export const reviewAPI = {
  getAll: async () => {
    const res = await request('/reviews', { method: 'GET' });
    return res.data || res;
  },
  create: async (reviewData) => {
    const res = await request('/reviews', {
      method: 'POST',
      body: JSON.stringify(reviewData),
    });
    return res.data || res;
  },
  updateStatus: async (id, status) => {
    const res = await request(`/reviews/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
    });
    return res.data || res;
  },
  delete: async (id) => {
    const res = await request(`/reviews/${id}`, {
      method: 'DELETE',
    });
    return res.data || res;
  },
};

// Email Endpoints
export const emailAPI = {
  getAll: async () => {
    const res = await request('/emails', { method: 'GET' });
    return res.data || res;
  },
  getById: async (id) => {
    const res = await request(`/emails/${id}`, { method: 'GET' });
    return res.data || res;
  },
  send: async (emailData) => {
    const res = await request('/emails/send', {
      method: 'POST',
      body: JSON.stringify(emailData),
    });
    return res.data || res;
  },
  update: async (id, emailData) => {
    const res = await request(`/emails/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(emailData),
    });
    return res.data || res;
  },
  delete: async (id) => {
    const res = await request(`/emails/${id}`, {
      method: 'DELETE',
    });
    return res.data || res;
  },
  getInbox: async () => {
    const res = await request('/inbox', { method: 'GET' });
    return res.data || res;
  },
  getLabels: async () => {
    const res = await request('/email-labels', { method: 'GET' });
    return res.data || res;
  },
};

// Chat Endpoints
export const chatAPI = {
  getConversations: async () => {
    const res = await request('/chat/conversations', { method: 'GET' });
    return res.data || res;
  },
  getMessages: async (conversationId) => {
    const res = await request(`/chat/conversations/${conversationId}/messages`, { method: 'GET' });
    return res.data || res;
  },
  sendMessage: async (conversationId, messageData) => {
    const res = await request(`/chat/conversations/${conversationId}/messages`, {
      method: 'POST',
      body: JSON.stringify(messageData),
    });
    return res.data || res;
  },
  markAsRead: async (conversationId) => {
    const res = await request(`/chat/conversations/${conversationId}/read`, {
      method: 'POST',
    });
    return res.data || res;
  },
  getActiveUsers: async () => {
    const res = await request('/chat/users/active', { method: 'GET' });
    return res.data || res;
  },
  searchConversations: async (query) => {
    const res = await request(`/chat/conversations/search?q=${encodeURIComponent(query)}`, {
      method: 'GET',
    });
    return res.data || res;
  },
};

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

// Auth Endpoints
export const authAPI = {
  login: async (email, password) => {
    const res = await request('/auth/login', {
      method: 'POST',
      requiresAuth: false,
      body: JSON.stringify({ email, password }),
    });
    if (res.data?.accessToken || res.accessToken) {
      setAuthData(res.data?.accessToken || res.accessToken, res.data?.user || res.user);
    }
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
