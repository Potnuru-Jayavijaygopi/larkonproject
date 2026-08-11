import React, { useState } from 'react';

import userGroupIcon from '../../assets/solar_users-group-two-rounded-bold-duotone.svg';
import boxIcon from '../../assets/solar_box-bold-duotone.svg';
import headsetIcon from '../../assets/solar_headphones-round-sound-bold-duotone.svg';
import notebookIcon from '../../assets/solar_notebook-bold-duotone_.svg';
import avatarIcon from '../../assets/Frame.svg';

import viewIcon from '../../assets/solar_eye-broken.svg';
import editIcon from '../../assets/solar_pen-2-broken.svg';
import deleteIcon from '../../assets/solar_trash-bin-minimalistic-2-broken.svg';

const initialCustomers = [
  { id: 1, name: 'Michael A. Miner', invoiceId: '#INV2540', status: 'Completed', totalAmount: '$4,521', amountDue: '$8,501', dueDate: '07 Jan, 2023', paymentMethod: 'Mastercard' },
  { id: 2, name: 'Theresa T. Brose', invoiceId: '#INV3924', status: 'Cancel', totalAmount: '$7,036', amountDue: '$5,902', dueDate: '03 Dec, 2023', paymentMethod: 'Visa' },
  { id: 3, name: 'James L. Erickson', invoiceId: '#INV5032', status: 'Completed', totalAmount: '$1,347', amountDue: '$6,718', dueDate: '29 Sep, 2023', paymentMethod: 'Paypal' },
  { id: 4, name: 'Lily W. Wilson', invoiceId: '#INV1695', status: 'Pending', totalAmount: '$9,457', amountDue: '$3,928', dueDate: '10 Aug, 2023', paymentMethod: 'Mastercard' },
  { id: 5, name: 'Sarah M. Brooks', invoiceId: '#INV8473', status: 'Cancel', totalAmount: '$4,214', amountDue: '$8,814', dueDate: '22 May, 2023', paymentMethod: 'Visa' },
  { id: 6, name: 'Joe K. Hall', invoiceId: '#INV2150', status: 'Completed', totalAmount: '$2,513', amountDue: '$5,891', dueDate: '15 Mar, 2023', paymentMethod: 'Paypal' },
  { id: 7, name: 'Ralph Hueber', invoiceId: '#INV5435', status: 'Completed', totalAmount: '$3,103', amountDue: '$8,415', dueDate: '15 Mar, 2023', paymentMethod: 'Visa' },
  { id: 8, name: 'Sarah Drescher', invoiceId: '#INV2540', status: 'Completed', totalAmount: '$2,418', amountDue: '$7,715', dueDate: '15 Mar, 2023', paymentMethod: 'Mastercard' },
  { id: 9, name: 'Leona Meister', invoiceId: '#INV9027', status: 'Pending', totalAmount: '$1,381', amountDue: '$3,851', dueDate: '15 Mar, 2023', paymentMethod: 'Paypal' },
];

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Completed': return 'badge-completed';
    case 'Cancel': return 'badge-cancel';
    case 'Pending': return 'badge-pending';
    default: return 'badge-default';
  }
};

