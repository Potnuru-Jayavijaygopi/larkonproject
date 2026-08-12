import React from 'react';
import bgBanner from '../assets/bg.png';
import imageIcon from '../assets/Frame.svg';
import penIcon from '../assets/solar_pen-new-square-broken.svg';
import handIcon from '../assets/solar_hand-shake-broken.svg';
import bulbIcon from '../assets/solar_lightbulb-minimalistic-broken.svg';
import projectHeadIcon from '../assets/solar_backpack-bold-duotone.svg';
import oxfordIcon from '../assets/solar_square-academic-cap-2-bold-duotone.svg';
import locationIcon from '../assets/solar_map-point-bold-duotone.svg';
import linkIcon from '../assets/solar_link-bold-duotone.svg';
import statusIcon from '../assets/solar_map-point-bold-duotone (1).svg';
import starIcon from '../assets/Star.svg';
import achievementsIcon from '../assets/Icon (9).svg';
import accomplishmentsIcon from '../assets/Icon (2).svg';
import messageIcon from '../assets/bx_message-dots.svg';
import badgeCheckIcon from '../assets/bx bxs-badge-check.svg';
import websiteIcon from '../assets/solar_global-bold-duotone.svg';
import copyIcon from '../assets/ti ti-copy.svg';
import emailIcon from '../assets/solar_letter-bold-duotone.svg';
import customerIcon from '../assets/solar_users-group-rounded-bold-duotone.svg';
import clockIcon from '../assets/solar_clock-circle-bold-duotone.svg';
import cupIcon from '../assets/solar_cup-star-bold-duotone.png';
import notebookIcon from '../assets/solar_notebook-bold-duotone_.svg';
import qrCodeImg from '../assets/image 25.png';

