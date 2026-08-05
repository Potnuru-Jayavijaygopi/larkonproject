import React, { useState } from "react";
import {
  BsFileText,
  BsClockHistory,
  BsBoxSeam,
  BsTruck,
  BsEye,
  BsPencil,
  BsTrash,
} from "react-icons/bs";

function ReceivedOrders() {
  const InitialOrders = [
    {
      orderId: "583488/80",
      customer: "Michael A. Miner",
      items: "03",
      amount: "$289.00",
      paymentStatus: "Paid",
      receivedStatus: "Delivered",
    },

    {
      orderId: "456754/80",
      customer: "Theresa T. Brose",
      items: "05",
      amount: "$213.00",
      paymentStatus: "COD",
      receivedStatus: "Failed",
    },

    {
      orderId: "578246/80",
      customer: "Cecile D. Gordon",
      items: "03",
      amount: "$735.00",
      paymentStatus: "Paid",
      receivedStatus: "Delivered",
    },

    {
      orderId: "348930/80",
      customer: "William Moreno",
      items: "02",
      amount: "$324.00",
      paymentStatus: "COD",
      receivedStatus: "Pending",
    },

    {
      orderId: "391367/80",
      customer: "Sarah M. Brooks",
      items: "07",
      amount: "$153.00",
      paymentStatus: "COD",
      receivedStatus: "Delivered",
    },

    {
      orderId: "930447/80",
      customer: "Joe K. Hall",
      items: "02",
      amount: "$424.00",
      paymentStatus: "Paid",
      receivedStatus: "Failed",
    },

    {
      orderId: "462397/80",
      customer: "Ralph Hueber",
      items: "01",
      amount: "$521.00",
      paymentStatus: "Paid",
      receivedStatus: "Pending",
    },

    {
      orderId: "472356/80",
      customer: "Sarah Dresler",
      items: "04",
      amount: "$313.00",
      paymentStatus: "COD",
      receivedStatus: "Delivered",
    },

    {
      orderId: "448226/80",
      customer: "Leonie Meister",
      items: "06",
      amount: "$299.00",
      paymentStatus: "Paid",
      receivedStatus: "Failed",
    },
  ];

  const [orders, setOrders] = useState(InitialOrders);
  const [currentPage, setCurrentPage] = useState(1);

  const handleDeleteRow = (id) => {
    setOrders(orders.filter((o) => o.orderId !== id));
  };

  const renderPaymentBadge = (status) => {
    if (status === "Paid") {
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
          COD
        </span>
      );
    }
  };

  const renderReceivedBadge = (status) => {
    if (status === "Delivered") {
      return (
        <span
          className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1"
          style={{ fontSize: "0.68rem" }}
        >
          Delivered
        </span>
      );
    } else if (status === "Failed") {
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
          className="badge bd-warning-subtle text-warning border border-warning-subtle px-2 py-1"
          style={{ fontSize: "0.68rem" }}
        >
          Pending
        </span>
      );
    }
  };

  return (
    <>
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-sm-6">
          <div className="content-card p-3 d-flex align-items-center justify-content-between ">
            <div>
              <span className="text-muted small d-block mb-1">
                Pending Reviews
              </span>
              <h4 className="text-muted small fw-normal">210</h4>
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
              <h4 className="text-muted small fw-normal">608</h4>
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
              <h4 className="text-muted small fw-normal">200</h4>
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
              <h4 className="text-muted small fw-normal">656</h4>
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
          <h6 className="fw-bold text-dark mb-0">All Received Borders</h6>
          <select
            className="form-select form-select-sm"
            style={{ width: "auto", fontSize: "0.78rem" }}
          >
            <option value="this-month">This Month</option>
            <option value="this-year">This Year</option>
            <option value="last-month">Last Month</option>
          </select>
        </div>

        <div className="table-responsive">
          <table
            className="table table-custom align-middle mb-0"
            style={{ fontSize: "0.825rem" }}
          >
            <thead>
              <tr className="text-muted" style={{ fontSize: "0.75rem" }}>
                <td>Order ID</td>
                <td>Customer</td>
                <td>Items</td>
                <td>Amount</td>
                <td>Payment Status</td>
                <td>Received Status</td>
                <td className="text-end">Action</td>
              </tr>
            </thead>

            <tbody>
              {orders.map((item) => (
                <tr key={item.orderId}>
                  <td className="fw-medium text-muted">{item.orderId}</td>
                  <td className="fw-medium text-muted">{item.customer}</td>
                  <td className="text-muted">{item.items}</td>
                  <td className=" text-muted">{item.amount}</td>
                  <td>{renderPaymentBadge(item.paymentStatus)}</td>
                  <td>{renderReceivedBadge(item.receivedStatus)}</td>
                  <td className="text-end">
                    <div className="d-inline-flex gap-1">
                      <button
                        className="action-btn "
                        type="button"
                        title="view"
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
          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            style={{ fontSize: "0.78rem" }}
          >
            Previous
          </button>

          <button
            className={`btn btn-sm ${currentPage === 1 ? "btn-add-product" : "btn-light border"} px-2 py-1`}
            type="button"
            style={{ fontSize: "0.78rem" }}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <button
            className={`btn btn-sm ${currentPage === 2 ? "btn-add-product" : "btn-light border"} px-2 py-1`}
            type="button"
            style={{ fontSize: "0.78rem" }}
            onClick={() => setCurrentPage(2)}
          >
            2
          </button>
          <button
            className={`btn btn-sm ${currentPage === 3 ? "btn-add-product" : "btn-light border"} px-2 py-1`}
            type="button"
            style={{ fontSize: "0.78rem" }}
            onClick={() => setCurrentPage(3)}
          >
            3
          </button>

          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            style={{ fontSize: "0.78rem" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default ReceivedOrders;
