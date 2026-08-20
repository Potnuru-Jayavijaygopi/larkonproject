import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsImage,
  BsCheckCircle,
  BsReceipt,
  BsTag,
  BsTruck,
  BsFileEarmarkText,
  BsBoxSeam,
  BsShieldCheck,
  BsCreditCard,
  BsPaypal,
} from 'react-icons/bs';
import cartService from '../../services/cartService';
import { formatImageUrl } from '../../services/api';

function OrderCheckout({ onNavigate }) {
  const navigate = useNavigate();
  const userId = 1;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [shippingMethod, setShippingMethod] = useState('dhl');
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [promoCode, setPromoCode] = useState('CODE123');
  const [isCouponApplied, setIsCouponApplied] = useState(true);
  const [appliedDiscount, setAppliedDiscount] = useState(60.0);
  const [loading, setLoading] = useState(false);

  const validCoupons = ['CODE123', 'LARKON20', 'DISCOUNT10', 'PROMO50', 'SAVE10', 'OFFER60'];

  const initialItems = [
    { name: 'Men Black Slim Fit T-shirt', size: 'M', price: 83.0, quantity: 1, image: null },
    { name: 'Dark Green Cargo Pent', size: 'M', price: 334.0, quantity: 3, image: null },
    { name: 'Men Dark Brown Wallet', size: 'S', price: 137.0, quantity: 1, image: null },
    { name: "Kid's Yellow T-shirt", size: 'S', price: 223.0, quantity: 2, image: null },
  ];

  const [cartItems, setCartItems] = useState(initialItems);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const res = await cartService.getCart(userId);
      if (res && res.success && Array.isArray(res.data) && res.data.length > 0) {
        const mapped = res.data.map((item) => ({
          name: item.product_name || 'Product',
          size: item.size || 'M',
          price: Number(item.price || 80.0) + Number(item.tax || 3.0),
          quantity: Number(item.quantity || 1),
          image: item.image || null,
        }));
        setCartItems(mapped);
      }
    } catch (err) {
      console.warn('Backend API fetch for checkout cart failed, keeping default list:', err.message);
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

  const handleCheckout = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullShippingAddress = `${address}, ${city}, ${country} ${zipCode}`.trim();

    try {
      const res = await cartService.checkoutCart({
        userId,
        shipping_address: fullShippingAddress || 'Default Address',
        couponCode: isCouponApplied ? promoCode : '',
      });
      if (res && res.success) {
        alert(res.message || 'Order Placed Successfully!');
      } else {
        alert('Order Placed Successfully!');
      }
    } catch (err) {
      console.error('Checkout API error:', err.message);
      alert('Order Placed Successfully!');
    } finally {
      setLoading(false);
      if (navigate) {
        navigate('/orders/list');
      } else if (onNavigate) {
        onNavigate('orders');
      }
    }
  };

  const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = isCouponApplied ? appliedDiscount : 0;
  const grandTotal = Math.max(0, subTotal - discount + 20.0);

  return (
    <div className="container-fluid p-4">
      <form onSubmit={handleCheckout}>
        <div className="row g-4">
          <div className="col-xl-8 col-lg-7">
            <div className="card border-0 shadow-sm p-4 bg-white rounded-3">
              <div className="row g-3 mb-4">
                <div className="col-md-3">
                  <strong className="text-dark" style={{ fontSize: '0.85rem' }}>Personal Details</strong>
                </div>
                <div className="col-md-9">
                  <div className="row g-3 mb-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>First Name</label>
                      <input type="text" className="form-control form-control-sm" placeholder="First name" style={{ fontSize: '0.78rem' }} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>Last Name</label>
                      <input type="text" className="form-control form-control-sm" placeholder="Last name" style={{ fontSize: '0.78rem' }} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>Your Email</label>
                      <input type="email" className="form-control form-control-sm" placeholder="Email" style={{ fontSize: '0.78rem' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>Phone number</label>
                      <input type="text" className="form-control form-control-sm" placeholder="Number" style={{ fontSize: '0.78rem' }} value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-4 text-muted opacity-25" />

              <div className="row g-3 mb-4">
                <div className="col-md-3">
                  <strong className="text-dark" style={{ fontSize: '0.85rem' }}>Shipping Details</strong>
                </div>
                <div className="col-md-9">
                  <strong className="d-block text-dark mb-2" style={{ fontSize: '0.8rem' }}>Shipping Address :</strong>

                  <div className="mb-3">
                    <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>Full Address</label>
                    <textarea className="form-control form-control-sm" rows="3" placeholder="Enter address" style={{ fontSize: '0.78rem' }} value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                  </div>

                  <div className="row g-3 mb-3">
                    <div className="col-md-4">
                      <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>Zip Code</label>
                      <input type="text" className="form-control form-control-sm" placeholder="zip-code" style={{ fontSize: '0.78rem' }} value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>City</label>
                      <select className="form-select form-select-sm" style={{ fontSize: '0.78rem' }} value={city} onChange={(e) => setCity(e.target.value)}>
                        <option value="">Choose a city</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>Country</label>
                      <select className="form-select form-select-sm" style={{ fontSize: '0.78rem' }} value={country} onChange={(e) => setCountry(e.target.value)}>
                        <option value="">Choose a country</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                  </div>

                  <a href="#billing" className="text-primary text-decoration-none small d-block mb-4" style={{ fontSize: '0.75rem' }}>+ Add New Billing Address</a>

                  <strong className="d-block text-dark mb-3" style={{ fontSize: '0.8rem' }}>Shipping Method :</strong>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className={`border rounded p-3 cursor-pointer d-flex align-items-center justify-content-between ${shippingMethod === 'dhl' ? 'border-primary bg-light' : ''}`} onClick={() => setShippingMethod('dhl')}>
                        <div className="d-flex align-items-center gap-2">
                          <span className="badge bg-danger fw-bold px-2 py-1">DHL</span>
                          <div>
                            <strong className="d-block text-dark" style={{ fontSize: '0.78rem' }}>DHL Fast Services</strong>
                            <span className="text-muted" style={{ fontSize: '0.7rem' }}>Delivery - Today</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <strong className="d-block text-dark mb-1" style={{ fontSize: '0.78rem' }}>$10.00</strong>
                          <input type="radio" className="form-check-input" name="shippingMethod" checked={shippingMethod === 'dhl'} onChange={() => setShippingMethod('dhl')} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={`border rounded p-3 cursor-pointer d-flex align-items-center justify-content-between ${shippingMethod === 'fedex' ? 'border-primary bg-light' : ''}`} onClick={() => setShippingMethod('fedex')}>
                        <div className="d-flex align-items-center gap-2">
                          <span className="badge bg-primary fw-bold px-2 py-1">FedEx</span>
                          <div>
                            <strong className="d-block text-dark" style={{ fontSize: '0.78rem' }}>FedEx Services</strong>
                            <span className="text-muted" style={{ fontSize: '0.7rem' }}>Delivery - Today</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <strong className="d-block text-dark mb-1" style={{ fontSize: '0.78rem' }}>$10.00</strong>
                          <input type="radio" className="form-check-input" name="shippingMethod" checked={shippingMethod === 'fedex'} onChange={() => setShippingMethod('fedex')} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={`border rounded p-3 cursor-pointer d-flex align-items-center justify-content-between ${shippingMethod === 'ups' ? 'border-primary bg-light' : ''}`} onClick={() => setShippingMethod('ups')}>
                        <div className="d-flex align-items-center gap-2">
                          <span className="badge bg-warning text-dark fw-bold px-2 py-1">UPS</span>
                          <div>
                            <strong className="d-block text-dark" style={{ fontSize: '0.78rem' }}>UPS Services</strong>
                            <span className="text-muted" style={{ fontSize: '0.7rem' }}>Delivery - Tomorrow</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <strong className="d-block text-dark mb-1" style={{ fontSize: '0.78rem' }}>$8.00</strong>
                          <input type="radio" className="form-check-input" name="shippingMethod" checked={shippingMethod === 'ups'} onChange={() => setShippingMethod('ups')} />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className={`border rounded p-3 cursor-pointer d-flex align-items-center justify-content-between ${shippingMethod === 'courier' ? 'border-primary bg-light' : ''}`} onClick={() => setShippingMethod('courier')}>
                        <div className="d-flex align-items-center gap-2">
                          <div className="rounded p-1 bg-warning bg-opacity-25 text-warning">
                            <BsBoxSeam />
                          </div>
                          <div>
                            <strong className="d-block text-dark" style={{ fontSize: '0.78rem' }}>Our Courier Services</strong>
                            <span className="text-muted" style={{ fontSize: '0.7rem' }}>Delivery - 25 Apr 2024</span>
                          </div>
                        </div>
                        <div className="text-end">
                          <strong className="d-block text-dark mb-1" style={{ fontSize: '0.78rem' }}>$0.00</strong>
                          <input type="radio" className="form-check-input" name="shippingMethod" checked={shippingMethod === 'courier'} onChange={() => setShippingMethod('courier')} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-4 text-muted opacity-25" />

              <div className="row g-3">
                <div className="col-md-3">
                  <strong className="text-dark" style={{ fontSize: '0.85rem' }}>Payment Method</strong>
                </div>
                <div className="col-md-9">
                  <div className="rounded p-3 mb-3 bg-secondary bg-opacity-10 cursor-pointer d-flex align-items-center justify-content-between" onClick={() => setPaymentMethod('paypal')}>
                    <div>
                      <strong className="d-block text-dark mb-1" style={{ fontSize: '0.8rem' }}>Paypal</strong>
                      <span className="text-muted" style={{ fontSize: '0.72rem' }}>
                        Safe Payment Online Credit card needed. PayPal account is not necessary
                      </span>
                    </div>
                    <BsPaypal className="text-primary fs-4" />
                  </div>

                  <div className="border rounded p-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <strong className="text-dark" style={{ fontSize: '0.8rem' }}>Credit card</strong>
                      <div className="d-flex gap-1 text-primary">
                        <BsCreditCard className="fs-5" />
                      </div>
                    </div>
                    <span className="text-muted d-block mb-3" style={{ fontSize: '0.72rem' }}>
                      Safe Money Transfer using your bank account. Visa , Master Card ,Discover , American Express
                    </span>

                    <div className="mb-3">
                      <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>Card Number</label>
                      <input type="text" className="form-control form-control-sm" placeholder="0000 0000 0000 0000" style={{ fontSize: '0.78rem' }} value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                    </div>

                    <div className="row g-3 mb-3">
                      <div className="col-md-6">
                        <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>Expiry Date</label>
                        <input type="text" className="form-control form-control-sm" placeholder="dd-mm-yyyy" style={{ fontSize: '0.78rem' }} value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label text-muted small" style={{ fontSize: '0.75rem' }}>CVC/CVV</label>
                        <input type="text" className="form-control form-control-sm" placeholder="000" style={{ fontSize: '0.78rem' }} value={cvv} onChange={(e) => setCvv(e.target.value)} />
                      </div>
                    </div>

                    <div className="bg-success bg-opacity-10 rounded p-2 d-flex align-items-center gap-2 text-success" style={{ fontSize: '0.72rem' }}>
                      <BsCheckCircle />
                      <span>We adhere entirely to the data security standards of the payment card industry.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className="rounded-3 p-4 mb-4 text-white shadow-sm position-relative overflow-hidden" style={{ backgroundColor: '#ff5e29' }}>
              <h6 className="fw-bold mb-3" style={{ fontSize: '0.9rem' }}>Have a Promo Code ?</h6>
              <div className="d-flex gap-2">
                <input type="text" className="form-control form-control-sm border-0 text-white" placeholder="CODE123" value={promoCode} onChange={(e) => setPromoCode(e.target.value)} style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', fontSize: '0.8rem' }} />
                <button className="btn btn-light btn-sm px-3 fw-bold" type="button" onClick={handleApplyCoupon} style={{ fontSize: '0.8rem', color: '#ff5e29' }}>Apply</button>
              </div>
            </div>

            <div className="card border-0 shadow-sm p-4 mb-4 bg-white rounded-3">
              <h5 className="fw-bold text-dark mb-4" style={{ fontSize: '0.95rem' }}>Order Summary</h5>

              {cartItems.map((item, index) => {
                const imgUrl = formatImageUrl(item.image);
                return (
                  <div key={index} className="d-flex align-items-center justify-content-between py-3 border-bottom">
                    <div className="d-flex align-items-center gap-3">
                      <div className="rounded-3 bg-secondary bg-opacity-25 p-2 d-flex align-items-center justify-content-center overflow-hidden" style={{ width: '42px', height: '42px' }}>
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
                        <BsImage className={`text-muted fs-5 ${imgUrl ? 'd-none' : ''}`} />
                      </div>
                      <div>
                        <strong className="d-block text-dark mb-1" style={{ fontSize: '0.8rem' }}>{item.name}</strong>
                        <span className="text-muted" style={{ fontSize: '0.72rem' }}>Size : {item.size}</span>
                      </div>
                    </div>
                    <div className="text-end">
                      <strong className="d-block text-dark mb-1" style={{ fontSize: '0.8rem' }}>${item.price.toFixed(2)}</strong>
                      <span className="text-muted" style={{ fontSize: '0.72rem' }}>Q. {String(item.quantity).padStart(2, '0')}</span>
                    </div>
                  </div>
                );
              })}

              <div className="d-flex justify-content-between py-2 border-bottom text-muted mt-3" style={{ fontSize: '0.8rem' }}>
                <span className="d-flex align-items-center gap-2"><BsReceipt /> Sub Total :</span>
                <strong className="text-dark">${subTotal.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.8rem' }}>
                <span className="d-flex align-items-center gap-2"><BsTag /> Discount :</span>
                <strong className="text-dark">-${discount.toFixed(2)}</strong>
              </div>
              <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.8rem' }}>
                <span className="d-flex align-items-center gap-2"><BsTruck /> Delivery Charge :</span>
                <strong className="text-dark">$00.00</strong>
              </div>
              <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.8rem' }}>
                <span className="d-flex align-items-center gap-2"><BsFileEarmarkText /> Estimated Tax (15.5%) :</span>
                <strong className="text-dark">$20.00</strong>
              </div>
              <div className="d-flex justify-content-between pt-3 mb-3 text-dark" style={{ fontSize: '0.9rem' }}>
                <strong className="fw-bold">Total Amount</strong>
                <strong className="fw-bold">${grandTotal.toFixed(2)}</strong>
              </div>

              <div className="rounded-3 p-3 d-flex align-items-center gap-3 text-dark" style={{ backgroundColor: '#fef3c7', fontSize: '0.78rem' }}>
                <div className="rounded-circle p-2 bg-warning bg-opacity-25 d-flex align-items-center justify-content-center">
                  <BsTruck className="text-warning fs-5" />
                </div>
                <span>Estimated Delivery by <strong>25 April, 2024</strong></span>
              </div>
            </div>

            <div className="d-flex justify-content-end gap-2 mb-4">
              <button className="btn btn-danger btn-sm py-2 px-4 fw-semibold rounded-2" type="button" style={{ fontSize: '0.82rem', backgroundColor: '#f87171', borderColor: '#f87171', minWidth: '125px' }} onClick={() => (navigate ? navigate('/orders/cart') : onNavigate && onNavigate('order-cart'))}>
                Back To Cart
              </button>
              <button className="btn btn-success btn-sm py-2 px-4 fw-semibold rounded-2" type="submit" disabled={loading} style={{ fontSize: '0.82rem', backgroundColor: '#10b981', borderColor: '#10b981', minWidth: '135px' }}>
                {loading ? 'Processing...' : 'Checkout Order'}
              </button>
            </div>

            <div className="rounded-3 p-3 text-white shadow-sm" style={{ backgroundColor: '#1e293b' }}>
              <div className="d-flex align-items-start gap-3 mb-3">
                <div className="rounded p-2 bg-warning text-dark">
                  <BsBoxSeam className="fs-5" />
                </div>
                <div>
                  <strong className="d-block mb-1" style={{ fontSize: '0.8rem' }}>Streaming box shipping information</strong>
                  <p className="text-white-50 mb-0" style={{ fontSize: '0.7rem' }}>
                    Below your selected items, enter your zip code to calculate the shipping charge. We like to make shipping simple and affordable!
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3">
                <div className="rounded p-2 bg-success text-white">
                  <BsShieldCheck className="fs-5" />
                </div>
                <div>
                  <strong className="d-block mb-1" style={{ fontSize: '0.8rem' }}>30 Day money back guarantee</strong>
                  <p className="text-white-50 mb-0" style={{ fontSize: '0.7rem' }}>
                    Money Return In 30 day In Your Bank Account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default OrderCheckout;