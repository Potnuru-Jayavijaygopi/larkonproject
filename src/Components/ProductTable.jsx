import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlusLg, BsImage, BsStarFill, BsEye, BsPencil, BsTrash } from 'react-icons/bs';

function ProductTable({ onNavigate }) {
  const navigate = useNavigate();

  const initialProducts = [
    { id: 1, name: 'Black T-shirt', sizes: 'Size : S , M , L , Xl', price: '$80.00', stockLeft: '486 Item Left', stockSold: '155 Sold', category: 'Fashion', rating: '4.5', reviews: '55 Review' },
    { id: 2, name: 'Olive Green Leather Bag', sizes: 'Size : S , M', price: '$136.00', stockLeft: '784 Item Left', stockSold: '674 Sold', category: 'Hand Bag', rating: '4.1', reviews: '143 Review' },
    { id: 3, name: 'Women Golden Dress', sizes: 'Size : S , M', price: '$219.00', stockLeft: '769 Item Left', stockSold: '180 Sold', category: 'Fashion', rating: '4.4', reviews: '174 Review' },
    { id: 4, name: 'Gray Cap For Men', sizes: 'Size : S , M , L', price: '$76.00', stockLeft: '571 Item Left', stockSold: '87 Sold', category: 'Cap', rating: '4.2', reviews: '23 Review' },
    { id: 5, name: 'Dark Green Cargo Pant', sizes: 'Size : S , M , L , Xl', price: '$110.00', stockLeft: '241 Item Left', stockSold: '342 Sold', category: 'Fashion', rating: '4.4', reviews: '109 Review' },
    { id: 6, name: 'Orange Multi Color Headphone', sizes: 'Size : S , M', price: '$231.00', stockLeft: '821 Item Left', stockSold: '231 Sold', category: 'Electronics', rating: '4.2', reviews: '200 Review' },
    { id: 7, name: "Kid's Yellow Shoes", sizes: 'Size : 18 , 19 , 20 , 21', price: '$89.00', stockLeft: '321 Item Left', stockSold: '681 Sold', category: 'Shoes', rating: '4.5', reviews: '321 Review' },
    { id: 8, name: 'Men Dark Brown Wallet', sizes: 'Size : S , M', price: '$132.00', stockLeft: '190 Item Left', stockSold: '212 Sold', category: 'Wallet', rating: '4.1', reviews: '190 Review' },
    { id: 9, name: 'Sky Blue Sunglass', sizes: 'Size : S , M', price: '$77.00', stockLeft: '784 Item Left', stockSold: '443 Sold', category: 'Sunglass', rating: '3.5', reviews: '298 Review' },
    { id: 10, name: "Kid's Yellow T-shirt", sizes: 'Size : S', price: '$110.00', stockLeft: '650 Item Left', stockSold: '365 Sold', category: 'Fashion', rating: '4.1', reviews: '156 Review' },
    { id: 11, name: 'White Rubber Band Smart Watch', sizes: 'Size : S , M', price: '$77.00', stockLeft: '98 Item Left', stockSold: '241 Sold', category: 'Electronics', rating: '3.4', reviews: '201 Review' },
    { id: 12, name: 'Men Brown Leather Shoes', sizes: 'Size : 40 , 41 , 42 , 43', price: '$222.00', stockLeft: '176 Item Left', stockSold: '658 Sold', category: 'Shoes', rating: '4.1', reviews: '370 Review' },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedIds, setSelectedIds] = useState([]);

  const handleSelectAll = (e) => {
    setSelectedIds(e.target.checked ? products.map((p) => p.id) : []);
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleAddProduct = () => {
    if (navigate) {
      navigate('/products/create');
    } else if (onNavigate) {
      onNavigate('create-product');
    }
  };

  const handleViewDetails = () => {
    if (navigate) {
      navigate('/products/details');
    } else if (onNavigate) {
      onNavigate('product-details');
    }
  };

  const handleEditProduct = () => {
    if (navigate) {
      navigate('/products/add');
    } else if (onNavigate) {
      onNavigate('add-product');
    }
  };

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
          <select className="form-select filter-select" style={{ width: 'auto' }}>
            <option value="this-month">This Month</option>
            <option value="last-month">Last Month</option>
            <option value="this-year">This Year</option>
          </select>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-custom align-middle">
          <thead>
            <tr>
              <th style={{ width: '40px' }}>
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={selectedIds.length === products.length && products.length > 0}
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
            {products.map((item) => (
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
                      className="product-img-box cursor-pointer"
                      onClick={handleViewDetails}
                    >
                      <BsImage />
                    </div>
                    <div>
                      <div
                        className="product-name cursor-pointer"
                        onClick={handleViewDetails}
                      >
                        {item.name}
                      </div>
                      <div className="product-sizes">{item.sizes}</div>
                    </div>
                  </div>
                </td>
                <td className="fw-medium">{item.price}</td>
                <td>
                  <div className="stock-left">{item.stockLeft}</div>
                  <div className="stock-sold">{item.stockSold}</div>
                </td>
                <td className="category-badge">{item.category}</td>
                <td>
                  <span className="rating-box d-inline-flex align-items-center gap-1">
                    <BsStarFill className="text-warning" /> {item.rating}
                  </span>
                  <span className="reviews-count">{item.reviews}</span>
                </td>
                <td className="text-end">
                  <button
                    className="action-btn"
                    type="button"
                    title="View Detail"
                    onClick={handleViewDetails}
                  >
                    <BsEye />
                  </button>
                  <button
                    className="action-btn"
                    type="button"
                    title="Edit"
                    onClick={handleEditProduct}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
