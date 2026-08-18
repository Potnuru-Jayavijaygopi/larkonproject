// API Service Layer for Larkon Project

const API_BASE_URL = import.meta.env?.VITE_API_URL || 'http://localhost:3000/api/v1';

// Token Management
export const getAuthToken = () => {
  return (
    localStorage.getItem('accessToken') ||
    localStorage.getItem('token') ||
    sessionStorage.getItem('accessToken') ||
    ''
  );
};

export const setAuthData = ({ accessToken, refreshToken, user }) => {
  if (accessToken) localStorage.setItem('accessToken', accessToken);
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
  if (user) localStorage.setItem('user', JSON.stringify(user));
};

export const clearAuthData = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
  sessionStorage.removeItem('accessToken');
};

// Automatic fallback auth ensure
export const ensureAuthenticated = async () => {
  const existingToken = getAuthToken();
  if (existingToken) return existingToken;

  try {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'admin@larkon.com',
        password: 'Password123!'
      })
    });

    const data = await res.json();
    if (data.success && data.accessToken) {
      setAuthData(data);
      return data.accessToken;
    }
  } catch (err) {
    console.warn('Auto-auth notice:', err);
  }
  return '';
};

// Generic HTTP request helper
async function request(endpoint, options = {}) {
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

    // Handle JSON or text response
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

// Image URL Parser & Normalizer
export function parseProductImages(imageField) {
  if (!imageField) return [];

  if (Array.isArray(imageField)) {
    return imageField.filter(Boolean);
  }

  if (typeof imageField === 'string') {
    const trimmed = imageField.trim();
    if (!trimmed) return [];

    // Try parsing as JSON array
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return parsed.filter(Boolean);
      } catch {
        // Continue to fallback
      }
    }

    // Try parsing Postgres array string format e.g. {"http...", "http..."}
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) {
      const inner = trimmed.slice(1, -1);
      const items = inner
        .split(',')
        .map((s) => s.trim().replace(/^"|"$/g, '').replace(/\\"/g, '"'))
        .filter(Boolean);
      if (items.length > 0) return items;
    }

    // Single URL string
    if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('/')) {
      return [trimmed];
    }
  }

  return [];
}

// Product APIs
export const productAPI = {
  // Get all products
  getAll: async () => {
    const res = await request('/products', { method: 'GET', requiresAuth: false });
    return res.data || [];
  },

  // Get product by ID
  getById: async (id) => {
    const res = await request(`/products/${id}`, { method: 'GET', requiresAuth: false });
    return res.data || null;
  },

  // Create new product
  create: async (productData) => {
    const res = await request('/products', {
      method: 'POST',
      body: JSON.stringify(productData)
    });
    return res.data || res;
  },

  // Update product
  update: async (id, productData) => {
    const res = await request(`/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify(productData)
    });
    return res.data || res;
  },

  // Delete product
  delete: async (id) => {
    const res = await request(`/products/${id}`, {
      method: 'DELETE'
    });
    return res.data || res;
  },

  // Upload product images
  uploadImages: async (id, files) => {
    const formData = new FormData();
    if (Array.isArray(files)) {
      files.forEach((file) => formData.append('images', file));
    } else if (files instanceof FileList) {
      Array.from(files).forEach((file) => formData.append('images', file));
    } else if (files instanceof File) {
      formData.append('images', files);
    }

    const res = await request(`/products/${id}/images`, {
      method: 'POST',
      body: formData
    });
    return res.data || res;
  },

  // Update product status (active, draft, archived)
  updateStatus: async (id, status) => {
    const res = await request(`/products/${id}/status`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    });
    return res.data || res;
  },

  // Import products CSV/Excel
  import: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await request('/products/import', {
      method: 'POST',
      body: formData
    });
    return res.data || res;
  }
};

// Category APIs
export const categoryAPI = {
  getAll: async () => {
    const res = await request('/categories', { method: 'GET', requiresAuth: false });
    return res.data || [];
  },

  getById: async (id) => {
    const res = await request(`/categories/${id}`, { method: 'GET', requiresAuth: false });
    return res.data || null;
  }
};

// Attribute APIs
export const attributeAPI = {
  getAll: async () => {
    const res = await request('/attributes', { method: 'GET', requiresAuth: false });
    return res.data || [];
  }
};

// Review APIs
export const reviewAPI = {
  getAll: async () => {
    const res = await request('/reviews', { method: 'GET', requiresAuth: false });
    return res.data || [];
  }
};

// Auth APIs
export const authAPI = {
  login: async (credentials) => {
    const res = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      requiresAuth: false
    });
    if (res.success && res.accessToken) {
      setAuthData(res);
    }
    return res;
  },

  register: async (userData) => {
    const res = await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
      requiresAuth: false
    });
    return res;
  },

  getMe: async () => {
    const res = await request('/auth/me', { method: 'GET' });
    return res.data || null;
  },

  logout: async () => {
    try {
      await request('/auth/logout', { method: 'POST' });
    } finally {
      clearAuthData();
    }
  }
};

export default {
  products: productAPI,
  categories: categoryAPI,
  attributes: attributeAPI,
  reviews: reviewAPI,
  auth: authAPI,
  parseProductImages
};
