import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BsReceipt,
  BsClockHistory,
  BsCheck2Circle,
  BsXCircle,
  BsImage,
  BsEye,
  BsPencil,
  BsTrash,
} from 'react-icons/bs';
import { getInvoices } from "../../services/api";

function InvoiceList({ onNavigate }) {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);
  const [summary, setSummary] = useState({
    totalInvoice: 0,
    pendingInvoice: 0,
    paidInvoice: 0,
    inactiveInvoice: 0,
  });
  const [selectedIds, setSelectedIds] = useState([]);
  const [filterTime, setFilterTime] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    getInvoices()
      .then((data) => {
        if (isMounted) {
          if (data.summary) {
            setSummary(data.summary);
          }
          if (data.invoices) {
            setInvoices(data.invoices);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error("Error fetching invoices:", err);
          setError(err.message || "Failed to load invoices");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleViewInvoice = (invoiceId) => {
    const id = invoiceId || (invoices.length > 0 ? invoices[0].invoice_id : 10);
    if (navigate) {
      navigate(`/invoices/details?id=${id}`);
    } else if (onNavigate) {
      onNavigate('invoice-details', id);
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredInvoices.map((i) => i.invoice_id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDeleteRow = (id) => {
    setInvoices(invoices.filter((i) => i.invoice_id !== id));
  };

  const mapStatus = (status) => {
    if (!status) return 'Pending';
    const s = status.toLowerCase();
    if (s === 'completed' || s === 'paid') return 'Completed';
    if (s === 'cancel' || s === 'failed' || s === 'refunded' || s === 'inactive') return 'Cancel';
    return 'Pending';
  };

  const renderStatusBadge = (rawStatus) => {
    const status = mapStatus(rawStatus);
    if (status === 'Completed') {
      return (
        <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1" style={{ fontSize: '0.7rem' }}>
          Completed
        </span>
      );
    } else if (status === 'Cancel') {
      return (
        <span className="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-1" style={{ fontSize: '0.7rem' }}>
          Cancel
        </span>
      );
    } else {
      return (
        <span className="badge bg-warning px-2 py-1" style={{ fontSize: '0.7rem', color: '#b45309' }}>
          Pending
        </span>
      );
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const filteredInvoices = invoices.filter((item) => {
    if (filterTime === 'all') return true;
    if (!item.order_date) return true;

    const date = new Date(item.order_date);
    if (isNaN(date.getTime())) return true;

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    if (filterTime === 'this-month') {
      return date.getFullYear() === currentYear && date.getMonth() === currentMonth;
    }
    if (filterTime === 'last-month') {
      const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
      const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
      return date.getFullYear() === lastMonthYear && date.getMonth() === lastMonth;
    }
    if (filterTime === 'this-year') {
      return date.getFullYear() === currentYear;
    }
    return true;
  });

 
  const displaySummary = {
    totalInvoice: filterTime === 'all' ? summary.totalInvoice : filteredInvoices.length,
    pendingInvoice: filterTime === 'all' ? summary.pendingInvoice : filteredInvoices.filter(i => mapStatus(i.payment_status) === 'Pending').length,
    paidInvoice: filterTime === 'all' ? summary.paidInvoice : filteredInvoices.filter(i => mapStatus(i.payment_status) === 'Completed').length,
    inactiveInvoice: filterTime === 'all' ? summary.inactiveInvoice : filteredInvoices.filter(i => mapStatus(i.payment_status) === 'Cancel').length,
  };

  const handleFilterChange = (e) => {
    setFilterTime(e.target.value);
    setCurrentPage(1);
    setSelectedIds([]);
  };

  return (
    <>
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Total Invoice</span>
              <h4 className="fw-bold text-dark mb-0">{loading ? '...' : displaySummary.totalInvoice}</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsReceipt className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Pending Invoice</span>
              <h4 className="fw-bold text-dark mb-0">{loading ? '...' : displaySummary.pendingInvoice}</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsClockHistory className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Paid Invoice</span>
              <h4 className="fw-bold text-dark mb-0">{loading ? '...' : displaySummary.paidInvoice}</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsCheck2Circle className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Inactive Invoice</span>
              <h4 className="fw-bold text-dark mb-0">{loading ? '...' : displaySummary.inactiveInvoice}</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsXCircle className="fs-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="content-card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-dark mb-0">All Invoices List</h6>
          <select
            className="form-select form-select-sm"
            style={{ width: 'auto', fontSize: '0.8rem' }}
            value={filterTime}
            onChange={handleFilterChange}
          >
            <option value="all">All Invoices</option>
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="this-year">This Year</option>
          </select>
        </div>

        {error && (
          <div className="alert alert-danger py-2 mb-3" style={{ fontSize: '0.8rem' }}>
            {error}
          </div>
        )}

        <div className="table-responsive">
          <table className="table table-custom align-middle mb-0" style={{ fontSize: '0.825rem' }}>
            <thead>
              <tr className="text-muted" style={{ fontSize: '0.75rem' }}>
                <th style={{ width: '30px' }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedIds.length === filteredInvoices.length && filteredInvoices.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Invoice ID</th>
                <th>Billing Name</th>
                <th>Order Date</th>
                <th>Total</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-muted">
                    Loading invoices...
                  </td>
                </tr>
              ) : filteredInvoices.length === 0 ? (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-muted">
                    No invoices found for the selected period.
                  </td>
                </tr>
              ) : (
                filteredInvoices.map((item) => (
                  <tr key={item.invoice_id}>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedIds.includes(item.invoice_id)}
                        onChange={() => handleSelectRow(item.invoice_id)}
                      />
                    </td>
                    <td
                      className="fw-medium text-dark cursor-pointer"
                      onClick={() => handleViewInvoice(item.invoice_id)}
                    >
                      {item.invoice_number.startsWith('#') ? item.invoice_number : `#${item.invoice_number}`}
                    </td>
                    <td>
                      <div
                        className="d-flex align-items-center gap-2 cursor-pointer"
                        onClick={() => handleViewInvoice(item.invoice_id)}
                      >
                        <div
                          className="rounded-circle bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: '26px', height: '26px' }}
                        >
                          <BsImage style={{ fontSize: '12px' }} className="text-dark opacity-75" />
                        </div>
                        <span className="fw-medium text-dark">{item.customer_name || 'Customer'}</span>
                      </div>
                    </td>
                    <td className="text-muted">{formatDate(item.order_date)}</td>
                    <td className="fw-bold text-dark">${item.total_amount}</td>
                    <td className="text-muted">{item.payment_method || 'Mastercard'}</td>
                    <td>{renderStatusBadge(item.payment_status)}</td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-1">
                        <button
                          className="action-btn"
                          type="button"
                          title="View Details"
                          onClick={() => handleViewInvoice(item.invoice_id)}
                        >
                          <BsEye />
                        </button>
                        <button
                          className="action-btn text-warning"
                          type="button"
                          title="Edit"
                          onClick={() => handleViewInvoice(item.invoice_id)}
                        >
                          <BsPencil />
                        </button>
                        <button
                          className="action-btn delete-btn text-danger"
                          type="button"
                          title="Delete"
                          onClick={() => handleDeleteRow(item.invoice_id)}
                        >
                          <BsTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            style={{ fontSize: '0.78rem' }}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(1)}
          >
            Previous
          </button>
          <button
            className={`btn btn-sm ${currentPage === 1 ? 'btn-add-product' : 'btn-light border'} px-2 py-1`}
            style={{ fontSize: '0.78rem' }}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            style={{ fontSize: '0.78rem' }}
            disabled={currentPage === 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default InvoiceList;