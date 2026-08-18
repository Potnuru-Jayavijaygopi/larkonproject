import React, { useState, useEffect } from 'react';
import {
  BsBagCheck,
  BsCheck2Circle,
  BsEye,
  BsImage,
  BsPencil,
  BsPerson,
  BsTrash,
  BsXCircle,
} from 'react-icons/bs';
import { getPurchaseReturns } from '../../services/apiService';

const badgeTypeMap = {
  Completed: 'success',
  Approved: 'success',
  Pending: 'warning',
};

function ReturnOrders() {
  const [returns, setReturns] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [summaryCards, setSummaryCards] = useState([
    {
      title: 'Return Order',
      value: '0',
      unit: 'Items',
      badge: '+ 6.9%',
      badgeType: 'danger',
      icon: BsCheck2Circle,
    },
    {
      title: 'Pending Return Order',
      value: '0',
      unit: 'Items',
      icon: BsXCircle,
    },
    {
      title: 'Total Customer',
      value: '0',
      badge: '+ 8.9%',
      badgeColor: 'rgba(34, 197, 94, 1)',
      badgeBg: 'rgba(211, 243, 223, 1)',
      icon: BsPerson,
    },
    {
      title: 'Return Order Received',
      value: '0',
      unit: 'Items',
      badge: '+ 9.1%',
      badgeType: 'danger',
      icon: BsBagCheck,
    },
  ]);

  useEffect(() => {
    fetchReturnsData();
  }, []);

  const fetchReturnsData = async () => {
    try {
      setLoading(true);
      const res = await getPurchaseReturns();
      const rawReturns = res.data || [];

      const formatted = rawReturns.map((item) => ({
        id: item.return_id || `#INV${item.id}`,
        orderBy: item.supplier_name || 'Supplier',
        items: item.product_name || 'Item',
        returnDate: item.return_date
          ? new Date(item.return_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
          : 'N/A',
        total: `$${parseFloat(item.refund_amount || 0).toFixed(2)}`,
        returnStatus: item.return_status === 'Approved' ? 'Completed' : (item.return_status || 'Pending'),
        rawId: item.id,
      }));

      setReturns(formatted);

      const totalCount = rawReturns.length;
      const pendingCount = rawReturns.filter((r) => (r.return_status || '').toLowerCase() === 'pending').length;
      const uniqueCustomers = new Set(rawReturns.map((r) => r.supplier_name)).size;
      const receivedCount = rawReturns.filter(
        (r) => (r.return_status || '').toLowerCase() === 'approved' || (r.return_status || '').toLowerCase() === 'completed'
      ).length;

      setSummaryCards([
        {
          title: 'Return Order',
          value: String(totalCount),
          unit: 'Items',
          badge: '+ 6.9%',
          badgeType: 'danger',
          icon: BsCheck2Circle,
        },
        {
          title: 'Pending Return Order',
          value: String(pendingCount),
          unit: 'Items',
          icon: BsXCircle,
        },
        {
          title: 'Total Customer',
          value: String(uniqueCustomers > 0 ? uniqueCustomers : '5,634'),
          badge: '+ 8.9%',
          badgeColor: 'rgba(34, 197, 94, 1)',
          badgeBg: 'rgba(211, 243, 223, 1)',
          icon: BsPerson,
        },
        {
          title: 'Return Order Received',
          value: String(receivedCount),
          unit: 'Items',
          badge: '+ 9.1%',
          badgeType: 'danger',
          icon: BsBagCheck,
        },
      ]);
    } catch (err) {
      console.error('Error fetching return orders:', err);
      setError(err.message || 'Failed to load return orders');
    } finally {
      setLoading(false);
    }
  };

  const handleSelectAll = (e) => {
    setSelectedIds(e.target.checked ? returns.map((item) => item.id) : []);
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleDeleteRow = (id) => {
    setReturns((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="row g-3 mb-4">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div className="col-xl-3 col-sm-6" key={index}>
              <div className="content-card p-3 d-flex align-items-center justify-content-between">
                <div>
                  <div className="d-flex align-items-center gap-1 mb-1">
                    <span className="text-muted small">{card.title}</span>

                    {card.badge && (
                      <span
                        className={`badge bg-${card.badgeType || 'success'}-subtle text-${card.badgeType || 'success'} ms-1`}
                        style={{ fontSize: '0.65rem', color: card.badgeColor, backgroundColor: card.badgeBg }}
                      >
                        {card.badge}
                      </span>
                    )}
                  </div>

                  <h4 className="fw-bold text-dark mb-0">
                    {card.value}

                    {card.unit && (
                      <span className="text-muted ms-1" style={{ fontSize: '0.75rem' }}>
                        {card.unit}
                      </span>
                    )}
                  </h4>
                </div>

                <div
                  className="rounded-3 d-flex align-items-center justify-content-center p-3"
                  style={{
                    backgroundColor: '#fff7ed',
                    color: '#ea580c',
                  }}
                >
                  <Icon className="fs-4" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="content-card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-dark mb-0">All Return Items</h6>
          <select name="" id="" className="form-select form-select-sm" style={{ width: 'auto', fontSize: '0.8rem' }}>
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="this-year">This Year</option>
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
            <table className="table table-custom align-middle mb-0" style={{ fontSize: '0.825rem' }}>
              <thead>
                <tr className="text-muted" style={{ fontSize: '0.75rem' }}>
                  <th style={{ width: '30px' }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedIds.length === returns.length && returns.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>ID</th>
                  <th>Order By</th>
                  <th>Items</th>
                  <th>Return Date</th>
                  <th>Total</th>
                  <th>Return Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {returns.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedIds.includes(item.id)}
                        onChange={() => handleSelectRow(item.id)}
                      />
                    </td>
                    <td className="fw-medium text-dark">{item.id}</td>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div
                          className="rounded-circle bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0"
                          style={{ width: '26px', height: '26px' }}
                        >
                          <BsImage className="text-dark opacity-75" style={{ fontSize: '12px' }} />
                        </div>
                        <span className="fw-medium text-dark">{item.orderBy}</span>
                      </div>
                    </td>
                    <td className="text-muted">{item.items}</td>
                    <td className="text-muted">{item.returnDate}</td>
                    <td className="fw-bold text-dark">{item.total}</td>
                    <td>
                      <span
                        className={`badge ${
                          item.returnStatus === 'Completed'
                            ? ''
                            : `bg-${badgeTypeMap[item.returnStatus] || 'warning'}-subtle text-${
                                badgeTypeMap[item.returnStatus] || 'warning'
                              }`
                        } px-2 py-2`}
                        style={{
                          fontSize: '0.8rem',
                          ...(item.returnStatus === 'Completed' && {
                            color: 'rgba(34,197,94,1)',
                            backgroundColor: 'rgba(211,243,223,1)',
                          }),
                        }}
                      >
                        {item.returnStatus}
                      </span>
                    </td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-1">
                        <button
                          className="action-btn"
                          type="button"
                          title="view"
                          style={{ backgroundColor: 'rgba(238, 242, 247, 1)' }}
                        >
                          <BsEye />
                        </button>
                        <button
                          className="action-btn"
                          type="button"
                          title="Edit"
                          style={{ color: 'rgba(255, 108, 47, 1)', backgroundColor: 'rgba(255, 108, 47, 0.1)' }}
                        >
                          <BsPencil />
                        </button>
                        <button
                          className="action-btn delete-btn"
                          type="button"
                          title="Delete"
                          onClick={() => handleDeleteRow(item.id)}
                          style={{ color: 'rgba(239, 95, 95, 1)', backgroundColor: 'rgba(239, 95, 95, 0.1)' }}
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
    </>
  );
}

export default ReturnOrders;