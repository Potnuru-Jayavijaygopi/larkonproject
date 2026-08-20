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

export const getCalendarEvents = async () => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/calendar/events`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch events: ${res.status}`);
    return await res.json();
};

export const getCalendarCategories = async () => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/calendar/categories`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);
    return await res.json();
};

export const createCalendarEvent = async (eventData) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/calendar/events`, {
        method: "POST",
        headers,
        body: JSON.stringify(eventData)
    });
    if (!res.ok) throw new Error(`Failed to create event: ${res.status}`);
    return await res.json();
};

export const updateCalendarEvent = async (id, eventData) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/calendar/events/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify(eventData)
    });
    if (!res.ok) throw new Error(`Failed to update event: ${res.status}`);
    return await res.json();
};

export const deleteCalendarEvent = async (id) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/calendar/events/${id}`, {
        method: "DELETE",
        headers
    });
    if (!res.ok) throw new Error(`Failed to delete event: ${res.status}`);
    return await res.json();
};

export const getTodos = async (page = 1, limit = 10) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/todos?page=${page}&limit=${limit}`, { headers });
    if (!res.ok) throw new Error(`Failed to fetch todos: ${res.status}`);
    return await res.json();
};

export const createTodo = async (taskData) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/todos`, {
        method: "POST",
        headers,
        body: JSON.stringify(taskData)
    });
    if (!res.ok) throw new Error(`Failed to create todo: ${res.status}`);
    return await res.json();
};

export const updateTodo = async (id, taskData) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: "PATCH",
        headers,
        body: JSON.stringify(taskData)
    });
    if (!res.ok) throw new Error(`Failed to update todo: ${res.status}`);
    return await res.json();
};

export const deleteTodo = async (id) => {
    const headers = await getHeaders();
    const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: "DELETE",
        headers
    });
    if (!res.ok) throw new Error(`Failed to delete todo: ${res.status}`);
    return await res.json();
};

export const getFaqs = async () => {
    const res = await fetch(`${API_BASE_URL}/faqs`);
    if (!res.ok) throw new Error(`Failed to fetch FAQs: ${res.status}`);
    return await res.json();
};

export const getHelpCenter = async () => {
    const res = await fetch(`${API_BASE_URL}/help-center`);
    if (!res.ok) throw new Error(`Failed to fetch help center: ${res.status}`);
    return await res.json();
};

export const getPrivacyPolicy = async () => {
    const res = await fetch(`${API_BASE_URL}/privacy-policy`);
    if (!res.ok) throw new Error(`Failed to fetch privacy policy: ${res.status}`);
    return await res.json();
};

const api = {
    API_BASE_URL,
    getAuthToken,
    getCalendarEvents,
    getCalendarCategories,
    createCalendarEvent,
    updateCalendarEvent,
    deleteCalendarEvent,
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    getFaqs,
    getHelpCenter,
    getPrivacyPolicy
};

export default api;