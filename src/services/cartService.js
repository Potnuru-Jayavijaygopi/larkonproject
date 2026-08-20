import api from './api';

export const cartService = {
  getCart: async (userId) => {
    return await api.get(`/cart/${userId}`);
  },

  addToCart: async (userId, productId, quantity) => {
    return await api.post(`/cart/${userId}/items`, { productId, quantity });
  },

  removeCartItem: async (userId, itemId) => {
    return await api.delete(`/cart/${userId}/items/${itemId}`);
  },

  checkoutCart: async (checkoutData) => {
    return await api.post('/cart/checkout', checkoutData);
  },
};

export default cartService;
