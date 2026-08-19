const BASE_URL = 'http://localhost:3000/api/v1';

const DEFAULT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBleGFtcGxlLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4NzA1OTU0NX0.gDbs8i2lSpmw2T98bK9sqz2U4Y78qllOIuhC6ABXEhE';

export const getAuthToken = () => {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem('token') || localStorage.getItem('accessToken') || DEFAULT_TOKEN;
  }
  return DEFAULT_TOKEN;
};

const request = async (endpoint, options = {}) => {
  const token = getAuthToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {}),
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }
    
    return data;
  } catch (error) {
    console.error(`API Error on ${endpoint}:`, error);
    throw error;
  }
};


export const getPurchaseOrders = () => request('/purchases');
export const getPurchaseOrderById = (id) => request(`/purchases/${id}`);
export const createPurchaseOrder = (data) => request('/purchases', { method: 'POST', body: JSON.stringify(data) });
export const deletePurchaseOrder = (id) =>request(`/purchases/${id}`, {method: 'DELETE',});


export const getPurchaseLists = () => request('/purchase-list');
export const getPurchaseListById = (id) => request(`/purchase-list/${id}`);
export const deletePurchase = (id) =>request(`/purchase-list/${id}`, {method: 'DELETE',});

export const getPurchaseReturns = () => request('/returns');
export const getPurchaseReturnById = (id) => request(`/purchase-returns/${id}`);
export const createPurchaseReturn = (purchaseOrderId, data) =>
  request(`/purchases/${purchaseOrderId}/return`, { method: 'POST', body: JSON.stringify(data) });


export const getAttributes = () => request('/attributes');
export const getAttributeById = (id) => request(`/attributes/${id}`);
export const createAttribute = (data) => request('/attributes', { method: 'POST', body: JSON.stringify(data) });
export const updateAttribute = (id, data) => request(`/attributes/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteAttribute = (id) => request(`/attributes/${id}`, { method: 'DELETE' });


export const getDashboardSummary = () => request('/dashboard/summary');
export const getRecentOrders = () => request('/dashboard/recent-orders');
export const getTopProducts = () => request('/dashboard/top-products');
export const getSalesOverview = () => request('/dashboard/sales-overview');
export const getRevenueByCategory = () => request('/dashboard/revenue-by-category');
export const getCustomerGrowth = () => request('/dashboard/customer-growth');
