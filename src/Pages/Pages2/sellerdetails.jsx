import React from 'react';

import zaraLogo from '../../assets/logozara.png';
import locationIcon from '../../assets/location.png';
import mailIcon from '../../assets/mail.png';
import phoneIcon from '../../assets/phone.png';

import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import twitterIcon from '../../assets/twitter.png';
import whatsappIcon from '../../assets/whatsapp.png';

import chartIcon from '../../assets/solar_chart-2-bold-duotone.png';
import ordersIcon from '../../assets/ordersicon.png';
import usersIcon from '../../assets/usersicon.png';

import revenueChartImg from '../../assets/Chart (2).png';
import accountingBg from '../../assets/Frames.png';

export default function SellerDetails() { 
  const products = [
    { id: 'ID46765', name: 'Black T-shirt', variants: '4', category: 'Fashion', date: '08/05/2023', status: 'Published', statusBg: '#DCFCE7', statusColor: '#16A34A' },
    { id: 'ID36192', name: 'Olive Green Leather Bag', variants: '2', category: 'Hand Bag', date: '10/05/2023', status: 'Pending', statusBg: '#E2E8F0', statusColor: '#334155' },
    { id: 'ID37729', name: 'Women Golden Dress', variants: '5', category: 'Fashion', date: '20/05/2023', status: 'Published', statusBg: '#DCFCE7', statusColor: '#16A34A' },
    { id: 'ID09260', name: 'Gray Cap For Men', variants: '3', category: 'Cap', date: '21/05/2023', status: 'Published', statusBg: '#DCFCE7', statusColor: '#16A34A' },
    { id: 'ID24109', name: 'Dark Green Cargo Pent', variants: '6', category: 'Fashion', date: '23/05/2023', status: 'Draft', statusBg: '#FEE2E2', statusColor: '#EF4444' },
  ];

  return (
    <div className="container-fluid p-4" style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>

      <div className="card border-0 p-4 rounded-4 shadow-sm bg-white mb-4">
        
        <div className="row g-4 pb-4 border-bottom">
          

          <div className="col-lg-3 col-md-4 d-flex flex-column gap-3">
            <div 
              className="rounded-4 d-flex align-items-center justify-content-center overflow-hidden"
              style={{ backgroundColor: '#F8FAFC', height: '180px', border: '1px solid #F1F5F9' }}
            >
              <img 
                src={zaraLogo} 
                alt="ZARA Logo" 
                style={{ width: '100%', height: '100%', objectFit: 'fill' }} 
              />
            </div>
            <button 
              type="button" 
              className="btn text-white fw-semibold py-2.5 rounded-3 w-100 shadow-sm"
              style={{ backgroundColor: '#FF5722', border: 'none', fontSize: '13px' }}
            >
              View Stock Detail
            </button>
          </div>


          <div className="col-lg-4 col-md-8 d-flex flex-column justify-content-between">
            <div>
              <h5 className="fw-bold mb-0 text-dark" style={{ fontSize: '18px' }}>
                ZARA International
              </h5>
              <span className="text-muted d-block mb-2" style={{ fontSize: '11px' }}>
                (Most Selling Fashion Brand)
              </span>

              <a 
                href="https://www.larkon.co" 
                target="_blank" 
                rel="noreferrer" 
                className="text-decoration-none fw-medium d-block mb-3"
                style={{ color: '#FF5722', fontSize: '13px' }}
              >
                www.larkon.co
              </a>


              <div className="d-flex align-items-center gap-1 mb-3" style={{ fontSize: '12px' }}>
                <span style={{ color: '#FFB800' }}>★ ★ ★ ★ ★</span>
                <span className="fw-bold text-dark ms-1">4.5/5</span>
                <span className="text-muted" style={{ fontSize: '11px' }}>(+23.3K Review)</span>
              </div>

              
              <div className="d-flex flex-column gap-2" style={{ fontSize: '12px', color: '#64748B' }}>
                <div className="d-flex align-items-center gap-3">
                  <div 
                    className="d-flex align-items-center justify-content-center flex-shrink-0" 
                    style={{ width: '32px', height: '32px', backgroundColor: '#F1F5F9', borderRadius: '10px' }}
                  >
                    <img src={locationIcon} alt="Location" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
                  </div>
                  <span>4604 , Philli Lane Kiowa IN 47404</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div 
                    className="d-flex align-items-center justify-content-center flex-shrink-0" 
                    style={{ width: '32px', height: '32px', backgroundColor: '#F1F5F9', borderRadius: '10px' }}
                  >
                    <img src={mailIcon} alt="Mail" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
                  </div>
                  <span>zarafashionworld@dayrep.com</span>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div 
                    className="d-flex align-items-center justify-content-center flex-shrink-0" 
                    style={{ width: '32px', height: '32px', backgroundColor: '#F1F5F9', borderRadius: '10px' }}
                  >
                    <img src={phoneIcon} alt="Phone" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
                  </div>
                  <span>+243 812-801-9335</span>
                </div>
              </div>
            </div>
          </div>

     
          <div className="col-lg-5 col-md-12 d-flex flex-column justify-content-between ps-lg-4" style={{ borderLeft: '1px solid #F1F5F9' }}>
            <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '14px' }}>
              Profit by Product Category
            </h6>
            
            <div className="d-flex flex-column gap-3">
              <div>
                <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '12px' }}>
                  <span className="text-muted fw-medium">Man's Wares</span>
                  <span className="fw-bold text-dark">$123k <span className="text-success" style={{ fontSize: '10px' }}>↗</span></span>
                </div>
                <div className="rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                  <div className="h-100 rounded-pill" style={{ width: '75%', backgroundColor: '#FF5722' }} />
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '12px' }}>
                  <span className="text-muted fw-medium">Woman's Wares</span>
                  <span className="fw-bold text-dark">$233k <span className="text-success" style={{ fontSize: '10px' }}>↗</span></span>
                </div>
                <div className="rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                  <div className="h-100 rounded-pill" style={{ width: '92%', backgroundColor: '#10B981' }} />
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '12px' }}>
                  <span className="text-muted fw-medium">Kid's Wares</span>
                  <span className="fw-bold text-dark">$110k <span className="text-success" style={{ fontSize: '10px' }}>↗</span></span>
                </div>
                <div className="rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                  <div className="h-100 rounded-pill" style={{ width: '60%', backgroundColor: '#F59E0B' }} />
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '12px' }}>
                  <span className="text-muted fw-medium">Foot Wares</span>
                  <span className="fw-bold text-dark">$51k <span className="text-danger" style={{ fontSize: '10px' }}>↘</span></span>
                </div>
                <div className="rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                  <div className="h-100 rounded-pill" style={{ width: '40%', backgroundColor: '#06B6D4' }} />
                </div>
              </div>
            </div>
          </div>

        </div>

        
        <div className="pt-3 pb-2">
          <span className="fw-bold text-dark d-block mb-3" style={{ fontSize: '13px', color: '#1E293B' }}>
            Social Media :
          </span>
          <div className="d-flex align-items-center gap-3">
            <a href="#facebook" className="d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '42px', height: '42px', backgroundColor: '#FFF1EC', borderRadius: '14px' }}>
              <img src={facebookIcon} alt="Facebook" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#instagram" className="d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '42px', height: '42px', backgroundColor: '#FFF0F3', borderRadius: '14px' }}>
              <img src={instagramIcon} alt="Instagram" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#twitter" className="d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '42px', height: '42px', backgroundColor: '#EBFBFA', borderRadius: '14px' }}>
              <img src={twitterIcon} alt="Twitter" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#whatsapp" className="d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '42px', height: '42px', backgroundColor: '#EBF9F1', borderRadius: '14px' }}>
              <img src={whatsappIcon} alt="WhatsApp" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
            <a href="#mail" className="d-flex align-items-center justify-content-center text-decoration-none" style={{ width: '42px', height: '42px', backgroundColor: '#FFFBEB', borderRadius: '14px' }}>
              <img src={mailIcon} alt="Mail" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
            </a>
          </div>
        </div>

        
        <div className="pt-2 pb-2">
          <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>Our Story :</h6>
          <p className="text-muted mb-3" style={{ fontSize: '12px', lineHeight: '1.6' }}>
            At ZARA, we believe that fashion is more than just clothing—it's an expression of individuality and a celebration of diversity. Founded in 2003, our journey began with a simple yet powerful vision: to create high-quality, stylish, and comfortable apparel that resonates with people from all walks of life.
          </p>

          <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '13px' }}>Our Mission :</h6>
          <p className="text-muted mb-3" style={{ fontSize: '12px', lineHeight: '1.6' }}>
            Our mission is to redefine fashion by merging timeless elegance with contemporary design. We strive to offer clothing that not only looks good but also feels good, making everyday wear an enjoyable experience. At the heart of our brand is a commitment to quality, sustainability, and customer satisfaction.
          </p>
        </div>

        
        <div className="row g-3 pt-2">
          <div className="col-6 col-md-3">
            <div className="p-3 text-center rounded-3" style={{ backgroundColor: '#F8FAFC' }}>
              <div className="fw-bold text-dark" style={{ fontSize: '15px' }}>865</div>
              <div className="text-muted" style={{ fontSize: '11px' }}>Item Stock</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 text-center rounded-3" style={{ backgroundColor: '#F8FAFC' }}>
              <div className="fw-bold text-dark" style={{ fontSize: '15px' }}>+4.5k</div>
              <div className="text-muted" style={{ fontSize: '11px' }}>Sells</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 text-center rounded-3" style={{ backgroundColor: '#F8FAFC' }}>
              <div className="fw-bold text-dark" style={{ fontSize: '15px' }}>+2k</div>
              <div className="text-muted" style={{ fontSize: '11px' }}>Happy Client</div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="p-3 text-center rounded-3" style={{ backgroundColor: '#F8FAFC' }}>
              <div className="fw-bold text-dark" style={{ fontSize: '15px' }}>+36k</div>
              <div className="text-muted" style={{ fontSize: '11px' }}>Followers</div>
            </div>
          </div>
        </div>

      </div>

     
      <div className="row g-4 mb-4">
        

        <div className="col-lg-8">
          <div className="card border-0 p-4 rounded-4 shadow-sm bg-white h-100 d-flex flex-column justify-content-between">
           
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div>
                <div className="d-flex align-items-center gap-2">
                  <h4 className="fw-bold mb-0 text-dark" style={{ fontSize: '20px' }}>$5,563.786</h4>
                  <span className="badge rounded-pill fw-medium px-2 py-1" style={{ backgroundColor: '#DCFCE7', color: '#16A34A', fontSize: '10px' }}>
                    ↑ 4.53%
                  </span>
                </div>
                <span className="text-muted" style={{ fontSize: '11px' }}>
                  Gained <span style={{ color: '#16A34A', fontWeight: 'bold' }}>$378.56</span> This Month !
                </span>
              </div>
              <div className="p-2 rounded-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#FFF0ED', width: '36px', height: '36px' }}>
                <img src={chartIcon} alt="Chart Icon" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
              </div>
            </div>

           
            <div className="w-100 mt-3 d-flex align-items-center justify-content-center overflow-hidden" style={{ minHeight: '220px' }}>
              <img 
                src={revenueChartImg} 
                alt="Revenue Spline Chart Graph" 
                className="w-100 h-100" 
                style={{ objectFit: 'contain', maxHeight: '230px' }} 
              />
            </div>
          </div>
        </div>

       
        <div className="col-lg-4">
          <div className="card border-0 p-4 rounded-4 shadow-sm bg-white h-100 d-flex flex-column justify-content-between">
            <div>
              <h6 className="fw-bold text-center text-dark mb-3" style={{ fontSize: '13px' }}>Company Reviews</h6>
              
              <div className="rounded-3 p-2.5 text-center mb-3 d-flex align-items-center justify-content-center gap-2" style={{ backgroundColor: '#F8FAFC' }}>
                <span style={{ color: '#FFB800', fontSize: '14px' }}>★ ★ ★ ★ ★</span>
                <span className="fw-bold text-dark" style={{ fontSize: '12px' }}>4.5 Out of 5</span>
              </div>

              <div className="text-center text-muted mb-3" style={{ fontSize: '11px' }}>
                Based on <span className="fw-bold" style={{ color: '#FF5722' }}>+23.5k Review</span>
              </div>

              <div className="d-flex flex-column gap-2" style={{ fontSize: '11px' }}>
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted" style={{ width: '40px' }}>5 star :</span>
                  <div className="flex-grow-1 rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                    <div className="h-100 rounded-pill" style={{ width: '80%', backgroundColor: '#FFB800' }} />
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted" style={{ width: '40px' }}>4 star :</span>
                  <div className="flex-grow-1 rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                    <div className="h-100 rounded-pill" style={{ width: '55%', backgroundColor: '#FFB800' }} />
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted" style={{ width: '40px' }}>3 star :</span>
                  <div className="flex-grow-1 rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                    <div className="h-100 rounded-pill" style={{ width: '30%', backgroundColor: '#FFB800' }} />
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted" style={{ width: '40px' }}>2 star :</span>
                  <div className="flex-grow-1 rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                    <div className="h-100 rounded-pill" style={{ width: '20%', backgroundColor: '#FFB800' }} />
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted" style={{ width: '40px' }}>1 star :</span>
                  <div className="flex-grow-1 rounded-pill bg-light overflow-hidden" style={{ height: '6px' }}>
                    <div className="h-100 rounded-pill" style={{ width: '10%', backgroundColor: '#FFB800' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-3">
              <a href="#ratings" className="text-decoration-none fw-medium" style={{ fontSize: '11px', color: '#FF5722' }}>
                How do we calculate ratings ?
              </a>
            </div>
          </div>
        </div>

      </div>

      <div className="row g-4">
        
       
        <div className="col-lg-8">
          <div className="card border-0 p-4 rounded-4 shadow-sm bg-white h-100">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '13px' }}>Latest Added Product</h6>
              <select className="form-select form-select-sm border-0 bg-light text-muted" style={{ width: '110px', fontSize: '11px' }}>
                <option>This Month</option>
                <option>This Year</option>
              </select>
            </div>

            <div className="table-responsive">
              <table className="table align-middle table-borderless mb-0">
                <thead>
                  <tr className="border-bottom text-muted" style={{ fontSize: '11px' }}>
                    <th scope="col" style={{ width: '30px' }}>
                      <input type="checkbox" className="form-check-input" />
                    </th>
                    <th scope="col">Product Name & Size</th>
                    <th scope="col">Tag ID</th>
                    <th scope="col">Category</th>
                    <th scope="col">Add Date</th>
                    <th scope="col">Items Published</th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '12px' }}>
                  {products.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <input type="checkbox" className="form-check-input" />
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="rounded-3 bg-light d-flex align-items-center justify-content-center p-1" style={{ width: '34px', height: '34px' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <polyline points="21 15 16 10 5 21" />
                            </svg>
                          </div>
                          <div>
                            <div className="fw-semibold text-dark" style={{ fontSize: '12px' }}>{item.name}</div>
                            <span className="text-muted" style={{ fontSize: '10px' }}>Variants : {item.variants}</span>
                          </div>
                        </div>
                      </td>
                      <td className="text-muted" style={{ fontSize: '11px' }}>{item.id}</td>
                      <td className="text-muted" style={{ fontSize: '11px' }}>{item.category}</td>
                      <td className="text-muted" style={{ fontSize: '11px' }}>{item.date}</td>
                      <td>
                        <span className="badge rounded-2 px-2 py-1 fw-medium" style={{ backgroundColor: item.statusBg, color: item.statusColor, fontSize: '10px' }}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="col-lg-4 d-flex flex-column gap-3">
          

          <div
            className="card border-0 p-4 rounded-4 position-relative overflow-hidden text-white shadow-sm"
            style={{
              backgroundColor: '#272E36',
              minHeight: '210px',
              fontFamily: "'Inter', sans-serif",
            }}
          >

            <img
              src={accountingBg}
              alt="Decorative Background Pattern"
              className="position-absolute end-0 bottom-0"
              style={{
                maxHeight: '100%',
                objectFit: 'contain',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            />


            <div className="position-relative z-1 d-flex flex-column justify-content-between h-100">
              

              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="d-flex align-items-center gap-3">
                 
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 fw-bold"
                    style={{
                      width: '42px',
                      height: '42px',
                      backgroundColor: '#38414B',
                      color: '#FFFFFF',
                      fontSize: '16px',
                    }}
                  >
                    1
                  </div>
                  
                  <h5 className="fw-semibold mb-0" style={{ fontSize: '18px', color: '#FFFFFF', letterSpacing: '-0.2px' }}>
                    Accounting Revenue
                  </h5>
                </div>

               
                <button
                  type="button"
                  className="btn p-0 border-0 text-white-50"
                  style={{ fontSize: '18px', lineHeight: '1', cursor: 'pointer' }}
                >
                  &#8942;
                </button>
              </div>

              
              <div className="my-2">
                <h2
                  className="fw-bold mb-2"
                  style={{
                    color: '#F5A623',
                    fontSize: '28px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  $5,324,000
                </h2>

                <p
                  className="mb-3"
                  style={{
                    color: '#94A3B8',
                    fontSize: '13px',
                    lineHeight: '1.4',
                    maxWidth: '80%',
                  }}
                >
                  Accounting revenue refers to the income earned by a company
                </p>

                <div style={{ fontSize: '13px' }}>
                  <span className="fw-bold text-white me-1">+870</span>
                  <span style={{ color: '#94A3B8' }}>Customers</span>
                </div>
              </div>

            </div>
          </div>

          
          <div className="row g-3">
            <div className="col-6">
              <div className="card border-0 p-3 rounded-4 shadow-sm bg-white text-center">
                <span className="text-muted fw-medium d-block mb-2" style={{ fontSize: '11px' }}>Orders</span>
                <div className="rounded-3 mx-auto mb-2 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', backgroundColor: '#FFF0ED' }}>
                  <img src={ordersIcon} alt="Orders Icon" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                </div>
                <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>458</div>
                <span className="text-muted d-block mb-2" style={{ fontSize: '10px' }}>60% Target</span>
                <div className="rounded-pill bg-light overflow-hidden" style={{ height: '4px' }}>
                  <div className="h-100 rounded-pill" style={{ width: '60%', backgroundColor: '#FF5722' }} />
                </div>
                <a href="#orders" className="text-decoration-none d-block mt-2 text-muted fw-medium" style={{ fontSize: '10px' }}>
                  View More →
                </a>
              </div>
            </div>

            <div className="col-6">
              <div className="card border-0 p-3 rounded-4 shadow-sm bg-white text-center">
                <span className="text-muted fw-medium d-block mb-2" style={{ fontSize: '11px' }}>Users</span>
                <div className="rounded-3 mx-auto mb-2 d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px', backgroundColor: '#DCFCE7' }}>
                  <img src={usersIcon} alt="Users Icon" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                </div>
                <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>870</div>
                <span className="text-muted d-block mb-2" style={{ fontSize: '10px' }}>80% Target</span>
                <div className="rounded-pill bg-light overflow-hidden" style={{ height: '4px' }}>
                  <div className="h-100 rounded-pill" style={{ width: '80%', backgroundColor: '#16A34A' }} />
                </div>
                <a href="#users" className="text-decoration-none d-block mt-2 text-muted fw-medium" style={{ fontSize: '10px' }}>
                  View More →
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}