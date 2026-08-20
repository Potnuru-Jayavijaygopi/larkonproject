import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsImage,
  BsTrash,
  BsHeart,
  BsHeartFill,
  BsReceipt,
  BsTag,
  BsTruck,
  BsFileEarmarkText,
} from 'react-icons/bs';
import cartService from '../../services/cartService';
import { formatImageUrl } from '../../services/api';

function OrderCart({ onNavigate }) {
  const navigate = useNavigate();
  const userId = 1;

  const initialItems = [
    {
      id: 1,
      cart_item_id: 1,
      name: 'Men Black Slim Fit T-shirt',
      color: 'Dark',
      size: 'M',
      price: 80.0,
      tax: 3.0,
      quantity: 1,
      total: 83.0,
      image: null,
      isWishlisted: false,
    },
    {
      id: 2,
      cart_item_id: 2,
      name: 'Dark Green Cargo Pent',
      color: 'Dark Green',
      size: 'M',
      price: 330.0,
      tax: 4.0,
      quantity: 3,
      total: 334.0,
      image: null,
      isWishlisted: false,
    },
    {
      id: 3,
      cart_item_id: 3,
      name: 'Men Dark Brown Wallet',
      color: 'Brown',
      size: 'S',
      price: 132.0,
      tax: 5.0,
      quantity: 1,
      total: 137.0,
      image: null,
      isWishlisted: false,
    },
    {
      id: 4,
      cart_item_id: 4,
      name: "Kid's Yellow T-shirt",
      color: 'Yellow',
      size: 'S',
      price: 220.0,
      tax: 3.0,
      quantity: 2,
      total: 223.0,
      image: null,
      isWishlisted: false,
    },
  ];

  const [cartItems, setCartItems] = useState(initialItems);
  const [promoCode, setPromoCode] = useState('CODE123');
  const [isCouponApplied, setIsCouponApplied] = useState(true);
  const [appliedDiscount, setAppliedDiscount] = useState(60.0);
  const [loading, setLoading] = useState(false);

  const validCoupons = ['CODE123', 'LARKON20', 'DISCOUNT10', 'PROMO50', 'SAVE10', 'OFFER60'];

  useEffect(() => {
    fetchUserCart();
  }, []);

  const fetchUserCart = async () => {
    setLoading(true);
    try {
      const res = await cartService.getCart(userId);
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        const mappedItems = res.data.map((item, idx) => ({
          id: item.product_id || item.cart_item_id || (idx + 1),
          cart_item_id: item.cart_item_id || item.id || (idx + 1),
          name: item.product_name || 'Product ' + (idx + 1),
          color: item.color || 'Dark',
          size: item.size || 'M',
          price: Number(item.price || 80.0),
          tax: Number(item.tax || 3.0),
          quantity: Number(item.quantity || 1),
          total: (Number(item.price || 80.0) + Number(item.tax || 3.0)) * Number(item.quantity || 1),
          image: item.image || null,
          isWishlisted: false,
        }));
        setCartItems(mappedItems);
      }
    } catch (err) {
      console.warn('Backend API request failed for cart, keeping default dummy items:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyCoupon = () => {
    const trimmedCode = promoCode.trim().toUpperCase();
    if (!trimmedCode) {
      alert('Please enter a promo code!');
      return;
    }

    if (validCoupons.includes(trimmedCode)) {
      setIsCouponApplied(true);
      setAppliedDiscount(60.0);
      alert(`Coupon "${trimmedCode}" is valid and applied successfully!`);
    } else {
      setIsCouponApplied(false);
      setAppliedDiscount(0);
      alert(`Invalid Coupon Code: "${trimmedCode}". Please enter a valid promo code (e.g. CODE123).`);
    }
  };

  const handleToggleWishlist = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isWishlisted: !item.isWishlisted } : item
      )
    );
  };

  const handleQuantityChange = async (id, delta) => {
    const targetItem = cartItems.find((item) => item.id === id);
    if (!targetItem) return;

    const newQty = Math.max(1, targetItem.quantity + delta);

    try {
      await cartService.addToCart(userId, targetItem.id, delta);
    } catch (err) {
      console.error('Failed API call for quantity change:', err.message);
    }

    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          const newTotal = (item.price + item.tax) * newQty;
          return { ...item, quantity: newQty, total: newTotal };
        }
        return item;
      })
    );
  };

  const handleRemove = async (id) => {
    const targetItem = cartItems.find((item) => item.id === id);
    if (targetItem) {
      try {
        await cartService.removeCartItem(userId, targetItem.id || targetItem.cart_item_id);
      } catch (err) {
        console.error('Failed API call for item removal:', err.message);
      }
    }
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleContinueShopping = () => {
    if (navigate) {
      navigate('/orders/list');
    } else if (onNavigate) {
      onNavigate('orders-list');
    }
  };

  const handleBuyNow = () => {
    if (navigate) {
      navigate('/orders/checkout');
    } else if (onNavigate) {
      onNavigate('orders-checkout');
    }
  };

  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalTax = cartItems.reduce((acc, item) => acc + item.tax * item.quantity, 0);
  const discount = (cartItems.length > 0 && isCouponApplied) ? appliedDiscount : 0;
  const grandTotal = Math.max(0, subTotal + totalTax - discount);

  return (
    <>
      <div
        className="rounded-3 p-3 mb-4 d-flex justify-content-between align-items-center text-white shadow-sm"
        style={{ backgroundColor: '#ff5e29', fontSize: '0.85rem' }}
      >
        <span className="fw-medium">There are {cartItems.length} products in your cart </span>
        <button
          className="btn btn-link text-white text-decoration-underline p-0 border-0 fw-normal"
          style={{ fontSize: '0.85rem' }}
          onClick={handleClearCart}
          type="button"
        >
          Clear cart
        </button>
      </div>

      <div className="row g-4">
        <div className="col-xl-8 col-lg-7">
          {cartItems.map((item) => {
            const imgUrl = formatImageUrl(item.image);
            return (
              <div key={item.id} className="content-card p-4 mb-4 shadow-sm">
                <div className="d-flex flex-wrap align-items-start justify-content-between gap-3 mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div
                      className="rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center overflow-hidden"
                      style={{ width: '64px', height: '64px' }}
                    >
                      {imgUrl ? (
                        <img
                          src={imgUrl}
                          alt={item.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <BsImage className={`fs-3 text-dark opacity-50 ${imgUrl ? 'd-none' : ''}`} />
                    </div>
                    <div>
                      <strong className="d-block text-dark mb-1" style={{ fontSize: '0.9rem' }}>
                        {item.name}
                      </strong>
                      <span className="text-muted small d-block mb-2" style={{ fontSize: '0.75rem' }}>
                        Color : {item.color} &nbsp; Size :{item.size}
                      </span>
                      <div className="d-inline-flex align-items-center border rounded">
                        <button
                          className="btn btn-sm btn-light border-0 px-2 py-0 text-muted"
                          type="button"
                          onClick={() => handleQuantityChange(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="px-3 text-dark fw-medium" style={{ fontSize: '0.8rem' }}>
                          {item.quantity}
                        </span>
                        <button
                          className="btn btn-sm btn-light border-0 px-2 py-0 text-muted"
                          type="button"
                          onClick={() => handleQuantityChange(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="text-muted small d-block" style={{ fontSize: '0.7rem' }}>
                      Items Price
                    </span>
                    <strong className="text-dark" style={{ fontSize: '0.9rem' }}>
                      ${item.price.toFixed(2)}
                    </strong>{' '}
                    <span className="text-muted" style={{ fontSize: '0.75rem' }}>
                      / ${item.tax.toFixed(2)} Tax
                    </span>
                  </div>
                </div>

                <div
                  className="d-flex justify-content-between align-items-center border-top pt-3 mt-3"
                  style={{ fontSize: '0.78rem' }}
                >
                  <div className="d-flex gap-3">
                    <button
                      className={`btn btn-link p-0 text-decoration-none d-inline-flex align-items-center gap-1 ${item.isWishlisted ? 'text-danger fw-semibold' : 'text-muted'}`}
                      type="button"
                      style={{ fontSize: '0.78rem' }}
                      onClick={() => handleToggleWishlist(item.id)}
                    >
                      {item.isWishlisted ? (
                        <BsHeartFill className="text-danger" style={{ color: '#ef4444' }} />
                      ) : (
                        <BsHeart />
                      )}
                      Add Wishlist
                    </button>
                  </div>
                  <div>
                    <span className="text-muted">Total : </span>
                    <strong className="text-dark">${item.total.toFixed(2)}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="col-xl-4 col-lg-5">
          <div
            className="rounded-3 p-4 mb-4 text-white shadow-sm position-relative overflow-hidden"
            style={{ backgroundColor: '#ff5e29' }}
          >
            <div
              className="position-absolute"
              style={{
                right: '-20px',
                top: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                border: '10px solid rgba(255, 255, 255, 0.15)',
                pointerEvents: 'none',
              }}
            ></div>
            <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem' }}>
              Have a Promo Code ?
            </h6>
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control form-control-sm border-0 text-white"
                placeholder="CODE123"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', fontSize: '0.8rem' }}
              />
              <button
                className="btn btn-light btn-sm px-3 fw-bold"
                type="button"
                onClick={handleApplyCoupon}
                style={{ fontSize: '0.8rem', color: '#ff5e29' }}
              >
                Apply
              </button>
            </div>
          </div>
          <div className="content-card p-4 mb-4 shadow-sm">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.85rem' }}>
              Order Summary
            </h6>

            <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
              <span className="d-flex align-items-center gap-2">
                <BsReceipt className="text-muted" /> Sub Total :
              </span>
              <strong className="text-dark">${subTotal.toFixed(2)}</strong>
            </div>
            <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
              <span className="d-flex align-items-center gap-2">
                <BsTag className="text-muted" /> Discount :
              </span>
              <strong className="text-dark">-${discount.toFixed(2)}</strong>
            </div>
            <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
              <span className="d-flex align-items-center gap-2">
                <BsTruck className="text-muted" /> Delivery Charge :
              </span>
              <strong className="text-dark">$00.00</strong>
            </div>
            <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
              <span className="d-flex align-items-center gap-2">
                <BsFileEarmarkText className="text-muted" /> Estimated Tax :
              </span>
              <strong className="text-dark">${totalTax.toFixed(2)}</strong>
            </div>
            <div className="d-flex justify-content-between pt-3 mb-3 text-dark" style={{ fontSize: '0.85rem' }}>
              <strong className="fw-bold">Total Amount</strong>
              <strong className="fw-bold">${grandTotal.toFixed(2)}</strong>
            </div>
            <div
              className="rounded-3 p-2 d-flex align-items-center gap-2 text-dark"
              style={{ backgroundColor: '#fef3c7', fontSize: '0.75rem' }}
            >
              <BsTruck className="text-warning fs-5" />
              <span>
                Estimated Delivery by <strong>25 April, 2024</strong>
              </span>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-add-product flex-fill btn-sm py-2"
              type="button"
              style={{ fontSize: '0.8rem' }}
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>
            <button
              className="btn btn-success flex-fill btn-sm py-2"
              type="button"
              style={{ fontSize: '0.8rem', backgroundColor: '#10b981', borderColor: '#10b981' }}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderCart;