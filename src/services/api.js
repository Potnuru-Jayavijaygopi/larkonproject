const API_BASE_URL = "http://localhost:3000/api/v1";

export const getAuthToken = async () => {
    let token = localStorage.getItem("token") || localStorage.getItem("accessToken");
    if (token) return token;
    try {
        const res = await fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: "john@lavitra.com", password: "123456" })
        });
        const data = await res.json();
        if (data && data.accessToken) {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
            return data.accessToken;
        }
    } catch (err) {
        console.error("Auto login failed:", err);
    }
    return null;
};

const getHeaders = async () => {
    const token = await getAuthToken();
    return {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
    };
};

export const getCustomers = async () => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/customers`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch customers: ${res.status}`);
    return await res.json();
};

export const getCustomerById = async (id) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/customers/${id}`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch customer: ${res.status}`);
    return await res.json();
};

export const updateCustomerStatus = async (id, status) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/customers/${id}/status`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error(`Failed to update customer status: ${res.status}`);
    return await res.json();
};

export const getSellers = async () => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/sellers`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch sellers: ${res.status}`);
    return await res.json();
};

export const createSeller = async (sellerData) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/sellers`, {
        method: "POST",
        headers,
        body: JSON.stringify(sellerData)
    });
    if (!res.ok) throw new Error(`Failed to create seller: ${res.status}`);
    return await res.json();
};

export const updateSellerStatus = async (id, status) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/sellers/${id}/status`, {
        method: "PATCH",
        headers,
        body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error(`Failed to update seller status: ${res.status}`);
    return await res.json();
};

export const getInvoices = async () => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/invoices`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch invoices: ${res.status}`);
    return await res.json();
};

export const getOrders = async () => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/orders`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch orders: ${res.status}`);
    return await res.json();
};

export const getProducts = async () => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/products`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
    return await res.json();
};

const api = {
    API_BASE_URL,
    getAuthToken,
    getCustomers,
    getCustomerById,
    updateCustomerStatus,
    getSellers,
    createSeller,
    updateSellerStatus,
    getInvoices,
    getOrders,
    getProducts
};

export default api;
