import React, { useState } from 'react';
import zaraLogo from '../../assets/logozara.png';
import locationIcon from '../../assets/location.png'; 
import mailIcon from '../../assets/mail.png';         
import phoneIcon from '../../assets/phone.png';       

export default function SellerEdit() {
  
const [formData, setFormData] = useState({
    brandTitle: 'ZARA International',
    category: 'Fashion',
    brandLink: 'www.zarafashion.co',
    location: '4604 , Philli Lane Kiowa IN 47404',
    email: 'zarafashionworld@dayrep.com',
    phone: '+243 812-801-9335',
    yearlyRevenue: 50,
    itemStock: '865',
    productSells: '4897',
    happyClient: '2826'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-vh-100 p-4" style={{ backgroundColor: '#F3F4F6' }}>
      

      <div className="d-flex flex-column flex-lg-row gap-4 align-items-start">
        

        <div 
          className="bg-white p-3 rounded-4 shadow-sm d-flex flex-column justify-content-between flex-shrink-0"
          style={{ 
            width: '366px', 
            height: '493px', 
            border: '1px solid #EAEDF1',
            boxSizing: 'border-box'
          }}
        >

          <div 
            className="rounded-4 overflow-hidden mb-2 d-flex align-items-center justify-content-center"
            style={{ backgroundColor: '#EEF2F6', height: '140px', width: '100%' }}
          >
            <img 
              src={zaraLogo} 
              alt="ZARA" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                display: 'block'
              }} 
            />
          </div>


          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '14px' }}>
              ZARA International <span className="fw-normal text-muted" style={{ fontSize: '11px' }}>(Fashion)</span>
            </h6>
            <div className="d-flex align-items-center gap-1 px-2 py-1 rounded-2" style={{ backgroundColor: '#F1F5F9', fontSize: '11px' }}>
              <span className="text-warning">★</span>
              <span className="fw-bold text-dark">4.5</span>
              <span className="text-muted">3.5k</span>
            </div>
          </div>


          <a 
            href={`https://${formData.brandLink}`} 
            target="_blank" 
            rel="noreferrer" 
            className="text-decoration-none d-block mb-2 fw-medium" 
            style={{ color: '#FF6B35', fontSize: '12px' }}
          >
            {formData.brandLink}
          </a>
          <div className="d-flex flex-column gap-2 mb-2 text-muted" style={{ fontSize: '12px' }}>
            <div className="d-flex align-items-center gap-2">
              <img src={locationIcon} alt="Loc" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
              <span>{formData.location}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={mailIcon} alt="Mail" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
              <span>{formData.email}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <img src={phoneIcon} alt="Phone" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
              <span>{formData.phone}</span>
            </div>
          </div>
          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '12px' }}>
              <span className="fw-medium text-dark">{formData.category}</span>
              <span className="fw-bold text-dark">$200k <span className="text-success">↗</span></span>
            </div>
            <div className="rounded-pill overflow-hidden" style={{ height: '7px', backgroundColor: '#EEF2F6', width: '100%' }}>
              <div 
                className="h-100 rounded-pill"
                style={{ 
                  width: '80%', 
                  backgroundColor: '#F26563',
                  backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 4px, rgba(255, 255, 255, 0.35) 4px, rgba(255, 255, 255, 0.35) 8px)`
                }} 
              />
            </div>
          </div>
          <div className="d-flex justify-content-between text-center pt-2 border-top">
            <div className="flex-fill">
              <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>{formData.itemStock}</div>
              <div style={{ fontSize: '10px', color: '#64748B' }}>Item Stock</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#EAEDF1', height: '25px' }} />
            <div className="flex-fill">
              <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>+4.5k</div>
              <div style={{ fontSize: '10px', color: '#64748B' }}>Sells</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#EAEDF1', height: '25px' }} />
            <div className="flex-fill">
              <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>+2k</div>
              <div style={{ fontSize: '10px', color: '#64748B' }}>Happy Client</div>
            </div>
          </div>

        </div>
        <div className="flex-grow-1 d-flex flex-column gap-4 w-100">
          <div className="card border-0 p-4 rounded-4 shadow-sm bg-white">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '13px' }}>Add Brand Logo</h6>
            <div 
              className="rounded-3 p-4 text-center d-flex flex-column align-items-center justify-content-center"
              style={{ border: '2px dashed #E5E7EB', backgroundColor: '#FAFAFA', minHeight: '140px', cursor: 'pointer' }}
            >              <div className="mb-2">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v9m0-9l-3 3m3-3l3 3" stroke="#FF5722" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="mb-1 fw-semibold text-dark" style={{ fontSize: '13px' }}>
                Drop your images here, or <span style={{ color: '#FF5722' }}>click to browse</span>
              </p>
              <span className="text-muted" style={{ fontSize: '11px' }}>
                1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
              </span>
            </div>
          </div>
          <div className="card border-0 p-4 rounded-4 shadow-sm bg-white">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '13px' }}>Seller Information</h6>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Brand Title</label>
                  <input 
                    type="text" 
                    name="brandTitle"
                    className="form-control form-control-sm" 
                    value={formData.brandTitle} 
                    onChange={handleChange}
                    style={{ fontSize: '12px' }} 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Product Categories</label>
                  <select 
                    name="category"
                    className="form-select form-select-sm text-dark" 
                    value={formData.category} 
                    onChange={handleChange}
                    style={{ fontSize: '12px' }}
                  >
                    <option value="Fashion">Fashion</option>
                    <option value="Electronics">Electronics</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Brand Link</label>
                  <input 
                    type="text" 
                    name="brandLink"
                    className="form-control form-control-sm" 
                    value={formData.brandLink} 
                    onChange={handleChange}
                    style={{ fontSize: '12px' }} 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Location</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-light border-end-0">
                      <img src={locationIcon} alt="Loc" style={{ width: '13px' }} />
                    </span>
                    <input 
                      type="text" 
                      name="location"
                      className="form-control border-start-0" 
                      value={formData.location} 
                      onChange={handleChange}
                      style={{ fontSize: '12px' }} 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Email</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-light border-end-0">
                      <img src={mailIcon} alt="Mail" style={{ width: '13px' }} />
                    </span>
                    <input 
                      type="email" 
                      name="email"
                      className="form-control border-start-0" 
                      value={formData.email} 
                      onChange={handleChange}
                      style={{ fontSize: '12px' }} 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Phone Number</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-light border-end-0">
                      <img src={phoneIcon} alt="Phone" style={{ width: '13px' }} />
                    </span>
                    <input 
                      type="text" 
                      name="phone"
                      className="form-control border-start-0" 
                      value={formData.phone} 
                      onChange={handleChange}
                      style={{ fontSize: '12px' }} 
                    />
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Yearly Revenue</label>
                  <input 
                    type="range" 
                    name="yearlyRevenue"
                    className="form-range" 
                    min="0" 
                    max="200" 
                    value={formData.yearlyRevenue} 
                    onChange={handleChange}
                    style={{ accentColor: '#FF5722' }}
                  />
                  <div className="row g-2 mt-1">
                    <div className="col-6">
                      <input type="text" className="form-control form-control-sm text-center text-muted bg-light" value="$ 0" readOnly style={{ fontSize: '11px' }} />
                    </div>
                    <div className="col-6">
                      <input type="text" className="form-control form-control-sm text-center text-muted bg-light" value="$ 200" readOnly style={{ fontSize: '11px' }} />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="card border-0 p-4 rounded-4 shadow-sm bg-white">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '13px' }}>Seller Product Information</h6>
            <form>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Items Stock</label>
                  <input 
                    type="text" 
                    name="itemStock"
                    className="form-control form-control-sm" 
                    value={formData.itemStock} 
                    onChange={handleChange}
                    style={{ fontSize: '12px' }} 
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Product Sells</label>
                  <input 
                    type="text" 
                    name="productSells"
                    className="form-control form-control-sm" 
                    value={formData.productSells} 
                    onChange={handleChange}
                    style={{ fontSize: '12px' }} 
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Happy Client</label>
                  <input 
                    type="text" 
                    name="happyClient"
                    className="form-control form-control-sm" 
                    value={formData.happyClient} 
                    onChange={handleChange}
                    style={{ fontSize: '12px' }} 
                  />
                </div>
              </div>
            </form>
          </div>

          <div 
            className="rounded-3 p-3 d-flex justify-content-end align-items-center gap-3" 
            style={{ backgroundColor: '#EEF2F6' }}
          >
            <button 
              type="button" 
              className="btn btn-sm bg-white border fw-medium px-4" 
              style={{ 
                color: '#64748B', 
                fontSize: '13px', 
                borderColor: '#CBD5E1', 
                borderRadius: '8px',
                minWidth: '120px'
              }}
            >
              Save Change
            </button>
            <button 
              type="button" 
              className="btn btn-sm text-white fw-medium px-4" 
              style={{ 
                backgroundColor: '#FF6B35', 
                fontSize: '13px', 
                border: 'none', 
                borderRadius: '8px',
                minWidth: '120px'
              }}
            >
              Cancel
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}