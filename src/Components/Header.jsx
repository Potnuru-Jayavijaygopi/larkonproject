import React from 'react';
import { BsSearch } from 'react-icons/bs';

import moonImg from '../assets/solar_moon-bold-duotone.png';
import bellImg from '../assets/solar_bell-bing-bold-duotone.png';
import settingsImg from '../assets/settings1.png';
import clockImg from '../assets/solar_clock-circle-bold-duotone.png';
import calendarImg from '../assets/image.png';


function Header({ title = 'ACCORDION' }) {
  return (
    <header className="top-header">
      <h5 className="header-title mb-0">{title}</h5>

      <div className="d-flex align-items-center gap-3">
        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center" type="button" title="Toggle Theme">
          <img src={moonImg} alt="Moon Theme" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>

        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center position-relative" type="button" title="Notifications">
          <img src={bellImg} alt="Notifications Bell" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
          <span className="notification-dot">3</span>
        </button>

        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center" type="button" title="Settings">
          <img src={settingsImg} alt="Settings" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>

        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center" type="button" title="Schedule">
          <img src={clockImg} alt="Schedule Clock" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>

        
        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center" type="button" title="Calendar">
          <img src={calendarImg} alt="Calendar" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>

        <div className="header-search">
          <BsSearch className="position-absolute start-0 ms-3 top-50 translate-middle-y text-muted" />
          <input
            type="text"
            className="form-control form-control-sm"
            placeholder="Search..."
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
