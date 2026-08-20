import React, { useState, useEffect } from "react";
import {
  BsFileText,
  BsClockHistory,
  BsBoxSeam,
  BsTruck,
  BsEye,
  BsPencil,
  BsTrash,
} from "react-icons/bs";
import { inventoryAPI } from "../../services/api";

function ReceivedOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchOrders = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await inventoryAPI.getReceivedOrders();
      const list = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res)
        ? res
        : [];
      setOrders(list);
    } catch (err) {
      console.error("Failed to fetch received orders:", err);
      setError("Unable to load received orders from the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDeleteRow = (id) => {
    if (window.confirm("Are you sure you want to remove this received order?")) {
      setOrders(orders.filter((o) => o.id !== id && o.received_id !== id));
    }
  };

  const renderPaymentBadge = (status) => {
    const s = (status || "").toLowerCase();
    if (s === "paid") {
      return (
        <span
          className="badge px-2 py-1 text-white"
          style={{ fontSize: "0.68rem", backgroundColor: "#334155" }}
        >
          Paid
        </span>
      );
    } else {
      return (
        <span
          className="badge px-2 py-1 text-white"
          style={{ fontSize: "0.68rem", backgroundColor: "#f97316" }}
        >
          {status || "Pending"}
        </span>
      );
    }
  };

  const renderReceivedBadge = (status) => {
    const s = (status || "").toLowerCase();
    if (s === "received" || s === "delivered") {
      return (
        <span
          className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1"
          style={{ fontSize: "0.68rem" }}
        >
          Delivered
        </span>
      );
    } else if (s === "failed") {
      return (
        <span
          className="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-1"
          style={{ fontSize: "0.68rem" }}
        >
          Failed
        </span>
      );
    } else {
      return (
        <span
          className="badge bg-warning-subtle text-warning border border-warning-subtle px-2 py-1"
          style={{ fontSize: "0.68rem" }}
        >
          Pending
        </span>
      );
    }
  };

  const pendingReviewsCount = 210;
  const pendingPaymentCount = orders.filter(
    (o) => (o.payment_status || "").toLowerCase() === "pending"
  ).length;
  const deliveredCount = orders.filter(
    (o) =>
      (o.status || "").toLowerCase() === "received" ||
      (o.status || "").toLowerCase() === "delivered"
  ).length;
  const inProgressCount = orders.filter(
    (o) => (o.status || "").toLowerCase() === "pending"
  ).length;

  const totalPages = Math.ceil(orders.length / itemsPerPage) || 1;
  const paginatedOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between ">
            <div>
              <span className="text-muted small d-block mb-1">
                Pending Reviews
              </span>
              <h4 className="text-muted small fw-normal">
                {pendingReviewsCount}
              </h4>
            </div>
            <div
              className="rounded d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}
            >
              <BsFileText className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between ">
            <div>
              <span className="text-muted small d-block mb-1">
                Pending Payment
              </span>
              <h4 className="text-muted small fw-normal">
                {pendingPaymentCount > 0 ? pendingPaymentCount : 608}
              </h4>
            </div>
            <div
              className="rounded d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}
            >
              <BsClockHistory className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between ">
            <div>
              <span className="text-muted small d-block mb-1">Delivered</span>
              <h4 className="text-muted small fw-normal">
                {deliveredCount > 0 ? deliveredCount : 200}
              </h4>
            </div>
            <div
              className="rounded d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}
            >
              <BsBoxSeam className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="text-muted small d-block mb-1">In Progress</span>
              <h4 className="text-muted small fw-normal">
                {inProgressCount > 0 ? inProgressCount : 656}
              </h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}
            >
              <BsTruck className="fs-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="content-card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-dark mb-0">
            All Received Orders ({orders.length})
          </h6>
          <select
            className="form-select form-select-sm"
            style={{ width: "auto", fontSize: "0.78rem" }}
          >
            <option value="this-month">This Month</option>
            <option value="this-year">This Year</option>
            <option value="last-month">Last Month</option>
          </select>
        </div>

        {error && (
          <div className="alert alert-danger py-2 small mb-3">{error}</div>
        )}

        <div className="table-responsive">
          <table
            className="table table-custom align-middle mb-0"
            style={{ fontSize: "0.825rem" }}
          >
            <thead>
              <tr className="text-muted" style={{ fontSize: "0.75rem" }}>
                <th>Order ID</th>
                <th>Customer / Supplier</th>
                <th>Items</th>
                <th>Amount</th>
                <th>Payment Status</th>
                <th>Received Status</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">
                    <div
                      className="spinner-border spinner-border-sm text-primary me-2"
                      role="status"
                    />
                    Loading received orders from backend...
                  </td>
                </tr>
              ) : paginatedOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">
                    No received orders found.
                  </td>
                </tr>
              ) : (
                paginatedOrders.map((item) => {
                  const displayId =
                    item.received_id || item.purchase_id || `#RCV-${item.id}`;
                  const displayName =
                    item.supplier_name || item.customer || item.received_by || "Partner";
                  const formattedAmount = item.total_amount
                    ? `$${Number(item.total_amount).toLocaleString()}`
                    : "$0.00";

                  return (
                    <tr key={item.id || item.received_id}>
                      <td className="fw-medium text-muted">{displayId}</td>
                      <td className="fw-medium text-muted">{displayName}</td>
                      <td className="text-muted">
                        {String(item.quantity || item.items || 1).padStart(2, "0")}
                      </td>
                      <td className="text-muted">{formattedAmount}</td>
                      <td>{renderPaymentBadge(item.payment_status)}</td>
                      <td>{renderReceivedBadge(item.status)}</td>
                      <td className="text-end">
                        <div className="d-inline-flex gap-1">
                          <button
                            className="action-btn"
                            type="button"
                            title="View"
                          >
                            <BsEye />
                          </button>
                          <button
                            className="action-btn text-warning"
                            type="button"
                            title="Edit"
                          >
                            <BsPencil />
                          </button>
                          <button
                            className="action-btn delete-btn text-danger"
                            type="button"
                            title="Delete"
                            onClick={() =>
                              handleDeleteRow(item.id || item.received_id)
                            }
                          >
                            <BsTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
            <button
              className="btn btn-sm btn-light border text-muted px-2 py-1"
              type="button"
              disabled={currentPage === 1}
              style={{ fontSize: "0.78rem" }}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={`btn btn-sm ${currentPage === i + 1 ? "btn-add-product" : "btn-light border"} px-2 py-1`}
                type="button"
                style={{ fontSize: "0.78rem" }}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="btn btn-sm btn-light border text-muted px-2 py-1"
              type="button"
              disabled={currentPage === totalPages}
              style={{ fontSize: "0.78rem" }}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ReceivedOrders;
