import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const API_BASE = "http://localhost:3000/api/v1";

const getAuthToken = async () => {
  let token = localStorage.getItem("token") || localStorage.getItem("accessToken");
  if (token) return token;
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "john@lavitra.com", password: "123456" })
    });
    const data = await res.json();
    if (data && data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
      return data.accessToken;
    }
  } catch (err) {
    console.error("Auto login failed:", err);
  }
  return null;
};

export default function SellerCreate() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [revenueRange, setRevenueRange] = useState(50);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [formData, setFormData] = useState({
    brandTitle: '',
    category: 'Fashion',
    brandLink: '',
    location: '',
    email: '',
    phone: '',
    itemStock: '865',
    productSells: '4897',
    happyClient: '2826'
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setUploadedImage(previewUrl);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setUploadedImage(previewUrl);
    }
  };

  const handleCreateSeller = async (e) => {
    e.preventDefault();
    if (!formData.brandTitle || !formData.email) {
      setMessage({ type: 'warning', text: 'Brand Title and Email are required!' });
      return;
    }

    try {
      setSaving(true);
      setMessage(null);
      const token = await getAuthToken();
      const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      };

      const res = await fetch(`${API_BASE}/sellers`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          business_name: formData.brandTitle,
          owner_name: formData.brandTitle.split(' ')[0] || 'Seller',
          email: formData.email,
          phone: formData.phone || '9876543210',
          website: formData.brandLink ? `https://${formData.brandLink.replace(/^https?:\/\//, '')}` : 'https://www.sellerstore.co',
          logo_url: uploadedImage || null,
          category: formData.category || 'Fashion',
          address: formData.location || '4604, Main Lane',
          city: 'New York',
          state: 'NY',
          country: 'USA',
          postal_code: '10001',
          description: `${formData.brandTitle} official store`
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setMessage({ type: 'success', text: 'Seller created successfully!' });
        setTimeout(() => navigate('/sellers/list'), 1200);
      } else {
        setMessage({ type: 'danger', text: data.message || 'Failed to create seller' });
      }
    } catch (err) {
      console.error("Error creating seller:", err);
      setMessage({ type: 'danger', text: 'Failed to create seller' });
    } finally {
      setSaving(false);
    }
  };

  const previewName = formData.brandTitle || 'ZARA International';
  const previewCategory = formData.category || 'Fashion';
  const previewLink = formData.brandLink || 'www.zarafashion.co';
  const previewLocation = formData.location || '4604 , Philli Lane Kiowa IN 47404';
  const previewEmail = formData.email || 'zarafashionworld@dayrep.com';
  const previewPhone = formData.phone || '+243 812-801-9335';

  return (
    <div className="container-fluid p-4" style={{ backgroundColor: '#F8F9FA', minHeight: '100vh' }}>
      
      {message && (
        <div className={`alert alert-${message.type} py-2 mb-3 rounded-3`} style={{ fontSize: '13px' }}>
          {message.text}
        </div>
      )}

      <div className="d-flex flex-column flex-lg-row gap-4 align-items-start">
        
        {/* Left Live Preview Card */}
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
          </div>

          <div className="d-flex align-items-center justify-content-between mb-1">
            <h6 className="fw-bold mb-0 text-dark" style={{ fontSize: '14px' }}>
              {previewName} <span className="fw-normal text-muted" style={{ fontSize: '11px' }}>({previewCategory})</span>
            </h6>
            <div className="d-flex align-items-center gap-1 px-2 py-1 rounded-2" style={{ backgroundColor: '#F1F5F9', fontSize: '11px' }}>
              <span className="text-warning">★</span>
              <span className="fw-bold text-dark">4.5</span>
              <span className="text-muted">3.5k</span>
            </div>
          </div>

          <a 
            href={`https://${previewLink.replace(/^https?:\/\//, '')}`} 
            target="_blank" 
            rel="noreferrer" 
            className="text-decoration-none d-block mb-2 fw-medium" 
            style={{ color: '#FF6B35', fontSize: '12px' }}
          >
            {previewLink}
          </a>

          <div className="d-flex flex-column gap-2 mb-2 text-muted" style={{ fontSize: '12px' }}>
            <div className="d-flex align-items-center gap-2">
              <span className="text-truncate">{previewLocation}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="text-truncate">{previewEmail}</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="text-truncate">{previewPhone}</span>
            </div>
          </div>

          <div className="mb-2">
            <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '12px' }}>
              <span className="fw-medium text-dark">{previewCategory}</span>
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
              <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>+{formData.productSells || '4.5k'}</div>
              <div style={{ fontSize: '10px', color: '#64748B' }}>Sells</div>
            </div>
            <div style={{ width: '1px', backgroundColor: '#EAEDF1', height: '25px' }} />
            <div className="flex-fill">
              <div className="fw-bold text-dark" style={{ fontSize: '13px' }}>+{formData.happyClient || '2k'}</div>
              <div style={{ fontSize: '10px', color: '#64748B' }}>Happy Client</div>
            </div>
          </div>

        </div>

        {/* Right Form Panels */}
        <div className="flex-grow-1 d-flex flex-column gap-4 w-100">

          <div className="card border-0 p-4 rounded-4 shadow-sm bg-white">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '13px' }}>Add Brand Logo</h6>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              accept="image/*" 
              style={{ display: 'none' }} 
            />
            <div 
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className="rounded-3 p-4 text-center d-flex flex-column align-items-center justify-content-center"
              style={{ border: '2px dashed #E5E7EB', backgroundColor: '#FAFAFA', minHeight: '140px', cursor: 'pointer' }}
            >
              {uploadedImage ? (
                <div className="d-flex flex-column align-items-center gap-2">
                  <p className="mb-0 fw-semibold" style={{ fontSize: '12px', color: '#FF5722' }}>Image selected! Click to change</p>
                </div>
              ) : (
                <>
                  <div className="mb-2">
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
                </>
              )}
            </div>
          </div>

          <div className="card border-0 p-4 rounded-4 shadow-sm bg-white">
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '13px' }}>Seller Information</h6>
            <form onSubmit={handleCreateSeller}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Brand Title *</label>
                  <input 
                    type="text" 
                    name="brandTitle"
                    required
                    className="form-control form-control-sm" 
                    placeholder="Enter Title" 
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
                    <option value="Watch">Watch</option>
                    <option value="General">General</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Brand Link</label>
                  <input 
                    type="text" 
                    name="brandLink"
                    className="form-control form-control-sm" 
                    placeholder="www.****" 
                    value={formData.brandLink}
                    onChange={handleChange}
                    style={{ fontSize: '12px' }} 
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Location</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-light"></span>
                    <input 
                      type="text" 
                      name="location"
                      className="form-control" 
                      placeholder="Add Address" 
                      value={formData.location}
                      onChange={handleChange}
                      style={{ fontSize: '12px' }} 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Email *</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-light"></span>
                    <input 
                      type="email" 
                      name="email"
                      required
                      className="form-control" 
                      placeholder="Add Email" 
                      value={formData.email}
                      onChange={handleChange}
                      style={{ fontSize: '12px' }} 
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted mb-1" style={{ fontSize: '11px' }}>Phone Number</label>
                  <div className="input-group input-group-sm">
                    <span className="input-group-text bg-light"></span>
                    <input 
                      type="text" 
                      name="phone"
                      className="form-control" 
                      placeholder="Phone number" 
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
                    className="form-range" 
                    min="0" 
                    max="200" 
                    value={revenueRange} 
                    onChange={(e) => setRevenueRange(e.target.value)}
                    style={{ accentColor: '#FF5722' }}
                  />
                  <div className="row g-2 mt-1">
                    <div className="col-6">
                      <input type="text" className="form-control form-control-sm text-center text-muted bg-light" value={`$ 0`} readOnly style={{ fontSize: '11px' }} />
                    </div>
                    <div className="col-6">
                      <input type="text" className="form-control form-control-sm text-center text-muted bg-light" value={`$ ${revenueRange}`} readOnly style={{ fontSize: '11px' }} />
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
                    placeholder="000" 
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
                    placeholder="000" 
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
                    placeholder="000" 
                    value={formData.happyClient} 
                    onChange={handleChange}
                    style={{ fontSize: '12px' }} 
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="rounded-3 p-3 d-flex justify-content-end align-items-center gap-3" style={{ backgroundColor: '#EEF2F6' }}>
            <button 
              type="button" 
              onClick={handleCreateSeller}
              disabled={saving}
              className="btn btn-sm bg-white border fw-medium px-4 cursor-pointer" 
              style={{ color: '#64748B', fontSize: '13px', borderColor: '#CBD5E1', borderRadius: '8px', minWidth: '120px' }}
            >
              {saving ? 'Saving...' : 'Save Change'}
            </button>
            <button 
              type="button" 
              onClick={() => navigate('/sellers/list')}
              className="btn btn-sm text-white fw-medium px-4 cursor-pointer" 
              style={{ backgroundColor: '#FF6B35', fontSize: '13px', border: 'none', borderRadius: '8px', minWidth: '120px' }}
            >
              Cancel
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}