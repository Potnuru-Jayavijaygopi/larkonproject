import api from './api';

export const orderService = {
  listOrders: async (status = '') => {
    const endpoint = status ? `/orders?status=${encodeURIComponent(status)}` : '/orders';
    return await api.get(endpoint);
  },

  getReceivedOrders: async () => {
    return await api.get('/orders/received');
  },

  getOrderById: async (id) => {
    return await api.get(`/orders/${id}`);
  },

  updateOrderStatus: async (id, status) => {
    return await api.patch(`/orders/${id}/status`, { status });
  },

  cancelOrder: async (id) => {
    return await api.post(`/orders/${id}/cancel`, {});
  },

  getOrderInvoice: async (id) => {
    return await api.get(`/orders/${id}/invoice`);
  },
};

export default orderService;