const Profile = () => {
  return (
    <div className="profile-page-wrapper w-100">
      <style>{`
        .profile-page-wrapper {
          font-family: 'Public Sans', sans-serif !important;
          color: #334155;
        }

        .font-heading,
        .profile-page-wrapper h1, 
        .profile-page-wrapper h2, 
        .profile-page-wrapper h3, 
        .profile-page-wrapper h4, 
        .profile-page-wrapper h5, 
        .profile-page-wrapper h6 {
          font-family: 'Public Sans', sans-serif !important;
          font-weight: 700;
          color: #1e293b;
        }

        .figma-card {
          border: 1px solid var(--border-color, #e2e8f0) !important;
          background-color: var(--card-bg, #ffffff);
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .btn-teal-custom {
          background-color: #4ECAC2;
          color: #ffffff;
          border: none;
          font-size: 0.825rem;
          padding: 6px 14px;
          border-radius: 6px;
          font-weight: 500;
        }

        .btn-teal-custom:hover {
          background-color: #3fbcba;
          color: #ffffff;
        }

        .btn-follow-custom {
          border: 1px solid var(--primary-orange, #ff5e29);
          color: var(--primary-orange, #ff5e29);
          background: transparent;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 5px 16px;
          border-radius: 6px;
          line-height: 100%;
          transition: all 0.2s ease;
        }

        .btn-follow-custom:hover {
          background-color: rgba(255, 94, 41, 0.08);
          color: var(--primary-orange-hover, #e04d1c);
          border-color: var(--primary-orange-hover, #e04d1c);
        }

        .text-orange-custom {
          color: var(--primary-orange, #ff5e29) !important;
        }

        .stat-item-border {
          border-right: 1px solid var(--border-color, #e2e8f0);
        }

        @media (max-width: 768px) {
          .stat-item-border {
            border-right: none;
            border-bottom: 1px solid var(--border-color, #e2e8f0);
            padding-bottom: 8px;
          }
        }
      `}</style>

      <div className="container-fluid w-100 p-0">
        <div className="row g-3 mb-3">
          <div className="col-lg-8">
            <div className="card figma-card border-0 shadow-sm rounded-3 overflow-hidden h-100 d-flex flex-column justify-content-between">
              
              <div>
                <div className="position-relative" style={{ height: '160px', overflow: 'hidden' }}>
                  <img 
                    src={bgBanner} 
                    alt="Banner Background" 
                    className="w-100 h-100 object-fit-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 50%, #ff5e29 100%)';
                    }}
                  />
                </div>
                <div className="card-body px-3 pb-3 pt-0 position-relative">
                  <div 
                    className="position-absolute border border-4 border-white rounded-circle shadow-sm d-flex align-items-center justify-content-center overflow-hidden"
                    style={{ 
                      width: '88px', 
                      height: '88px', 
                      top: '-44px', 
                      left: '20px', 
                      backgroundColor: '#f1f5f9' 
                    }}
                  >
                    <img 
                      src={imageIcon} 
                      alt="Profile Logo" 
                      style={{ width: '38px', height: '38px', objectFit: 'contain' }} 
                    />
                  </div>
                  <div className="pt-5 d-flex flex-wrap justify-content-between align-items-center gap-2">
                    <div>
                      <div className="d-flex align-items-center gap-2">
                        <h4 className="font-heading fw-bold mb-0" style={{ fontSize: '1.125rem' }}>
                          Gaston Lapierre
                        </h4>
                        <img 
                          src={badgeCheckIcon} 
                          alt="Verified Badge" 
                          style={{ width: '18px', height: '18px' }} 
                        />
                      </div>
                      <p className="text-muted small mb-0 mt-1" style={{ fontSize: '0.825rem' }}>
                        Project Head Manager
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 ms-auto">
                      <button className="btn btn-teal-custom btn-sm rounded-3 d-flex align-items-center gap-1 fw-medium">
                        <img src={messageIcon} alt="Message" style={{ width: '15px', height: '15px' }} /> Message
                      </button>
                      <button className="btn btn-follow-custom btn-sm">
                        + Follow
                      </button>
                      <button className="btn btn-light btn-sm border text-muted rounded-3 px-2">
                        •••
                      </button>
                    </div>
                  </div>

                </div>
              </div>

              <div className="d-flex align-items-center flex-wrap gap-4 mt-0 pt-3 py-4 justify-content-start " style={{ borderColor: 'var(--border-color)' }}>

                <div className="d-flex align-items-start gap-2 stat-item-border px-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={clockIcon} 
                      alt="Job Experience" 
                      style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
                    />
                  </div>
                  <div>
                    <h6 className="font-heading fw-bold mb-0 text-dark" style={{ fontSize: '0.825rem', lineHeight: '1.2' }}>
                      3+ Years Job
                    </h6>
                    <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                      Experience
                    </small>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-2 stat-item-border pe-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={cupIcon} 
                      alt="Certificates" 
                      style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
                    />
                  </div>
                  <div>
                    <h6 className="font-heading fw-bold mb-0 text-dark" style={{ fontSize: '0.825rem', lineHeight: '1.2' }}>
                      5 Certificate
                    </h6>
                    <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                      Achieved
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <div className="flex-shrink-0">
                    <img 
                      src={notebookIcon} 
                      alt="Internships" 
                      style={{ width: '24px', height: '24px', objectFit: 'contain' }} 
                    />
                  </div>
                  <div>
                    <h6 className="font-heading fw-bold mb-0 text-dark" style={{ fontSize: '0.825rem', lineHeight: '1.2' }}>
                      2 Internship
                    </h6>
                    <small className="text-muted d-block" style={{ fontSize: '0.75rem' }}>
                      Completed
                    </small>
                  </div>
                </div>

              </div>

            </div>
          </div>
          <div className="col-lg-4">
            <div className="card figma-card border-0 shadow-sm rounded-3 p-3 h-100">
              <div className="card-body p-0">
                <h6 className="font-heading fw-bold text-dark border-bottom pb-2 mb-3" style={{ fontSize: '0.95rem' }}>
                  Personal Information
                </h6>
                <div className="d-flex flex-column gap-2 small text-secondary">
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-1 bg-light rounded-3"><img src={projectHeadIcon} alt="Manager" style={{ width: '16px', height: '16px' }} /></div>
                    <span>Project Head Manager</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-1 bg-light rounded-3"><img src={oxfordIcon} alt="Education" style={{ width: '16px', height: '16px' }} /></div>
                    <span>Went to <strong className="text-dark">Oxford International</strong></span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-1 bg-light rounded-3"><img src={locationIcon} alt="Location" style={{ width: '16px', height: '16px' }} /></div>
                    <span>Lives in <strong className="text-dark">Pittsburgh, PA 15212</strong></span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-1 bg-light rounded-3"><img src={customerIcon} alt="Followers" style={{ width: '16px', height: '16px' }} /></div>
                    <span>Followed by <strong className="text-dark">16.6k People</strong></span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-1 bg-light rounded-3"><img src={emailIcon} alt="Email" style={{ width: '16px', height: '16px' }} /></div>
                    <span>Email: <strong className="text-orange-custom">hello@dundermuffilin.com</strong></span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-1 bg-light rounded-3"><img src={linkIcon} alt="Website" style={{ width: '16px', height: '16px' }} /></div>
                    <span className="text-orange-custom">www.larkon.co</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-1 bg-light rounded-3"><img src={websiteIcon} alt="Website" style={{ width: '16px', height: '16px' }} /></div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <div className="p-1 bg-light rounded-3"><img src={statusIcon} alt="Status" style={{ width: '16px', height: '16px' }} /></div>
                    <div className="d-flex align-items-center gap-2">
                      <span>Status</span>
                      <span 
                        className="badge border-0 rounded-1 px-2 py-1" 
                        style={{ 
                          backgroundColor: '#DCFCE7', 
                          color: '#22C55E', 
                          fontWeight: '700', 
                          fontSize: '10.5px' 
                        }}
                      >
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                <a href="#more" className="text-decoration-none small fw-bold d-inline-block mt-2 text-orange-custom">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-3 mb-3">
          <div className="col-lg-8">
            <div className="card figma-card border-0 shadow-sm p-3">
              <div className="card-body p-0">
                <h5 className="font-heading fw-bold text-dark mb-2" style={{ fontSize: '0.95rem' }}>About</h5>
                
                <p 
                  style={{ 
                    fontSize: '0.875rem', 
                    fontWeight: '400', 
                    color: '#5D7186', 
                    lineHeight: '1.4', 
                    marginBottom: '12px' 
                  }}
                >
                  I'm the model of the new Project Head Manager. I've combined a deep background in brand management at blue chip CPG companies with eCommerce growth marketing at the world's biggest retailer. I've run SingleFire I've created world-class campaigns; I've built digital marketing organizations from the ground up. I have over 20 years' experience leading...{' '}
                  <span className="text-orange-custom cursor-pointer" style={{ fontWeight: '400' }}>
                    See more
                  </span>
                </p>

                <div>
                  <h6 className="font-heading fw-bold text-dark mb-1" style={{ fontSize: '0.825rem' }}>My Approach :</h6>
                  <p 
                    style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: '400', 
                      color: '#5D7186', 
                      lineHeight: '1.4', 
                      marginBottom: '12px' 
                    }}
                  >
                    When it comes to Project Head Manager, I believe in a holistic approach that combines creativity with technical expertise. I start by understanding your unique vision and goals, then work tirelessly to bring that vision to life. Whether you need a sleek portfolio site, an engaging e-commerce platform, or anything in between, I've got you covered.
                  </p>
                </div>

                <div className="row g-3 mt-1">
                  <div className="col-md-6">
                    <div 
                      className="p-3 rounded-3" 
                      style={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '1px solid var(--border-color, #eaedf1)' 
                      }}
                    >
                      <h6 
                        className="font-heading fw-bold text-dark mb-3" 
                        style={{ fontSize: '0.875rem', lineHeight: '100%' }}
                      >
                        Marketing expertise
                      </h6>

                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {['#Leadership', '#Advertising', '#Public-relations', '#Branding-manage'].map((tag) => (
                          <span 
                            key={tag} 
                            className="badge" 
                            style={{ 
                              backgroundColor: '#F9F7F7', 
                              color: '#5D7186', 
                              fontWeight: '700', 
                              fontSize: '12px',
                              borderRadius: '4px',
                              border: 'none',
                              padding: '5px 10px',
                              lineHeight: '100%'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <small className="text-muted" style={{ fontSize: '12px' }}>
                        Open to networking :{' '}
                        <span 
                          className="badge border-0 rounded-1 px-2 py-1 ms-1" 
                          style={{ 
                            backgroundColor: '#DCFCE7', 
                            color: '#22C55E', 
                            fontWeight: '700', 
                            fontSize: '10.5px' 
                          }}
                        >
                          Yes
                        </span>
                      </small>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div 
                      className="p-3 rounded-3" 
                      style={{ 
                        backgroundColor: '#FFFFFF', 
                        border: '1px solid var(--border-color, #eaedf1)' 
                      }}
                    >
                      <h6 
                        className="font-heading fw-bold text-dark mb-3" 
                        style={{ fontSize: '0.875rem', lineHeight: '100%' }}
                      >
                        Marketing Interests
                      </h6>

                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {['#Event-marketing', '#Performance-marketing', '#Account-based-marketing'].map((tag) => (
                          <span 
                            key={tag} 
                            className="badge" 
                            style={{ 
                              backgroundColor: '#F9F7F7', 
                              color: '#5D7186', 
                              fontWeight: '700', 
                              fontSize: '12px',
                              borderRadius: '4px',
                              border: 'none',
                              padding: '5px 10px',
                              lineHeight: '100%'
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <small className="text-secondary" style={{ fontSize: '12px' }}>
                        Open to advising :{' '}
                        <span 
                          className="badge border-0 rounded-1 px-2 py-1 ms-1" 
                          style={{ 
                            backgroundColor: '#DCFCE7', 
                            color: '#22C55E', 
                            fontWeight: '700', 
                            fontSize: '10.5px' 
                          }}
                        >
                          Yes
                        </span>
                      </small>
                    </div>
                  </div>

                </div>

                <div className="mt-3 pt-2 border-top" style={{ borderColor: 'var(--border-color)' }}>
                  <h6 className="font-heading fw-bold text-dark mb-2" style={{ fontSize: '0.825rem' }}>My Core Skills :</h6>
                  <div className="row g-2 text-secondary">
                    <div className="col-md-4 d-flex align-items-center gap-2">
                      <div className="d-flex gap-1">
                        {[1, 2, 3, 4].map((i) => (
                          <img key={i} src={starIcon} alt="Star" style={{ width: '12px', height: '12px' }} />
                        ))}
                      </div>
                      <small className="fw-medium text-dark" style={{ fontSize: '12px' }}>Inbound Marketing</small>
                    </div>

                    <div className="col-md-4 d-flex align-items-center gap-2">
                      <div className="d-flex gap-1">
                        {[1, 2, 3].map((i) => (
                          <img key={i} src={starIcon} alt="Star" style={{ width: '12px', height: '12px' }} />
                        ))}
                      </div>
                      <small className="fw-medium text-dark" style={{ fontSize: '12px' }}>Entrepreneurship</small>
                    </div>

                    <div className="col-md-4 d-flex align-items-center gap-2">
                      <div className="d-flex gap-1">
                        {[1, 2].map((i) => (
                          <img key={i} src={starIcon} alt="Star" style={{ width: '12px', height: '12px' }} />
                        ))}
                      </div>
                      <small className="fw-medium text-dark" style={{ fontSize: '12px' }}>Growth Marketing</small>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="d-flex flex-column gap-3">
              
              <div className="row g-2">
                <div className="col-6">
                  <div className="card figma-card border-0 shadow-sm rounded-3 p-2 text-center">
                    <div className="p-1 rounded-3 mx-auto mb-1" style={{ width: '36px' }}>
                      <img src={achievementsIcon} alt="Achievements" style={{ width: '28px', height: '28px' }} />
                    </div>
                    <h5 className="font-heading fw-bold text-dark mb-0">+12</h5>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Achievements</small>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card figma-card border-0 shadow-sm rounded-3 p-2 text-center">
                    <div className="p-1 rounded-3 mx-auto mb-1" style={{ width: '36px' }}>
                      <img src={accomplishmentsIcon} alt="Accomplishments" style={{ width: '28px', height: '28px' }} />
                    </div>
                    <h5 className="font-heading fw-bold text-dark mb-0">+24</h5>
                    <small className="text-muted" style={{ fontSize: '11px' }}>Accomplishments</small>
                  </div>
                </div>
              </div>

              <div 
                className="card figma-card border-0 p-3 text-center mx-auto w-100"
                style={{
                  maxWidth: '390px',
                  height: '384px',
                  borderRadius: '8px'
                }}
              >
                <div className="card-body p-0 d-flex flex-column align-items-center">
                  
                  <h5 
                    className="font-heading fw-bold mb-1" 
                    style={{ color: '#1e293b', fontSize: '1rem', lineHeight: '100%' }}
                  >
                    Share your profile
                  </h5>

                  <p 
                    className="mb-2 px-2 text-muted" 
                    style={{ 
                      fontSize: '0.825rem', 
                      lineHeight: '1.3', 
                      maxWidth: '380px' 
                    }}
                  >
                    Now that your agency is created, go ahead and share it to start generating leads.
                  </p>

                  <div className="my-1">
                    <img 
                      src={qrCodeImg} 
                      alt="Profile QR Code" 
                      style={{ width: '110px', height: '110px', objectFit: 'contain' }} 
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-center gap-2 my-3">
                    <a href="#fb" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: '#FFF5F3' }}>
                      <i className="bi bi-facebook" style={{ color: 'var(--primary-orange)', fontSize: '14px' }}></i>
                    </a>
                    <a href="#insta" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: '#FFF0F5' }}>
                      <i className="bi bi-instagram" style={{ color: '#E1306C', fontSize: '14px' }}></i>
                    </a>
                    <a href="#twitter" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: '#E0F7FA' }}>
                      <i className="bi bi-twitter" style={{ color: '#00BCD4', fontSize: '14px' }}></i>
                    </a>
                    <a href="#whatsapp" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: '#E8F5E9' }}>
                      <i className="bi bi-whatsapp" style={{ color: '#4CAF50', fontSize: '14px' }}></i>
                    </a>
                    <a href="#mail" className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: '32px', height: '32px', backgroundColor: '#FFFDE7' }}>
                      <i className="bi bi-envelope" style={{ color: '#FFC107', fontSize: '14px' }}></i>
                    </a>
                  </div>

                  <small 
                    className="d-block my-1 text-muted" 
                    style={{ fontSize: '12px' }}
                  >
                    Copy the URL below and share it with your friends:
                  </small>

                  <div 
                    className="w-100 d-flex align-items-center justify-content-between px-3 mt-2" 
                    style={{ 
                      backgroundColor: '#F8F9FA', 
                      borderRadius: '6px', 
                      border: '1px solid var(--border-color)',
                      height: '38px' 
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '0.825rem', 
                        color: '#5D7186', 
                        overflow: 'hidden', 
                        textOverflow: 'ellipsis', 
                        whiteSpace: 'nowrap' 
                      }}
                    >
                      https://larkon-mileage.com
                    </span>

                    <button 
                      type="button" 
                      className="btn p-0 border-0 d-flex align-items-center justify-content-center ms-1"
                      style={{ background: 'transparent', cursor: 'pointer' }}
                      onClick={() => navigator.clipboard.writeText('https://larkon-mileage.com')}
                      title="Copy Link"
                    >
                      <img 
                        src={copyIcon} 
                        alt="Copy" 
                        style={{ width: '18px', height: '18px', objectFit: 'contain' }} 
                      />
                    </button>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        <div className="row g-3">
          <div className="col-lg-4">
            <div className="card figma-card border-0 shadow-sm p-3">
              <div className="card-body p-0">
                <h6 className="font-heading fw-bold text-dark border-bottom pb-2 mb-2" style={{ fontSize: '0.875rem' }}>
                  Popular Filters
                </h6>
                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-light border border-secondary btn-sm rounded-pill px-2 py-1" style={{ fontSize: '11px' }}>All Topics (23)</button>
                  <button className="btn btn-light border btn-sm rounded-pill text-muted px-2 py-1" style={{ fontSize: '11px' }}>#SaaS (21)</button>
                  <button className="btn btn-light border btn-sm rounded-pill text-muted px-2 py-1" style={{ fontSize: '11px' }}>#LatAm (5)</button>
                  <button className="btn btn-light border btn-sm rounded-pill text-muted px-2 py-1" style={{ fontSize: '11px' }}>#Inbound (4)</button>
                  <button className="btn btn-light border btn-sm rounded-pill text-muted px-2 py-1" style={{ fontSize: '11px' }}>#Europe (25)</button>
                  <button className="btn btn-light border btn-sm rounded-pill text-muted px-2 py-1" style={{ fontSize: '11px' }}>#Performance-marketing (7)</button>
                </div>

                <a href="#more" className="text-decoration-none small d-inline-block mt-2 text-orange-custom">
                  View More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="d-flex flex-column gap-2">

              <div className="card figma-card border-0 shadow-sm rounded-3 p-3">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                      style={{ width: '34px', height: '34px', backgroundColor: '#e0e0e0' }}
                    >
                      <img 
                        src={imageIcon} 
                        alt="Avatar" 
                        style={{ width: '18px', height: '18px', objectFit: 'contain' }} 
                      />
                    </div>

                    <div>
                      <h6 className="fw-bold text-dark mb-0 font-heading" style={{ fontSize: '0.825rem' }}>
                        Gaston Lapierre <span className="fw-normal text-muted small">, Project Head Manager . Nov 16</span>
                      </h6>
                      <small className="text-muted" style={{ fontSize: '11px' }}>
                        Asked a question <span className="text-orange-custom" style={{ fontWeight: '500' }}>#Inbound #SaaS</span>
                      </small>
                    </div>
                  </div>

                  <h6 className="fw-bold text-dark mt-2 font-heading" style={{ fontSize: '0.825rem' }}>
                    Do you have any experience with deploying @Hubspot for a SaaS business with both a direct and self-serve model?
                  </h6>

                  <p className="text-muted small leading-relaxed mb-2" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                    We are a Series A B2B startup offering a custom solution. Currently, we are utilizing @MixPanel and collaborating with @Division of Labor to rebuild our pages. Shoutout to @Jennifer Smith for her support... <span className="text-orange-custom cursor-pointer" style={{ fontWeight: '400' }}>See more</span>
                  </p>

                  <div className="d-flex align-items-center gap-3 pt-2 border-top" style={{ fontSize: '12px', borderColor: 'var(--border-color)' }}>
                    <button className="btn btn-link text-decoration-none p-0 d-flex align-items-center gap-1 fw-medium text-orange-custom" style={{ fontSize: '12px' }}>
                      <img src={penIcon} alt="Answer" style={{ width: '14px', height: '14px' }} /> Answer
                    </button>
                    <button className="btn btn-link text-decoration-none p-0 text-muted d-flex align-items-center gap-1 fw-medium" style={{ fontSize: '12px' }}>
                      <img src={handIcon} alt="Thanks" style={{ width: '14px', height: '14px' }} /> Thanks
                    </button>
                    <button className="btn btn-link text-decoration-none p-0 text-muted d-flex align-items-center gap-1 fw-medium" style={{ fontSize: '12px' }}>
                      <img src={bulbIcon} alt="Insightful" style={{ width: '14px', height: '14px' }} /> Insightful
                    </button>
                  </div>
                </div>
              </div>

              <div className="card figma-card border-0 shadow-sm rounded-3 p-3">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                      style={{ width: '34px', height: '34px', backgroundColor: '#e0e0e0' }}
                    >
                      <img 
                        src={imageIcon} 
                        alt="Avatar" 
                        style={{ width: '18px', height: '18px', objectFit: 'contain' }} 
                      />
                    </div>

                    <div>
                      <h6 className="fw-bold text-dark mb-0 font-heading" style={{ fontSize: '0.825rem' }}>
                        Gaston Lapierre <span className="fw-normal text-muted small">, Project Head Manager . Nov 11</span>
                      </h6>
                      <small className="text-muted" style={{ fontSize: '11px' }}>
                        Asked a question <span className="text-orange-custom" style={{ fontWeight: '500' }}>#LatAm #Europe</span>
                      </small>
                    </div>
                  </div>

                  <h6 className="fw-bold text-dark mt-2 font-heading" style={{ fontSize: '0.825rem' }}>
                    Looking for a new landing page optimization vendor
                  </h6>

                  <p className="text-muted small leading-relaxed mb-2" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                    We are currently using @Optimizely, but find that they are missing a number with a custom solution that no... <span className="text-orange-custom cursor-pointer" style={{ fontWeight: '400' }}>See more</span>
                  </p>

                  <div className="d-flex align-items-center gap-3 pt-2 border-top" style={{ fontSize: '12px', borderColor: 'var(--border-color)' }}>
                    <button className="btn btn-link text-decoration-none p-0 d-flex align-items-center gap-1 fw-medium text-orange-custom" style={{ fontSize: '12px' }}>
                      <img src={penIcon} alt="Answer" style={{ width: '14px', height: '14px' }} /> Answer
                    </button>
                    <button className="btn btn-link text-decoration-none p-0 text-muted d-flex align-items-center gap-1 fw-medium" style={{ fontSize: '12px' }}>
                      <img src={handIcon} alt="Thanks" style={{ width: '14px', height: '14px' }} /> Thanks
                    </button>
                    <button className="btn btn-link text-decoration-none p-0 text-muted d-flex align-items-center gap-1 fw-medium" style={{ fontSize: '12px' }}>
                      <img src={bulbIcon} alt="Insightful" style={{ width: '14px', height: '14px' }} /> Insightful
                    </button>
                  </div>
                </div>
              </div>

              <div className="card figma-card border-0 shadow-sm rounded-3 p-3">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div 
                      className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0" 
                      style={{ width: '34px', height: '34px', backgroundColor: '#e0e0e0' }}
                    >
                      <img 
                        src={imageIcon} 
                        alt="Avatar" 
                        style={{ width: '18px', height: '18px', objectFit: 'contain' }} 
                      />
                    </div>

                    <div>
                      <h6 className="fw-bold text-dark mb-0 font-heading" style={{ fontSize: '0.825rem' }}>
                        Gaston Lapierre <span className="fw-normal text-muted small">, Project Head Manager . Nov 08</span>
                      </h6>
                      <small className="text-muted" style={{ fontSize: '11px' }}>
                        Asked a question <span className="text-orange-custom" style={{ fontWeight: '500' }}>#Performance-marketing #CRM</span>
                      </small>
                    </div>
                  </div>

                  <h6 className="fw-bold text-dark mt-2 font-heading" style={{ fontSize: '0.825rem' }}>
                    Why Your Company Needs A CRM to Grow Better?
                  </h6>

                  <p className="text-muted small leading-relaxed mb-2" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                    CRMs are powerful tools that help you expedite business growth while number with a custom eliminating friction,improving cross-team collaboration,managing your contact records,syncing... <span className="text-orange-custom cursor-pointer" style={{ fontWeight: '400' }}>See more</span>
                  </p>

                  <div className="d-flex align-items-center gap-3 pt-2 border-top" style={{ fontSize: '12px', borderColor: 'var(--border-color)' }}>
                    <button className="btn btn-link text-decoration-none p-0 d-flex align-items-center gap-1 fw-medium text-orange-custom" style={{ fontSize: '12px' }}>
                      <img src={penIcon} alt="Answer" style={{ width: '14px', height: '14px' }} /> Answer
                    </button>
                    <button className="btn btn-link text-decoration-none p-0 text-muted d-flex align-items-center gap-1 fw-medium" style={{ fontSize: '12px' }}>
                      <img src={handIcon} alt="Thanks" style={{ width: '14px', height: '14px' }} /> Thanks
                    </button>
                    <button className="btn btn-link text-decoration-none p-0 text-muted d-flex align-items-center gap-1 fw-medium" style={{ fontSize: '12px' }}>
                      <img src={bulbIcon} alt="Insightful" style={{ width: '14px', height: '14px' }} /> Insightful
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Profile;