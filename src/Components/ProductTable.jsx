import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlusLg, BsImage, BsStarFill, BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import { productAPI, categoryAPI, parseProductImages } from '../services/api';

function formatSizes(sizeVal) {
  if (sizeVal === null || sizeVal === undefined || sizeVal === '') {
    return 'Size : S , M , L';
  }
  if (Array.isArray(sizeVal)) {
    return `Size : ${sizeVal.join(' , ')}`;
  }
  if (typeof sizeVal === 'string') {
    const trimmed = sizeVal.trim();
    if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return `Size : ${parsed.join(' , ')}`;
      } catch {}
    }
    if (trimmed.toLowerCase().startsWith('size')) {
      return trimmed;
    }
    return `Size : ${trimmed}`;
  }
  return `Size : ${String(sizeVal)}`;
}

function ProductTable({ onNavigate }) {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [timeFilter, setTimeFilter] = useState('this-year');

  const fetchProductsAndCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const [productsData, categoriesData] = await Promise.all([
        productAPI.getAll(),
        categoryAPI.getAll().catch(() => [])
      ]);

      const catMap = {};
      if (Array.isArray(categoriesData)) {
        categoriesData.forEach((cat) => {
          catMap[cat.id] = cat.category_name || cat.name;
        });
      }
      setCategories(catMap);
      setProducts(Array.isArray(productsData) ? productsData : []);
    } catch (err) {
      console.error('Failed to load products:', err);
      setError(err.message || 'Failed to load products from server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductsAndCategories();
  }, []);

  const handleSelectAll = (e) => {
    setSelectedIds(e.target.checked ? products.map((p) => p.id) : []);
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await productAPI.delete(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      setSelectedIds((prev) => prev.filter((i) => i !== id));
    } catch (err) {
      console.error('Failed to delete product:', err);
      alert(err.message || 'Failed to delete product.');
    }
  };

  const handleAddProduct = () => {
    if (navigate) {
      navigate('/products/create');
    } else if (onNavigate) {
      onNavigate('create-product');
    }
  };

  const handleViewDetails = (product) => {
    const id = product?.id || '';
    if (navigate) {
      navigate(`/products/details?id=${id}`, { state: { product } });
    } else if (onNavigate) {
      onNavigate('product-details', { product });
    }
  };

  const handleEditProduct = (product) => {
    const id = product?.id || '';
    if (navigate) {
      navigate(`/products/add?id=${id}`, { state: { product } });
    } else if (onNavigate) {
      onNavigate('add-product', { product });
    }
  };

  // Filter products by created_at if timeFilter is set
  const filteredProducts = products.filter((item) => {
    if (!item.created_at || timeFilter === 'all') return true;
    const itemDate = new Date(item.created_at);
    const now = new Date();
    if (timeFilter === 'this-month') {
      return (
        itemDate.getMonth() === now.getMonth() &&
        itemDate.getFullYear() === now.getFullYear()
      );
    }
    if (timeFilter === 'last-month') {
      const lastMonth = now.getMonth() === 0 ? 11 : now.getMonth() - 1;
      const lastMonthYear = now.getMonth() === 0 ? now.getFullYear() - 1 : now.getFullYear();
      return (
        itemDate.getMonth() === lastMonth &&
        itemDate.getFullYear() === lastMonthYear
      );
    }
    if (timeFilter === 'this-year') {
      return itemDate.getFullYear() === now.getFullYear();
    }
    return true;
  });

  return (
    <div className="content-card">
      <div className="card-header-custom">
        <h2 className="card-title-custom">All Product List</h2>
        <div className="d-flex align-items-center gap-2">
          <button
            className="btn-add-product d-inline-flex align-items-center gap-1"
            type="button"
            onClick={handleAddProduct}
          >
            <BsPlusLg /> Add Product
          </button>
          <select
            className="form-select filter-select"
            style={{ width: 'auto' }}
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
          >
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="this-year">This Year</option>
            <option value="all">All Time</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="alert alert-warning m-3 py-2 small d-flex justify-content-between align-items-center">
          <span>{error}</span>
          <button
            className="btn btn-sm btn-outline-dark py-0"
            onClick={fetchProductsAndCategories}
          >
            Retry
          </button>
        </div>
      )}

      <div className="table-responsive">
        <table className="table table-custom align-middle">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={
                    selectedIds.length === filteredProducts.length &&
                    filteredProducts.length > 0
                  }
                  onChange={handleSelectAll}
                />
              </th>
              <th>Product Name &amp; Size</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Rating</th>
              <th className="text-end">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-muted">
                  <div className="spinner-border spinner-border-sm text-primary me-2" role="status" />
                  Loading products from server...
                </td>
              </tr>
            ) : filteredProducts.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-4 text-muted">
                  No products found.
                </td>
              </tr>
            ) : (
              filteredProducts.map((item) => {
                const images = parseProductImages(item.image);
                const firstImage = images.length > 0 ? images[0] : null;
                const formattedPrice = item.price
                  ? `$${parseFloat(item.price).toFixed(2)}`
                  : '$0.00';
                const formattedSizes = formatSizes(item.size);
                const categoryName =
                  categories[item.category_id] || item.tag || 'Fashion';
                const rating = item.average_rating
                  ? parseFloat(item.average_rating).toFixed(1)
                  : '4.5';
                const reviews = `${item.review_count || 0} Review`;
                const stockLeft = `${item.stock ?? 0} Item Left`;
                const stockSold = `${Math.floor((item.stock || 100) * 0.4)} Sold`;

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
                      <div className="d-flex align-items-center gap-3">
                        <div
                          className="product-img-box cursor-pointer overflow-hidden d-flex align-items-center justify-content-center"
                          onClick={() => handleViewDetails(item)}
                        >
                          {firstImage ? (
                            <img
                              src={firstImage}
                              alt={item.product_name || 'Product'}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.innerHTML = '<span class="text-secondary opacity-50"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"></path></svg></span>';
                              }}
                            />
                          ) : (
                            <BsImage />
                          )}
                        </div>
                        <div>
                          <div
                            className="product-name cursor-pointer"
                            onClick={() => handleViewDetails(item)}
                          >
                            {item.product_name || 'Product Name'}
                          </div>
                          <div className="product-sizes">{formattedSizes}</div>
                        </div>
                      </div>
                    </td>
                    <td className="fw-medium">{formattedPrice}</td>
                    <td>
                      <div className="stock-left">{stockLeft}</div>
                      <div className="stock-sold">{stockSold}</div>
                    </td>
                    <td className="category-badge">{categoryName}</td>
                    <td>
                      <span className="rating-box d-inline-flex align-items-center gap-1">
                        <BsStarFill className="text-warning" /> {rating}
                      </span>
                      <span className="reviews-count">{reviews}</span>
                    </td>
                    <td className="text-end">
                      <button
                        className="action-btn"
                        type="button"
                        title="View Detail"
                        onClick={() => handleViewDetails(item)}
                      >
                        <BsEye />
                      </button>
                      <button
                        className="action-btn"
                        type="button"
                        title="Edit"
                        onClick={() => handleEditProduct(item)}
                      >
                        <BsPencil />
                      </button>
                      <button
                        className="action-btn delete-btn"
                        type="button"
                        title="Delete"
                        onClick={() => handleDelete(item.id)}
                      >
                        <BsTrash />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
