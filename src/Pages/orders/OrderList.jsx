import React, { useState } from 'react';
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

function OrderList({ onNavigate }) {
  const initialOrders = [
    {
      orderId: '#583488/80',
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

  const handleDeleteRow = (id) => {
    setOrders(orders.filter((o) => o.orderId !== id));
  };

  const renderPaymentBadge = (status) => {
    if (status === 'Paid') {
      return <span className="badge bg-success text-white px-2 py-1" style={{ fontSize: '0.68rem', backgroundColor: '#10b981' }}>Paid</span>;
    } else if (status === 'Unpaid') {
      return <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle px-2 py-1" style={{ fontSize: '0.68rem' }}>Unpaid</span>;
    } else {
      return <span className="badge bg-primary-subtle text-primary border border-primary-subtle px-2 py-1" style={{ fontSize: '0.68rem' }}>Refund</span>;
    }
  };

  const renderOrderStatusBadge = (status) => {
    if (status === 'Completed') {
      return (
        <span className="badge bg-white text-success border border-success px-2 py-1" style={{ fontSize: '0.68rem' }}>
          Completed
        </span>
      );
    } else if (status === 'Packaging' || status === 'Packing') {
      return (
        <span className="badge bg-white text-warning border border-warning px-2 py-1" style={{ fontSize: '0.68rem', color: '#f59e0b' }}>
          Packaging
        </span>
      );
    } else if (status === 'Canceled') {
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

  return (
    <div className="container-fluid p-4">
      <div className="row g-3 mb-3">
        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">Payment Refund</span>
              <h4 className="fw-bold text-dark mb-0">490</h4>
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
              <h4 className="fw-bold text-dark mb-0">241</h4>
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
              <h4 className="fw-bold text-dark mb-0">630</h4>
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
              <h4 className="fw-bold text-dark mb-0">170</h4>
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
              {orders.map((item) => (
                <tr key={item.orderId}>
                  <td className="fw-medium text-muted">{item.orderId}</td>
                  <td className="text-muted">{item.createdAt}</td>
                  <td className="fw-medium" style={{ color: '#ea580c' }}>{item.customer}</td>
                  <td className="text-muted">{item.priority}</td>
                  <td className="fw-bold text-dark">{item.total}</td>
                  <td>{renderPaymentBadge(item.paymentStatus)}</td>
                  <td className="text-muted">{item.items}</td>
                  <td className="text-muted">{item.deliveryNumber}</td>
                  <td>{renderOrderStatusBadge(item.orderStatus)}</td>
                  <td className="text-end">
                    <div className="d-inline-flex gap-1">
                      <button className="action-btn" type="button" title="View">
                        <BsEye />
                      </button>
                      <button className="action-btn text-warning" type="button" title="Edit">
                        <BsPencil />
                      </button>
                      <button
                        className="action-btn delete-btn text-danger"
                        type="button"
                        title="Delete"
                        onClick={() => handleDeleteRow(item.orderId)}
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

        <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
          <button className="btn btn-sm btn-light border text-muted px-2 py-1" type="button" style={{ fontSize: '0.78rem' }}>
            Previous
          </button>
          <button className={`btn btn-sm ${currentPage === 1 ? 'btn-add-product' : 'btn-light border'} px-2 py-1`} type="button" style={{ fontSize: '0.78rem' }} onClick={() => setCurrentPage(1)}>
            1
          </button>
          <button className={`btn btn-sm ${currentPage === 2 ? 'btn-add-product' : 'btn-light border'} px-2 py-1`} type="button" style={{ fontSize: '0.78rem' }} onClick={() => setCurrentPage(2)}>
            2
          </button>
          <button className={`btn btn-sm ${currentPage === 3 ? 'btn-add-product' : 'btn-light border'} px-2 py-1`} type="button" style={{ fontSize: '0.78rem' }} onClick={() => setCurrentPage(3)}>
            3
          </button>
          <button className="btn btn-sm btn-light border text-muted px-2 py-1" type="button" style={{ fontSize: '0.78rem' }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderList; 