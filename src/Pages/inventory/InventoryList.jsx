import React, { useState, useEffect } from "react";
import {
  BsBoxSeam,
  BsBoxes,
  BsBagX,
  BsPeople,
  BsEye,
  BsTrash,
  BsPencil,
  BsListUl,
} from "react-icons/bs";
import { inventoryAPI, productAPI } from "../../services/api";

function InventoryList() {
  const [warehouses, setWarehouses] = useState([]);
  const [inventoryStats, setInventoryStats] = useState({
    totalItems: 0,
    inStock: 0,
    outOfStock: 0,
  });
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 8;

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [whRes, invRes] = await Promise.all([
        inventoryAPI.getWarehouses().catch(() => []),
        inventoryAPI.getInventory().catch(() => []),
      ]);

      const whList = Array.isArray(whRes?.data)
        ? whRes.data
        : Array.isArray(whRes)
        ? whRes
        : [];
      setWarehouses(whList);

      const invList = Array.isArray(invRes?.data)
        ? invRes.data
        : Array.isArray(invRes)
        ? invRes
        : [];

      if (invList.length > 0) {
        const totalItems = invList.reduce(
          (sum, item) => sum + (parseInt(item.stock_quantity, 10) || 0),
          0
        );
        const inStock = invList.filter(
          (item) => (parseInt(item.stock_quantity, 10) || 0) > 0
        ).length;
        const outOfStock = invList.filter(
          (item) => (parseInt(item.stock_quantity, 10) || 0) === 0
        ).length;
        setInventoryStats({ totalItems, inStock, outOfStock });
      } else {
        setInventoryStats({ totalItems: 3521, inStock: 1311, outOfStock: 231 });
      }
    } catch (err) {
      console.error("Failed to load inventory warehouse data:", err);
      setError("Unable to load warehouse data from the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(warehouses.map((w) => w.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleDeleteRow = (id) => {
    if (window.confirm("Are you sure you want to remove this warehouse?")) {
      setWarehouses(warehouses.filter((w) => w.id !== id));
      setSelectedIds(selectedIds.filter((item) => item !== id));
    }
  };

  const totalPages = Math.ceil(warehouses.length / itemsPerPage) || 1;
  const paginatedWarehouses = warehouses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-sm-6">
          <div className="content-card h-100 p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="small fw-medium text-dark d-block mb-1">
                Total Product Items
              </span>
              <h4 className="small fw-light text-secondary mb-1">
                {inventoryStats.totalItems}{" "}
                <span className="text-muted small fw-normal">(Items)</span>
              </h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}
            >
              <BsBoxSeam className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card h-100 p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="small fw-medium text-dark d-block mb-1">
                In Stock Product
              </span>
              <h4 className="small fw-light text-secondary mb-1">
                {inventoryStats.inStock}{" "}
                <span className="text-muted small fw-normal">(Items)</span>
              </h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}
            >
              <BsListUl className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card h-100 p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="small fw-medium text-dark d-block mb-1">
                Out Of Stock Product
              </span>
              <h4 className="small fw-light text-secondary mb-1">
                {inventoryStats.outOfStock}{" "}
                <span className="text-muted small fw-normal">(Items)</span>
              </h4>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}
            >
              <BsBagX className="fs-4" />
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6">
          <div className="content-card h-100 p-3 d-flex align-items-center justify-content-between">
            <div>
              <span className="small fw-medium text-dark d-block mb-1">
                Total Visited Customer
              </span>
              <h4 className="small fw-light text-secondary mb-1">
                2334{" "}
                <span
                  className="badge bg-danger-subtle text-danger border border-danger-subtle px-1 py-0 ms-1"
                  style={{ fontSize: "0.65rem" }}
                >
                  ↓4.5%
                </span>
              </h4>
              <span className="text-muted small fw-normal ms-2">
                (Last Week)
              </span>
            </div>
            <div
              className="rounded-3 d-flex align-items-center justify-content-center p-3"
              style={{ backgroundColor: "#fff7ed", color: "#ea580c" }}
            >
              <BsPeople className="fs-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="content-card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-dark mb-0">
            All WareHouses List ({warehouses.length})
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
                <th style={{ width: "30px" }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={
                      selectedIds.length === warehouses.length &&
                      warehouses.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Warehouse Id</th>
                <th>Warehouse Name</th>
                <th>Location</th>
                <th>Manager</th>
                <th>Contact</th>
                <th>Stock Available</th>
                <th>Stock Shipping</th>
                <th>Warehouse Revenue</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="10" className="text-center py-4 text-muted">
                    <div
                      className="spinner-border spinner-border-sm text-primary me-2"
                      role="status"
                    />
                    Loading warehouses from backend...
                  </td>
                </tr>
              ) : paginatedWarehouses.length === 0 ? (
                <tr>
                  <td colSpan="10" className="text-center py-4 text-muted">
                    No warehouses found.
                  </td>
                </tr>
              ) : (
                paginatedWarehouses.map((item) => {
                  const displayId = `#WH-${String(item.id).padStart(3, "0")}`;
                  const formattedRevenue = item.warehouse_revenue
                    ? `$${Number(item.warehouse_revenue).toLocaleString()}`
                    : "$0";

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
                      <td className="fw-medium text-muted">{displayId}</td>
                      <td className="fw-medium text-muted">
                        {item.warehouse_name}
                      </td>
                      <td className="text-muted">{item.location}</td>
                      <td className="text-muted">{item.manager_name}</td>
                      <td className="text-muted">{item.contact_number}</td>
                      <td className="text-muted">{item.stock_available}</td>
                      <td className="text-muted">{item.stock_shipping}</td>
                      <td className="text-muted">{formattedRevenue}</td>
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
                            onClick={() => handleDeleteRow(item.id)}
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

export default InventoryList;
