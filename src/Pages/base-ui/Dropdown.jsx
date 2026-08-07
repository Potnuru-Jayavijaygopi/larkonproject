import React, { useState } from 'react'
import {BsChevronDown, BsChevronLeft, BsChevronRight, BsChevronUp} from "react-icons/bs"

function Dropdown() {
  const [openMenu,setOpenMenu] = useState(null);
  const toggleDropdown = (name) =>{
    setOpenMenu(openMenu === name ? null : name);
  };

  const btnStyle = {
    borderRadius : "0.375rem",
    fontSize : "0.85rem",
    padding : "0.45rem o.9rem",
    fontWeight : "500",
    border : "none",
  }
  return (
    <div className='container-fluid p-4'>
      <div className='row g-4'>
        <div className='col-xl-9 col-lg-8'>
          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='single-button-dropdowns'>
            <h6 className='fw-bold text-dark mb-1'>Single Button Dropdown</h6>
            <p className='text-muted small mb-3' style={{fontSize : "0.78rem"}}>
              Any single<code> .btn </code>can be turned into a dropdown toggle with some markup changes.here's how you can put them to work with either<code> &lt;button&gt; </code> 
              elements.
            </p>
            <div className='d-flex flex-wrap gap-3'>
              <div className='position-relative'>
                <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#475569"}}onClick={()=>toggleDropdown("single1")}>
                  Dropdown button <BsChevronDown/>

                </button>
                {
                  openMenu === "single1" && (
                    <div className='position-absolute top-100 start-0 mt-1 card shadow border-0 rounded-3 py-2 z-3' style={{width:"160px",fontSize : "0.825rem"}}>
                      <a className='dropdown-item py-1 px-3' href='#action1'>Action</a>
                      <a className='dropdown-item py-1 px-3' href='#action2'>Another action</a>
                      <a className='dropdown-item py-1 px-3' href='#action3'>Something else here</a>
                      

                    </div>
                  )
                }
              </div>
              <div className='position-relative'>
                <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#475569"}}onClick={()=>toggleDropdown("single2")}>
                  Dropdown link <BsChevronDown/>

                </button>
                {
                  openMenu === "single2" && (
                    <div className='position-absolute top-100 start-0 mt-1 card shadow border-0 rounded-3 py-2 z-3' style={{width:"160px",fontSize : "0.825rem"}}>
                      <a className='dropdown-item py-1 px-3' href='#action1'>Action</a>
                      <a className='dropdown-item py-1 px-3' href='#action2'>Another action</a>
                      <a className='dropdown-item py-1 px-3' href='#action3'>Something else here</a>
                      

                    </div>
                  )
                }
              </div>
            </div>
          </div>


          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='single-button-variant-dropdowns'>
            <h6 className='fw-bold text-dark mb-1'>Single Button Variant Dropdowns</h6>
            <p className='text-muted small mb-3' style={{fontSize : "0.78rem"}}>
              Any Single <code>.btn </code> can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either <code>&lt;button&gt; </code>elements.
            </p>
            <div className='d-flex flex-wrap gap-2'>
              <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#ff5e29"}}>Primary <BsChevronDown/></button>
              <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#64748b"}}>Secondary <BsChevronDown/></button>
              <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#10b981"}}>Success <BsChevronDown/></button>
              <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#06b6d4"}}>Info <BsChevronDown/></button>
            </div>
          </div>


         <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='single-button-dropdowns'>
            <h6 className='fw-bold text-dark mb-1'>Single Button Dropdowns</h6>
            <p className='text-muted small mb-3' style={{fontSize : "0.78rem"}}>
              Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of <code>.dropdown-toggle-split</code> for proper spacing around the dropdown caret.
            </p>
            <div className='d-flex flex-wrap gap-2'>
              <div className='btn-group rounded-3 overflow-hidden'>
                <button className='btn text-white' style={{...btnStyle,backgroundColor :"#ff5e29",borderRadius : 0}}>Primary</button>
                <button className='btn text-white px-2 border-start border-white border-opacity-25' style={{...btnStyle,backgroundColor :"#ff5e29",borderRadius : 0}}> <BsChevronDown/></button>
              </div>
              <div className='btn-group rounded-3 overflow-hidden'>
                <button className='btn text-white' style={{...btnStyle,backgroundColor :"#64748b",borderRadius : 0}}>Secondary</button>
                <button className='btn text-white px-2 border-start border-white border-opacity-25' style={{...btnStyle,backgroundColor :"#64748b",borderRadius : 0}}> <BsChevronDown/></button>
              </div>
              <div className='btn-group rounded-3 overflow-hidden'>
                <button className='btn text-white' style={{...btnStyle,backgroundColor :"#10b981",borderRadius : 0}}>Success</button>
                <button className='btn text-white px-2 border-start border-white border-opacity-25' style={{...btnStyle,backgroundColor :"#10b981",borderRadius : 0}}> <BsChevronDown/></button>
              </div>
              <div className='btn-group rounded-3 overflow-hidden'>
                <button className='btn text-white' style={{...btnStyle,backgroundColor :"#06b6d4",borderRadius : 0}}>Info</button>
                <button className='btn text-white px-2 border-start border-white border-opacity-25' style={{...btnStyle,backgroundColor :"#06b6d4",borderRadius : 0}}> <BsChevronDown/></button>
              </div>
             </div>
           </div>

            <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="dark-dropdowns">
            <h6 className="fw-bold text-dark mb-1">Dark Dropdowns</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Opt into darker dropdowns to match a dark navbar or custom style by adding <code>.dropdown-menu-dark</code> onto an existing <code>.dropdown-menu</code>. No changes are required to the dropdown items.
            </p>

            <div className='position-relative'>
                <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#ff5e29"}}onClick={()=>toggleDropdown("dark")}>
                  Dark Dropdown <BsChevronDown/>

                </button>
                {
                  openMenu === "dark" && (
                    <div className='position-absolute top-100 start-0 mt-1 bg-dark shadow border-0 rounded-3 py-2 z-3' style={{width:"170px",fontSize : "0.825rem"}}>
                      <a className='dropdown-item text-white py-1 px-3' href='#action1'>Action</a>
                      <a className='dropdown-item text-white py-1 px-3' href='#action2'>Another action</a>
                      <a className='dropdown-item text-white py-1 px-3' href='#action3'>Something else here</a>
                      

                    </div>
                  )
                }
              </div>
            </div>

          <div className='card border-0 shadow-sm rounded-3 p-4 bg-white mb-4' id='dropdown-direction'>
            <h6 className='fw-bold text-dark mb-1'>Dropdown Direction</h6>
            <p className='text-muted small mb-3' style={{fontSize : "0.78rem"}}>
            Trigger dropdown menus above elements by adding <code>.dropup</code>, dropdown menus at the left of the elements by adding <code>.dropstart</code>, or fropdown menus at the right of the elements by adding <code>.dropend</code>.
            </p>
            <div className='d-flex flex-wrap gap-2'>
              <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#ff5e29"}}>Drop Down <BsChevronDown/></button>
              <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#64748b"}}>Drop Up <BsChevronUp/></button>
              <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#10b981"}}>Drop Right <BsChevronRight/></button>
              <button className='btn text-white d-flex align-items-center gap-2' style={{...btnStyle,backgroundColor : "#06b6d4"}}>Drop Left <BsChevronLeft/></button>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="dropdown-menu-items">
            <h6 className="fw-bold text-dark mb-1">Dropdown Menu Items</h6>
            <p className="text-muted small mb-1" style={{ fontSize: '0.78rem' }}>
              Add <code>.active</code> to items in the dropdown to <strong>style them as active</strong>. To convey the active state to assistive technologies, use the <code>aria-current</code> attribute — using the <code>page</code> value for the current page, or <code>true</code> for the current item in a set.
            </p>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Add <code>.disabled</code> to items in the dropdown to <strong>style them as disabled</strong>.
            </p>

            <div className="d-flex flex-wrap gap-4">
              <div className="card shadow-sm border-0 rounded-3 py-2" style={{ width: '180px', fontSize: '0.825rem' }}>
                <a className="dropdown-item py-1 px-3 text-secondary" href="#item1">Regular link</a>
                <a className="dropdown-item py-1 px-3 text-white fw-medium"  href="#item2">Active link</a>
                <a className="dropdown-item py-1 px-3 text-secondary" href="#item3">Another link</a>
              </div>

              <div className="card shadow-sm border-0 rounded-3 py-2" style={{ width: '180px', fontSize: '0.825rem' }}>
                <a className="dropdown-item py-1 px-3 text-secondary" href="#item1">Regular link</a>
                <a className="dropdown-item py-1 px-3 text-white fw-medium"  href="#item2">Active link</a>
                <a className="dropdown-item py-1 px-3 text-secondary" href="#item3">Another link</a>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="dropdown-options">
            <h6 className="fw-bold text-dark mb-1">Dropdown options</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change the location of the dropdowns.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#475569' }}>
                Offset <BsChevronDown />
              </button>
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#475569' }}>
                Reference <BsChevronDown />
              </button>
            </div>
          </div>


          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="auto-close-behavior">
            <h6 className="fw-bold text-dark mb-1">Auto close behavior</h6>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              By default, the dropdown menu is closed when clicking inside or outside the dropdown menu. You can use the <code>autoClose</code> option to change this behavior of the dropdown.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#475569' }}>
                Default dropdown <BsChevronDown />
              </button>
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#475569' }}>
                Clickable outside <BsChevronDown />
              </button>
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#475569' }}>
                Clickable inside <BsChevronDown />
              </button>
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#475569' }}>
                Manual close <BsChevronDown />
              </button>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="menu-content">
            <h6 className="fw-bold text-dark mb-1">Menu Content</h6>
            <p className="text-muted small mb-1" style={{ fontSize: '0.78rem' }}>
              Add a header to label sections of actions in any dropdown menu.
            </p>
            <p className="text-muted small mb-1" style={{ fontSize: '0.78rem' }}>
              Separate groups of related menu items with a divider.
            </p>
            <p className="text-muted small mb-1" style={{ fontSize: '0.78rem' }}>
            Place any freeform text within a dropdown menu with text and use spacing utilities. Note that you'll likely need additional sizing styles to constrain the menu width.
            </p>
            <p className="text-muted small mb-3" style={{ fontSize: '0.78rem' }}>
              Put a form within a dropdown menu, or make it into a dropdown menu, and use margin or padding utilities to give it the negative space you require.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#ff5e29' }}>
                Dropdown Header <BsChevronDown />
              </button>
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#06b6d4' }}>
                Dropdown Divider <BsChevronDown />
              </button>
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#475569' }}>
                Dropdown Text <BsChevronDown />
              </button>
              <button className="btn text-white d-flex align-items-center gap-2" style={{ ...btnStyle, backgroundColor: '#10b981' }}>
                Dropdown Menu Forms <BsChevronDown />
              </button>
            </div>
          </div>
        </div>

        <div className='col-xl-3 col-lg-4'>
          <div className='card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top' style={{top:"80px",zIndex : 10}}>
            <div className='d-flex flex-column gap-2' style={{fontSize : "0.8rem"}}>
              <a href="#single-button-dropdowns" className="text-decoration-none text-secondary py-1">Single Button Dropdowns</a>
              <a href="#single-button-variant-dropdowns" className="text-decoration-none text-secondary py-1">Single Button Variant Dropdowns</a>
              <a href="#split-button-dropdowns" className="text-decoration-none text-secondary py-1">Split Button Dropdowns</a>
              <a href="#dark-dropdowns" className="text-decoration-none text-secondary py-1">Dark Dropdowns</a>
              <a href="#dropdown-direction" className="text-decoration-none text-secondary py-1">Dropdown Direction</a>
              <a href="#dropdown-menu-items" className="text-decoration-none text-secondary py-1">Dropdown Menu Items</a>
              <a href="#dropdown-options" className="text-decoration-none text-secondary py-1">Dropdown Options</a>
              <a href="#auto-close-behavior" className="text-decoration-none text-secondary py-1">Auto Close Behavior</a>
              <a href="#menu-content" className="text-decoration-none text-secondary py-1">Menu Content</a>

            </div>
          </div>

        </div>



      </div>
    </div>
  )
}

export default Dropdown