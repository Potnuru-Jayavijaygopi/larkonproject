import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsImage, BsCloudUpload, BsX } from 'react-icons/bs';
import { productAPI, categoryAPI } from '../../services/api';

function CreateProduct({ onNavigate }) {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [categoriesList, setCategoriesList] = useState([]);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('Men');
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('navy');
  const [description, setDescription] = useState('');
  const [tagNumber, setTagNumber] = useState('');
  const [stock, setStock] = useState('50');
  const [price, setPrice] = useState('80');
  const [discount, setDiscount] = useState('30');
  const [tax, setTax] = useState('10');

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    categoryAPI
      .getAll()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setCategoriesList(data);
          setCategory(String(data[0].id));
        }
      })
      .catch((err) => console.warn('Could not load categories:', err));
  }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setSelectedFiles(files);
      const urls = files.map((file) => URL.createObjectURL(file));
      setPreviewImages(urls);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles(files);
      const urls = files.map((file) => URL.createObjectURL(file));
      setPreviewImages(urls);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName.trim()) {
      setErrorMsg('Product name is required');
      return;
    }

    try {
      setSubmitting(true);
      setErrorMsg('');

      const selectedCatObj = categoriesList.find(
        (c) => String(c.id) === String(category) || c.category_name === category
      );
      const catId = selectedCatObj ? selectedCatObj.id : 1;
      const catName = selectedCatObj ? selectedCatObj.category_name : 'Fashion';

      const payload = {
        product_name: productName.trim(),
        category_id: parseInt(catId) || 1,
        seller_id: 1,
        brand: brand.trim() || 'Larkon Fashion',
        weight: weight.trim() || '500g',
        gender: gender || 'Men',
        size: Array.isArray(selectedSize)
          ? selectedSize
          : typeof selectedSize === 'string' && selectedSize.includes(',')
          ? selectedSize.split(',').map((s) => s.trim())
          : [selectedSize || 'M'],
        color: selectedColor || 'navy',
        description:
          description.trim() ||
          'Top in sweatshirt fabric made from a cotton blend with a soft brushed inside.',
        tag_number:
          tagNumber.trim() || `TAG${Math.floor(1000 + Math.random() * 9000)}`,
        stock: parseInt(stock) || 0,
        tag: catName,
        price: parseFloat(price) || 0,
        tax: parseFloat(tax) || 0,
        discount: parseFloat(discount) || 0,
        status: 'active',
        image: previewImages.length > 0 ? previewImages : []
      };

      const created = await productAPI.create(payload);

      // If physical image files selected, upload to backend Cloudinary
      if (selectedFiles.length > 0 && created?.id) {
        try {
          await productAPI.uploadImages(created.id, selectedFiles);
        } catch (uploadErr) {
          console.warn('Image upload error:', uploadErr);
        }
      }

      alert('New Product Created Successfully!');
      if (navigate) {
        navigate('/products/list');
      } else if (onNavigate) {
        onNavigate('product-list');
      }
    } catch (err) {
      console.error('Failed to create product:', err);
      setErrorMsg(err.message || 'Failed to create product. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    if (navigate) {
      navigate('/products/list');
    } else if (onNavigate) {
      onNavigate('product-list');
    }
  };

  const selectedCategoryName =
    categoriesList.find(
      (c) => String(c.id) === String(category) || c.category_name === category
    )?.category_name || 'Fashion';

  return (
    <form onSubmit={handleSubmit}>
      {errorMsg && (
        <div className="alert alert-danger mb-3 py-2 small">{errorMsg}</div>
      )}

      <div className="row g-4">
        <div className="col-lg-4">
          <div
            className="content-card p-3 mb-4 sticky-top"
            style={{ top: '80px' }}
          >
            <div
              className="bg-light rounded-3 d-flex align-items-center justify-content-center mb-3 overflow-hidden"
              style={{ height: '240px' }}
            >
              {previewImages.length > 0 ? (
                <img
                  src={previewImages[0]}
                  alt="Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                <BsImage className="fs-1 text-secondary opacity-50" />
              )}
            </div>

            <h6 className="fw-bold text-dark mb-1">
              {productName || 'Men Black Slim Fit T-shirt'}
              <span className="text-muted font-weight-normal ms-1 small">
                ({selectedCategoryName})
              </span>
            </h6>

            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="text-muted small">Price :</span>
              <span className="text-decoration-line-through text-muted small">
                ${(parseFloat(price || 80) * 1.3).toFixed(2)}
              </span>
              <span className="fw-bold text-dark">${price || '80'}</span>
              <span className="text-danger small font-weight-bold">
                ({discount || '30'}% Off)
              </span>
            </div>

            <div className="mb-3">
              <span className="text-muted small d-block mb-1">Size :</span>
              <div className="d-flex gap-1">
                {['S', 'M', 'XL', 'XXL'].map((sizeOption) => (
                  <button
                    key={sizeOption}
                    type="button"
                    className={`btn btn-sm ${
                      selectedSize === sizeOption
                        ? 'btn-secondary'
                        : 'btn-light border'
                    } px-2 py-0 small`}
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
                    className={`btn rounded-circle p-0 border ${
                      selectedColor === col ? 'border-dark shadow-sm' : ''
                    }`}
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor:
                        col === 'navy'
                          ? '#1e2530'
                          : col === 'amber'
                          ? '#f59e0b'
                          : col === 'slate'
                          ? '#cbd5e1'
                          : '#ef4444'
                    }}
                    onClick={() => setSelectedColor(col)}
                  ></button>
                ))}
              </div>
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-outline-secondary btn-sm flex-grow-1"
                type="submit"
                disabled={submitting}
              >
                {submitting ? 'Creating...' : 'Create Product'}
              </button>
              <button
                className="btn btn-add-product btn-sm flex-grow-1"
                type="button"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="content-card p-3 mb-4">
            <h6 className="fw-bold mb-3">Add Product Photo</h6>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept="image/*"
              multiple
              onChange={handleFileChange}
            />
            <div
              className="border border-2 border-dashed rounded-3 p-4 text-center d-flex flex-column align-items-center justify-content-center cursor-pointer"
              style={{ borderColor: '#cbd5e1', backgroundColor: '#fafafa' }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <BsCloudUpload
                className="display-6 mb-2"
                style={{ color: '#ff6026' }}
              />
              <h6
                className="fw-bold text-dark mb-1"
                style={{ fontSize: '0.85rem' }}
              >
                Drop your images here, or{' '}
                <span style={{ color: '#ff6026', cursor: 'pointer' }}>
                  click to browse
                </span>
              </h6>
              <p
                className="text-muted small mb-0"
                style={{ fontSize: '0.725rem' }}
              >
                1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
              </p>
              {selectedFiles.length > 0 && (
                <div className="mt-2 small text-success fw-medium">
                  {selectedFiles.length} file(s) selected
                </div>
              )}
            </div>
          </div>

          <div className="content-card p-3 mb-4">
            <h6 className="fw-bold mb-3">Product Information</h6>

            <div className="row g-3">
              <div className="col-md-6">
                <label
                  htmlFor="inputProductName"
                  className="form-label small text-muted"
                >
                  Product Name
                </label>
                <input
                  id="inputProductName"
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Items Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6">
                <label
                  htmlFor="selectCategory"
                  className="form-label small text-muted"
                >
                  Product Categories
                </label>
                <select
                  id="selectCategory"
                  className="form-select form-select-sm"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Choose a categories</option>
                  {categoriesList.length > 0 ? (
                    categoriesList.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.category_name || cat.name}
                      </option>
                    ))
                  ) : (
                    <>
                      <option value="Fashion">Fashion</option>
                      <option value="Hand Bag">Hand Bag</option>
                      <option value="Cap">Cap</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Shoes">Shoes</option>
                    </>
                  )}
                </select>
              </div>

              <div className="col-md-4">
                <label
                  htmlFor="inputBrand"
                  className="form-label small text-muted"
                >
                  Brand
                </label>
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
                <label
                  htmlFor="inputWeight"
                  className="form-label small text-muted"
                >
                  Weight
                </label>
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
                <label
                  htmlFor="selectGender"
                  className="form-label small text-muted"
                >
                  Gender
                </label>
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

              <div className="col-md-6">
                <label className="form-label small text-muted d-block">
                  Size :
                </label>
                <div className="d-flex gap-1 flex-wrap">
                  {['XS', 'S', 'M', 'XL', 'XXL', '3XL'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      className={`btn btn-sm ${
                        selectedSize === sz
                          ? 'btn-secondary'
                          : 'btn-outline-secondary'
                      } px-2 py-0`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label small text-muted d-block">
                  Colors :
                </label>
                <div className="d-flex gap-2">
                  {[
                    { id: 'navy', color: '#1e2530' },
                    { id: 'amber', color: '#f59e0b' },
                    { id: 'slate', color: '#cbd5e1' },
                    { id: 'coral', color: '#ef4444' },
                    { id: 'emerald', color: '#10b981' },
                    { id: 'teal', color: '#0d9488' }
                  ].map((colObj) => (
                    <button
                      key={colObj.id}
                      type="button"
                      className={`btn rounded-circle p-0 border ${
                        selectedColor === colObj.id
                          ? 'border-dark shadow-sm'
                          : ''
                      }`}
                      style={{
                        width: '22px',
                        height: '22px',
                        backgroundColor: colObj.color
                      }}
                      onClick={() => setSelectedColor(colObj.id)}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="col-12">
                <label
                  htmlFor="inputDescription"
                  className="form-label small text-muted"
                >
                  Description
                </label>
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
                <label
                  htmlFor="inputTagNumber"
                  className="form-label small text-muted"
                >
                  Tag Number
                </label>
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
                <label
                  htmlFor="inputStock"
                  className="form-label small text-muted"
                >
                  Stock
                </label>
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
                <label
                  htmlFor="inputTag"
                  className="form-label small text-muted"
                >
                  Tag
                </label>
                <div className="d-flex align-items-center">
                  <span className="badge bg-danger-subtle text-danger p-2 border border-danger-subtle d-inline-flex align-items-center gap-1">
                    {selectedCategoryName}{' '}
                    <BsX
                      className="cursor-pointer"
                      onClick={() => setCategory('')}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="content-card p-3 mb-4">
            <h6 className="fw-bold mb-3">Pricing Details</h6>
            <div className="row g-3">
              <div className="col-md-4">
                <label
                  htmlFor="inputPrice"
                  className="form-label small text-muted"
                >
                  Price
                </label>
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
                <label
                  htmlFor="inputDiscount"
                  className="form-label small text-muted"
                >
                  Discount
                </label>
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
                <label
                  htmlFor="inputTax"
                  className="form-label small text-muted"
                >
                  Tax
                </label>
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
            <button
              className="btn text-white btn-sm px-4 fw-medium border-0"
              type="submit"
              style={{ backgroundColor: '#ff5e29' }}
              disabled={submitting}
            >
              {submitting ? 'Creating Product...' : 'Create Product'}
            </button>
            <button
              className="btn btn-outline-secondary btn-sm px-4"
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CreateProduct;
