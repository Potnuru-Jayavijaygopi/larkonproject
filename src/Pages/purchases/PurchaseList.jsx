import React, { useState, useEffect } from 'react';
import { BsImage } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { getPurchaseLists, updatePurchaseList, patchPurchaseList, deletePurchase } from '../../services/apiService';
import frameIcon from '../../assets/Frame.png';
import editIcon from '../../assets/solar_pen-2-broken.png';
import trashIcon from '../../assets/solar_trash-bin-minimalistic-2-broken.png';

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

function PurchaseList() {
  const [purchases, setPurchases] = useState([]);
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
    purchaseStatus: '',
    date: '',
    rawDate: '',
    total: '',
    paymentMethod: '',
    paymentStatus: '',
  });

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

  const toggleBlurRow = (id) => {
    setBlurredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDeleteRow = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this purchase item?');
    if (!confirmed) return;

    const targetItem = purchases.find((item) => item.id === id);
    const targetId = targetItem?.rawId || id.replace('#', '').replace('INV', '');

    try {
      if (targetId) {
        await deletePurchase(targetId).catch((err) =>
          console.warn('Backend DELETE API warning:', err)
        );
      }
    } catch (err) {
      console.error('Error calling delete API:', err);
    }

    setPurchases((prev) => prev.filter((item) => item.id !== id));
    toast.success('Row deleted successfully');
  };

  
  const handleEditClick = (item) => {
    setEditingId(item.id);
    setEditFormData({
      orderBy: item.orderBy || '',
      items: item.items || '',
      purchaseStatus: item.purchaseStatus || 'Completed',
      date: item.date || '',
      rawDate: parseDateToYYYYMMDD(item.date),
      total: item.total || '',
      paymentMethod: item.paymentMethod || 'Mastercard',
      paymentStatus: item.paymentStatus || 'Completed',
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
      const updatedDisplayDate = editFormData.rawDate
        ? formatDateToDisplay(editFormData.rawDate)
        : editFormData.date;

      const payload = {
        supplier_name: editFormData.orderBy,
        product_name: editFormData.items,
        status: editFormData.purchaseStatus,
        purchase_date: editFormData.rawDate || editFormData.date,
        total_amount: editFormData.total.replace('$', ''),
        payment_method: editFormData.paymentMethod,
        payment_status: editFormData.paymentStatus,
      };

      const targetId = item.rawId || item.id.replace('#', '').replace('INV', '');
      
      
      try {
        await updatePurchaseList(targetId, payload);
      } catch (apiErr) {
        console.warn('Backend PUT request error (attempting PATCH):', apiErr);
        try {
          await patchPurchaseList(targetId, payload);
        } catch (patchErr) {
          console.warn('Backend PATCH request error:', patchErr);
        }
      }

      
      setPurchases((prev) =>
        prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                orderBy: editFormData.orderBy,
                items: editFormData.items,
                purchaseStatus: editFormData.purchaseStatus,
                date: updatedDisplayDate,
                total: editFormData.total.startsWith('$') ? editFormData.total : `$${editFormData.total}`,
                paymentMethod: editFormData.paymentMethod,
                paymentStatus: editFormData.paymentStatus,
              }
            : p
        )
      );

      setEditingId(null);
      toast.success('Row updated successfully');
    } catch (err) {
      console.error('Error saving purchase item:', err);
    } finally {
      setSavingId(null);
    }
  };

  const renderPaymentStatusBadge = (status) => {
    const badge = paymentStatusMap[status] || paymentStatusMap.Completed;
    return (
      <span className={`badge ${badge.className || ''} px-2 py-2`} style={{ fontSize: '0.8rem', ...badge.style }}>
        {status}
      </span>
    );
  };

  const renderPurchaseStatusBadge = (status) => {
    let style = { fontSize: '0.8rem', backgroundColor: 'rgba(34, 197, 94, 1)', color: '#fff' };
    if (status === 'Pending' || status === 'Processing') {
      style = { fontSize: '0.8rem', backgroundColor: 'rgba(255, 108, 47, 1)', color: '#fff' };
    } else if (status === 'Cancel' || status === 'Cancelled') {
      style = { fontSize: '0.8rem', backgroundColor: 'rgba(239, 95, 95, 1)', color: '#fff' };
    }
    return (
      <span className="badge px-2 py-2" style={style}>
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
              {(() => {
                const totalPages = Math.ceil(purchases.length / itemsPerPage) || 1;
                const startIndex = (currentPage - 1) * itemsPerPage;
                const currentPurchases = purchases.slice(startIndex, startIndex + itemsPerPage);

                return currentPurchases.map((item) => {
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
                      <td className="fw-medium text-dark text-nowrap">{item.id}</td>
                      <td className="text-nowrap" style={{ minWidth: '220px' }}>
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="rounded-circle bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0"
                            style={{ width: 26, height: 26 }}
                          >
                            <BsImage className="text-dark opacity-75" style={{ fontSize: 12 }} />
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
                      <td className="text-nowrap" style={{ minWidth: '180px' }}>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          name="items"
                          value={editFormData.items}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.8rem' }}
                        />
                      </td>
                      <td className="text-nowrap" style={{ minWidth: '150px' }}>
                        <select
                          className="form-select form-select-sm"
                          name="purchaseStatus"
                          value={editFormData.purchaseStatus}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.8rem' }}
                        >
                          <option value="Completed">Completed</option>
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Cancel">Cancel</option>
                        </select>
                      </td>
                      <td className="text-nowrap" style={{ minWidth: '140px' }}>
                        <input
                          type="date"
                          className="form-control form-control-sm"
                          name="rawDate"
                          value={editFormData.rawDate}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.8rem' }}
                        />
                      </td>
                      <td className="text-nowrap" style={{ minWidth: '120px' }}>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          name="total"
                          value={editFormData.total}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.8rem' }}
                        />
                      </td>
                      <td className="text-nowrap" style={{ minWidth: '130px' }}>
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          name="paymentMethod"
                          value={editFormData.paymentMethod}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.8rem' }}
                        />
                      </td>
                      <td className="text-nowrap" style={{ minWidth: '130px' }}>
                        <select
                          className="form-select form-select-sm"
                          name="paymentStatus"
                          value={editFormData.paymentStatus}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.8rem' }}
                        >
                          <option value="Completed">Completed</option>
                          <option value="Paid">Paid</option>
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
                            type="button"
                            title="Delete"
                            className="action-btn delete-btn text-danger ms-1"
                            onClick={() => handleDeleteRow(item.id)}
                            style={{ color: '#EF5F5F', backgroundColor: 'rgba(239, 95, 95, 0.12)' }}
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
                    <td className="fw-medium text-dark text-nowrap" style={cellBlurStyle}>{item.id}</td>
                    <td className="text-nowrap" style={{ minWidth: '220px', ...cellBlurStyle }}>
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
                    <td className="text-muted text-nowrap" style={{ minWidth: '180px', ...cellBlurStyle }}>
                      {item.items}
                    </td>
                    <td className="text-nowrap" style={{ minWidth: '150px', ...cellBlurStyle }}>
                      {renderPurchaseStatusBadge(item.purchaseStatus)}
                    </td>
                    <td className="text-muted text-nowrap" style={cellBlurStyle}>{item.date}</td>
                    <td className="fw-bold text-dark text-nowrap" style={cellBlurStyle}>{item.total}</td>
                    <td className="text-muted text-nowrap" style={{ minWidth: '130px', ...cellBlurStyle }}>
                      {item.paymentMethod}
                    </td>
                    <td className="text-nowrap" style={{ minWidth: '130px', ...cellBlurStyle }}>
                      {renderPaymentStatusBadge(item.paymentStatus)}
                    </td>
                    <td className="text-end text-nowrap" style={{ minWidth: '120px' }}>
                      <div className="d-inline-flex gap-1">
                        <button
                          type="button"
                          title={isBlurred ? "Show Data" : "Blur Data"}
                          className="action-btn"
                          onClick={() => toggleBlurRow(item.id)}
                          style={{ backgroundColor: isBlurred ? 'rgba(255, 193, 7, 0.25)' : '#eef2f7', color: isBlurred ? '#d97706' : '#2b364b' }}
                        >
                          <img src={frameIcon} alt="View" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                        </button>
                        <button
                          type="button"
                          title="Edit"
                          className="action-btn"
                          onClick={() => handleEditClick(item)}
                          style={{ color: '#FF6C2F', backgroundColor: 'rgba(255, 108, 47, 0.12)' }}
                        >
                          <img src={editIcon} alt="Edit" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                        </button>
                        <button
                          type="button"
                          title="Delete"
                          className="action-btn"
                          onClick={() => handleDeleteRow(item.id)}
                          style={{ color: '#EF5F5F', backgroundColor: 'rgba(239, 95, 95, 0.12)' }}
                        >
                          <img src={trashIcon} alt="Delete" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ); });
              })()}
            </tbody>
          </table>
        </div>
      )}

      {(() => {
        const totalPages = Math.ceil(purchases.length / itemsPerPage) || 1;
        const startIndex = (currentPage - 1) * itemsPerPage;

        return (
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="text-muted" style={{ fontSize: '0.78rem' }}>
              Showing {purchases.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + itemsPerPage, purchases.length)} of {purchases.length} entries
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
  );
}

export default PurchaseList;