import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsImage, BsEye, BsPencil, BsTrash, BsPlusLg } from "react-icons/bs";
import { categoryAPI, productAPI } from "../../services/api";

function CategoryList({ onNavigate }) {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const itemsPerPage = 8;

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [catsRes, prodsRes] = await Promise.all([
        categoryAPI.getAll().catch(() => []),
        productAPI.getAll().catch(() => []),
      ]);

      const catsList = Array.isArray(catsRes)
        ? catsRes
        : Array.isArray(catsRes?.data)
        ? catsRes.data
        : [];

      const prodsList = Array.isArray(prodsRes)
        ? prodsRes
        : Array.isArray(prodsRes?.data)
        ? prodsRes.data
        : [];

      setCategories(catsList);
      setProducts(prodsList);
    } catch (err) {
      console.error("Error loading categories:", err);
      setError("Unable to load categories from the server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddCategory = () => {
    if (navigate) {
      navigate("/category/create");
    } else if (onNavigate) {
      onNavigate("add-category");
    }
  };

  const handleEditCategory = (id) => {
    if (navigate) {
      navigate(`/category/edit/${id}`);
    } else if (onNavigate) {
      onNavigate("edit-category");
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

  const handleDeleteRow = async (id, catName) => {
    if (
      !window.confirm(
        `Are you sure you want to delete category "${catName || id}"?`
      )
    ) {
      return;
    }

    try {
      await categoryAPI.delete(id);
      setCategories((prev) => prev.filter((c) => c.id !== id));
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    } catch (err) {
      console.error("Failed to delete category:", err);
      alert(err.message || "Failed to delete category.");
    }
  };

  const getCategoryStats = (catId) => {
    const catProducts = products.filter(
      (p) => String(p.category_id) === String(catId)
    );

    const totalStock = catProducts.reduce(
      (sum, p) => sum + (parseInt(p.stock, 10) || 0),
      0
    );

    const prices = catProducts
      .map((p) => parseFloat(p.price))
      .filter((p) => !isNaN(p) && p > 0);

    let startingPrice = "$80 to $400";
    if (prices.length === 1) {
      startingPrice = `$${prices[0]}`;
    } else if (prices.length > 1) {
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      startingPrice = `$${min} to $${max}`;
    }

    return {
      productCount: catProducts.length,
      stock: totalStock > 0 ? totalStock : "0",
      startingPrice,
    };
  };

  const topCategories =
    categories.length >= 4
      ? categories.slice(0, 4)
      : [
          ...categories,
          { id: "def1", category_name: "Fashion Categories" },
          { id: "def2", category_name: "Electronics Headphone" },
          { id: "def3", category_name: "Foot Wares" },
          { id: "def4", category_name: "Eye Ware & Sunglass" },
        ].slice(0, 4);

  const totalPages = Math.ceil(categories.length / itemsPerPage) || 1;
  const paginatedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="row g-3 mb-4">
        {topCategories.map((cat, idx) => (
          <div className="col-xl-3 col-sm-6" key={cat.id || idx}>
            <div className="content-card p-3 text-center">
              <div
                className="rounded-3 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center mb-3 mx-auto"
                style={{ height: "80px", width: "100%" }}
              >
                <BsImage className="fs-2 text-dark opacity-75" />
              </div>
              <h6
                className="fw-bold text-dark mb-0 text-truncate"
                style={{ fontSize: "0.85rem" }}
              >
                {cat.category_name || cat.title || "Category"}
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div className="content-card p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="fw-bold text-dark mb-0">
            All Categories List ({categories.length})
          </h6>

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
              {loading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">
                    <div
                      className="spinner-border spinner-border-sm text-primary me-2"
                      role="status"
                    />
                    Loading categories from backend...
                  </td>
                </tr>
              ) : paginatedCategories.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">
                    No categories found.
                  </td>
                </tr>
              ) : (
                paginatedCategories.map((item) => {
                  const stats = getCategoryStats(item.id);
                  const displayId = `FS162${item.id}`;

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
                      <td>
                        <div
                          className="d-flex align-items-center gap-2 cursor-pointer"
                          onClick={() => handleEditCategory(item.id)}
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
                          <span className="fw-medium text-dark">
                            {item.category_name}
                          </span>
                        </div>
                      </td>
                      <td className="text-muted">{stats.startingPrice}</td>
                      <td className="text-muted">Admin</td>
                      <td className="fw-medium text-muted">{displayId}</td>
                      <td className="text-muted">{stats.stock}</td>
                      <td className="text-end">
                        <div className="d-inline-flex gap-1">
                          <button
                            className="action-btn"
                            type="button"
                            title="View"
                            onClick={() => handleEditCategory(item.id)}
                          >
                            <BsEye />
                          </button>
                          <button
                            className="action-btn text-warning"
                            type="button"
                            title="Edit"
                            onClick={() => handleEditCategory(item.id)}
                          >
                            <BsPencil />
                          </button>
                          <button
                            className="action-btn delete-btn text-danger"
                            type="button"
                            title="Delete"
                            onClick={() =>
                              handleDeleteRow(item.id, item.category_name)
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

export default CategoryList;
