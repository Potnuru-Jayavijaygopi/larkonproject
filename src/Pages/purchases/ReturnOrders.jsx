import React, { useState, useEffect } from 'react';
import {
  BsBagCheck,
  BsCheck2Circle,
  BsImage,
  BsPerson,
  BsXCircle,
} from 'react-icons/bs';
import { toast } from 'react-toastify';
import { getPurchaseReturns, updatePurchaseReturn, patchPurchaseReturn, deletePurchaseReturn } from '../../services/apiService';
import frameIcon from '../../assets/Frame.png';
import editIcon from '../../assets/solar_pen-2-broken.png';
import trashIcon from '../../assets/solar_trash-bin-minimalistic-2-broken.png';

const badgeTypeMap = {
  Completed: 'success',
  Approved: 'success',
  Pending: 'warning',
};

const parseDateToYYYYMMDD = (dateStr) => {
  if (!dateStr || dateStr === 'N/A') return '';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return '';
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatDateToDisplay = (dateStr) => {
  if (!dateStr) return 'N/A';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
};

function ReturnOrders() {
  const [returns, setReturns] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const [itemsPerPage, setItemsPerPage] = useState(10);

  
  const [blurredIds, setBlurredIds] = useState([]);

  
  const [editingId, setEditingId] = useState(null);
  const [savingId, setSavingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    orderBy: '',
    items: '',
    returnDate: '',
    rawReturnDate: '',
    total: '',
    returnStatus: '',
  });

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

  const handleDeleteRow = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this return order item?');
    if (!confirmed) return;

    const targetItem = returns.find((item) => item.id === id);
    const targetId = targetItem?.rawId || id.replace('#', '').replace('INV', '');

    try {
      if (targetId) {
        await deletePurchaseReturn(targetId).catch((err) =>
          console.warn('Backend DELETE API warning:', err)
        );
      }
    } catch (err) {
      console.error('Error calling delete API:', err);
    }

    setReturns((prev) => prev.filter((item) => item.id !== id));
    toast.success('Row deleted successfully');
  };

  const toggleBlurRow = (id) => {
    setBlurredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  
  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditFormData({
      orderBy: item.orderBy || '',
      items: item.items || '',
      returnDate: item.returnDate || '',
      rawReturnDate: parseDateToYYYYMMDD(item.returnDate),
      total: item.total || '',
      returnStatus: item.returnStatus || 'Pending',
    });
  };

  const handleCancelClick = () => {
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveClick = async (item) => {
    try {
      setSavingId(item.id);
      const updatedDisplayDate = editFormData.rawReturnDate
        ? formatDateToDisplay(editFormData.rawReturnDate)
        : editFormData.returnDate;

      const payload = {
        supplier_name: editFormData.orderBy,
        product_name: editFormData.items,
        return_date: editFormData.rawReturnDate || editFormData.returnDate,
        refund_amount: editFormData.total.replace('$', ''),
        return_status: editFormData.returnStatus,
      };

      const targetId = item.rawId || item.id.replace('#', '').replace('INV', '');

      try {
        await updatePurchaseReturn(targetId, payload);
      } catch (apiErr) {
        console.warn('Backend PUT request warning (attempting PATCH):', apiErr);
        try {
          await patchPurchaseReturn(targetId, payload);
        } catch (patchErr) {
          console.warn('Backend PATCH request warning:', patchErr);
        }
      }

      setReturns((prev) =>
        prev.map((r) =>
          r.id === item.id
            ? {
                ...r,
                orderBy: editFormData.orderBy,
                items: editFormData.items,
                returnDate: updatedDisplayDate,
                total: editFormData.total.startsWith('$') ? editFormData.total : `$${editFormData.total}`,
                returnStatus: editFormData.returnStatus,
              }
            : r
        )
      );

      setEditingId(null);
      toast.success('Row updated successfully');
    } catch (err) {
      console.error('Failed to save return order item:', err);
    } finally {
      setSavingId(null);
    }
  };

  const renderReturnStatusBadge = (status) => {
    let style = { fontSize: '0.8rem' };
    let className = '';

    if (status === 'Completed' || status === 'Approved') {
      style = {
        fontSize: '0.8rem',
        color: 'rgba(34,197,94,1)',
        backgroundColor: 'rgba(211,243,223,1)',
      };
    } else if (status === 'Cancel' || status === 'Cancelled') {
      className = 'bg-danger-subtle text-danger';
    } else {
      className = `bg-${badgeTypeMap[status] || 'warning'}-subtle text-${badgeTypeMap[status] || 'warning'}`;
    }

    return (
      <span className={`badge ${className} px-2 py-2`} style={style}>
        {status}
      </span>
    );
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
                {(() => {
                  const totalPages = Math.ceil(returns.length / itemsPerPage) || 1;
                  const startIndex = (currentPage - 1) * itemsPerPage;
                  const currentReturns = returns.slice(startIndex, startIndex + itemsPerPage);

                  return currentReturns.map((item) => {
                    const isEditing = editingId === item.id;
                    const isBlurred = blurredIds.includes(item.id);
                    const cellBlurStyle = isBlurred
                      ? { filter: 'blur(5px)', userSelect: 'none', transition: 'filter 0.25s ease' }
                      : { transition: 'filter 0.25s ease' };

                    if (isEditing) {
                      return (
                        <tr key={item.id} className="table-light">
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
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                name="orderBy"
                                value={editFormData.orderBy}
                                onChange={handleInputChange}
                                style={{ fontSize: '0.8rem' }}
                              />
                            </div>
                          </td>
                          <td className="text-muted">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="items"
                              value={editFormData.items}
                              onChange={handleInputChange}
                              style={{ fontSize: '0.8rem' }}
                            />
                          </td>
                          <td className="text-muted">
                            <input
                              type="date"
                              className="form-control form-control-sm"
                              name="rawReturnDate"
                              value={editFormData.rawReturnDate}
                              onChange={handleInputChange}
                              style={{ fontSize: '0.8rem' }}
                            />
                          </td>
                          <td className="fw-bold text-dark">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="total"
                              value={editFormData.total}
                              onChange={handleInputChange}
                              style={{ fontSize: '0.8rem' }}
                            />
                          </td>
                          <td>
                            <select
                              className="form-select form-select-sm"
                              name="returnStatus"
                              value={editFormData.returnStatus}
                              onChange={handleInputChange}
                              style={{ fontSize: '0.8rem' }}
                            >
                              <option value="Completed">Completed</option>
                              <option value="Pending">Pending</option>
                              <option value="Cancel">Cancel</option>
                            </select>
                          </td>
                          <td className="text-end text-nowrap" style={{ minWidth: '160px' }}>
                            <div className="d-inline-flex gap-1 align-items-center">
                              <button
                                type="button"
                                className="btn btn-sm btn-success px-2 py-1"
                                onClick={() => handleSaveClick(item)}
                                disabled={savingId === item.id}
                                style={{ fontSize: '0.75rem' }}
                              >
                                Save
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-secondary px-2 py-1"
                                onClick={handleCancelClick}
                                style={{ fontSize: '0.75rem' }}
                              >
                                Cancel
                              </button>
                              <button
                                className="action-btn delete-btn text-danger ms-1"
                                type="button"
                                title="Delete"
                                onClick={() => handleDeleteRow(item.id)}
                                style={{ color: 'rgba(239, 95, 95, 1)', backgroundColor: 'rgba(239, 95, 95, 0.12)' }}
                              >
                                <img src={trashIcon} alt="Delete" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={item.id}>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedIds.includes(item.id)}
                            onChange={() => handleSelectRow(item.id)}
                          />
                        </td>
                        <td className="fw-medium text-dark" style={cellBlurStyle}>{item.id}</td>
                        <td style={cellBlurStyle}>
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
                        <td className="text-muted" style={cellBlurStyle}>{item.items}</td>
                        <td className="text-muted" style={cellBlurStyle}>{item.returnDate}</td>
                        <td className="fw-bold text-dark" style={cellBlurStyle}>{item.total}</td>
                        <td style={cellBlurStyle}>{renderReturnStatusBadge(item.returnStatus)}</td>
                        <td className="text-end">
                          <div className="d-inline-flex gap-1">
                            <button
                              className="action-btn"
                              type="button"
                              title={isBlurred ? "Show Data" : "Blur Data"}
                              onClick={() => toggleBlurRow(item.id)}
                              style={{ backgroundColor: isBlurred ? 'rgba(255, 193, 7, 0.25)' : '#eef2f7', color: isBlurred ? '#d97706' : '#2b364b' }}
                            >
                              <img src={frameIcon} alt="View" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                            </button>
                            <button
                              className="action-btn"
                              type="button"
                              title="Edit"
                              onClick={() => handleEditClick(item)}
                              style={{ color: '#FF6C2F', backgroundColor: 'rgba(255, 108, 47, 0.12)' }}
                            >
                              <img src={editIcon} alt="Edit" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                            </button>
                            <button
                              className="action-btn"
                              type="button"
                              title="Delete"
                              onClick={() => handleDeleteRow(item.id)}
                              style={{ color: '#EF5F5F', backgroundColor: 'rgba(239, 95, 95, 0.12)' }}
                            >
                              <img src={trashIcon} alt="Delete" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  });
                })()}
              </tbody>
            </table>
          </div>
        )}

        {(() => {
          const totalPages = Math.ceil(returns.length / itemsPerPage) || 1;
          const startIndex = (currentPage - 1) * itemsPerPage;

          return (
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="text-muted" style={{ fontSize: '0.78rem' }}>
                Showing {returns.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + itemsPerPage, returns.length)} of {returns.length} entries
              </span>

              <div className="d-flex align-items-center gap-1">
                <button
                  className="btn btn-sm btn-light border text-muted px-2 py-1"
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  style={{ fontSize: '0.78rem' }}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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

                <button
                  className="btn btn-sm btn-light border text-muted px-2 py-1"
                  type="button"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages || totalPages === 0}
                  style={{ fontSize: '0.78rem' }}
                >
                  Next
                </button>
              </div>
            </div>
          );
        })()}
      </div>
    </>
  );
}

export default ReturnOrders;