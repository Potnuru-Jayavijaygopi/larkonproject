import React, { useState, useEffect } from 'react';
import { BsEye, BsImage, BsPencil, BsTrash } from 'react-icons/bs';
import { getPurchaseLists } from '../../services/apiService';

const paymentStatusMap = {
  Completed: {
    style: {
      color: 'rgba(34,197,94,1)',
      backgroundColor: 'rgba(211,243,223,1)',
    },
  },
  Paid: {
    style: {
      color: 'rgba(34,197,94,1)',
      backgroundColor: 'rgba(211,243,223,1)',
    },
  },
  Cancel: {
    className: 'bg-danger-subtle text-danger',
  },
  Pending: {
    className: 'border',
    style: {
      color: '#FF6C2F',
      backgroundColor: 'rgba(255,108,47,0.1)',
    },
  },
};

const actionButtons = [
  { icon: <BsEye />, title: 'View', className: '', style: { backgroundColor: 'rgba(238, 242, 247, 1)' } },
  { icon: <BsPencil />, title: 'Edit', style: { color: '#FF6C2F', backgroundColor: 'rgba(255, 108, 47, 0.1)' } },
];

function PurchaseList() {
  const [purchases, setPurchases] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPurchases();
  }, []);

  const fetchPurchases = async () => {
    try {
      setLoading(true);
      const res = await getPurchaseLists();
      const rawData = res.data || [];
      const formatted = rawData.map((item) => ({
        id: item.purchase_id ? `#${item.purchase_id}` : `#INV${item.id}`,
        orderBy: item.supplier_name || 'Supplier',
        items: item.product_name || 'N/A',
        purchaseStatus: item.status || 'Items Received',
        date: item.purchase_date ? new Date(item.purchase_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'N/A',
        total: `$${parseFloat(item.total_amount || 0).toFixed(0)}`,
        paymentMethod: item.payment_method || 'Mastercard',
        paymentStatus: item.payment_status === 'Paid' ? 'Completed' : (item.payment_status || 'Completed'),
        rawId: item.id
      }));
      setPurchases(formatted);
    } catch (err) {
      console.error('Error fetching purchase list:', err);
      setError(err.message || 'Failed to load purchases');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = ({ target: { checked } }) =>
    setSelectedIds(checked ? purchases.map(({ id }) => id) : []);

  const handleSelectRow = (id) =>
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));

  const handleDeleteRow = (id) => setPurchases((prev) => prev.filter((item) => item.id !== id));

  const renderPaymentStatusBadge = (status) => {
    const badge = paymentStatusMap[status] || paymentStatusMap.Completed;
    return (
      <span className={`badge ${badge.className || ''} px-2 py-2`} style={{ fontSize: '0.8rem', ...badge.style }}>
        {status}
      </span>
    );
  };

  return (
    <div className="content-card p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold text-dark mb-0">All Purchase Items</h6>
        <select name="" id="" className="form-select form-select-sm" style={{ width: 'auto', fontSize: '0.8rem' }}>
          {['This Month', 'Last Month', 'This Year'].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger py-2 text-center" role="alert">
          {error}
        </div>
      ) : (
        <div className="table-responsive">
          <table
            className="table table-custom align-middle mb-0 text-nowrap"
            style={{ fontSize: '0.825rem', minWidth: '1200px', tableLayout: 'auto' }}
          >
            <thead>
              <tr className="text-muted" style={{ fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                <th style={{ width: '30px' }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={purchases.length > 0 && selectedIds.length === purchases.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>ID</th>
                <th>Order By</th>
                <th>Items</th>
                <th>Purchase Status</th>
                <th>Date</th>
                <th>Total</th>
                <th>Payment Method</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {purchases.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                    />
                  </td>
                  <td className="fw-medium text-dark text-nowrap">{item.id}</td>
                  <td className="text-nowrap" style={{ minWidth: '220px' }}>
                    <div className="d-flex align-items-center gap-2">
                      <div
                        className="rounded-circle bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: 26, height: 26 }}
                      >
                        <BsImage className="text-dark opacity-75" style={{ fontSize: 12 }} />
                      </div>
                      <span className="fw-medium text-dark">{item.orderBy}</span>
                    </div>
                  </td>
                  <td className="text-muted text-nowrap" style={{ minWidth: '180px' }}>
                    {item.items}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: '150px' }}>
                    <span
                      className="badge text-white px-2 py-2"
                      style={{ fontSize: '0.8rem', backgroundColor: 'rgba(34, 197, 94, 1)' }}
                    >
                      {item.purchaseStatus}
                    </span>
                  </td>
                  <td className="text-muted text-nowrap">{item.date}</td>
                  <td className="fw-bold text-dark text-nowrap">{item.total}</td>
                  <td className="text-muted text-nowrap" style={{ minWidth: '130px' }}>
                    {item.paymentMethod}
                  </td>
                  <td className="text-nowrap" style={{ minWidth: '130px' }}>
                    {renderPaymentStatusBadge(item.paymentStatus)}
                  </td>
                  <td className="text-end text-nowrap" style={{ minWidth: '120px' }}>
                    <div className="d-inline-flex gap-1">
                      {actionButtons.map((btn) => (
                        <button
                          key={btn.title}
                          type="button"
                          title={btn.title}
                          className={`action-btn ${btn.className || ''}`}
                          style={btn.style}
                        >
                          {btn.icon}
                        </button>
                      ))}
                      <button
                        type="button"
                        title="Delete"
                        className="action-btn delete-btn text-danger"
                        onClick={() => handleDeleteRow(item.id)}
                        style={{ color: '#EF5F5F', backgroundColor: 'rgba(239, 95, 95, 0.1)' }}
                      >
                        <BsTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
        <button className="btn btn-sm btn-light border text-muted px-2 py-1" type="button" style={{ fontSize: '0.78rem' }}>
          Previous
        </button>
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            className={`btn btn-sm ${currentPage === page ? 'btn-add-product' : 'btn-light border'} px-2 py-1`}
            style={{ fontSize: '0.78rem' }}
          >
            {page}
          </button>
        ))}
        <button className="btn btn-sm btn-light border text-muted px-2 py-1" type="button" style={{ fontSize: '0.78rem' }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default PurchaseList;