import React, { useState, useEffect } from 'react';
import { BsBoxSeam, BsPeople, BsCurrencyDollar, BsBagCheck, BsStar } from 'react-icons/bs';
import { getDashboardSummary, getRecentOrders, getTopProducts } from '../services/apiService';

function Dashboard() {
  const [summary, setSummary] = useState({ total_orders: '0', total_users: '0', total_revenue: '0' });
  const [recentOrders, setRecentOrders] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [sumRes, ordersRes, productsRes] = await Promise.all([
        getDashboardSummary().catch(() => ({ data: {} })),
        getRecentOrders().catch(() => ({ data: [] })),
        getTopProducts().catch(() => ({ data: [] })),
      ]);

      if (sumRes.data) {
        setSummary({
          total_orders: sumRes.data.total_orders || '0',
          total_users: sumRes.data.total_users || '0',
          total_revenue: sumRes.data.total_revenue || '0',
        });
      }

      setRecentOrders(ordersRes.data || []);
      setTopProducts(productsRes.data || []);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError(err.message || 'Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: 'Total Revenue',
      value: `$${parseFloat(summary.total_revenue || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`,
      icon: BsCurrencyDollar,
      bgColor: '#ecfdf5',
      color: '#059669',
    },
    {
      title: 'Total Orders',
      value: summary.total_orders,
      icon: BsBoxSeam,
      bgColor: '#fff7ed',
      color: '#ea580c',
    },
    {
      title: 'Total Users',
      value: summary.total_users,
      icon: BsPeople,
      bgColor: '#eff6ff',
      color: '#2563eb',
    },
  ];

  return (
    <div className="content-card p-4" style={{ minHeight: '500px' }}>
      <h5 className="fw-bold text-dark mb-4">Dashboard Overview</h5>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger py-2 text-center" role="alert">
          {error}
        </div>
      ) : (
        <>
          <div className="row g-3 mb-4">
            {statCards.map((card) => {
              const Icon = card.icon;
              return (
                <div className="col-md-4" key={card.title}>
                  <div className="content-card p-3 d-flex align-items-center justify-content-between border rounded">
                    <div>
                      <span className="text-muted small d-block mb-1">{card.title}</span>
                      <h4 className="fw-bold text-dark mb-0">{card.value}</h4>
                    </div>
                    <div
                      className="rounded-3 d-flex align-items-center justify-content-center p-3"
                      style={{ backgroundColor: card.bgColor, color: card.color }}
                    >
                      <Icon className="fs-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="row g-4">
            {/* Recent Orders Section */}
            <div className="col-lg-8">
              <div className="content-card p-3 border rounded">
                <h6 className="fw-bold text-dark mb-3">Recent Orders</h6>
                <div className="table-responsive">
                  <table className="table table-custom align-middle mb-0" style={{ fontSize: '0.825rem' }}>
                    <thead>
                      <tr className="text-muted" style={{ fontSize: '0.75rem' }}>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentOrders.length === 0 ? (
                        <tr>
                          <td colSpan="5" className="text-center py-3 text-muted">
                            No recent orders available
                          </td>
                        </tr>
                      ) : (
                        recentOrders.slice(0, 5).map((order) => (
                          <tr key={order.order_id}>
                            <td className="fw-medium text-dark">#{order.order_id}</td>
                            <td className="fw-medium text-dark">{order.full_name || 'Customer'}</td>
                            <td className="fw-bold text-dark">
                              ${parseFloat(order.total_amount || 0).toFixed(2)}
                            </td>
                            <td>
                              <span
                                className="badge px-2 py-1"
                                style={{
                                  fontSize: '0.75rem',
                                  backgroundColor:
                                    (order.payment_status || '').toLowerCase() === 'paid'
                                      ? 'rgba(211,243,223,1)'
                                      : 'rgba(254, 241, 214, 1)',
                                  color:
                                    (order.payment_status || '').toLowerCase() === 'paid'
                                      ? 'rgba(34,197,94,1)'
                                      : '#FF6C2F',
                                }}
                              >
                                {order.payment_status || 'Pending'}
                              </span>
                            </td>
                            <td className="text-muted">
                              {order.created_at
                                ? new Date(order.created_at).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: 'short',
                                    year: 'numeric',
                                  })
                                : 'N/A'}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="content-card p-3 border rounded">
                <h6 className="fw-bold text-dark mb-3">Top Products</h6>
                <div className="list-group list-group-flush">
                  {topProducts.length === 0 ? (
                    <div className="text-muted text-center py-3">No top products data</div>
                  ) : (
                    topProducts.slice(0, 5).map((product) => (
                      <div
                        key={product.product_id}
                        className="list-group-item d-flex justify-content-between align-items-center px-0 py-2 border-bottom"
                      >
                        <div className="d-flex align-items-center gap-2">
                          <div
                            className="rounded-circle bg-warning bg-opacity-25 d-flex align-items-center justify-content-center"
                            style={{ width: 28, height: 28 }}
                          >
                            <BsStar className="text-warning small" />
                          </div>
                          <div>
                            <span className="fw-medium text-dark d-block small">{product.product_name}</span>
                            <span className="text-muted" style={{ fontSize: '0.7rem' }}>
                              Qty: {product.total_quantity}
                            </span>
                          </div>
                        </div>
                        <span className="fw-bold text-dark small">
                          ${parseFloat(product.total_sales || 0).toFixed(2)}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;