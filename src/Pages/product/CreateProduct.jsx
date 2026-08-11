import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsImage, BsCloudArrowUp, BsX } from 'react-icons/bs';

function CreateProduct({ onNavigate }) {
  const navigate = useNavigate();

  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('navy');
  const [description, setDescription] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [tax, setTax] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('New Product Created Successfully!');
    if (navigate) {
      navigate('/products/list');
    } else if (onNavigate) {
      onNavigate('product-list');
    }
  };

  const handleCancel = () => {
    if (navigate) {
      navigate('/products/list');
    } else if (onNavigate) {
      onNavigate('product-list');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="content-card p-3 mb-4 sticky-top" style={{ top: '80px' }}>
            <div
              className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3"
              style={{ height: '240px' }}
            >
              <BsImage className="fs-1 text-secondary opacity-50" />
            </div>

            <h6 className="fw-bold text-dark mb-1">
              {productName || 'Men Black Slim Fit T-shirt'}
              <span className="text-muted font-weight-normal ms-1 small">(Fashion)</span>
            </h6>

            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="text-muted small">Price :</span>
              <span className="text-decoration-line-through text-muted small">$100</span>
              <span className="fw-bold text-dark">${price || '80'}</span>
              <span className="text-danger small font-weight-bold">(30% Off)</span>
            </div>

            <div className="mb-3">
              <span className="text-muted small d-block mb-1">Size :</span>
              <div className="d-flex gap-1">
                {['S', 'M', 'XL', 'XXL'].map((sizeOption) => (
                  <button
                    key={sizeOption}
                    type="button"
                    className={`btn btn-sm ${selectedSize === sizeOption ? 'btn-secondary' : 'btn-light border'} px-2 py-0 small`}
                    onClick={() => setSelectedSize(sizeOption)}
                  >
                    {sizeOption}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <span className="text-muted small d-block mb-1">Colors :</span>
              <div className="d-flex gap-2">
                {['navy', 'amber', 'slate', 'coral'].map((col) => (
                  <button
                    key={col}
                    type="button"
                    className={`btn rounded-circle p-0 border ${selectedColor === col ? 'border-dark shadow-sm' : ''}`}
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: col === 'navy' ? '#1e2530' : col === 'amber' ? '#f59e0b' : col === 'slate' ? '#cbd5e1' : '#ef4444',
                    }}
                    onClick={() => setSelectedColor(col)}
                  ></button>
                ))}
              </div>
            </div>

            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary btn-sm flex-grow-1" type="submit">
                Create Product
              </button>
              <button className="btn btn-add-product btn-sm flex-grow-1" type="button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-8">

          <div className="content-card p-3 mb-4">
            <h6 className="fw-bold mb-3">Add Product Photo</h6>
            <div className="border border-2 border-dashed rounded-3 p-5 text-center bg-light">
              <BsCloudArrowUp className="text-danger fs-1" />
              <h6 className="fw-bold text-dark mb-1 mt-2">
                Drop your images here, or <span className="text-danger cursor-pointer">click to browse</span>
              </h6>
              <span className="text-muted small">1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed</span>
            </div>
          </div>

          <div className="content-card p-3 mb-4">
            <h6 className="fw-bold mb-3">Product Information</h6>

            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputProductName" className="form-label small text-muted">Product Name</label>
                <input
                  id="inputProductName"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Items Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="selectCategory" className="form-label small text-muted">Product Categories</label>
                <select
                  id="selectCategory"
                  className="form-select form-select-sm"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Choose a categories</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Hand Bag">Hand Bag</option>
                  <option value="Cap">Cap</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="inputBrand" className="form-label small text-muted">Brand</label>
                <input
                  id="inputBrand"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Brand Name"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="inputWeight" className="form-label small text-muted">Weight</label>
                <input
                  id="inputWeight"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="In gm & kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="selectGender" className="form-label small text-muted">Gender</label>
                <select
                  id="selectGender"
                  className="form-select form-select-sm"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>

              <div className="col-12">
                <label htmlFor="inputDescription" className="form-label small text-muted">Description</label>
                <textarea
                  id="inputDescription"
                  className="form-control form-control-sm"
                  rows="3"
                  placeholder="Short description about the product"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="col-md-4">
                <label htmlFor="inputTagNumber" className="form-label small text-muted">Tag Number</label>
                <input
                  id="inputTagNumber"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="g******"
                  value={tagNumber}
                  onChange={(e) => setTagNumber(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="inputStock" className="form-label small text-muted">Stock</label>
                <input
                  id="inputStock"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Quantity"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="inputTag" className="form-label small text-muted">Tag</label>
                <div className="d-flex align-items-center">
                  <span className="badge bg-danger-subtle text-danger p-2 border border-danger-subtle d-inline-flex align-items-center gap-1">
                    Fashion <BsX className="cursor-pointer" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card p-3 mb-4">
            <h6 className="fw-bold mb-3">Pricing Details</h6>
            <div className="row g-3">
              <div className="col-md-4">
                <label htmlFor="inputPrice" className="form-label small text-muted">Price</label>
                <div className="input-group input-group-sm">
                  <span className="input-group-text">$</span>
                  <input
                    id="inputPrice"
                    type="text"
                    className="form-control"
                    placeholder="000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="inputDiscount" className="form-label small text-muted">Discount</label>
                <div className="input-group input-group-sm">
                  <span className="input-group-text">%</span>
                  <input
                    id="inputDiscount"
                    type="text"
                    className="form-control"
                    placeholder="000"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="inputTax" className="form-label small text-muted">Tax</label>
                <div className="input-group input-group-sm">
                  <span className="input-group-text">%</span>
                  <input
                    id="inputTax"
                    type="text"
                    className="form-control"
                    placeholder="000"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="content-card p-3 d-flex justify-content-end gap-2">
            <button className="btn btn-outline-secondary btn-sm px-4" type="submit">
              Create Product
            </button>
            <button className="btn btn-add-product btn-sm px-4" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateProduct;
