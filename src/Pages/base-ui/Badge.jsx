import React from 'react';

function Badge() {
  const colors = {
    primary: '#FF6C2F',
    secondary: '#5D7186',
    success: '#22C55E',
    info: '#4ECAC2',
    warning: '#F9B931',
    danger: '#EF5F5F',
    dark: '#323A46',
    purple: '#7F56DA',
    pink: '#FF86C8',
    orange: '#FF6C2F',
  };

  const softBgs = {
    primary: 'rgba(255, 108, 47, 0.15)',
    secondary: 'rgba(93, 113, 134, 0.15)',
    success: 'rgba(34, 197, 94, 0.15)',
    info: 'rgba(78, 202, 194, 0.15)',
    warning: 'rgba(249, 185, 49, 0.15)',
    danger: 'rgba(239, 95, 95, 0.15)',
    dark: 'rgba(50, 58, 70, 0.15)',
    purple: 'rgba(127, 86, 218, 0.15)',
    pink: 'rgba(255, 134, 200, 0.15)',
    orange: 'rgba(255, 108, 47, 0.15)',
  };

  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="heading">
            <h6 className="fw-bold text-dark mb-1">Heading</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Provide contextual feedback messages for typical user actions with the handful of availabe and flexible alret message. Alerts are available for any lenght of text, as well as an optional dismiss button.
            </p>
            <div className="d-flex flex-column gap-2">
              <h1 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                h1.Example heading <span className="badge text-white px-2 py-1 fs-6" style={{ backgroundColor: colors.primary, borderRadius: '0.25rem' }}>New</span>
              </h1>
              <h2 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                h2.Example heading <span className="badge text-white px-2 py-1 fs-6" style={{ backgroundColor: colors.secondary, borderRadius: '0.25rem' }}>New</span>
              </h2>
              <h3 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                h3.Example heading <span className="badge text-white px-2 py-1 fs-6" style={{ backgroundColor: colors.success, borderRadius: '0.25rem' }}>New</span>
              </h3>
              <h4 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                h4.Example heading <span className="badge text-white px-2 py-1 fs-6" style={{ backgroundColor: colors.info, borderRadius: '0.25rem' }}>New</span>
              </h4>
              <h5 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                h5.Example heading <span className="badge text-white px-2 py-1 fs-6" style={{ backgroundColor: colors.warning, borderRadius: '0.25rem' }}>New</span>
              </h5>
              <h6 className="fw-bold text-dark mb-0 d-flex align-items-center gap-2">
                h6.Example heading <span className="badge text-white px-2 py-1 fs-6" style={{ backgroundColor: colors.danger, borderRadius: '0.25rem' }}>New</span>
              </h6>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="default-pill-badges">
            <h6 className="fw-bold text-dark mb-1">Default & Pill Badges</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Use our background utility classes to quickly change the appearance of a badge. And use the <code>. rounded-pill</code> class to make badge more rounded.
            </p>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-wrap gap-2">
                {Object.keys(colors).map((key) => (
                  <span key={key} className="badge text-white px-2.5 py-1 text-capitalize" style={{ backgroundColor: colors[key], fontSize: '0.72rem', fontWeight: '500', borderRadius: '0.25rem' }}>
                    {key}
                  </span>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2">
                {Object.keys(colors).map((key) => (
                  <span key={key} className="badge text-white rounded-pill px-3 py-1 text-capitalize" style={{ backgroundColor: colors[key], fontSize: '0.72rem', fontWeight: '500' }}>
                    {key}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="outline-pill-badges">
            <h6 className="fw-bold text-dark mb-1">Outline & outline pill Badges</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Using the <code>. badge-otline-*</code> to quickly create a boardered badges.
            </p>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-wrap gap-2">
                {Object.keys(colors).map((key) => (
                  <span key={key} className="badge bg-transparent px-2.5 py-1 text-capitalize" style={{ color: colors[key], border: `1px solid ${colors[key]}`, fontSize: '0.72rem', fontWeight: '500', borderRadius: '0.25rem' }}>
                    {key}
                  </span>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2">
                {Object.keys(colors).map((key) => (
                  <span key={key} className="badge bg-transparent rounded-pill px-3 py-1 text-capitalize" style={{ color: colors[key], border: `1px solid ${colors[key]}`, fontSize: '0.72rem', fontWeight: '500' }}>
                    {key}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="soft-pill-badges">
            <h6 className="fw-bold text-dark mb-1">Soft & Soft pill Badges</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Using the <code>. badge-soft-*</code> modifier class, you can have more softer variation.
            </p>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-wrap gap-2">
                {Object.keys(colors).map((key) => (
                  <span key={key} className="badge border-0 px-2.5 py-1 text-capitalize" style={{ color: colors[key], backgroundColor: softBgs[key], fontSize: '0.72rem', fontWeight: '500', borderRadius: '0.25rem' }}>
                    {key}
                  </span>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2">
                {Object.keys(colors).map((key) => (
                  <span key={key} className="badge border-0 rounded-pill px-3 py-1 text-capitalize" style={{ color: colors[key], backgroundColor: softBgs[key], fontSize: '0.72rem', fontWeight: '500' }}>
                    {key}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="buttons-position">
            <h6 className="fw-bold text-dark mb-1">Buttons & Position</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Alerts can also contain additional HTML elements like headings, paragraphs and dividers
            </p>
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <button className="btn text-white btn-sm px-3 py-2 d-flex align-items-center gap-2" style={{ backgroundColor: colors.primary, borderRadius: '0.375rem', fontWeight: '500' }}>
                Notifications <span className="badge text-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)', fontSize: '0.7rem' }}>4</span>
              </button>

              <button className="btn btn-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2" style={{ border: `1px solid ${colors.primary}`, color: colors.primary, fontWeight: '500' }}>
                Notifications <span className="badge text-white" style={{ backgroundColor: colors.primary, fontSize: '0.7rem' }}>new</span>
              </button>

              <button className="btn btn-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2" style={{ backgroundColor: softBgs.primary, color: colors.primary, border: 'none', fontWeight: '500' }}>
                Notifications <span className="badge text-white" style={{ backgroundColor: colors.primary, fontSize: '0.7rem' }}>11</span>
              </button>

              <button className="btn btn-sm px-3 py-2 d-flex align-items-center gap-2" style={{ backgroundColor: softBgs.primary, color: colors.primary, border: 'none', borderRadius: '0.375rem', fontWeight: '500' }}>
                Notifications <span className="badge text-white" style={{ backgroundColor: colors.primary, fontSize: '0.7rem' }}>90+</span>
              </button>

              <div className="position-relative d-inline-block">
                <button className="btn text-white btn-sm px-3 py-2" style={{ backgroundColor: colors.primary, borderRadius: '0.375rem', fontWeight: '500' }}>
                  Inbox
                </button>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.65rem' }}>
                  99+
                </span>
              </div>

              <div className="position-relative d-inline-block">
                <button className="btn text-white btn-sm px-3 py-2" style={{ backgroundColor: colors.primary, borderRadius: '0.375rem', fontWeight: '500' }}>
                  Profile
                </button>
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-white rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top" style={{ top: '80px', zIndex: 10 }}>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
              <a href="#heading" className="text-decoration-none text-secondary py-1">Heading</a>
              <a href="#default-pill-badges" className="text-decoration-none text-secondary py-1">Default & Pill Badges</a>
              <a href="#outline-pill-badges" className="text-decoration-none text-secondary py-1">Outline & Outline Pill Badges</a>
              <a href="#soft-pill-badges" className="text-decoration-none text-secondary py-1">Soft & Soft Pill Badges</a>
              <a href="#buttons-position" className="text-decoration-none text-secondary py-1">Buttons & Position</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Badge;