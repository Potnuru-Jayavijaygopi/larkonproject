import React from 'react';
import { BsSearch,BsGearFill,BsGear,BsImage, BsClockFill, BsMoonFill,BsBellFill } from 'react-icons/bs';

function Header({ title = 'ACCORDION' }) {
  return (
    <header className="top-header">
     
      <h5 className="header-title mb-0">{title}</h5>

     
      <div className="d-flex align-items-center gap-3">
        
        <button className="header-icon-btn" type="button" title="Toggle Theme">
          <BsMoonFill />
        </button>

       
        <button className="header-icon-btn" type="button" title="Notifications">
          <BsBellFill />
          <span className="notification-dot">3</span>
        </button>

      
        <button className="header-icon-btn" type="button" title="Settings">
          <BsGearFill />
        </button>

        <button className="header-icon-btn" type="button" title="Schedule">
          <BsClockFill />
        </button>

      <div className='rounded-4 bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0' style={{width : 26,height : 26}}>
          <button className="header-icon-btn text-dark opacity-75" type="button" title="Calendar" style={{fontSize : 12}}>
          <BsImage />
        </button>
      </div>

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
