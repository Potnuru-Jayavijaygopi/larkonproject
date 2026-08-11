import { useState } from "react";


function Offcanvas() {
  const[activeCanvas, setActiveCanvas] = useState(null);
  const closeCanvas = () => setActiveCanvas(null);

  return(
    
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="default-buttons">
            <h6 className="fw-bold text-dark mb-1">Default Buttons</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              You can use a link with the href attributes, or a button with the <code>data-bs-target</code> attribute. In both cases, the <code>data-bs-toggle="offcanvas"</code> is required.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <a
              href="#offcanvas-link"
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#ff5e29', borderRadius:'0.375rem',fontSize:'0.78rem', width:'fit-content'}}
              onClick={(e) => {
                e.preventDefault();
                setActiveCanvas('left')
              }}
              >
                Link with href
              </a>
              <button
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#64748b', borderRadius:'0.375rem',fontSize:'0.78rem', width:'fit-content'}}
              onClick={() => setActiveCanvas('left')}
              >
                Button with data-bs-target
              </button>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="static-backdrop">
            <h6 className="fw-bold text-dark mb-1">Static Backdrop</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Scrolling the <code>&lt;body&gt;</code> element is disabled when an offcanvas and its backdrop are visible. Use the <code>data-bs-scroll</code> attribute to toggle<code>&lt;body&gt;</code> scrolling and <code>data-bs-backdrop</code> to toggle the backdrop.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <button
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#ff5e29', borderRadius:'0.375rem',fontSize:'0.78rem'}}
              onClick={() => setActiveCanvas('scroll')}
              >
                Enable Body Scrolling 
              </button>
              <button
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#64748b', borderRadius:'0.375rem',fontSize:'0.78rem'}}
              onClick={() => setActiveCanvas('backdrop')}
              >
                Enable Backdrop (Default) 
              </button>

              <button
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#10b981', borderRadius:'0.375rem',fontSize:'0.78rem'}}
              onClick={() => setActiveCanvas('both')}
              >
                Enable Both Scrolling & Backdrop 
              </button>



            </div>
          </div>  

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="offcanvas-position">
            <h6 className="fw-bold text-dark mb-1">Offcanvas Position</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Try the top, right, bottom and left examples out below.
            </p>

            <ul className="text-muted small mb-4" style={{fontSize:'0.78rem', paddingLeft:'1.2rem'}}>
              <li><code>.offcanvas-top</code> places offcanvas on the top of the viewport</li>
              <li><code>.offcanvas-end</code> places offcanvas on the right of the viewport</li>
              <li><code>.offcanvas-bottom</code> places offcanvas on the bottom of the viewport</li>
              <li><code>.offcanvas-start</code> places offcanvas on the left of the viewport</li>
            </ul>

            <div className="d-flex flex-wrap gap-2">
              <button
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#ff5e29', borderRadius:'0.375rem',fontSize:'0.78rem'}}
              onClick={() => setActiveCanvas('left')}
              >
                Left Offcanvas 
              </button>
              <button
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#64748b', borderRadius:'0.375rem',fontSize:'0.78rem'}}
              onClick={() => setActiveCanvas('right')}
              >
                Right Offcanvas
              </button>

              
              <button
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#10b981', borderRadius:'0.375rem',fontSize:'0.78rem'}}
              onClick={() => setActiveCanvas('top')}
              >
                Top Offcanvas
              </button>

              <button
              className="btn text-white btn-sm px-3 py-1.5"
              style={{backgroundColor:'#06b6d4', borderRadius:'0.375rem',fontSize:'0.78rem'}}
              onClick={() => setActiveCanvas('bottom')}
              >
                Bottom Offcanvas
              </button>
            </div>
          </div>
        </div>

          <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white sticky-top" style={{top:'80px', zIndex:10}}>
            <div className="d-flex flex-column gap-2" style={{fontSize:'0.8rem'}}>
              <a href="#default-buttons"className="text-decoration-none text-secondary py-1">Default Buttons</a>
              <a href="#static-backdrop"className="text-decoration-none text-secondary py-1">Static Backdrop</a>
              <a href="#offcanvas-position"className="text-decoration-none text-secondary py-1">Offcanvas Position</a>
            </div>
          </div>
        </div>
      </div>

      {activeCanvas && (
      <>
        <div
        className="modal-backdrop fade show"
        style={{zIndex:1040}}
        onClick={closeCanvas}
        ></div>

        <div
        className={`offcanvas show bg-white shadow-lg`}
        tabIndex="-1"
        style={{
          position:'fixed',
          zIndex:1050,
          transition:'all 0.3s ease-in-out',
          ...(activeCanvas === 'top'
            ? {top: 0, left: 0, right:0 , height: '30vh'}
            : activeCanvas === 'bottom'
            ? {bottom: 0, left: 0, right:0 , height: '30vh'}
            : activeCanvas === 'right'
            ? {top: 0, right: 0, bottom:0 , width: '320px'}
            : {top: 0, left: 0, bottom:0 , width: '320px'})
        }}
        >
          <div className="offcanvas-header border-bottom p-3 d-flex justify-content-between align-items-center">
            <h5 className="offcanvas-title fw-bold m-0" style={{fontSize:'1rem'}}>
              Offcanvas {activeCanvas}
            </h5>
            <button
            type="button"
            className="btn-close text-reset"
            onClick={closeCanvas}
            aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-4">
            <p className="text-muted small">
              Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
            </p>
            <div className="dropdown mt-3">
              <button
              className="btn text-white btn-sm dropdown-toggle px-3 py-1.5"
              style={{backgroundColor:'#ff5e29',fontSize:'0.78rem'}}
              >
                Dropdown button
              </button>
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  
  );
}
export default Offcanvas;