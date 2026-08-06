import React from 'react';
import { BsSearch } from 'react-icons/bs';

// Newly added asset icons for Header Controls
import moonImg from '../assets/solar_moon-bold-duotone.png';
import bellImg from '../assets/solar_bell-bing-bold-duotone.png';
import settingsImg from '../assets/settings1.png';
import clockImg from '../assets/solar_clock-circle-bold-duotone.png';
import calendarImg from '../assets/image.png';

/**
 * Header / Navbar Component
 * Uses exact newly uploaded PNG icons from src/assets/ (solar_moon-bold-duotone.png, solar_bell-bing-bold-duotone.png, settings1.png, etc.)
 */
function Header({ title = 'ACCORDION' }) {
  return (
    <header className="top-header">
      {/* Left Title */}
      <h5 className="header-title mb-0">{title}</h5>

      {/* Right Navbar Controls */}
      <div className="d-flex align-items-center gap-3">
        {/* Moon / Theme Toggle */}
        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center" type="button" title="Toggle Theme">
          <img src={moonImg} alt="Moon Theme" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>

        {/* Bell / Notifications with Red Badge */}
        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center position-relative" type="button" title="Notifications">
          <img src={bellImg} alt="Notifications Bell" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
          <span className="notification-dot">3</span>
        </button>

        {/* Settings Icon (settings1.png) */}
        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center" type="button" title="Settings">
          <img src={settingsImg} alt="Settings" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>

        {/* Clock / Schedule Icon */}
        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center" type="button" title="Schedule">
          <img src={clockImg} alt="Schedule Clock" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>

        {/* Calendar Icon */}
        <button className="header-icon-btn border-0 bg-transparent p-1 d-flex align-items-center justify-content-center" type="button" title="Calendar">
          <img src={calendarImg} alt="Calendar" style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
        </button>

        {/* Search Input Box */}
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
