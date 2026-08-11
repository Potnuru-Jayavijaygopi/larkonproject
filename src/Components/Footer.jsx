import React from 'react';
import { BsHeartFill } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer-custom w-100">
      <div className="container-fluid px-3 px-md-4">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 py-3 border-top" style={{ borderColor: 'var(--border-color, #eaedf1)' }}>
          <div className="d-flex align-items-center text-secondary small text-nowrap" style={{ fontSize: '0.85rem' }}>
            <span>2024 &copy; Larkon. Crafted by</span>
            <span className="text-danger mx-1 d-inline-flex align-items-center">
              <BsHeartFill style={{ fontSize: '0.75rem' }} />
            </span>
            <a
              href="https://techzaa.in"
              target="_blank"
              rel="noreferrer"
              className="fw-semibold text-decoration-none"
              style={{ color: 'var(--primary-orange, #ff5e29)' }}
            >
              Techzaa
            </a>
          </div>

          <div className="d-none d-sm-flex align-items-center gap-3 text-secondary small text-nowrap" style={{ fontSize: '0.85rem' }}>
            <a href="#about" className="text-secondary text-decoration-none hover-orange">
              About
            </a>
            <a href="#support" className="text-secondary text-decoration-none hover-orange">
              Support
            </a>
            <a href="#contact" className="text-secondary text-decoration-none hover-orange">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;