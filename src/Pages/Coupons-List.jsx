import React, { useState, useEffect } from 'react';

import shoppingBagIcon from '../assets/bag-smile.png';
import groupPatternIcon from '../assets/Group.png';
import imagePlaceholderIcon from '../assets/Frame (7).png';
import eyeIcon from '../assets/eye(2).png';
import penIcon from '../assets/pen(2).png';
import trashIcon from '../assets/trash (2).png';
import checkDoubleIcon from '../assets/button.png';
import cancelIcon from '../assets/tick (2).png';

const initialProducts = [
  {
    id: 1,
    name: 'Black T-shirt',
    category: 'Fashion',
    price: '$80.00',
    discount: '$20.00',
    code: 'FASHION123',
    startDate: '12 May 2023',
    endDate: '12 Jun 2023',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Olive Green Leather Bag',
    category: 'Hand Bag',
    price: '$136.00',
    discount: '$37.00',
    code: 'SUMMER24',
    startDate: '19 July 2023',
    endDate: '23 Aug 2023',
    status: 'Expired',
  },
  {
    id: 3,
    name: 'Women Golden Dress',
    category: 'Fashion',
    price: '$219.00',
    discount: '$20.00',
    code: 'FASHION123',
    startDate: '24 Aug 2023',
    endDate: '20 Sep 2023',
    status: 'Active',
  },
  {
    id: 4,
    name: 'Gray Cap For Men',
    category: 'Cap',
    price: '$76.00',
    discount: '$12.00',
    code: 'CODE000',
    startDate: '30 Dec 2023',
    endDate: '17 Jan 2024',
    status: 'Active',
  },
  {
    id: 5,
    name: 'Dark Green Cargo Pent',
    category: 'Fashion',
    price: '$110.00',
    discount: '$20.00',
    code: 'FASHION123',
    startDate: '11 Jan 2024',
    endDate: '15 Feb 2024',
    status: 'Expired',
  },
  {
    id: 6,
    name: 'Orange Multi Color Headphone',
    category: 'Electronics',
    price: '$231.00',
    discount: '35%',
    code: 'HEADPHONE24',
    startDate: '31 May 2023',
    endDate: '23 Jun 2023',
    status: 'Expired',
  },
  {
    id: 7,
    name: "Kid's Yellow Shoes",
    category: 'Foot Wares',
    price: '$89.00',
    discount: '$19.00',
    code: "KID'S24",
    startDate: '16 May 2024',
    endDate: '12 Jun 2024',
    status: 'Active',
  },
  {
    id: 8,
    name: 'Men Dark Brown Wallet',
    category: 'Wallet',
    price: '$132.00',
    discount: '50%',
    code: 'BRAND24',
    startDate: '25 Jan 2024',
    endDate: '16 Feb 2024',
    status: 'Expired',
  },
  {
    id: 9,
    name: 'Sky Blue Sunglass',
    category: 'Sunglass',
    price: '$77.00',
    discount: '$23.00',
    code: 'EYEWARE24',
    startDate: '23 Feb 2024',
    endDate: '24 March 2024',
    status: 'Active',
  },
  {
    id: 10,
    name: "Kid's Yellow T-shirt",
    category: 'Fashion',
    price: '$110.00',
    discount: '$35.00',
    code: "KID'S24",
    startDate: '14 Aug 2023',
    endDate: '15 Sep 2023',
    status: 'Active',
  },
  {
    id: 11,
    name: 'White Rubber Band Smart Watch',
    category: 'Electronics',
    price: '$77.00',
    discount: '$14.00',
    code: 'WATCH2W1',
    startDate: '27 March 2024',
    endDate: '12 Apr 2024',
    status: 'Expired',
  },
  {
    id: 12,
    name: 'Men Brown Leather Shoes',
    category: 'Size : 40 , 41 , 42 , 43',
    price: '$222.00',
    discount: '40%',
    code: 'FOOTWARE23',
    startDate: '23 Dec 2023',
    endDate: '22 Jan 2024',
    status: 'Active',
  },
];

export default function CouponsList() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(initialProducts.map((item) => item.id));
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

      
      <div className="row g-3 mb-4">
        <div className="col-lg-4 col-md-4">
          <div
            className="p-3 d-flex flex-column justify-content-between h-100 rounded-4 content-card shadow-sm"
            style={{ backgroundColor: '#FFEDE5', minHeight: '140px' }}
          >
            <div>
              <h5 className="fw-bold mb-1" style={{ color: '#1e293b' }}>
                4 Coupons
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
                8 Coupons
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

     
      <div className="content-card bg-white rounded-4 shadow-sm p-3">
        <div className="card-header-custom bg-transparent d-flex align-items-center justify-content-between pb-3">
          <h2 className="card-title-custom fs-5 fw-bold mb-0 text-dark">
            All Product List
          </h2>
          <select
            className="form-select form-select-sm border-light-subtle shadow-none"
            style={{ width: '130px', fontSize: '0.85rem' }}
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
        </div>

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
              {initialProducts.map((product) => {
                const isSelected = selectedItems.includes(product.id);
                return (
                  <tr key={product.id}>
                    <td className="ps-3">
                      <input
                        type="checkbox"
                        className="form-check-input cursor-pointer shadow-none"
                        checked={isSelected}
                        onChange={() => handleSelectItem(product.id)}
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
                          {product.name}
                        </div>
                        <div className="product-sizes text-secondary small">
                          {product.category}
                        </div>
                      </div>
                    </div> 
                    </td>
                    <td className="text-secondary fw-medium">{product.price}</td>
                    <td className="text-secondary fw-medium">{product.discount}</td>
                    <td>
                      <span className="text-uppercase text-secondary fw-semibold" style={{ fontSize: '0.85rem' }}>
                        {product.code}
                      </span>
                    </td>
                    <td className="text-secondary">{product.startDate}</td>
                    <td className="text-secondary">{product.endDate}</td>

                    <td>
                      {product.status === 'Active' ? (
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
                          Expired
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
                            }}
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
                            }}
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
                            }}
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
              })}
            </tbody>
          </table>
        </div>
        <div
          className="card-footer bg-transparent py-3 border-0 d-flex align-items-center justify-content-end gap-1"
          style={{ borderTop: '1px solid var(--border-color)' }}
        >
          <button className="btn btn-outline-secondary btn-sm px-3" style={{ fontSize: '0.85rem' }}>
            Previous
          </button>
          <button
            className="btn btn-sm text-white px-3 py-1 fw-bold btn-add-product"
            style={{ backgroundColor: '#ff5e29', fontSize: '0.85rem' }}
          >
            1
          </button>
          <button className="btn btn-outline-secondary btn-sm px-3" style={{ fontSize: '0.85rem' }}>
            2
          </button>
          <button className="btn btn-outline-secondary btn-sm px-3" style={{ fontSize: '0.85rem' }}>
            3
          </button>
          <button className="btn btn-outline-secondary btn-sm px-3" style={{ fontSize: '0.85rem' }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}