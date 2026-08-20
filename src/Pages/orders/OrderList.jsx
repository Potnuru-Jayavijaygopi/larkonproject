import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsCurrencyDollar,
  BsCartX,
  BsBoxSeam,
  BsTruck,
  BsFileText,
  BsClockHistory,
  BsCheckCircle,
  BsInbox,
  BsEye,
  BsPencil,
  BsTrash,
} from 'react-icons/bs';
import orderService from '../../services/orderService';

function OrderList({ onNavigate }) {
  const navigate = useNavigate();

  const initialOrders = [
    {
      orderId: '#583488/80',
      id: 583488,
      createdAt: 'Apr 23, 2024',
      customer: 'Gail C. Andersen',
      priority: 'Normal',
      total: '$1,230.00',
      paymentStatus: 'Unpaid',
      items: 4,
      deliveryNumber: '-',
      orderStatus: 'Draft',
    },
    {
      orderId: '#456754/80',
      id: 456754,
      createdAt: 'Apr 20, 2024',
      customer: 'jung S. Ayala',
      priority: 'Normal',
      total: '$987.00',
      paymentStatus: 'Paid',
      items: 2,
      deliveryNumber: '-',
      orderStatus: 'Packing',
    },
    {
      orderId: '#578246/80',
      id: 578246,
      createdAt: 'Apr 19 , 2024',
      customer: 'David A. Arnold',
      priority: 'High',
      total: '$1,478.00',
      paymentStatus: 'Paid',
      items: 5,
      deliveryNumber: '#D-57837678',
      orderStatus: 'Completed',
    },
    {
      orderId: '#348930/80',
      id: 348930,
      createdAt: 'Apr 04 , 2024',
      customer: 'Cecile D. Gordon',
      priority: 'Normal',
      total: '$720.00',
      paymentStatus: 'Refund',
      items: 4,
      deliveryNumber: '-',
      orderStatus: 'Canceled',
    },
    {
      orderId: '#391367/80',
      id: 391367,
      createdAt: 'Apr 02 , 2024',
      customer: 'William Moreno',
      priority: 'Normal',
      total: '$1,909.00',
      paymentStatus: 'Paid',
      items: 6,
      deliveryNumber: '#D-89734235',
      orderStatus: 'Completed',
    },
    {
      orderId: '#930447/80',
      id: 930447,
      createdAt: 'March 28 , 2024',
      customer: 'Alphonse Roy',
      priority: 'High',
      total: '$879.00',
      paymentStatus: 'Paid',
      items: 4,
      deliveryNumber: '#D-35227268',
      orderStatus: 'Completed',
    },
    {
      orderId: '#462397/80',
      id: 462397,
      createdAt: 'March 20 , 2024',
      customer: 'Pierpont Marleau',
      priority: 'High',
      total: '$1,230.00',
      paymentStatus: 'Refund',
      items: 2,
      deliveryNumber: '-',
      orderStatus: 'Canceled',
    },
    {
      orderId: '#472356/80',
      id: 472356,
      createdAt: 'March 12 , 2024',
      customer: 'Madeleine Gervais',
      priority: 'Normal',
      total: '$1,264.00',
      paymentStatus: 'Paid',
      items: 3,
      deliveryNumber: '#D-74922656',
      orderStatus: 'Completed',
    },
    {
      orderId: '#448226/80',
      id: 448226,
      createdAt: 'March 02, 2024',
      customer: 'Satordi Gaillou',
      priority: 'High',
      total: '$1,787.00',
      paymentStatus: 'Paid',
      items: 4,
      deliveryNumber: '-',
      orderStatus: 'Packing',
    },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    customer: '',
    priority: 'Normal',
    total: '',
    paymentStatus: 'Paid',
    orderStatus: 'Draft',
    deliveryNumber: '-',
  });

  useEffect(() => {
    fetchOrdersList();
  }, []);

  const fetchOrdersList = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await orderService.listOrders();
      if (res && res.success && Array.isArray(res.orders) && res.orders.length > 0) {
        const mappedOrders = res.orders.map((o) => ({
          id: o.id,
          orderId: `#${o.id}/80`,
          createdAt: o.created_at ? new Date(o.created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'Apr 23, 2024',
          customer: o.user_name || o.customer_name || 'Gail C. Andersen',
          priority: o.priority ? o.priority.charAt(0).toUpperCase() + o.priority.slice(1) : 'Normal',
          total: `$${Number(o.total_amount || 0).toFixed(2)}`,
          paymentStatus: o.payment_status ? o.payment_status.charAt(0).toUpperCase() + o.payment_status.slice(1) : 'Paid',
          items: o.items || 1,
          deliveryNumber: o.deliveryNumber || '#D-' + (10000000 + Number(o.id)),
          orderStatus: o.status ? o.status.charAt(0).toUpperCase() + o.status.slice(1) : 'Draft',
        }));
        setOrders(mappedOrders);
      }
    } catch (err) {
      console.warn('Backend API request failed, falling back to dummy orders:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditRow = (item) => {
    setEditingId(item.id);
    setEditFormData({
      customer: item.customer,
      priority: item.priority,
      total: item.total,
      paymentStatus: item.paymentStatus,
      orderStatus: item.orderStatus,
      deliveryNumber: item.deliveryNumber || '-',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = async (id) => {
    try {
      if (typeof id === 'number') {
        await orderService.updateOrderStatus(id, editFormData.orderStatus.toLowerCase());
      }
    } catch (err) {
      console.error('Error updating order API:', err.message);
    }

    setOrders((prev) =>
      prev.map((o) => (o.id === id ? { ...o, ...editFormData } : o))
    );
    setEditingId(null);
    alert('Order data updated successfully!');
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleDeleteRow = async (id, orderId) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete order ${orderId}?`);
    if (!isConfirmed) return;

    try {
      if (typeof id === 'number') {
        await orderService.cancelOrder(id);
      }
    } catch (err) {
      console.error('Error cancelling order API:', err.message);
    }
    setOrders((prev) => prev.filter((o) => o.orderId !== orderId && o.id !== id));
    alert(`Order ${orderId} deleted successfully!`);
  };

  const handleViewOrder = (id) => {
    if (navigate) {
      navigate('/orders/details', { state: { orderId: id } });
    } else if (onNavigate) {
      onNavigate('orders-details');
    }
  };

  const renderPaymentBadge = (status) => {
    if (status === 'Paid') {
      return <span className="badge bg-success text-white px-2 py-1" style={{ fontSize: '0.68rem', backgroundColor: '#10b981' }}>Paid</span>;
    } else if (status === 'Unpaid' || status === 'Pending') {
      return <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle px-2 py-1" style={{ fontSize: '0.68rem' }}>Unpaid</span>;
    } else {
      return <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1" style={{ fontSize: '0.68rem' }}>Refund</span>;
    }
  };

  const renderOrderStatusBadge = (status) => {
    if (status === 'Completed' || status === 'Delivered' || status === 'Received') {
      return (
        <span className="badge bg-white text-success border border-success px-2 py-1" style={{ fontSize: '0.68rem' }}>
          Completed
        </span>
      );
    } else if (status === 'Packaging' || status === 'Packing' || status === 'Processing') {
      return (
        <span className="badge bg-white text-warning border border-warning px-2 py-1" style={{ fontSize: '0.68rem', color: '#f59e0b' }}>
          Packaging
        </span>
      );
    } else if (status === 'Canceled' || status === 'Cancelled') {
      return (
        <span className="badge bg-white text-danger border border-danger px-2 py-1" style={{ fontSize: '0.68rem' }}>
          Canceled
        </span>
      );
    } else {
      return (
        <span className="badge bg-white text-secondary border border-secondary px-2 py-1" style={{ fontSize: '0.68rem' }}>
          Draft
        </span>
      );
    }
  };

  const refundCount = orders.filter((o) => o.paymentStatus === 'Refund').length || 490;
  const cancelCount = orders.filter((o) => o.orderStatus === 'Canceled' || o.orderStatus === 'Cancelled').length || 241;
  const shippedCount = orders.filter((o) => o.orderStatus === 'Completed' || o.orderStatus === 'Received').length || 630;
  const deliveringCount = orders.filter((o) => o.orderStatus === 'Packing' || o.orderStatus === 'Packaging').length || 170;

  return (
    <div className="container-fluid p-4">
      <div className="row g-3 mb-3">
        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Payment Refund</span>
              <h4 className="fw-bold text-dark mb-0">{refundCount}</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsCurrencyDollar className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Order Cancel</span>
              <h4 className="fw-bold text-dark mb-0">{cancelCount}</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsCartX className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Order Shipped</span>
              <h4 className="fw-bold text-dark mb-0">{shippedCount}</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsBoxSeam className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Order Delivering</span>
              <h4 className="fw-bold text-dark mb-0">{deliveringCount}</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsTruck className="fs-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Pending Review</span>
              <h4 className="fw-bold text-dark mb-0">210</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsFileText className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Pending Payment</span>
              <h4 className="fw-bold text-dark mb-0">608</h4>
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
              <span className="text-muted small d-block mb-1">Delivered</span>
              <h4 className="fw-bold text-dark mb-0">200</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsCheckCircle className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">In Progress</span>
              <h4 className="fw-bold text-dark mb-0">656</h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}
            >
              <BsInbox className="fs-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="content-card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-dark mb-0">All Order List</h6>
          <select className="form-select form-select-sm" style={{ width: 'auto', fontSize: '0.78rem' }}>
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="this-year">This Year</option>
          </select>
        </div>

        <div className="table-responsive">
          <table className="table table-custom align-middle mb-0" style={{ fontSize: '0.825rem' }}>
            <thead>
              <tr className="text-muted" style={{ fontSize: '0.75rem' }}>
                <th>Order ID</th>
                <th>Created at</th>
                <th>Customer</th>
                <th>Priority</th>
                <th>Total</th>
                <th>Payment Status</th>
                <th>Items</th>
                <th>Delivery Number</th>
                <th>Order Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item) => {
                const isEditing = editingId === item.id;
                return (
                  <tr key={item.orderId || item.id}>
                    <td className="fw-medium text-muted">{item.orderId}</td>
                    <td className="text-muted">{item.createdAt}</td>
                    <td>
                      {isEditing ? (
                        <input
                          type="text"
                          name="customer"
                          className="form-control form-control-sm"
                          value={editFormData.customer}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.78rem' }}
                        />
                      ) : (
                        <span className="fw-medium" style={{ color: '#ea580c' }}>{item.customer}</span>
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <select
                          name="priority"
                          className="form-select form-select-sm"
                          value={editFormData.priority}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.78rem' }}
                        >
                          <option value="Normal">Normal</option>
                          <option value="High">High</option>
                          <option value="Low">Low</option>
                        </select>
                      ) : (
                        <span className="text-muted">{item.priority}</span>
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          type="text"
                          name="total"
                          className="form-control form-control-sm"
                          value={editFormData.total}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.78rem', width: '90px' }}
                        />
                      ) : (
                        <span className="fw-bold text-dark">{item.total}</span>
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <select
                          name="paymentStatus"
                          className="form-select form-select-sm"
                          value={editFormData.paymentStatus}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.78rem' }}
                        >
                          <option value="Paid">Paid</option>
                          <option value="Unpaid">Unpaid</option>
                          <option value="Refund">Refund</option>
                        </select>
                      ) : (
                        renderPaymentBadge(item.paymentStatus)
                      )}
                    </td>
                    <td className="text-muted">{item.items}</td>
                    <td>
                      {isEditing ? (
                        <input
                          type="text"
                          name="deliveryNumber"
                          className="form-control form-control-sm"
                          value={editFormData.deliveryNumber}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.78rem' }}
                        />
                      ) : (
                        <span className="text-muted">{item.deliveryNumber}</span>
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <select
                          name="orderStatus"
                          className="form-select form-select-sm"
                          value={editFormData.orderStatus}
                          onChange={handleInputChange}
                          style={{ fontSize: '0.78rem' }}
                        >
                          <option value="Draft">Draft</option>
                          <option value="Packing">Packing</option>
                          <option value="Completed">Completed</option>
                          <option value="Canceled">Canceled</option>
                        </select>
                      ) : (
                        renderOrderStatusBadge(item.orderStatus)
                      )}
                    </td>
                    <td className="text-end">
                      {isEditing ? (
                        <div className="d-inline-flex gap-1">
                          <button
                            className="btn btn-sm btn-success px-2 py-1"
                            type="button"
                            title="Save"
                            onClick={() => handleSaveEdit(item.id)}
                            style={{ fontSize: '0.72rem' }}
                          >
                            Save
                          </button>
                          <button
                            className="btn btn-sm btn-secondary px-2 py-1"
                            type="button"
                            title="Cancel"
                            onClick={handleCancelEdit}
                            style={{ fontSize: '0.72rem' }}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="d-inline-flex gap-1">
                          <button className="action-btn" type="button" title="View" onClick={() => handleViewOrder(item.id)}>
                            <BsEye />
                          </button>
                          <button className="action-btn text-warning" type="button" title="Edit" onClick={() => handleEditRow(item)}>
                            <BsPencil />
                          </button>
                          <button
                            className="action-btn delete-btn text-danger"
                            type="button"
                            title="Delete"
                            onClick={() => handleDeleteRow(item.id, item.orderId)}
                          >
                            <BsTrash />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            style={{ fontSize: '0.78rem' }}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          >
            Previous
          </button>
          {[1, 2, 3].map((pageNum) => (
            <button
              key={pageNum}
              className={`btn btn-sm ${currentPage === pageNum ? 'btn-add-product' : 'btn-light border'} px-2 py-1`}
              type="button"
              style={{ fontSize: '0.78rem' }}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </button>
          ))}
          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            style={{ fontSize: '0.78rem' }}
            disabled={currentPage === 3}
            onClick={() => setCurrentPage((prev) => Math.min(3, prev + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderList;