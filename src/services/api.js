const API_BASE_URL = 'http://localhost:3000/api/v1';

const DEFAULT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBsYXJrb24uY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzg3MDU1NDM4LCJleHAiOjE4MTg1OTE0Mzh9.bP62SlKMH1DyvoIOIKh8wvh8MhWgXlGvwp6Ta8X23DE';

function getValidToken() {
  const stored = localStorage.getItem('token') || localStorage.getItem('authToken');
  if (stored) return stored;
  return DEFAULT_TOKEN;
}



function getHeaders(customHeaders = {}) {
  const token = getValidToken();
  const headers = {
    'Content-Type': 'application/json',
    ...customHeaders,
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}


export async function getInvoices() {
  const response = await fetch(`${API_BASE_URL}/invoices`, {
    method: 'GET',
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to fetch invoices');
  }
  return data.data;
}


export async function getInvoiceById(id) {
  const response = await fetch(`${API_BASE_URL}/invoices/${id}`, {
    method: 'GET',
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || `Failed to fetch invoice #${id}`);
  }
  return data.data; 
}


export async function sendInvoiceEmail(id) {
  const response = await fetch(`${API_BASE_URL}/invoices/${id}/send`, {
    method: 'POST',
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to send invoice email');
  }
  return data;
}


export async function downloadInvoicePDF(id, invoiceNumber) {
  const response = await fetch(`${API_BASE_URL}/invoices/${id}/download`, {
    method: 'GET',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Failed to download invoice PDF');
  }

  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `invoice-${invoiceNumber || id}.pdf`);
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
  window.URL.revokeObjectURL(url);
}


export async function getGeneralSettings() {
  const response = await fetch(`${API_BASE_URL}/settings/general`, {
    method: 'GET',
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to fetch general settings');
  }
  return data.data;
}

export async function updateGeneralSettings(settingsData) {
  const response = await fetch(`${API_BASE_URL}/settings/general`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(settingsData),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to update general settings');
  }
  return data.data;
}

export async function getAdminProfile() {
  const response = await fetch(`${API_BASE_URL}/settings/profile`, {
    method: 'GET',
    headers: getHeaders(),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to fetch admin profile');
  }
  return data.data;
}


export async function updateAdminProfile(profileData) {
  const response = await fetch(`${API_BASE_URL}/settings/profile`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(profileData),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to update admin profile');
  }
  return data.data;
}


export async function changePassword(currentPassword, newPassword) {
  const response = await fetch(`${API_BASE_URL}/settings/profile/password`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({ currentPassword, newPassword }),
  });
  const data = await response.json();
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Failed to change password');
  }
  return data;
}

