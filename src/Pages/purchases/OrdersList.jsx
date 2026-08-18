import React, { useState, useEffect } from 'react';
import { BsBoxSeam, BsListTask, BsBagCheck, BsBagDash, BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import { getPurchaseOrders, getPurchaseReturns } from '../../services/apiService';

const statusColors = {
  Completed: {
    style: {
      color: 'rgba(34, 197, 94, 1)',
      backgroundColor: 'rgba(211, 243, 223, 1)',
    },
  },
  Cancel: { bg: 'bg-danger-subtle text-danger' },
  Cancelled: { bg: 'bg-danger-subtle text-danger' },
  Pending: {
    style: {
      color: 'rgba(249, 185, 49, 1)',
      backgroundColor: 'rgba(254, 241, 214, 1)',
    },
  },
};

function OrdersList() {
  const [orders, setOrders] = useState([]);
  const [statsData, setStatsData] = useState([
    { title: 'Total Orders', value: '0', percent: '+ 6.9%', badge: 'danger', icon: BsBoxSeam },
    { title: 'Order Items Over Time', value: '0', percent: '+ 13.2%', badge: 'success', icon: BsListTask },
    { title: 'Return Order', value: '0', percent: '+ 2.1%', badge: 'success', icon: BsBagDash },
    { title: 'Fulfilled Orders Over Time', value: '0', percent: '+ 3.1%', badge: 'danger', icon: BsBagCheck },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleDeleteRow = (email) => {
    setOrders((prev) => prev.filter((item) => item.email !== email));
  };

  const renderOrderStatusBadge = (status) => {
    const badge = statusColors[status] || statusColors.Pending;
    return (
      <span className={`badge ${badge.bg || ''} px-2 py-2`} style={{ fontSize: '0.8rem', ...badge.style }}>
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
                {orders.map((item, index) => (
                  <tr key={`${item.email}-${index}`}>
                    <td className="fw-medium text-dark">{item.customerName}</td>
                    <td className="text-muted">{item.email}</td>
                    <td className="text-muted">{item.orderDate}</td>
                    <td className="fw-bold text-dark">{item.total}</td>
                    <td>{renderOrderStatusBadge(item.orderStatus)}</td>
                    <td className="text-end">
                      <div className="d-inline-flex gap-1">
                        {[
                          {
                            icon: BsEye,
                            title: 'View',
                            className: '',
                            style: { backgroundColor: 'rgba(238, 242, 247, 1)' },
                          },
                          {
                            icon: BsPencil,
                            title: 'Edit',
                            style: { color: '#FF6C2F', backgroundColor: 'rgba(255, 108, 47, 0.1)' },
                          },
                          {
                            icon: BsTrash,
                            title: 'Delete',
                            style: { color: '#EF5F5F', backgroundColor: 'rgba(239, 95, 95, 0.1)' },
                            onClick: () => handleDeleteRow(item.email),
                          },
                        ].map(({ icon: Icon, title, className, style, onClick }) => (
                          <button
                            key={title}
                            type="button"
                            title={title}
                            className={`action-btn ${className || ''}`}
                            style={style}
                            onClick={onClick}
                          >
                            <Icon />
                          </button>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
          <button className="btn btn-sm btn-light border text-muted px-2 py-1" style={{ fontSize: '0.78rem' }}>
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
          <button className="btn btn-sm btn-light border text-muted px-2 py-1" style={{ fontSize: '0.78rem' }}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default OrdersList;