import React from 'react';
import { BsChevronRight } from 'react-icons/bs';

function Breadcrumb() {
  return (
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="default-example">
            <h6 className="fw-bold text-dark mb-1">Default Example</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use our utilities to add additional styles as desired.
            </p>

            <div className="d-flex flex-column gap-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 bg-transparent p-0" style={{ fontSize: '0.825rem' }}>
                  <li className="breadcrumb-item active fw-medium" style={{ color: '#64748b' }} aria-current="page">Home</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 bg-transparent p-0 d-flex align-items-center" style={{ fontSize: '0.825rem' }}>
                  <li className="breadcrumb-item">
                    <a href="#home" className="text-decoration-none" style={{ color: '#64748b' }}>Home</a>
                  </li>
                  <span className="text-muted mx-2" style={{ fontSize: '0.75rem' }}>&gt;</span>
                  <li className="breadcrumb-item active fw-medium" style={{ color: '#475569' }} aria-current="page">Library</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 bg-transparent p-0 d-flex align-items-center" style={{ fontSize: '0.825rem' }}>
                  <li className="breadcrumb-item">
                    <a href="#home" className="text-decoration-none" style={{ color: '#64748b' }}>Home</a>
                  </li>
                  <span className="text-muted mx-2" style={{ fontSize: '0.75rem' }}>&gt;</span>
                  <li className="breadcrumb-item">
                    <a href="#library" className="text-decoration-none" style={{ color: '#64748b' }}>Library</a>
                  </li>
                  <span className="text-muted mx-2" style={{ fontSize: '0.75rem' }}>&gt;</span>
                  <li className="breadcrumb-item active fw-medium" style={{ color: '#475569' }} aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="dividers-breadcrumb">
            <h6 className="fw-bold text-dark mb-1">Dividers Breadcrumb</h6>
            <p className="text-muted small mb-4" style={{ fontSize: '0.78rem' }}>
              Optionally you can also specify the icon with your breadcrumb item.
            </p>

            <div className="d-flex flex-column gap-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 bg-transparent p-0" style={{ fontSize: '0.825rem' }}>
                  <li className="breadcrumb-item active fw-medium" style={{ color: '#64748b' }} aria-current="page">Home</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 bg-transparent p-0 d-flex align-items-center" style={{ fontSize: '0.825rem' }}>
                  <li className="breadcrumb-item">
                    <a href="#home" className="text-decoration-none" style={{ color: '#64748b' }}>Home</a>
                  </li>
                  <span className="text-muted mx-2" style={{ fontSize: '0.75rem' }}>&gt;</span>
                  <li className="breadcrumb-item active fw-medium" style={{ color: '#475569' }} aria-current="page">Library</li>
                </ol>
              </nav>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mb-0 bg-transparent p-0 d-flex align-items-center" style={{ fontSize: '0.825rem' }}>
                  <li className="breadcrumb-item">
                    <a href="#home" className="text-decoration-none" style={{ color: '#64748b' }}>Home</a>
                  </li>
                  <span className="text-muted mx-2" style={{ fontSize: '0.75rem' }}>&gt;</span>
                  <li className="breadcrumb-item">
                    <a href="#library" className="text-decoration-none" style={{ color: '#64748b' }}>Library</a>
                  </li>
                  <span className="text-muted mx-2" style={{ fontSize: '0.75rem' }}>&gt;</span>
                  <li className="breadcrumb-item active fw-medium" style={{ color: '#475569' }} aria-current="page">Data</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top" style={{ top: '80px', zIndex: 10 }}>
            <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8rem' }}>
              <a href="#default-example" className="text-decoration-none text-secondary py-1">Default Example</a>
              <a href="#dividers-breadcrumb" className="text-decoration-none text-secondary py-1">Dividers Breadcrumb</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;