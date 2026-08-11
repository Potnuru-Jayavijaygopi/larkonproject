import React from 'react';
import { BsHeartFill } from 'react-icons/bs';

function Footer() {
  return (
    <footer className="footer-custom w-100">
      <div
        className="d-flex align-items-center justify-content-center text-center py-3 text-secondary small text-nowrap"
        style={{ fontSize: '0.85rem' }}
      >
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
    </footer>
  );
}

export default Footer;