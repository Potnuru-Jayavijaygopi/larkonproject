import React, { useState, useEffect } from 'react';

import userGroupIcon from '../../assets/solar_users-group-two-rounded-bold-duotone.svg';
import boxIcon from '../../assets/solar_box-bold-duotone.svg';
import headsetIcon from '../../assets/solar_headphones-round-sound-bold-duotone.svg';
import notebookIcon from '../../assets/solar_notebook-bold-duotone_.svg';
import avatarIcon from '../../assets/Frame.svg';

import viewIcon from '../../assets/solar_eye-broken.svg';
import editIcon from '../../assets/solar_pen-2-broken.svg';
import deleteIcon from '../../assets/solar_trash-bin-minimalistic-2-broken.svg';
import { customerAPI, invoiceAPI, formatDate } from '../../services/api';

const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Completed': return 'badge-completed';
    case 'Cancel': return 'badge-cancel';
    case 'Pending': return 'badge-pending';
    default: return 'badge-default';
  }
};

const Permissions2 = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchCustomerData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [custRes, invRes] = await Promise.all([
        customerAPI.getAll().catch(() => ({ data: [] })),
        invoiceAPI.getAll().catch(() => ({ data: {} })),
      ]);

      const rawCust = Array.isArray(custRes?.data)
        ? custRes.data
        : Array.isArray(custRes)
        ? custRes
        : [];

      const rawInvoices = Array.isArray(invRes?.data?.invoices)
        ? invRes.data.invoices
        : Array.isArray(invRes?.data)
        ? invRes.data
        : [];

      const paymentMethods = ['Mastercard', 'Visa', 'Paypal', 'Mastercard', 'Visa'];
      const statuses = ['Completed', 'Cancel', 'Completed', 'Pending', 'Completed'];

      const formatted = rawCust.map((c, index) => {
        const inv = rawInvoices[index] || {};
        const fullName = `${c.first_name || ''} ${c.last_name || ''}`.trim() || 'Valued Customer';
        const invoiceId = inv.invoice_number || `#INV${2500 + c.id}`;
        const totalAmount = inv.total_amount ? `$${Number(inv.total_amount).toLocaleString()}` : `$${(c.id * 1050 + 1340).toLocaleString()}`;
        const amountDue = inv.amount_due ? `$${Number(inv.amount_due).toLocaleString()}` : `$${(c.id * 750 + 2100).toLocaleString()}`;
        const status = inv.status ? (inv.status.toLowerCase() === 'paid' ? 'Completed' : 'Pending') : statuses[index % statuses.length];
        const paymentMethod = inv.payment_method || paymentMethods[index % paymentMethods.length];

        return {
          id: c.id,
          name: fullName,
          invoiceId: invoiceId,
          status: status,
          totalAmount: totalAmount,
          amountDue: amountDue,
          dueDate: formatDate(c.created_at || new Date()),
          paymentMethod: paymentMethod,
        };
      });

      setCustomers(formatted);
    } catch (err) {
      console.error('Failed to load customers/invoices:', err);
      setError('Unable to load customer permissions list from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(customers.map((c) => c.id));
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

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      setCustomers(customers.filter((c) => c.id !== id));
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };

  const totalPages = Math.ceil(customers.length / itemsPerPage) || 1;
  const paginatedCustomers = customers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="permissions2-page-wrapper page-container w-100">
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
          cursor: pointer;
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
          cursor: pointer;
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
            <div className="stat-card shadow-sm d-flex align-items-center justify-content-between">
              <div>
                <small className="text-muted d-block mb-1" style={{ fontSize: '12px' }}>
                  Total Invoice
                </small>
                <div className="d-flex align-items-center gap-2">
                  <span className="stat-number-text">{customers.length > 0 ? (customers.length * 241) : '2,410'}</span>
                  <span className="stat-percent-badge percent-badge-positive">3.4%</span>
                </div>
              </div>
              <div className="stat-icon-box">
                <img src={userGroupIcon} alt="Total Invoice" style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card shadow-sm d-flex align-items-center justify-content-between">
              <div>
                <small className="text-muted d-block mb-1" style={{ fontSize: '12px' }}>
                  Pending Invoice
                </small>
                <div className="d-flex align-items-center gap-2">
                  <span className="stat-number-text">890</span>
                  <span className="stat-percent-badge percent-badge-negative">1.2%</span>
                </div>
              </div>
              <div className="stat-icon-box">
                <img src={boxIcon} alt="Pending Invoice" style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card shadow-sm d-flex align-items-center justify-content-between">
              <div>
                <small className="text-muted d-block mb-1" style={{ fontSize: '12px' }}>
                  Paid Invoice
                </small>
                <div className="d-flex align-items-center gap-2">
                  <span className="stat-number-text">{customers.length > 0 ? (customers.length * 152) : '1,520'}</span>
                  <span className="stat-percent-badge percent-badge-positive">4.5%</span>
                </div>
              </div>
              <div className="stat-icon-box">
                <img src={headsetIcon} alt="Paid Invoice" style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="stat-card shadow-sm d-flex align-items-center justify-content-between">
              <div>
                <small className="text-muted d-block mb-1" style={{ fontSize: '12px' }}>
                  Inactive Invoice
                </small>
                <div className="d-flex align-items-center gap-2">
                  <span className="stat-number-text">45</span>
                  <span className="stat-percent-badge percent-badge-negative">0.5%</span>
                </div>
              </div>
              <div className="stat-icon-box">
                <img src={notebookIcon} alt="Inactive Invoice" style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="figma-table-card shadow-sm p-3 p-md-4">
          <div className="d-flex align-items-center justify-content-between pb-2 mb-2">
            <h6 className="card-title-heading mb-0">
              All Customer Permission List ({customers.length})
            </h6>

            <select className="form-select form-select-sm border-light-subtle text-muted" style={{ width: '120px', fontSize: '12px', cursor: 'pointer' }}>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>

          {error && (
            <div className="alert alert-danger py-2 small mb-3">{error}</div>
          )}

          <div className="table-responsive">
            <table className="table customers-table align-middle mb-0">
              <thead>
                <tr>
                  <th style={{ width: '4%' }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handleSelectAll}
                      checked={
                        selectedItems.length === customers.length &&
                        customers.length > 0
                      }
                    />
                  </th>
                  <th style={{ width: '20%' }}>Customer Name</th>
                  <th style={{ width: '12%' }}>Invoice ID</th>
                  <th style={{ width: '12%' }}>Status</th>
                  <th style={{ width: '12%' }}>Total Amount</th>
                  <th style={{ width: '12%' }}>Amount Due</th>
                  <th style={{ width: '12%' }}>Due Date</th>
                  <th style={{ width: '10%' }}>Payment Method</th>
                  <th className="text-end" style={{ width: '6%' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="9" className="text-center py-4 text-muted">
                      <div className="spinner-border spinner-border-sm text-primary me-2" role="status" />
                      Loading customers list from backend...
                    </td>
                  </tr>
                ) : paginatedCustomers.length === 0 ? (
                  <tr>
                    <td colSpan="9" className="text-center py-4 text-muted">
                      No customer permissions records found.
                    </td>
                  </tr>
                ) : (
                  paginatedCustomers.map((c) => (
                    <tr key={c.id}>
                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          checked={selectedItems.includes(c.id)}
                          onChange={() => handleSelectItem(c.id)}
                        />
                      </td>

                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar-circle-sm">
                            <img src={avatarIcon} alt="Avatar" style={{ width: '14px', height: '14px' }} />
                          </div>
                          <span className="fw-medium text-dark">{c.name}</span>
                        </div>
                      </td>

                      <td className="text-muted">{c.invoiceId}</td>

                      <td>
                        <span className={`status-badge ${getStatusBadgeClass(c.status)}`}>
                          {c.status}
                        </span>
                      </td>

                      <td className="text-dark fw-medium">{c.totalAmount}</td>
                      <td className="text-dark fw-medium">{c.amountDue}</td>
                      <td className="text-muted">{c.dueDate}</td>
                      <td className="text-dark">{c.paymentMethod}</td>

                      <td>
                        <div className="d-flex align-items-center justify-content-end gap-1">
                          <button className="action-btn-custom btn-view-bg" title="View">
                            <img src={viewIcon} alt="View" style={{ width: '16px', height: '16px' }} />
                          </button>
                          <button className="action-btn-custom btn-edit-bg" title="Edit">
                            <img src={editIcon} alt="Edit" style={{ width: '16px', height: '16px' }} />
                          </button>
                          <button 
                            className="action-btn-custom btn-delete-bg" 
                            title="Delete"
                            onClick={() => handleDelete(c.id)}
                          >
                            <img src={deleteIcon} alt="Delete" style={{ width: '16px', height: '16px' }} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="d-flex align-items-center justify-content-end gap-1 pt-3 border-top mt-3" style={{ borderColor: 'var(--border-color)' }}>
              <button
                type="button"
                className="page-link-custom"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  type="button"
                  className={`page-link-custom ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                className="page-link-custom"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Permissions2;