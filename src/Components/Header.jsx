import React from 'react';
import { BsMoon, BsBell, BsSnow, BsClock, BsCalendar4Event, BsSearch } from 'react-icons/bs';

function Header({ title = 'ACCORDION' }) {
  return (
    <header className="top-header">
     
      <h5 className="header-title mb-0">{title}</h5>

     
      <div className="d-flex align-items-center gap-3">
        
        <button className="header-icon-btn" type="button" title="Toggle Theme">
          <BsMoon />
        </button>

       
        <button className="header-icon-btn" type="button" title="Notifications">
          <BsBell />
          <span className="notification-dot">3</span>
        </button>

      
        <button className="header-icon-btn" type="button" title="Settings">
          <BsSnow />
        </button>

        <button className="header-icon-btn" type="button" title="Schedule">
          <BsClock />
        </button>

        <button className="header-icon-btn" type="button" title="Calendar">
          <BsCalendar4Event />
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
