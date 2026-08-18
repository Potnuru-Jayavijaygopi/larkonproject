import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { couponAPI, formatDate } from '../services/api';

import shoppingBagIcon from '../assets/bag-smile.png';
import groupPatternIcon from '../assets/Group.png';
import imagePlaceholderIcon from '../assets/Frame (7).png';
import eyeIcon from '../assets/eye(2).png';
import penIcon from '../assets/pen(2).png';
import trashIcon from '../assets/trash (2).png';
import checkDoubleIcon from '../assets/buttons.png';
import cancelIcon from '../assets/tick (2).png';

export default function CouponsList() {
  const navigate = useNavigate();
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [dateFilter, setDateFilter] = useState('All Time');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const fetchCoupons = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await couponAPI.getAll();
      if (Array.isArray(data)) {
        setCoupons(data);
      } else {
        setCoupons([]);
      }
    } catch (err) {
      console.error('Failed to fetch coupons:', err);
      setError('Unable to load coupons from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleDelete = async (id, e) => {
    if (e) e.stopPropagation();
    if (!window.confirm('Are you sure you want to deactivate/delete this coupon?')) {
      return;
    }
    try {
      await couponAPI.delete(id);
      // Update local state to reflect deactivation
      setCoupons((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: 'In Active' } : c))
      );
    } catch (err) {
      console.error('Failed to deactivate coupon:', err);
      alert(err.message || 'Failed to delete coupon.');
    }
  };

  const handleEdit = (id, e) => {
    if (e) e.stopPropagation();
    navigate(`/coupons/add?id=${id}`);
  };

  const handleView = (id, e) => {
    if (e) e.stopPropagation();
    navigate(`/coupons/add?id=${id}&mode=view`);
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredCoupons.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Date filtering logic
  const now = new Date();
  const filteredCoupons = coupons.filter((coupon) => {
    if (dateFilter === 'All Time') return true;
    const itemDate = new Date(coupon.created_at || coupon.start_date);
    if (isNaN(itemDate.getTime())) return true;

    if (dateFilter === 'This Month') {
      return (
        itemDate.getMonth() === now.getMonth() &&
        itemDate.getFullYear() === now.getFullYear()
      );
    }
    if (dateFilter === 'Last Month') {
      const prevMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
      const prevYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
      return itemDate.getMonth() === prevMonth && itemDate.getFullYear() === prevYear;
    }
    if (dateFilter === 'This Year') {
      return itemDate.getFullYear() === now.getFullYear();
    }
    return true;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredCoupons.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedCoupons = filteredCoupons.slice(startIndex, startIndex + itemsPerPage);

  // Active coupons count
  const activeCount = coupons.filter(
    (c) => c.status === 'Active' && (!c.end_date || new Date(c.end_date) >= now)
  ).length;

  const inactiveCount = coupons.length - activeCount;

  return (
    <div 
      className="page-container container-fluid px-4 py-3" 
      style={{ 
        fontFamily: "'Public Sans', sans-serif",
        maxWidth: '1440px',
        margin: '0 auto',
        zoom: '0.92' // Scales layout smoothly to fit 100% desktop screens nicely
      }}
    >
      <style>{`
        ::-webkit-scrollbar {
          display: none !important;
        }
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      {/* Top Banner Cards */}
      <div className="row g-3 mb-4">
        <div className="col-lg-4 col-md-4">
          <div
            className="p-3 d-flex flex-column justify-content-between h-100 rounded-4 content-card shadow-sm"
            style={{ backgroundColor: '#FFEDE5', minHeight: '140px' }}
          >
            <div>
              <h5 className="fw-bold mb-1" style={{ color: '#1e293b' }}>
                {activeCount} Active Coupons
              </h5>
              <p className="text-secondary small mb-3">
                Small nice summer coupons pack
              </p>
              
              <div className="d-flex align-items-center justify-content-between mb-1">
                <h2 className="fw-bold mb-0" style={{ color: '#ff5e29' }}>
                  $140.00
                </h2>
                <button
                  className="btn text-white fw-medium px-3 py-2 border-0 rounded-3 btn-add-product"
                  style={{ fontSize: '0.875rem', backgroundColor: '#ff5e29' }}
                  onClick={() => navigate('/coupons/add')}
                >
                  Buy Now
                </button>
              </div>

              <span className="text-secondary small">Duration : 1 Year</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div
            className="p-3 d-flex flex-column justify-content-between h-100 rounded-4 content-card shadow-sm"
            style={{ backgroundColor: '#E2F7F3', minHeight: '140px' }}
          >
            <div>
              <h5 className="fw-bold mb-1" style={{ color: '#1e293b' }}>
                {coupons.length} Total Coupons
              </h5>
              <p className="text-secondary small mb-3">
                Medium nice summer coupons pack
              </p>
              
              <div className="d-flex align-items-center justify-content-between mb-1">
                <h2 className="fw-bold mb-0" style={{ color: '#2EC4B6' }}>
                  $235.00
                </h2>
                <button
                  className="btn text-white fw-medium px-3 py-2 border-0 rounded-3"
                  style={{ backgroundColor: '#2EC4B6', fontSize: '0.875rem' }}
                  onClick={() => navigate('/coupons/add')}
                >
                  Buy Now
                </button>
              </div>

              <span className="text-secondary small">Duration : 1 Year</span>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-4">
          <div
            className="p-3 d-flex flex-column justify-content-between h-100 position-relative overflow-hidden rounded-4 content-card shadow-sm"
            style={{ backgroundColor: '#FFEDE5', minHeight: '140px' }}
          >
            <div className="position-relative d-flex flex-column h-100 justify-content-between" style={{ zIndex: 1, maxWidth: '75%' }}>
              <div>
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: '#FFE2D1',
                    }}
                  >
                    <img
                      src={shoppingBagIcon}
                      alt="Bag"
                      style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                    />
                  </div>
                  <h6 className="fw-bold mb-0 text-truncate" style={{ color: '#1e293b' }}>
                    30% Special discounts
                  </h6>
                </div>
                <p className="text-secondary small mb-3">
                  25 November - 2 December
                </p>
              </div>

              <div>
                <button
                  className="btn text-white fw-medium px-3 py-2 border-0 rounded-3 btn-add-product"
                  style={{ fontSize: '0.85rem', backgroundColor: '#ff5e29' }}
                  onClick={() => navigate('/coupons/add')}
                >
                  View Plan
                </button>
              </div>
            </div>

            <img
              src={groupPatternIcon}
              alt="Decorative Pattern"
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                bottom: 0,
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="content-card bg-white rounded-4 shadow-sm p-3">
        <div className="card-header-custom bg-transparent d-flex align-items-center justify-content-between pb-3">
          <h2 className="card-title-custom fs-5 fw-bold mb-0 text-dark">
            All Product List
          </h2>
          <select
            className="form-select form-select-sm border-light-subtle shadow-none"
            style={{ width: '130px', fontSize: '0.85rem' }}
            value={dateFilter}
            onChange={(e) => {
              setDateFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="All Time">All Time</option>
            <option value="This Month">This Month</option>
            <option value="Last Month">Last Month</option>
            <option value="This Year">This Year</option>
          </select>
        </div>

        {error && (
          <div className="alert alert-danger py-2 small mb-3" role="alert">
            {error}
          </div>
        )}

        <div className="table-responsive">
          <table className="table table-custom align-middle text-nowrap mb-0">
            <thead>
              <tr className="text-secondary" style={{ fontSize: '0.85rem' }}>
                <th style={{ width: '40px' }} className="ps-3">
                  <input
                    type="checkbox"
                    className="form-check-input cursor-pointer shadow-none"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Product Name & Type</th>
                <th>Price</th>
                <th>Discount</th>
                <th>Code</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="9" className="text-center py-4 text-secondary">
                    <div className="spinner-border spinner-border-sm text-primary me-2" role="status" />
                    Loading coupons...
                  </td>
                </tr>
              ) : displayedCoupons.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-4 text-secondary">
                    No coupons found.
                  </td>
                </tr>
              ) : (
                displayedCoupons.map((coupon) => {
                  const isSelected = selectedItems.includes(coupon.id);
                  const isExpired =
                    coupon.status === 'In Active' ||
                    (coupon.end_date && new Date(coupon.end_date) < now);
                  const isActive = coupon.status === 'Active' && !isExpired;

                  // Format discount string (e.g., "20%" or "$20.00")
                  const discountDisplay =
                    coupon.coupon_type?.toLowerCase() === 'percentage'
                      ? `${parseFloat(coupon.discount_value || 0)}%`
                      : `$${parseFloat(coupon.discount_value || 0).toFixed(2)}`;

                  // Format price/min order amount
                  const priceDisplay = coupon.minimum_order_amount
                    ? `$${parseFloat(coupon.minimum_order_amount).toFixed(2)}`
                    : '$0.00';

                  return (
                    <tr key={coupon.id}>
                      <td className="ps-3">
                        <input
                          type="checkbox"
                          className="form-check-input cursor-pointer shadow-none"
                          checked={isSelected}
                          onChange={() => handleSelectItem(coupon.id)}
                        />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div 
                            className="product-img-box flex-shrink-0" 
                            style={{ 
                              backgroundColor: '#D9D9D9', 
                              borderRadius: '12px', 
                              width: '48px', 
                              height: '48px', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center' 
                            }}
                          >
                            <img
                              src={imagePlaceholderIcon}
                              alt="Product"
                              style={{
                                width: '20px',
                                height: '20px',
                                objectFit: 'contain',
                                opacity: 0.6,
                              }}
                            />
                          </div>
                          <div>
                            <div className="product-name fw-semibold text-dark" style={{ fontSize: '0.9rem' }}>
                              {coupon.coupon_code} Promo
                            </div>
                            <div className="product-sizes text-secondary small">
                              {coupon.country || 'Global'} • {coupon.coupon_type || 'General'}
                            </div>
                          </div>
                        </div> 
                      </td>
                      <td className="text-secondary fw-medium">{priceDisplay}</td>
                      <td className="text-secondary fw-medium">{discountDisplay}</td>
                      <td>
                        <span className="text-uppercase text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>
                          {coupon.coupon_code}
                        </span>
                      </td>
                      <td className="text-secondary">{formatDate(coupon.start_date)}</td>
                      <td className="text-secondary">{formatDate(coupon.end_date)}</td>

                      <td>
                        {isActive ? (
                          <span
                            className="d-inline-flex align-items-center gap-1 rounded-2 px-2 py-1 fw-semibold"
                            style={{
                              backgroundColor: '#22C55E',
                              color: '#FFFFFF',
                              fontSize: '0.78rem',
                            }}
                          >
                            <img
                              src={checkDoubleIcon}
                              alt="Active"
                              style={{ width: '14px', height: '14px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                            />
                            Active
                          </span>
                        ) : (
                          <span
                            className="d-inline-flex align-items-center gap-1 rounded-2 px-2 py-1 fw-semibold"
                            style={{
                              backgroundColor: '#F8D7DA',
                              color: '#842029',
                              fontSize: '0.78rem',
                            }}
                          >
                            <img
                              src={cancelIcon}
                              alt="Expired"
                              style={{ width: '14px', height: '14px', objectFit: 'contain' }}
                            />
                            {coupon.status === 'In Active' ? 'In Active' : 'Expired'}
                          </span>
                        )}
                      </td>

                      <td>
                        <div className="d-flex align-items-center justify-content-center gap-1">
                          <button 
                            className="action-btn" 
                            title="View"
                            style={{
                              backgroundColor: '#EEF2F7',
                              borderRadius: '8px',
                              width: '36px',
                              height: '30px',
                              border: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}
                            onClick={(e) => handleView(coupon.id, e)}
                          >
                            <img
                              src={eyeIcon}
                              alt="View"
                              style={{ width: '14px', height: '14px', objectFit: 'contain' }}
                            />
                          </button>

                          <button 
                            className="action-btn" 
                            title="Edit"
                            style={{
                              backgroundColor: 'rgba(255, 108, 47, 0.1)',
                              borderRadius: '8px',
                              width: '36px',
                              height: '30px',
                              border: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}
                            onClick={(e) => handleEdit(coupon.id, e)}
                          >
                            <img
                              src={penIcon}
                              alt="Edit"
                              style={{ width: '14px', height: '14px', objectFit: 'contain' }}
                            />
                          </button>
                          <button 
                            className="action-btn" 
                            title="Delete"
                            style={{
                              backgroundColor: 'rgba(239, 95, 95, 0.1)',
                              borderRadius: '8px',
                              width: '36px',
                              height: '30px',
                              border: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer'
                            }}
                            onClick={(e) => handleDelete(coupon.id, e)}
                          >
                            <img
                              src={trashIcon}
                              alt="Delete"
                              style={{ width: '14px', height: '14px', objectFit: 'contain' }}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div
          className="card-footer bg-transparent py-3 border-0 d-flex align-items-center justify-content-end gap-1"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <button 
            className="btn btn-outline-secondary btn-sm px-3" 
            style={{ fontSize: '0.85rem' }}
            disabled={currentPage <= 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNum) => (
            <button
              key={pageNum}
              className={`btn btn-sm px-3 py-1 fw-bold ${
                currentPage === pageNum ? 'btn-add-product text-white' : 'btn-outline-secondary'
              }`}
              style={{
                backgroundColor: currentPage === pageNum ? '#ff5e29' : 'transparent',
                borderColor: currentPage === pageNum ? '#ff5e29' : 'var(--bs-border-color)',
                fontSize: '0.85rem',
              }}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}

          <button 
            className="btn btn-outline-secondary btn-sm px-3" 
            style={{ fontSize: '0.85rem' }}
            disabled={currentPage >= totalPages}
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}