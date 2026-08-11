import React, { useState, useEffect } from 'react';

import EllipseActive from "../assets/Ellipse.png";
import EllipseInactive from "../assets/Ellipse (1).png";

export default function AddCoupon() {
  const [status, setStatus] = useState('Active');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [code, setCode] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [country, setCountry] = useState('');
  const [limit, setLimit] = useState('');
  const [couponType, setCouponType] = useState('Free-Shipping');
  const [discountValue, setDiscountValue] = useState('');

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      status,
      startDate,
      endDate,
      code,
      productCategory,
      country,
      limit,
      couponType,
      discountValue,
    };
    console.log('Submitted Coupon Data:', formData);
  };

  const CustomRadio = ({ name, value, selectedValue, onChange, label }) => {
    const isSelected = selectedValue === value;
    return (
      <div
        className="d-flex align-items-center gap-2"
        style={{ cursor: 'pointer' }}
        onClick={() => onChange(value)}
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
                  type="text"
                  className="form-control text-secondary bg-light border-light-subtle"
                  placeholder="dd-mm-yyyy"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                />
              </div>
              <div className="mb-1">
                <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                  End-Date
                </label>
                <input
                  type="text"
                  className="form-control text-secondary bg-light border-light-subtle"
                  placeholder="dd-mm-yyyy"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <div className="card p-3 h-100" style={cardStyle}>
              <h6 className="mb-3" style={{ ...headingFont, fontSize: '16px' }}>
                Coupon-Information
              </h6>

              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                    Coupons-Code
                  </label>
                  <input
                    type="text"
                    className="form-control bg-light border-light-subtle"
                    placeholder="Code enter"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                    Discount-Products
                  </label>
                  <select
                    className="form-select text-secondary bg-light border-light-subtle"
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                  >
                    <option value="">Choose-Category</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Hand-Bag">Hand-Bag</option>
                    <option value="Footwear">Footwear</option>
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
                    onChange={(e) => setCountry(e.target.value)}
                    style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                  >
                    <option value="">Choose-Country</option>
                    <option value="United-States">United-States</option>
                    <option value="United-Kingdom">United-Kingdom</option>
                    <option value="India">India</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                    Coupons-Limits
                  </label>
                  <input
                    type="number"
                    className="form-control bg-light border-light-subtle"
                    placeholder="limits nu"
                    value={limit}
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

              <div className="mb-4">
                <label className="form-label text-secondary small mb-1" style={{ fontFamily: "'Public Sans', sans-serif" }}>
                  Discount-Value
                </label>
                <input
                  type="text"
                  className="form-control bg-light border-light-subtle"
                  placeholder="value enter"
                  value={discountValue}
                  onChange={(e) => setDiscountValue(e.target.value)}
                  style={{ fontSize: '0.875rem', fontFamily: "'Public Sans', sans-serif" }}
                />
              </div>

              <div className="mt-auto">
                <button
                  type="submit"
                  className="btn text-white fw-medium px-4 py-2 border-0 rounded-3"
                  style={{
                    backgroundColor: '#FF6B35',
                    fontSize: '0.875rem',
                    boxShadow: '0px 2px 4px rgba(255, 107, 53, 0.2)',
                    fontFamily: "'Public Sans', sans-serif",
                  }}
                >
                  Create-Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}