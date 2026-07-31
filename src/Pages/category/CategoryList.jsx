import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage, BsEye, BsPencil, BsTrash, BsPlusLg } from "react-icons/bs";

function CategoryList({ onNavigate }) {
  const navigate = useNavigate();

  const topCategories = [
    { title: "Fashion Categories" },
    { title: "Electronics Headphone" },
    { title: "Foot Wares" },
    { title: "Eye Ware & Sunglass" },
  ];

  const initialCategories = [
    {
      id: "FS16276",
      name: "Fashion Men , Women & Kid's",
      startingPrice: "$80 to $400",
      createdBy: "Seller",
      stock: "46233",
    },
    {
      id: "HB73029",
      name: "Women Hand Bag",
      startingPrice: "$120 to $500",
      createdBy: "Admin",
      stock: "2739",
    },
    {
      id: "CH492-9",
      name: "Cap and Hat",
      startingPrice: "$50 to $200",
      createdBy: "Admin",
      stock: "1829",
    },
    {
      id: "EC23818",
      name: "Electronics Headphone",
      startingPrice: "$100 to $700",
      createdBy: "Seller",
      stock: "1902",
    },
    {
      id: "FW11009",
      name: "Foot Wares",
      startingPrice: "$70 to $400",
      createdBy: "Seller",
      stock: "2733",
    },
    {
      id: "WL38299",
      name: "Wallet Categories",
      startingPrice: "$120 to $300",
      createdBy: "Admin",
      stock: "890",
    },
    {
      id: "5M37817",
      name: "Electronics Watch",
      startingPrice: "$60 to $400",
      createdBy: "Seller",
      stock: "250",
    },
    {
      id: "EG37878",
      name: "Eye Ware & Sunglass",
      startingPrice: "$70 to $500",
      createdBy: "Admin",
      stock: "1900",
    },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleAddCategory = () => {
    if (navigate) {
      navigate("/category/add");
    } else if (onNavigate) {
      onNavigate("add-category");
    }
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(categories.map((c) => c.id));
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
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <>
      <div className="row g-3 mb-4">
        {topCategories.map((cat, idx) => (
          <div className="col-xl-3 col-sm-6" key={idx}>
            <div className="content-card p-3 text-center">
              <div
                className="rounded-3 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center mb-3 mx-auto"
                style={{ height: "80px", width: "100%" }}
              >
                <BsImage className="fs-2 text-dark opacity-75" />
              </div>
              <h6
                className="fw-bold text-dark mb-0"
                style={{ fontSize: "0.85rem" }}
              >
                {cat.title}
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div className="content-card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-dark mb-0">All Categories List</h6>

          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-add-product btn-sm d-flex align-items-center gap-1"
              type="button"
              style={{ fontSize: "0.78rem" }}
              onClick={handleAddCategory}
            >
              <BsPlusLg /> Add Category
            </button>

            <select
              className="form-select form-select-sm"
              style={{ width: "auto", fontSize: "0.78rem" }}
            >
              <option value="this-month">This Month</option>
              <option value="last-month">Last Month</option>
              <option value="this-year">This Year</option>
            </select>
          </div>
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
                      selectedIds.length === categories.length &&
                      categories.length > 0
                    }
                    onChange={handleSelectAll}
                  />
                </th>
                <th>Categories</th>
                <th>Starting Price</th>
                <th>Create by</th>
                <th>ID</th>
                <th>Product Stock</th>
                <th className="text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                    />
                  </td>
                  <td>
                    <div
                      className="d-flex align-items-center gap-2 cursor-pointer"
                      onClick={handleAddCategory}
                    >
                      <div
                        className="rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: "32px", height: "32px" }}
                      >
                        <BsImage
                          style={{ fontSize: "14px" }}
                          className="text-dark opacity-75"
                        />
                      </div>
                      <span className="fw-medium text-dark">{item.name}</span>
                    </div>
                  </td>
                  <td className="text-muted">{item.startingPrice}</td>
                  <td className="text-muted">{item.createdBy}</td>
                  <td className="fw-medium text-muted">{item.id}</td>
                  <td className="text-muted">{item.stock}</td>
                  <td className="text-end">
                    <div className="d-inline-flex gap-1">
                      <button
                        className="action-btn"
                        type="button"
                        title="View"
                        onClick={handleAddCategory}
                      >
                        <BsEye />
                      </button>
                      <button
                        className="action-btn text-warning"
                        type="button"
                        title="Edit"
                        onClick={handleAddCategory}
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

export default CategoryList;
