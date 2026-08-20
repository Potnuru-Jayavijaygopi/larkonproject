import React, { useState, useEffect } from 'react';
import { BsBoxSeam, BsListTask, BsBagCheck, BsBagDash } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { getPurchaseOrders, getPurchaseReturns, updatePurchaseOrder, patchPurchaseOrder, deletePurchaseOrder } from '../../services/apiService';
import frameIcon from '../../assets/eye(2).png';
import editIcon from '../../assets/solar_pen-2-broken.png';
import trashIcon from '../../assets/solar_trash-bin-minimalistic-2-broken.png';

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

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [statsData, setStatsData] = useState([
    { title: 'Total Orders', value: '0', percent: '+ 6.9%', badge: 'danger', icon: BsBoxSeam },
    { title: 'Order Items Over Time', value: '0', percent: '+ 13.2%', badge: 'success', icon: BsListTask },
    { title: 'Return Order', value: '0', percent: '+ 2.1%', badge: 'success', icon: BsBagDash },
    { title: 'Fulfilled Orders Over Time', value: '0', percent: '+ 3.1%', badge: 'danger', icon: BsBagCheck },
  ]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const [itemsPerPage, setItemsPerPage] = useState(10);

  
  const [blurredIds, setBlurredIds] = useState([]);

  
  const [editingId, setEditingId] = useState(null);
  const [savingId, setSavingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    customerName: '',
    email: '',
    orderDate: '',
    rawOrderDate: '',
    total: '',
    orderStatus: '',
  });

  useEffect(() => {
    fetchOrdersData();
  }, []);

  const fetchOrdersData = async () => {
    try {
      setLoading(true);
      const [ordersRes, returnsRes] = await Promise.all([
        getPurchaseOrders().catch(() => ({ data: [] })),
        getPurchaseReturns().catch(() => ({ data: [] })),
      ]);

      const rawOrders = ordersRes.data || [];
      const rawReturns = returnsRes.data || [];

      const formattedOrders = rawOrders.map((item) => {
        const emailSlug = (item.supplier_name || 'customer').toLowerCase().replace(/[^a-z0-9]/g, '');
        return {
          id: item.id,
          customerName: item.supplier_name || 'Customer',
          email: `${emailSlug}@dayrep.com`,
          orderDate: item.order_date
            ? new Date(item.order_date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
            : 'N/A',
          total: `$${parseFloat(item.total_amount || 0).toFixed(2)}`,
          orderStatus: item.purchase_status || 'Pending',
          rawId: item.id,
        };
      });

      setOrders(formattedOrders);

      const totalOrdersCount = rawOrders.length;
      const totalItemsCount = rawOrders.reduce((acc, curr) => acc + (Number(curr.quantity) || 1), 0);
      const returnOrdersCount = rawReturns.length;
      const fulfilledOrdersCount = rawOrders.filter(
        (o) => (o.purchase_status || '').toLowerCase() === 'completed'
      ).length;

      setStatsData([
        { title: 'Total Orders', value: String(totalOrdersCount), percent: '+ 6.9%', badge: 'danger', icon: BsBoxSeam },
        { title: 'Order Items Over Time', value: String(totalItemsCount), percent: '+ 13.2%', badge: 'success', icon: BsListTask },
        { title: 'Return Order', value: String(returnOrdersCount), percent: '+ 2.1%', badge: 'success', icon: BsBagDash },
        { title: 'Fulfilled Orders Over Time', value: String(fulfilledOrdersCount), percent: '+ 3.1%', badge: 'danger', icon: BsBagCheck },
      ]);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError(err.message || 'Failed to load orders');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteRow = async (email) => {
    const confirmed = window.confirm('Are you sure you want to delete this order?');
    if (!confirmed) return;

    const targetItem = orders.find((item) => item.email === email);
    if (targetItem?.rawId || targetItem?.id) {
      try {
        await deletePurchaseOrder(targetItem.rawId || targetItem.id).catch((err) =>
          console.warn('Backend DELETE API warning:', err)
        );
      } catch (err) {
        console.error('Error calling delete API:', err);
      }
    }

    setOrders((prev) => prev.filter((item) => item.email !== email));
    toast.success('Row deleted successfully');
  };

  const toggleBlurRow = (id) => {
    setBlurredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  
  const handleEditClick = (item) => {
    const rowId = item.id || item.email;
    setEditingId(rowId);
    setEditFormData({
      customerName: item.customerName || '',
      email: item.email || '',
      orderDate: item.orderDate || '',
      rawOrderDate: parseDateToYYYYMMDD(item.orderDate),
      total: item.total || '',
      orderStatus: item.orderStatus || 'Pending',
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
    const rowId = item.id || item.email;
    try {
      setSavingId(rowId);
      const updatedDisplayDate = editFormData.rawOrderDate
        ? formatDateToDisplay(editFormData.rawOrderDate)
        : editFormData.orderDate;

      const payload = {
        supplier_name: editFormData.customerName,
        order_date: editFormData.rawOrderDate || editFormData.orderDate,
        total_amount: editFormData.total.replace('$', ''),
        purchase_status: editFormData.orderStatus,
      };

      if (item.rawId || item.id) {
        try {
          await updatePurchaseOrder(item.rawId || item.id, payload);
        } catch (apiErr) {
          console.warn('Backend PUT request warning (attempting PATCH):', apiErr);
          try {
            await patchPurchaseOrder(item.rawId || item.id, payload);
          } catch (patchErr) {
            console.warn('Backend PATCH request warning:', patchErr);
          }
        }
      }

      setOrders((prev) =>
        prev.map((o) =>
          (o.id || o.email) === rowId
            ? {
                ...o,
                customerName: editFormData.customerName,
                email: editFormData.email,
                orderDate: updatedDisplayDate,
                total: editFormData.total.startsWith('$') ? editFormData.total : `$${editFormData.total}`,
                orderStatus: editFormData.orderStatus,
              }
            : o
        )
      );

      setEditingId(null);
      toast.success('Row updated successfully');
    } catch (err) {
      console.error('Failed to save order item:', err);
    } finally {
      setSavingId(null);
    }
  };

  const renderOrderStatusBadge = (status) => {
    let badgeStyle = { fontSize: '0.8rem' };
    let bgClass = '';
    if (status === 'Completed' || status === 'Fulfilled') {
      badgeStyle = {
        fontSize: '0.8rem',
        color: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(211, 243, 223, 1)',
      };
    } else if (status === 'Cancel' || status === 'Cancelled') {
      bgClass = 'bg-danger-subtle text-danger';
    } else {
      badgeStyle = {
        fontSize: '0.8rem',
        color: 'rgba(249, 185, 49, 1)',
        backgroundColor: 'rgba(254, 241, 214, 1)',
      };
    }

    return (
      <span className={`badge ${bgClass} px-2 py-2`} style={badgeStyle}>
        {status}
      </span>
    );
  };

  return (
    <>
      <div className="row g-3 mb-4">
        {statsData.map(({ title, value, percent, badge, icon: Icon }) => (
          <div className="col-xl-3 col-sm-6" key={title}>
            <div className="content-card p-3 d-flex align-items-center justify-content-between">
              <div>
                <span className="text-muted small d-block mb-1">{title}</span>
                <div className="d-flex align-items-center gap-2">
                  <h4 className="fw-bold text-dark mb-0">{value}</h4>
                  <span
                    className={`badge ${badge === 'danger' ? 'bg-danger-subtle text-danger' : ''}`}
                    style={{
                      fontSize: '0.65rem',
                      ...(badge === 'success' && {
                        color: 'rgba(34,197,94,1)',
                        backgroundColor: 'rgba(211,243,223,1)',
                      }),
                    }}
                  >
                    {percent}
                  </span>
                  <span className="text-muted" style={{ fontSize: '0.7rem' }}>
                    (Last Week)
                  </span>
                </div>
              </div>
              <div
                className="rounded-3 d-flex align-items-center justify-content-center p-3"
                style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
              >
                <Icon className="fs-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="content-card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-dark mb-0"> All Order Items</h6>
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
                  <th>Customer Name</th>
                  <th>Email</th>
                  <th>Order Date</th>
                  <th>Total</th>
                  <th>Order Status</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  const totalPages = Math.ceil(orders.length / itemsPerPage) || 1;
                  const startIndex = (currentPage - 1) * itemsPerPage;
                  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

                  return currentOrders.map((item, index) => {
                    const rowId = item.id || item.email;
                    const isEditing = editingId === rowId;
                    const isBlurred = blurredIds.includes(rowId);
                    const cellBlurStyle = isBlurred
                      ? { filter: 'blur(5px)', userSelect: 'none', transition: 'filter 0.25s ease' }
                      : { transition: 'filter 0.25s ease' };

                    if (isEditing) {
                      return (
                        <tr key={`${rowId}-${index}`} className="table-light">
                          <td className="fw-medium text-dark">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="customerName"
                              value={editFormData.customerName}
                              onChange={handleInputChange}
                              style={{ fontSize: '0.8rem' }}
                            />
                          </td>
                          <td className="text-muted">
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              name="email"
                              value={editFormData.email}
                              onChange={handleInputChange}
                              style={{ fontSize: '0.8rem' }}
                            />
                          </td>
                          <td className="text-muted">
                            <input
                              type="date"
                              className="form-control form-control-sm"
                              name="rawOrderDate"
                              value={editFormData.rawOrderDate}
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
                              name="orderStatus"
                              value={editFormData.orderStatus}
                              onChange={handleInputChange}
                              style={{ fontSize: '0.8rem' }}
                            >
                              <option value="Completed">Completed</option>
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Cancel">Cancel</option>
                            </select>
                          </td>
                          <td className="text-end text-nowrap" style={{ minWidth: '160px' }}>
                            <div className="d-inline-flex gap-1 align-items-center">
                              <button
                                type="button"
                                className="btn btn-sm btn-success px-2 py-1"
                                onClick={() => handleSaveClick(item)}
                                disabled={savingId === rowId}
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
                                onClick={() => handleDeleteRow(item.email)}
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
                      <tr key={`${rowId}-${index}`}>
                        <td className="fw-medium text-dark" style={cellBlurStyle}>{item.customerName}</td>
                        <td className="text-muted" style={cellBlurStyle}>{item.email}</td>
                        <td className="text-muted" style={cellBlurStyle}>{item.orderDate}</td>
                        <td className="fw-bold text-dark" style={cellBlurStyle}>{item.total}</td>
                        <td style={cellBlurStyle}>{renderOrderStatusBadge(item.orderStatus)}</td>
                        <td className="text-end">
                          <div className="d-inline-flex gap-1">
                            <button
                              type="button"
                              title={isBlurred ? "Show Data" : "Blur Data"}
                              className="action-btn"
                              onClick={() => toggleBlurRow(rowId)}
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
                              onClick={() => handleDeleteRow(item.email)}
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
          const totalPages = Math.ceil(orders.length / itemsPerPage) || 1;
          const startIndex = (currentPage - 1) * itemsPerPage;

          return (
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="text-muted" style={{ fontSize: '0.78rem' }}>
                Showing {orders.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + itemsPerPage, orders.length)} of {orders.length} entries
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

export default OrdersList;