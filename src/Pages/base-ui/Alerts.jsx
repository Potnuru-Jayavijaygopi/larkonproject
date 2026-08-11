import React, { useState } from 'react';
import { BsInfoCircle, BsXCircle, BsShieldCheck, BsX } from 'react-icons/bs';

function Alerts() {
  const [dismissed, setDismissed] = useState({});

  const handleDismiss = (id) => {
    setDismissed((prev) => ({ ...prev, [id]: true }));
  };

  const alertStyles = {
    primary: { backgroundColor: '#FFE9E0', color: '#99371D' },
    secondary: { backgroundColor: '#E2E5E9', color: '#3B4856' },
    success: { backgroundColor: '#D7F5E2', color: '#15733C' },
    danger: { backgroundColor: '#FCE2E2', color: '#8F3939' },
    warning: { backgroundColor: '#FEF2DA', color: '#956F1D' },
    info: { backgroundColor: '#DFF5F4', color: '#1C7773' },
    light: { backgroundColor: '#F8FAFC', color: '#475569' },
    dark: { backgroundColor: '#DADBDE', color: '#323A46' },
  };

  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="basic-example">
            <h6 className="fw-bold text-dark mb-1">Basic Example</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. Alerts are available for any length of text, as well as an optional dismiss button.
            </p>

            <div className="d-flex flex-column gap-2">
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.primary}>
                A simple primary alert—check it out!
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.secondary}>
                A simple secondary alert—check it out!
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.success}>
                A simple success alert—check it out!
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.danger}>
                A simple danger alert—check it out!
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.warning}>
                A simple warning alert—check it out!
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.info}>
                A simple info alert—check it out!
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.light}>
                A simple light alert—check it out!
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.dark}>
                A simple dark alert—check it out!
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="dismissible-alerts">
            <h6 className="fw-bold text-dark mb-1">Dismissible Alerts Example</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Add a dismiss button and the <code className="px-1 rounded" style={{ color: '#db2777', backgroundColor: '#fce7f3', fontSize: '0.75rem' }}>.alert-dismissible</code> class, which adds extra padding to the right of the alert, and positions the <code className="px-1 rounded" style={{ color: '#db2777', backgroundColor: '#fce7f3', fontSize: '0.75rem' }}>.btn-close</code> button.
            </p>

            <div className="d-flex flex-column gap-2">
              {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((type) => (
                !dismissed[type] && (
                  <div key={type} className="alert border-0 rounded-3 px-3 py-2.5 mb-0 d-flex align-items-center justify-content-between position-relative" style={alertStyles[type]}>
                    <span>A simple {type} alert—check it out!</span>
                    <button type="button" className="btn-close shadow-none p-0 border-0 bg-transparent opacity-75" onClick={() => handleDismiss(type)} aria-label="Close">
                      <BsX style={{ fontSize: '1.2rem' }} />
                    </button>
                  </div>
                )
              ))}
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="alert-link">
            <h6 className="fw-bold text-dark mb-1">Alert Link Example</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Use the <code className="px-1 rounded" style={{ color: '#db2777', backgroundColor: '#fce7f3', fontSize: '0.75rem' }}>.alert-link</code> utility class to quickly provide matching, colored links within any alert.
            </p>

            <div className="d-flex flex-column gap-2">
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.primary}>
                A simple primary alert with <a href="#link" className="fw-bold text-decoration-underline" style={{ color: 'inherit' }}>an example link</a>. Give it a click if you like.
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.secondary}>
                A simple secondary alert with <a href="#link" className="fw-bold text-decoration-underline" style={{ color: 'inherit' }}>an example link</a>. Give it a click if you like.
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.success}>
                A simple success alert with <a href="#link" className="fw-bold text-decoration-underline" style={{ color: 'inherit' }}>an example link</a>. Give it a click if you like.
              </div>
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0" style={alertStyles.danger}>
                A simple danger alert with <a href="#link" className="fw-bold text-decoration-underline" style={{ color: 'inherit' }}>an example link</a>. Give it a click if you like.
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="icons-alert">
            <h6 className="fw-bold text-dark mb-1">Icons Alert Example</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              You can also include additional elements like icons, heading, etc. along side the actual message.
            </p>

            <div className="d-flex flex-column gap-2">
              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0 d-flex align-items-center gap-3" style={alertStyles.primary}>
                <span className="d-inline-flex align-items-center justify-content-center rounded-3 text-white flex-shrink-0" style={{ width: '28px', height: '28px', backgroundColor: '#FF6C2F' }}>
                  <BsInfoCircle style={{ fontSize: '0.85rem' }} />
                </span>
                <span>A simple primary alert—check it out!</span>
              </div>

              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0 d-flex align-items-center gap-3" style={alertStyles.secondary}>
                <span className="d-inline-flex align-items-center justify-content-center rounded-3 text-white flex-shrink-0" style={{ width: '28px', height: '28px', backgroundColor: '#5D7186' }}>
                  <BsXCircle style={{ fontSize: '0.85rem' }} />
                </span>
                <span>A simple secondary alert—check it out!</span>
              </div>

              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0 d-flex align-items-center gap-3" style={alertStyles.success}>
                <span className="d-inline-flex align-items-center justify-content-center rounded-3 text-white flex-shrink-0" style={{ width: '28px', height: '28px', backgroundColor: '#22C55E' }}>
                  <BsShieldCheck style={{ fontSize: '0.85rem' }} />
                </span>
                <span>A simple success alert—check it out!</span>
              </div>

              <div className="alert border-0 rounded-3 px-3 py-2.5 mb-0 d-flex align-items-center gap-3" style={alertStyles.danger}>
                <span className="d-inline-flex align-items-center justify-content-center rounded-3 text-white flex-shrink-0" style={{ width: '28px', height: '28px', backgroundColor: '#EF5F5F' }}>
                  <BsInfoCircle style={{ fontSize: '0.85rem' }} />
                </span>
                <span>A simple danger alert—check it out!</span>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="additional-content">
            <h6 className="fw-bold text-dark mb-1">Additional Content Alert Example</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Alerts can also contain additional HTML elements like headings, paragraphs and dividers.
            </p>

            <div className="row g-3">
              <div className="col-md-6">
                <div className="p-4 rounded-3 h-100" style={alertStyles.primary}>
                  <h5 className="fw-bold mb-2">Well done!</h5>
                  <p className="small mb-3" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                  </p>
                  <p className="small mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 rounded-3 h-100" style={alertStyles.secondary}>
                  <h5 className="fw-bold mb-2">Well done!</h5>
                  <p className="small mb-3" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
                  </p>
                  <p className="small mb-0" style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                    Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top" style={{ top: '80px', zIndex: 10 }}>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
              <a href="#basic-example" className="text-decoration-none text-secondary py-1">Basic Example</a>
              <a href="#dismissible-alerts" className="text-decoration-none text-secondary py-1">Alert Dismissible</a>
              <a href="#alert-link" className="text-decoration-none text-secondary py-1">Alert Link</a>
              <a href="#icons-alert" className="text-decoration-none text-secondary py-1">Icon Alert</a>
              <a href="#additional-content" className="text-decoration-none text-secondary py-1">Additional Content Alert</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alerts;