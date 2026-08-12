import React, { useState } from 'react';

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
  const [products, setProducts] = useState(initialProducts);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [filterMonth, setFilterMonth] = useState('This Month');

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(products.map((item) => item.id));
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

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
  };

  return (
    <div className="coupons-list-wrapper w-100">
      <style>{`
        .coupon-promo-card {
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .coupon-promo-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
        }

        .coupons-table-card {
          background-color: #ffffff;
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
          width: 100%;
          box-sizing: border-box;
        }

        .coupons-table th {
          font-size: 0.8rem !important;
          font-weight: 700 !important;
          color: #64748b !important;
          background-color: #f8fafc;
          border-bottom: 1px solid #eaedf1;
          padding: 0.75rem 1rem;
          white-space: nowrap;
        }

        .coupons-table td {
          font-size: 0.85rem;
          color: #5d7186;
          vertical-align: middle;
          padding: 0.85rem 1rem;
          border-bottom: 1px solid #eaedf1;
          white-space: nowrap;
        }

        .coupons-table tbody tr:hover {
          background-color: #f8fafc;
        }

        .coupon-action-btn {
          width: 36px;
          height: 32px;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: none;
          cursor: pointer;
          transition: opacity 0.15s ease;
        }

        .coupon-action-btn:hover {
          opacity: 0.8;
        }
      `}</style>


      <div className="row g-3 g-md-4 mb-4">
        <div className="col-12 col-md-6 col-xl-4">
          <div
            className="coupon-promo-card p-4 d-flex flex-column justify-content-between h-100"
            style={{ backgroundColor: '#FFEDE5' }}
          >
            <div>
              <h5 className="fw-bold mb-1" style={{ color: '#1e293b', fontSize: '1.1rem' }}>
                4 Coupons
              </h5>
              <p className="text-secondary small mb-3">
                Small nice summer coupons pack
              </p>
            </div>

            <div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h2 className="fw-bold mb-0" style={{ color: '#ff5e29', fontSize: '1.6rem' }}>
                  $140.00
                </h2>
                <button
                  type="button"
                  className="btn text-white fw-medium px-3 py-1.5 border-0 rounded-3"
                  style={{ backgroundColor: '#FF6C2F', fontSize: '0.85rem' }}
                >
                  Buy Now
                </button>
              </div>
              <span className="text-secondary small">Duration : 1 Year</span>
            </div>
          </div>
        </div>


        <div className="col-12 col-md-6 col-xl-4">
          <div
            className="coupon-promo-card p-4 d-flex flex-column justify-content-between h-100"
            style={{ backgroundColor: '#E2F7F3' }}
          >
            <div>
              <h5 className="fw-bold mb-1" style={{ color: '#1e293b', fontSize: '1.1rem' }}>
                8 Coupons
              </h5>
              <p className="text-secondary small mb-3">
                Medium nice summer coupons pack
              </p>
            </div>

            <div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h2 className="fw-bold mb-0" style={{ color: '#2EC4B6', fontSize: '1.6rem' }}>
                  $235.00
                </h2>
                <button
                  type="button"
                  className="btn text-white fw-medium px-3 py-1.5 border-0 rounded-3"
                  style={{ backgroundColor: '#2EC4B6', fontSize: '0.85rem' }}
                >
                  Buy Now
                </button>
              </div>
              <span className="text-secondary small">Duration : 1 Year</span>
            </div>
          </div>
        </div>


        <div className="col-12 col-md-12 col-xl-4">
          <div
            className="coupon-promo-card p-4 d-flex flex-column justify-content-between h-100 position-relative overflow-hidden"
            style={{ backgroundColor: '#FFEDE5' }}
          >
            <div
              className="position-relative d-flex flex-column h-100 justify-content-between"
              style={{ zIndex: 1, maxWidth: '75%' }}
            >
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
                  <h6 className="fw-bold mb-0" style={{ color: '#1e293b', fontSize: '0.95rem' }}>
                    30% Special discounts
                  </h6>
                </div>
                <p className="text-secondary small mb-3">
                  25 November - 2 December
                </p>
              </div>

              <div>
                <button
                  type="button"
                  className="btn text-white fw-medium px-3 py-1.5 border-0 rounded-3"
                  style={{ backgroundColor: '#FF6C2F', fontSize: '0.85rem' }}
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
                right: '-10px',
                top: 0,
                bottom: 0,
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.85,
              }}
            />
          </div>
        </div>
      </div>

      <div className="coupons-table-card">
        <div className="d-flex flex-wrap align-items-center justify-content-between p-3 p-lg-4 border-bottom gap-3" style={{ borderColor: '#eaedf1' }}>
          <h5 className="fw-bold mb-0" style={{ color: '#313B5E', fontSize: '1.1rem' }}>
            All Product List
          </h5>
          <select
            className="form-select form-select-sm border-light-subtle"
            style={{ width: '140px', fontSize: '0.85rem' }}
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
        </div>

        <div className="table-responsive">
          <table className="table coupons-table align-middle mb-0">
            <thead>
              <tr>
                <th style={{ width: '40px' }} className="ps-3">
                  <input
                    type="checkbox"
                    className="form-check-input cursor-pointer"
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
                <th className="text-center" style={{ width: '130px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                const isSelected = selectedItems.includes(product.id);
                return (
                  <tr key={product.id}>
                    <td className="ps-3">
                      <input
                        type="checkbox"
                        className="form-check-input cursor-pointer"
                        checked={isSelected}
                        onChange={() => handleSelectItem(product.id)}
                      />
                    </td>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div
                          style={{
                            backgroundColor: '#F1F5F9',
                            borderRadius: '10px',
                            width: '44px',
                            height: '44px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
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
                          <div className="fw-semibold text-dark" style={{ fontSize: '0.88rem' }}>
                            {product.name}
                          </div>
                          <div className="text-secondary small">
                            {product.category}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="fw-medium text-dark">{product.price}</td>
                    <td className="text-secondary">{product.discount}</td>
                    <td>
                      <span
                        className="px-2 py-1 rounded fw-semibold text-uppercase"
                        style={{
                          backgroundColor: '#f1f5f9',
                          color: '#475569',
                          fontSize: '0.78rem',
                          letterSpacing: '0.5px',
                        }}
                      >
                        {product.code}
                      </span>
                    </td>
                    <td className="text-secondary">{product.startDate}</td>
                    <td className="text-secondary">{product.endDate}</td>

                    <td>
                      {product.status === 'Active' ? (
                        <span
                          className="d-inline-flex align-items-center gap-1 rounded-2 px-2 py-0.5 fw-semibold"
                          style={{
                            backgroundColor: '#22C55E',
                            color: '#FFFFFF',
                            fontSize: '0.75rem',
                          }}
                        >
                          <img
                            src={checkDoubleIcon}
                            alt="Active"
                            style={{ width: '12px', height: '12px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                          />
                          Active
                        </span>
                      ) : (
                        <span
                          className="d-inline-flex align-items-center gap-1 rounded-2 px-2 py-0.5 fw-semibold"
                          style={{
                            backgroundColor: '#F8D7DA',
                            color: '#842029',
                            fontSize: '0.75rem',
                          }}
                        >
                          <img
                            src={cancelIcon}
                            alt="Expired"
                            style={{ width: '12px', height: '12px', objectFit: 'contain' }}
                          />
                          Expired
                        </span>
                      )}
                    </td>

                    <td>
                      <div className="d-flex align-items-center justify-content-center gap-1">
                        <button
                          type="button"
                          className="coupon-action-btn"
                          title="View"
                          style={{ backgroundColor: '#EEF2F7' }}
                        >
                          <img
                            src={eyeIcon}
                            alt="View"
                            style={{ width: '15px', height: '15px', objectFit: 'contain' }}
                          />
                        </button>

                        <button
                          type="button"
                          className="coupon-action-btn"
                          title="Edit"
                          style={{ backgroundColor: 'rgba(255, 108, 47, 0.1)' }}
                        >
                          <img
                            src={penIcon}
                            alt="Edit"
                            style={{ width: '15px', height: '15px', objectFit: 'contain' }}
                          />
                        </button>

                        <button
                          type="button"
                          className="coupon-action-btn"
                          title="Delete"
                          style={{ backgroundColor: 'rgba(239, 95, 95, 0.1)' }}
                          onClick={() => handleDelete(product.id)}
                        >
                          <img
                            src={trashIcon}
                            alt="Delete"
                            style={{ width: '15px', height: '15px', objectFit: 'contain' }}
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
          className="d-flex flex-wrap align-items-center justify-content-between p-3 border-top"
          style={{ borderColor: '#eaedf1' }}
        >
          <p className="mb-0 text-muted small">
            Showing <strong className="text-dark">{products.length}</strong> items
          </p>

          <div className="d-flex align-items-center gap-1">
            <button className="btn btn-sm btn-light border px-2 py-1 text-secondary small">
              Previous
            </button>
            <button
              className="btn btn-sm text-white px-2.5 py-1 fw-bold rounded"
              style={{ backgroundColor: '#FF6C2F', fontSize: '0.8rem' }}
            >
              1
            </button>
            <button className="btn btn-sm btn-light border px-2.5 py-1 text-secondary small">
              2
            </button>
            <button className="btn btn-sm btn-light border px-2.5 py-1 text-secondary small">
              3
            </button>
            <button className="btn btn-sm btn-light border px-2 py-1 text-secondary small">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}