const Permissions2 = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(initialCustomers.map((c) => c.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div className="permissions2-page-wrapper w-100">
      <style>{`
        html, body, .permissions2-page-wrapper {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          font-family: 'Public Sans', sans-serif !important;
          color: #334155;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        html::-webkit-scrollbar, 
        body::-webkit-scrollbar, 
        .permissions2-page-wrapper::-webkit-scrollbar {
          display: none !important;
        }

        .card-title-heading {
          font-family: 'Public Sans', sans-serif !important;
          font-weight: 700 !important;
          font-size: 0.95rem !important;
          color: #1e293b !important;
          line-height: 100% !important;
        }

        .stat-number-text {
          font-family: 'Public Sans', sans-serif !important;
          font-weight: 700;
          color: #1e293b;
          font-size: 1.25rem;
          line-height: 1.2;
        }

        .stat-percent-badge {
          font-family: 'Public Sans', sans-serif !important;
          font-size: 12px;
          font-weight: 700;
          line-height: 100%;
          padding: 3px 6px;
          border-radius: 4px;
          display: inline-block;
          border: none;
        }

        .percent-badge-positive {
          background-color: #DCFCE7;
          color: #22C55E;
        }

        .percent-badge-negative {
          background-color: #FEE2E2;
          color: #EF5F5F;
        }

        .stat-card {
          border: 1px solid var(--border-color, #e2e8f0);
          background-color: var(--card-bg, #ffffff);
          border-radius: 8px;
          padding: 12px 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .stat-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 94, 41, 0.1);
        }

        .figma-table-card {
          border: 1px solid var(--border-color, #e2e8f0);
          background-color: var(--card-bg, #ffffff);
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .customers-table th {
          font-family: 'Public Sans', sans-serif !important;
          font-size: 0.75rem !important;
          font-weight: 700 !important;
          color: #64748b !important;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          padding: 0.75rem 1rem;
        }

        .customers-table td {
          vertical-align: middle;
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          font-family: 'Public Sans', sans-serif !important;
          font-size: 0.85rem !important;
          color: #334155 !important;
          line-height: 100% !important;
        }

        .status-badge {
          font-family: 'Public Sans', sans-serif !important;
          font-size: 10.5px;
          font-weight: 700;
          line-height: 100%;
          padding: 3px 8px;
          border-radius: 4px;
          display: inline-block;
          border: none;
        }

        .badge-completed {
          background-color: #DCFCE7;
          color: #22C55E;
        }

        .badge-cancel {
          background-color: #FEE2E2;
          color: #EF5F5F;
        }

        .badge-pending {
          background-color: rgba(255, 94, 41, 0.1);
          color: var(--primary-orange, #ff5e29);
        }

        .badge-default {
          background-color: #f8fafc;
          color: #64748b;
        }

        .avatar-circle-sm {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .action-btn-custom {
          width: 44px;
          height: 32px;
          border-radius: 8px;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: opacity 0.2s ease;
        }

        .action-btn-custom:hover {
          opacity: 0.8;
        }

        .btn-view-bg {
          background-color: #EEF2F7;
        }

        .btn-edit-bg {
          background-color: rgba(255, 108, 47, 0.1);
        }

        .btn-delete-bg {
          background-color: rgba(239, 95, 95, 0.1);
        }

        .page-link-custom {
          padding: 3px 8px;
          border-radius: 6px !important;
          border: 1px solid var(--border-color, #e2e8f0);
          color: #64748b;
          font-size: 12px;
          text-decoration: none;
        }

        .page-link-custom.active {
          background-color: var(--primary-orange, #ff5e29);
          color: #ffffff;
          border-color: var(--primary-orange, #ff5e29);
        }
      `}</style>

      <div className="container-fluid p-0">
        <div className="row g-3 mb-3">
          <div className="col-md-3">
            <div className="stat-card shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="stat-icon-box">
                  <img src={userGroupIcon} alt="Customers" style={{ width: '20px', height: '20px' }} />
                </div>
                <h6 className="card-title-heading mb-0">All Customers</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="stat-number-text">+22.63k</span>
                <span className="stat-percent-badge percent-badge-positive">
                  ↑ 34.4%
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="stat-icon-box">
                  <img src={boxIcon} alt="Orders" style={{ width: '20px', height: '20px' }} />
                </div>
                <h6 className="card-title-heading mb-0">Orders</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="stat-number-text">+4.5k</span>
                <span className="stat-percent-badge percent-badge-negative">
                  ↓ 8.1%
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="stat-icon-box">
                  <img src={headsetIcon} alt="Services" style={{ width: '20px', height: '20px' }} />
                </div>
                <h6 className="card-title-heading mb-0">Services Request</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="stat-number-text">+1.03k</span>
                <span className="stat-percent-badge percent-badge-positive">
                  ↑ 12.6%
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card shadow-sm">
              <div className="d-flex align-items-center gap-2 mb-2">
                <div className="stat-icon-box">
                  <img src={notebookIcon} alt="Payment" style={{ width: '20px', height: '20px' }} />
                </div>
                <h6 className="card-title-heading mb-0">Invoice & Payment</h6>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="stat-number-text">$38,908.00</span>
                <span className="stat-percent-badge percent-badge-positive">
                  ↑ 45.3%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="figma-table-card shadow-sm p-3 p-md-4">
          <div className="d-flex align-items-center justify-content-between pb-2 mb-2">
            <h6 className="card-title-heading mb-0">
              All Customers List
            </h6>

            <select className="form-select form-select-sm border-light-subtle text-muted" style={{ width: '120px', fontSize: '12px', cursor: 'pointer' }}>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="table-responsive">
            <table className="table customers-table align-middle mb-0">
              <thead>
                <tr>
                  <th style={{ width: '4%' }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handleSelectAll}
                      checked={selectedItems.length === initialCustomers.length}
                    />
                  </th>
                  <th style={{ width: '18%' }}>Customer Name</th>
                  <th style={{ width: '12%' }}>Invoice ID</th>
                  <th style={{ width: '12%' }}>Status</th>
                  <th style={{ width: '12%' }}>Total Amount</th>
                  <th style={{ width: '12%' }}>Amount Due</th>
                  <th style={{ width: '12%' }}>Due Date</th>
                  <th style={{ width: '10%' }}>Payment Method</th>
                  <th className="text-end" style={{ width: '8%' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {initialCustomers.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedItems.includes(row.id)}
                        onChange={() => handleSelectItem(row.id)}
                      />
                    </td>
                    
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="avatar-circle-sm">
                          <img src={avatarIcon} alt="Avatar" style={{ width: '13px', height: '13px', objectFit: 'contain' }} />
                        </div>
                        <span>
                          {row.name}
                        </span>
                      </div>
                    </td>

                    <td>{row.invoiceId}</td>

                    <td>
                      <span className={`status-badge ${getStatusBadgeClass(row.status)}`}>
                        {row.status}
                      </span>
                    </td>

                    <td>
                      {row.totalAmount}
                    </td>

                    <td>
                      {row.amountDue}
                    </td>

                    <td>{row.dueDate}</td>
                    <td>{row.paymentMethod}</td>

                    <td>
                      <div className="d-flex align-items-center justify-content-end gap-1">
                        <button className="action-btn-custom btn-view-bg" title="View">
                          <img src={viewIcon} alt="View" style={{ width: '16px', height: '16px' }} />
                        </button>
                        <button className="action-btn-custom btn-edit-bg" title="Edit">
                          <img src={editIcon} alt="Edit" style={{ width: '16px', height: '16px' }} />
                        </button>
                        <button className="action-btn-custom btn-delete-bg" title="Delete">
                          <img src={deleteIcon} alt="Delete" style={{ width: '16px', height: '16px' }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-center justify-content-end gap-1 pt-3 border-top mt-3" style={{ borderColor: 'var(--border-color)' }}>
            <a href="#prev" className="page-link-custom">Previous</a>
            <a href="#page1" className="page-link-custom active">1</a>
            <a href="#page2" className="page-link-custom">2</a>
            <a href="#page3" className="page-link-custom">3</a>
            <a href="#next" className="page-link-custom">Next</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permissions2;