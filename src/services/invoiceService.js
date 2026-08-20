import api from './api';

export const invoiceService = {
  listInvoices: async () => {
    return await api.get('/invoices');
  },

  getInvoiceById: async (id) => {
    return await api.get(`/invoices/${id}`);
  },

  sendInvoiceEmail: async (id) => {
    return await api.post(`/invoices/${id}/send`, {});
  },

  downloadInvoicePdf: async (id) => {
    const blob = await api.get(`/invoices/${id}/download`, { responseType: 'blob' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `invoice-${id}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);
  },
};

export default invoiceService;
