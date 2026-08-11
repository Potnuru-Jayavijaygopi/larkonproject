import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsImage, BsCloudUpload, BsX } from 'react-icons/bs';

function AddProduct({ onNavigate }){
  const navigate = useNavigate();

  const [productName,setProductName] =useState('Men Black Slim Fit T-shirt');
  const [category,setCategory]=useState('Fashion');
  const [brand,setBrand]=useState('Larkon Fashion');
  const [weight,setWeight]=useState('300gm');
  const [gender,setGender]=useState('Men');
  const [selectedSize,setSelectedSize]=useState('S');
  const [selectedColor,setSelectedColor]=useState('navy');
  const [description,setDescription]=useState('Top in sweatshirt fabric made from a cotton blend with a soft brushed inside. Relaxed fit with dropped shoulders, long sleeves and ribbing around the neckline, cuffs and hem. Small metal text applique.');
  const [tagNumber,setTagNumber]=useState('36294007');
  const [stock,setStock]=useState('465');
  const [price,setPrice]=useState('80');
  const [discount,setDiscount]=useState('30');
  const [tax,setTax]=useState('3');

  const handlesave = (e)=>{
    e.preventDefault();
    alert('Product Updated Successfully!');
    if (navigate){
      navigate('/products/list');
    }
    else if (onNavigate){
      onNavigate('product-list');
    }
  };

  const handleReset = ()=>{
    setProductName('Men Black Slim Fit T-shirt');
    setCategory('Fashion');
    setBrand('Larkon Fashion');
    setWeight('300gm');
    setGender('Men');
    setSelectedSize('S');
    setSelectedColor('navy');
    setDescription('Top in sweatshirt fabric made from a cotton blend with a soft brushed inside. Relaxed fit with dropped shoulders, long sleeves and ribbing around the neckline, cuffs and hem. Small metal text applique.');
    setTagNumber('36294007');
    setStock('465');
    setPrice('80');
    setDiscount('30');
    setTax('3');
  };
  return(
    <form onSubmit={handlesave}>
      <div className='row g-4'>
        <div className='col-lg-4'>
          <div className='content-card p-3 mb-4 sticky-top' style={{top:'80px'}}>
            <div className='bg-light rounded-3 d-flex align-items-center justify-content-center mb-3'
            style={{height:'260px'}}
            >
              <BsImage className='fs-1 text-secondary opacity-50'/>
            </div>
            <h6 className='fw-bold text-dark mb-2'>
              {productName}<span className='text-muted font-weight-normal ms-1 small'>({category})</span>
            </h6>
            <div className='d-flex align-items-center gap-2 mb-3'>
              <span className='text-muted small'>Price :</span>
              <span className='text-decoration-line-through text-muted small'>$100</span>
              <span className='fw-bold text-dark'>${price}</span>
              <span className='text-danger small fw-bold'>({discount}% Off)</span>
            </div>
            <div className='mb-3'>
              <span className='text-muted small d-block mb-1'>Size :</span>
              <div className='d-flex gap-1'>
                {['S','M','XL','XXL'].map((sz) =>(
                  <button 
                    key={sz}
                    type='button'
                    className={`btn btn-sm ${selectedSize ===sz ? 'btn-secondary':'btn-light border'} px-2 py-0 small`}
                    onClick={() => setSelectedSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            <div className='mb-2'>
              <span className='text-muted small d-block mb-1'>Colors :</span>
              <div className='d-flex gap-2'>
                {[
                  { id: 'navy', color: '#1e2530' },
                  { id: 'amber', color: '#f59e0b' },
                  { id: 'slate', color: '#cbd5e1' },
                  { id: 'coral', color: '#ef4444' },
                ].map((colObj) => (
                  <button
                    key={colObj.id}
                    type='button'
                    className={`btn rounded-circle p-0 border ${selectedColor === colObj.id ? 'border-dark shadow-sm' :''}`}
                    style={{width:'20px',height:'20px',backgroundColor:colObj.color}}
                    onClick={() => setSelectedColor(colObj.id)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-8'>
          <div className='content-card p-3 mb-4'>
            <h6 className='fw-bold mb-3'>Add Product Photo</h6>
            <div
              className='border border-2 border-dashed rounded-3 p-4 text-center d-flex flex-column align-items-center justify-content-center'
              style={{ borderColor: '#cbd5e1', backgroundColor: '#fafafa' }}
            >
              <BsCloudUpload className='display-6 mb-2' style={{ color: '#ff6026' }} />
              <h6 className='fw-bold text-dark mb-1' style={{ fontSize: '0.85rem' }}>
                Drop your images here, or <span style={{ color: '#ff6026', cursor: 'pointer' }}>click to browse</span>
              </h6>
              <p className="text-muted small mb-0" style={{ fontSize: '0.725rem' }}>
                1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
              </p>
            </div>
          </div>

          <div className='content-card p-3 mb-4'>
            <h6 className='fw-bold mb-3'>Product Information</h6>
            <div className='row g-3'>
              <div className='col-md-6'>
                <label htmlFor="editProductName" className='form-label small text-muted'>Product Name</label>
                <input
                  id='editProductName'
                  type='text'
                  className='form-control form-control-sm'
                  value={productName}
                  onChange={(e)=> setProductName(e.target.value)}
                />
              </div>

              <div className="col-md-6">
                <label htmlFor="editCategory" className="form-label small text-muted">Product Categories</label>
                <select
                  id="editCategory"
                  className="form-select form-select-sm"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Fashion">Fashion</option>
                  <option value="Hand Bag">Hand Bag</option>
                  <option value="Cap">Cap</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </div>

              <div className="col-md-4">
                <label htmlFor="editBrand" className="form-label small text-muted">Brand</label>
                <input
                  id="editBrand"
                  type="text"
                  className="form-control form-control-sm"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="editWeight" className="form-label small text-muted">Weight</label>
                <input
                  id="editWeight"
                  type="text"
                  className="form-control form-control-sm"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="editGender" className="form-label small text-muted">Gender</label>
                <select
                  id="editGender"
                  className="form-select form-select-sm"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label small text-muted d-block">Size :</label>
                <div className="d-flex gap-1 flex-wrap">
                  {['XS', 'S', 'M', 'XL', 'XXL', '3XL'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      className={`btn btn-sm ${selectedSize === sz ? 'btn-secondary' : 'btn-outline-secondary'} px-2 py-0`}
                      onClick={() => setSelectedSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label small text-muted d-block">Colors :</label>
                <div className="d-flex gap-2">
                  {[
                    { id: 'navy', color: '#1e2530' },
                    { id: 'amber', color: '#f59e0b' },
                    { id: 'slate', color: '#cbd5e1' },
                    { id: 'coral', color: '#ef4444' },
                    { id: 'emerald', color: '#10b981' },
                    { id: 'teal', color: '#0d9488' },
                  ].map((colObj) => (
                    <button
                      key={colObj.id}
                      type="button"
                      className="btn rounded-circle p-0 border"
                      style={{ width: '22px', height: '22px', backgroundColor: colObj.color }}
                      onClick={() => setSelectedColor(colObj.id)}
                    ></button>
                  ))}
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="editDescription" className="form-label small text-muted">Description</label>
                <textarea
                  id="editDescription"
                  className="form-control form-control-sm"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="col-md-4">
                <label htmlFor="editTagNumber" className="form-label small text-muted">Tag Number</label>
                <input
                  id="editTagNumber"
                  type="text"
                  className="form-control form-control-sm"
                  value={tagNumber}
                  onChange={(e) => setTagNumber(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label htmlFor="editStock" className="form-label small text-muted">Stock</label>
                <input
                  id="editStock"
                  type="text"
                  className="form-control form-control-sm"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label small text-muted d-block">Tag</label>
                <div className="d-flex align-items-center">
                  <span className="badge bg-danger-subtle text-danger p-2 border border-danger-subtle d-inline-flex align-items-center gap-1">
                    Fashion <BsX className="cursor-pointer" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='content-card p-3 mb-4'>
            <h6 className='fw-bold mb-3'>Pricing Details</h6>
            <div className='row g-3'>
              <div className='col-md-4'>
                <label htmlFor="editPrice" className="form-label small text-muted">Price</label>
                <div className="input-group input-group-sm">
                  <span className="input-group-text">$</span>
                  <input
                    id="editPrice"
                    type="text"
                    className="form-control"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="editDiscount" className="form-label small text-muted">Discount</label>
                <div className="input-group input-group-sm">
                  <span className="input-group-text">%</span>
                  <input
                    id="editDiscount"
                    type="text"
                    className="form-control"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-md-4">
                <label htmlFor="editTax" className="form-label small text-muted">Tax</label>
                <div className="input-group input-group-sm">
                  <span className="input-group-text">%</span>
                  <input
                    id="editTax"
                    type="text"
                    className="form-control"
                    value={tax}
                    onChange={(e) => setTax(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="content-card p-3 d-flex justify-content-end gap-2">
            <button className="btn btn-outline-secondary btn-sm px-4" type="button" onClick={handleReset}>
              Reset
            </button>
            <button className="btn btn-add-product btn-sm px-4" type="submit">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
export default AddProduct