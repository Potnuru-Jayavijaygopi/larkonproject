import api from './api';

export const customerService = {
  getAllCustomers: async () => {
    return await api.get('/customers');
  },

  getCustomerById: async (id) => {
    return await api.get(`/customers/${id}`);
  },

  updateCustomerStatus: async (id, status) => {
    return await api.patch(`/customers/${id}/status`, { status });
  },
};

export default customerService;
