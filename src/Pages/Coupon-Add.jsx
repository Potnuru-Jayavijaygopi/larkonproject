import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams, useParams } from 'react-router-dom';
import { couponAPI, categoryAPI, formatToInputDate } from '../services/api';

import EllipseActive from "../assets/Ellipse.png";
import EllipseInactive from "../assets/Ellipse (1).png";

export default function AddCoupon() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id: paramId } = useParams();
  const couponId = paramId || searchParams.get('id');
  const isViewMode = searchParams.get('mode') === 'view';
  const isEditMode = Boolean(couponId);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const [status, setStatus] = useState('Active');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [code, setCode] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [country, setCountry] = useState('India');
  const [limit, setLimit] = useState('');
  const [couponType, setCouponType] = useState('Percentage');
  const [discountValue, setDiscountValue] = useState('');
  const [minOrderAmount, setMinOrderAmount] = useState('');
  const [maxDiscountAmount, setMaxDiscountAmount] = useState('');

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await categoryAPI.getAll();
        if (Array.isArray(res)) {
          setCategories(res);
        }
      } catch (e) {
        console.warn('Could not load categories:', e.message);
      }
    }
    loadCategories();
  }, []);

  useEffect(() => {
    if (!couponId) return;

    async function loadCoupon() {
      setLoading(true);
      try {
        const data = await couponAPI.getById(couponId);
        if (data) {
          setCode(data.coupon_code || '');
          setStatus(data.status === 'In Active' ? 'In-Active' : data.status || 'Active');
          setCountry(data.country || 'India');
          setLimit(data.usage_limit != null ? String(data.usage_limit) : '');
          setCouponType(data.coupon_type ? data.coupon_type.charAt(0).toUpperCase() + data.coupon_type.slice(1) : 'Percentage');
          setDiscountValue(data.discount_value != null ? String(data.discount_value) : '');
          setMinOrderAmount(data.minimum_order_amount != null ? String(data.minimum_order_amount) : '');
          setMaxDiscountAmount(data.maximum_discount_amount != null ? String(data.maximum_discount_amount) : '');
          setStartDate(formatToInputDate(data.start_date));
          setEndDate(formatToInputDate(data.end_date));
        }
      } catch (err) {
        console.error('Failed to load coupon details:', err);
        setError('Failed to load coupon details.');
      } finally {
        setLoading(false);
      }
    }

    loadCoupon();
  }, [couponId]);

  const cardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.03)',
    border: 'none',
    fontFamily: "'Public Sans', sans-serif",
  };

  const headingFont = {
    fontWeight: 600,
    color: '#313B5E',
    fontFamily: "'Public Sans', sans-serif",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMsg(null);

    if (!code.trim()) {
      setError('Please enter a coupon code.');
      return;
    }
    if (!discountValue || isNaN(discountValue)) {
      setError('Please enter a valid discount value.');
      return;
    }

    const payload = {
      couponCode: code.trim().toUpperCase(),
      country: country || 'India',
      couponType: couponType.toLowerCase() === 'percentage' ? 'percentage' : couponType.toLowerCase() === 'fixed-amount' ? 'fixed' : 'percentage',
      discountValue: parseFloat(discountValue) || 0,
      minimumOrderAmount: minOrderAmount ? parseFloat(minOrderAmount) : (parseFloat(discountValue) * 2 || 100),
      maximumDiscountAmount: maxDiscountAmount ? parseFloat(maxDiscountAmount) : (parseFloat(discountValue) || 50),
      usageLimit: limit ? parseInt(limit, 10) : 100,
      status: status === 'In-Active' ? 'In Active' : status,
      startDate: startDate ? new Date(startDate).toISOString() : new Date().toISOString(),
      endDate: endDate ? new Date(endDate).toISOString() : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      categoryIds: productCategory ? [parseInt(productCategory, 10)] : [],
    };

    setSaving(true);
    try {
      if (isEditMode) {
        await couponAPI.update(couponId, payload);
        setSuccessMsg('Coupon updated successfully!');
      } else {
        await couponAPI.create(payload);
        setSuccessMsg('Coupon created successfully!');
      }

      setTimeout(() => {
        navigate('/coupons/list');
      }, 1000);
    } catch (err) {
      console.error('Error saving coupon:', err);
      setError(err.message || 'Failed to save coupon. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const CustomRadio = ({ name, value, selectedValue, onChange, label }) => {
    const isSelected = selectedValue === value;
    return (
      <div
        className="d-flex align-items-center gap-2"
        style={{ cursor: isViewMode ? 'default' : 'pointer' }}
        onClick={() => !isViewMode && onChange(value)}
      >
        <img
          src={isSelected ? EllipseActive : EllipseInactive}
          alt={label}
          style={{ width: '18px', height: '18px', objectFit: 'contain' }}
        />
        <span className="text-secondary small" style={{ fontFamily: "'Public Sans', sans-serif" }}>{label}</span>
      </div>
    );
  };

  return (
    <div className="p-4 min-vh-100" style={{ backgroundColor: '#F4F5F8', fontFamily: "'Public Sans', sans-serif" }}>
      <style>{`
        ::-webkit-scrollbar {
          display: none !important;
        }
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {error && (
        <div className="alert alert-danger py-2 small mb-3" role="alert">
          {error}
        </div>
      )}

      {successMsg && (
        <div className="alert alert-success py-2 small mb-3" role="alert">
          {successMsg}
        </div>
      )}

      {loading ? (
        <div className="text-center py-5 text-secondary">
          <div className="spinner-border spinner-border-sm text-primary me-2" role="status" />
          Loading coupon data...
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-lg-5 col-md-12 d-flex flex-column gap-4">
              <div className="card p-3" style={cardStyle}>
                <h6 className="mb-3" style={{ ...headingFont, fontSize: '16px' }}>
                  Coupon-Status
                </h6>
                <div className="d-flex align-items-center gap-4 py-1">
                  <CustomRadio
                    name="statusGroup"
                    value="Active"
                    selectedValue={status}
                    onChange={setStatus}
                    label="Active"
                  />
                  <CustomRadio
                    name="statusGroup"
                    value="In-Active"
                    selectedValue={status}
                    onChange={setStatus}
                    label="In-Active"
                  />
                  <CustomRadio
                    name="statusGroup"
                    value="Future-Plan"
                    selectedValue={status}
                    onChange={setStatus}
                    label="Future-Plan"
                  />
                </div>
              </div>

              <div className="card p-3" style={cardStyle}>
                <h6 className="mb-3" style={{ ...headingFont, fontSize: '16px' }}>
                  Date-Schedule
                </h6>
                <div className="mb-3">
                  <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                    Start-Date
                  </label>
                  <input
                    type="date"
                    className="form-control text-secondary bg-light border-light-subtle"
                    value={startDate}
                    disabled={isViewMode}
                    onChange={(e) => setStartDate(e.target.value)}
                    style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                    End-Date
                  </label>
                  <input
                    type="date"
                    className="form-control text-secondary bg-light border-light-subtle"
                    value={endDate}
                    disabled={isViewMode}
                    onChange={(e) => setEndDate(e.target.value)}
                    style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="card p-3 h-100" style={cardStyle}>
                <h6 className="mb-3" style={{ ...headingFont, fontSize: '16px' }}>
                  {isEditMode ? (isViewMode ? 'Coupon Details' : 'Edit Coupon') : 'Coupon-Information'}
                </h6>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                      Coupons-Code
                    </label>
                    <input
                      type="text"
                      className="form-control bg-light border-light-subtle text-uppercase"
                      placeholder="e.g. SAVE20"
                      value={code}
                      disabled={isViewMode}
                      onChange={(e) => setCode(e.target.value.toUpperCase())}
                      style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                      Discount-Products / Category
                    </label>
                    <select
                      className="form-select text-secondary bg-light border-light-subtle"
                      value={productCategory}
                      disabled={isViewMode}
                      onChange={(e) => setProductCategory(e.target.value)}
                      style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                    >
                      <option value="">Choose-Category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.category_name || cat.name}
                        </option>
                      ))}
                      {categories.length === 0 && (
                        <>
                          <option value="Fashion">Fashion</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Hand Bag">Hand Bag</option>
                          <option value="Shoes">Shoes</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                      Discount-Country
                    </label>
                    <select
                      className="form-select text-secondary bg-light border-light-subtle"
                      value={country}
                      disabled={isViewMode}
                      onChange={(e) => setCountry(e.target.value)}
                      style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                    >
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Global">Global</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                      Coupons-Limits
                    </label>
                    <input
                      type="number"
                      className="form-control bg-light border-light-subtle"
                      placeholder="e.g. 100"
                      value={limit}
                      disabled={isViewMode}
                      onChange={(e) => setLimit(e.target.value)}
                      style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label text-secondary small mb-2 d-block fw-semibold" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                    Coupons-Types
                  </label>
                  <div className="d-flex align-items-center gap-4">
                    <CustomRadio
                      name="couponTypeGroup"
                      value="Free-Shipping"
                      selectedValue={couponType}
                      onChange={setCouponType}
                      label="Free-Shipping"
                    />
                    <CustomRadio
                      name="couponTypeGroup"
                      value="Percentage"
                      selectedValue={couponType}
                      onChange={setCouponType}
                      label="Percentage"
                    />
                    <CustomRadio
                      name="couponTypeGroup"
                      value="Fixed-Amount"
                      selectedValue={couponType}
                      onChange={setCouponType}
                      label="Fixed-Amount"
                    />
                  </div>
                </div>

                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                      Discount-Value ({couponType === 'Percentage' ? '%' : '$'})
                    </label>
                    <input
                      type="number"
                      className="form-control bg-light border-light-subtle"
                      placeholder="e.g. 20"
                      value={discountValue}
                      disabled={isViewMode}
                      onChange={(e) => setDiscountValue(e.target.value)}
                      style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                      Min Order Amount ($)
                    </label>
                    <input
                      type="number"
                      className="form-control bg-light border-light-subtle"
                      placeholder="e.g. 500"
                      value={minOrderAmount}
                      disabled={isViewMode}
                      onChange={(e) => setMinOrderAmount(e.target.value)}
                      style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                    />
                  </div>
                </div>

                {!isViewMode && (
                  <div className="mt-auto">
                    <button
                      type="submit"
                      disabled={saving}
                      className="btn text-white fw-medium px-4 py-2 border-0 rounded-3"
                      style={{
                        backgroundColor: '#FF6B35',
                        fontSize: '0.875rem',
                        boxShadow: '0px 2px 4px rgba(255, 107, 53, 0.2)',
                        fontFamily: "'Public Sans', sans-serif",
                      }}
                    >
                      {saving
                        ? 'Saving...'
                        : isEditMode
                        ? 'Update-Coupon'
                        : 'Create-Coupon'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}