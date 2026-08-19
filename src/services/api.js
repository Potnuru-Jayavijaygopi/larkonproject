export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

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


async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const headers = {
    Accept: 'application/json',
    ...(options.headers || {}),
  };

  if (!(options.body instanceof FormData) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json';
  }

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

export const profileAPI = {
  getProfile: async (userId = 1) => {
    try {
      const res = await request(`/user-profiles/${userId}`, { method: 'GET' });
      return res.data || res;
    } catch (e) {
      console.warn('Profile fetch fallback to /auth/me:', e.message);
      const meRes = await request('/auth/me', { method: 'GET' });
      return meRes.data || meRes;
    }
  },

  updateProfile: async (userId, profileData) => {
    const res = await request(`/user-profiles/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(profileData),
    });
    return res.data || res;
  },
};

export const roleAPI = {
  getAll: async () => {
    const res = await request('/roles', { method: 'GET' });
    return res.data || res;
  },

  getById: async (id) => {
    const res = await request(`/roles/${id}`, { method: 'GET' });
    return res.data || res;
  },

  create: async (roleData) => {
    const res = await request('/roles', {
      method: 'POST',
      body: JSON.stringify(roleData),
    });
    return res.data || res;
  },

  update: async (id, roleData) => {
    const res = await request(`/roles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(roleData),
    });
    return res.data || res;
  },

  delete: async (id) => {
    const res = await request(`/roles/${id}`, {
      method: 'DELETE',
    });
    return res.data || res;
  },
};

export const permissionAPI = {
  getAll: async () => {
    const res = await request('/permissions', { method: 'GET' });
    return res.data || res;
  },

  getById: async (id) => {
    const res = await request(`/permissions/${id}`, { method: 'GET' });
    return res.data || res;
  },

  create: async (permData) => {
    const res = await request('/permissions', {
      method: 'POST',
      body: JSON.stringify(permData),
    });
    return res.data || res;
  },

  update: async (id, permData) => {
    const res = await request(`/permissions/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(permData),
    });
    return res.data || res;
  },

  delete: async (id) => {
    const res = await request(`/permissions/${id}`, {
      method: 'DELETE',
    });
    return res.data || res;
  },
};

export const customerAPI = {
  getAll: async () => {
    const res = await request('/customers', { method: 'GET' });
    return res.data || res;
  },
};

export const invoiceAPI = {
  getAll: async () => {
    const res = await request('/invoices', { method: 'GET' });
    return res.data || res;
  },
};

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

  getMe: async () => {
    const res = await request('/auth/me', { method: 'GET' });
    return res.data || res;
  },
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
