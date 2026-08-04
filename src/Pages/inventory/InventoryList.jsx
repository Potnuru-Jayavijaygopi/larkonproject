import React, { useState } from "react";
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

function InventoryList() {
  const initialWarehouses = [
    {
      id: "#WH-001",
      name: "Central Fulfillment",
      location: "123 Commerce St, NY",
      manager: "John Doe",
      contact: "+1 (555) 123-4567",
      stockAvailable: "6490",
      stockShipping: "3022",
      revenue: "$25,737",
    },

    {
      id: "#WH-002",
      name: "East Coast Hub",
      location: "456 Market Ave, NY",
      manager: "Jane Smith",
      contact: "+1 (555) 123-4568",
      stockAvailable: "'7362",
      stockShipping: "4253",
      revenue: "$67,890",
    },

    {
      id: "#WH-003",
      name: "West Coast Depot",
      location: "789 Industrial Rd ,CA",
      manager: "Richard Roe",
      contact: "+1 (555) 345-6789",
      stockAvailable: "8842",
      stockShipping: "3321",
      revenue: "$45,210",
    },

    {
      id: "#WH-004",
      name: "Southern Distribution",
      location: "101 Supply Rd, TX",
      manager: "Alice Johnson",
      contact: "+1 (555) 456-7890",
      stockAvailable: "5463",
      stockShipping: "2100",
      revenue: "$54,655",
    },

    {
      id: "#WH-005",
      name: "Northern Fulfillment",
      location: "202 Logistics Ln, IL",
      manager: "Michael Brown",
      contact: "+1 (555) 567-8901",
      stockAvailable: "12643",
      stockShipping: "7008",
      revenue: "$92,533",
    },

    {
      id: "#WH-006",
      name: "Midwest Center",
      location: "'303 Central St, MO'",
      manager: "Emily Davis",
      contact: "+1 (555) 678-9012",
      stockAvailable: "7553",
      stockShipping: "5600",
      revenue: "$43,898",
    },

    {
      id: "#Wh-007",
      name: "Southeast Storage",
      location: "404 Storage Dr, FL",
      manager: "William Green",
      contact: "+1 (555) 789-0123",
      stockAvailable: "9381",
      stockShipping: "5343",
      revenue: "$76,909",
    },

    {
      id: "#WH-008",
      name: "Northwest Hub",
      location: "505 Logistics Blvd, WA",
      manager: "Sarah Wilson",
      contact: "+1 (555) 890-1234",
      stockAvailable: "11234",
      stockShipping: "6789",
      revenue: "$89,123",
    },

    {
      id: "Wh-009",
      name: "Southwest Fulfillment",
      location: "606 Trade Ave, AZ",
      manager: "Christopher Black",
      contact: "+1 (555) 901-2345",
      stockAvailable: "7555",
      stockShipping: "9000",
      revenue: "$67,890",
    },

    {
      id: "#WH-010",
      name: "Northeast Depot",
      location: "707 Northeast Blvd, MA",
      manager: "Jessica Taylor",
      contact: "+1 (555) 012-3456",
      stockAvailable: "8901",
      stockShipping: "4321",
      revenue: "$98,765",
    },
  ];

  const [warehouses, setWarehouses] = useState(initialWarehouses);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
      setSelectedIds([id]);
    }
  };
  const handleDeleteRow = (id) => {
    setWarehouses(warehouses.filter((w) => w.id !== id));
  };

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
                3521 <span className="text-muted small fw-normal">(Items)</span>
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
                1311 <span className="text-muted small fw-normal">(Items)</span>
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
                231 <span className="text-muted small fw-normal">(Items)</span>
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
          <h6 className="fw-bold text-dark mb-0">All WareHouses List</h6>
          <select
            className="form-select from-select-sm "
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
              {warehouses.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                    />
                  </td>
                  <td className="fw-medium text-muted">{item.id}</td>
                  <td className="fw-medium text-muted">{item.name}</td>
                  <td className="text-muted">{item.location}</td>
                  <td className="text-muted">{item.manager}</td>
                  <td className="text-muted">{item.contact}</td>
                  <td className="text-muted">{item.stockAvailable}</td>
                  <td className="text-muted">{item.stockShipping}</td>
                  <td className="text-muted">{item.revenue}</td>
                  <td className="text-end">
                    <div className="d-inline-flex gap-1">
                      <button className="action-btn" type="button" title="View">
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
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-end align-items-center mt-3 g-1">
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

export default InventoryList;
