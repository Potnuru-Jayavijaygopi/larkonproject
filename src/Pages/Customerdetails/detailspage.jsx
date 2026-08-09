import React from 'react';

import imageIcon from '../../assets/image.png'; 
import settingsIcon from '../../assets/settings1.png';
import invoiceIcon from '../../assets/invoices.png';
import ordersIcon from '../../assets/ordericon.png';     
import expensesIcon from '../../assets/expenses.png'; 

export default function DetailsPage() {
  return (
    <div className="container-fluid p-3 min-vh-100 bg-light">
      
      <div className="row g-3 mb-3">
        

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 bg-white h-100 overflow-hidden d-flex flex-column justify-content-between">
            <div 
              className="position-relative" 
              style={{ height: '120px', background: 'linear-gradient(135deg, #ff5e36, #ffa248)' }}
            >
              <div 
                className="position-absolute shadow-sm overflow-hidden d-flex align-items-center justify-content-center"
                style={{ 
                  width: '66px', 
                  height: '66px', 
                  borderRadius: '50%', 
                  backgroundColor: '#D9D9D9',
                  border: '3px solid #ffffff',
                  bottom: '-33px', 
                  left: '24px'
                }}
              >
                <img src={imageIcon} alt="Avatar" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
              </div>
            </div>

            <div className="p-4 pt-5 d-flex flex-column justify-content-between flex-grow-1">
              <div>
                <h5 className="fw-bold text-dark mb-1 d-flex align-items-center gap-1" style={{ fontSize: '18px' }}>
                  Michael A. Miner <span className="text-success ms-1" style={{ fontSize: '15px' }}>✔</span>
                </h5>
                <p className="mb-3" style={{ color: '#ff6b35', fontSize: '12px', fontWeight: '500' }}>@michael_cus_2024</p>
                <div className="small text-muted" style={{ fontSize: '13px', lineHeight: '2' }}>
                  <p className="mb-1"><strong className="text-dark">Email : </strong><span className="text-secondary ms-1">michaelaminer@dayrep.com</span></p>
                  <p className="mb-0"><strong className="text-dark">Phone : </strong><span className="text-secondary ms-1">+28 (57) 760-010-27</span></p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2 pt-3 border-top mt-4">
                <button className="btn text-white fw-medium flex-fill py-2" style={{ backgroundColor: '#ff6b35', fontSize: '13px', borderRadius: '8px' }}>Send Message</button>
                <button className="btn btn-light text-secondary fw-medium flex-fill py-2" style={{ fontSize: '13px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>Analytics</button>
                <button className="btn btn-light text-secondary py-2 px-3" style={{ fontSize: '13px', backgroundColor: '#f3f4f6', borderRadius: '8px' }}>✏️</button>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-8 d-flex flex-column gap-3">
          

          <div className="row g-3">

            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-3 p-3 flex-row justify-content-between align-items-center bg-white">
                <div>
                  <p className="text-muted mb-1 small fw-medium" style={{ fontSize: '13px' }}>Total Invoice</p>
                  <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: '22px' }}>234</h4>
                </div>
                <div 
                  className="d-flex align-items-center justify-content-center flex-shrink-0" 
                  style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#FFF0EA', padding: '12px' }}
                >
                  <img src={invoiceIcon} alt="Invoice Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-3 p-3 flex-row justify-content-between align-items-center bg-white">
                <div>
                  <p className="text-muted mb-1 small fw-medium" style={{ fontSize: '13px' }}>Total Order</p>
                  <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: '22px' }}>219</h4>
                </div>
                <div 
                  className="d-flex align-items-center justify-content-center flex-shrink-0" 
                  style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#FFF0EA', padding: '12px' }}
                >
                  <img src={ordersIcon} alt="Order Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-3 p-3 flex-row justify-content-between align-items-center bg-white">
                <div>
                  <p className="text-muted mb-1 small fw-medium" style={{ fontSize: '13px' }}>Total Expense</p>
                  <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: '22px' }}>$2,189</h4>
                </div>
                <div 
                  className="d-flex align-items-center justify-content-center flex-shrink-0" 
                  style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#FFF0EA', padding: '12px' }}
                >
                  <img src={expensesIcon} alt="Expense Icon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white flex-grow-1">
            <h6 className="fw-semibold text-dark mb-3">Transaction History</h6>
            <div className="table-responsive">
              <table className="table align-middle table-hover text-nowrap mb-0" style={{ fontSize: '12px' }}>
                <thead className="table-light text-muted">
                  <tr>
                    <th>Invoice ID</th>
                    <th>Status</th>
                    <th>Total Amount</th>
                    <th>Due Date</th>
                    <th>Payment Method</th>
                  </tr>
                </thead>
                <tbody className="text-secondary">
                  <tr>
                    <td className="fw-semibold text-dark">#INV2540</td>
                    <td><span className="badge bg-success-subtle text-success px-2 py-1">Completed</span></td>
                    <td>$421.00</td>
                    <td>07 Jan, 2023</td>
                    <td>Mastercard</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark">#INV3924</td>
                    <td><span className="badge bg-danger-subtle text-danger px-2 py-1">Cancel</span></td>
                    <td>$736.00</td>
                    <td>03 Dec, 2023</td>
                    <td>Visa</td>
                  </tr>
                  <tr>
                    <td className="fw-semibold text-dark">#INV5032</td>
                    <td><span className="badge bg-success-subtle text-success px-2 py-1">Completed</span></td>
                    <td>$347.00</td>
                    <td>28 Sep, 2023</td>
                    <td>Paypal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3">
        

        <div className="col-lg-4 d-flex flex-column gap-3">
          <div className="card border-0 shadow-sm rounded-3 bg-white p-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold text-dark mb-0">Customer Details</h6>
              <span className="badge bg-success-subtle text-success px-2 py-1" style={{ fontSize: '10px' }}>Active User</span>
            </div>
            <div className="small text-secondary" style={{ fontSize: '12px' }}>
              <div className="d-flex justify-content-between py-2 border-bottom">
                <span className="fw-medium text-dark">Account ID :</span>
                <span>#AC-278699</span>
              </div>
              <div className="d-flex justify-content-between py-2 border-bottom">
                <span className="fw-medium text-dark">Invoice Email :</span>
                <span className="text-truncate ms-2" style={{ maxWidth: '160px' }}>michaelaminer@dayrep.com</span>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 bg-white p-3">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h6 className="fw-semibold text-dark mb-0">Latest Invoice</h6>
              <button className="btn btn-warning btn-sm text-white px-2 py-0" style={{ fontSize: '11px', backgroundColor: '#ff6b35' }}>View All</button>
            </div>
            <p className="text-muted small mb-3" style={{ fontSize: '11px' }}>Total 234 file, 2.5GB space used</p>

            <div className="d-flex flex-column gap-2">
              {['#INV2540', '#INV0914', '#INV3801'].map((invId, idx) => (
                <div key={idx} className="d-flex align-items-center justify-content-between p-2 rounded bg-light">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-2 rounded d-flex align-items-center justify-content-center" style={{ backgroundColor: '#FFF0EA', width: '32px', height: '32px' }}>
                      <img src={invoiceIcon} alt="Invoice" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                    </div>
                    <div>
                      <p className="mb-0 fw-semibold text-dark" style={{ fontSize: '12px' }}>Invoice Id {invId}</p>
                      <p className="mb-0 text-muted" style={{ fontSize: '10px' }}>16 May 2024</p>
                    </div>
                  </div>
                  <span className="text-muted" style={{ cursor: 'pointer' }}>⋮</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white h-100 d-flex flex-column justify-content-between">
            <div className="rounded-3 d-flex align-items-center justify-content-center w-100 bg-light" style={{ minHeight: '300px' }}>
              <img src={imageIcon} alt="Rewards Banner" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>

            <div className="text-center mt-3">
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '15px' }}>
                🪙 <span style={{ color: '#ff6b35' }}>3,764</span> Points Earned
              </h6>
              <p className="text-muted small mb-3" style={{ fontSize: '11px' }}>Collect reward points with each purchase.</p>
              <div className="d-flex gap-2">
                <button className="btn text-white btn-sm flex-fill py-2" style={{ backgroundColor: '#ff6b35', borderRadius: '8px' }}>Earn Point</button>
                <button className="btn btn-light btn-sm flex-fill py-2 text-secondary" style={{ backgroundColor: '#f3f4f6', borderRadius: '8px' }}>View Items</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 d-flex flex-column gap-3">
          <div className="card shadow-sm rounded-3 p-3 bg-white flex-grow-1 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center gap-2">
                  <div className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '36px', height: '36px', backgroundColor: '#D9D9D9' }}>
                    <img src={imageIcon} alt="Profile" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '13px' }}>Michael A. Miner</h6>
                    <p className="text-muted mb-0" style={{ fontSize: '11px' }}>Welcome Back</p>
                  </div>
                </div>

                <button className="btn p-0 border-0 d-flex align-items-center justify-content-center" style={{ width: '24px', height: '24px' }}>
                  <img src={settingsIcon} alt="Settings" style={{ width: '19px', height: '20px', objectFit: 'contain' }} />
                </button>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-1">
                <p className="text-muted small mb-0" style={{ fontSize: '12px' }}>
                  <strong className="text-dark">All Account</strong> • Total Balance
                </p>
                <span className="small fw-semibold text-danger" style={{ fontSize: '11px' }}>UTS ↓</span>
              </div>

              <div className="d-flex align-items-baseline gap-2 mb-2">
                <h4 className="fw-bold text-dark mb-0">$4,700</h4>
                <span className="text-muted small" style={{ fontSize: '12px' }}>+$232</span>
              </div>

              <div className="py-2" style={{ height: '160px', width: '100%' }}>
                <svg viewBox="0 0 500 200" className="w-100 h-100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#ff5e36" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#ff5e36" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 145 C 15 130, 25 70, 45 60 C 65 50, 75 110, 95 110 C 115 110, 120 15, 140 10 C 160 5, 175 60, 195 70 C 215 80, 225 145, 245 145 C 265 145, 275 100, 295 100 C 315 100, 330 170, 350 170 C 370 170, 385 120, 405 120 C 425 120, 435 180, 455 180 C 475 180, 485 90, 500 80 L 500 200 L 0 200 Z" fill="url(#orangeGradient)" />
                  <path d="M 0 145 C 15 130, 25 70, 45 60 C 65 50, 75 110, 95 110 C 115 110, 120 15, 140 10 C 160 5, 175 60, 195 70 C 215 80, 225 145, 245 145 C 265 145, 275 100, 295 100 C 315 100, 330 170, 350 170 C 370 170, 385 120, 405 120 C 425 120, 435 180, 455 180 C 475 180, 485 90, 500 80" fill="none" stroke="#ff5e36" strokeWidth="3.5" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="d-flex gap-2 pt-2">
              <button className="btn text-white btn-sm flex-fill fw-medium py-2" style={{ backgroundColor: '#ff6b35', borderRadius: '8px' }}>Send</button>
              <button className="btn btn-light btn-sm flex-fill fw-medium py-2 text-secondary" style={{ backgroundColor: '#f3f4f6', borderRadius: '8px' }}>Receive</button>
              <button className="btn btn-light btn-sm px-3 text-secondary" style={{ backgroundColor: '#f3f4f6', borderRadius: '8px' }}>+</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}