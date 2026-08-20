function Placeholders(){
  const colors = [
  { bg: '#9aa4ad', name: 'default' },
  { bg: '#ff9b7a', name: 'primary' },
  { bg: '#9aa4ad', name: 'secondary' },
  { bg: '#7ed9a5', name: 'success' },
  { bg: '#f39a9d', name: 'danger' },
  { bg: '#f2c875', name: 'warning' },
  { bg: '#73ced8', name: 'info' },
  { bg: '#fffaf0', name: 'light' },
  { bg: '#8f949b', name: 'dark' },
];

  return(
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="overview">
            <h6 className="fw-bold text-dark mb-1">Default</h6>
            <p className="text-muted small mb-4" style={{fontSize: '0.78rem'}}>
              A progress bar can be used to show a user how far along he/she is in a process.
            </p>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border shadow-none rounded-3 overflow-hidden" style={{maxWidth:'280px'}}>
                  <div className="text-white d-flex align-items-center justify-content-center" style={{height: '140px', backgroundColor: '#20c997'}}></div>
                  <div className="card-body p-3">
                    <h6 className="card-title fw-bold text-dark mb-2" style={{fontSize:'0.9rem'}}>Card title</h6>
                    <p className="card-text text-muted small mb-3" style={{fontSize:'0.75rem', lineHeight:'1.4'}}>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <button className="btn text-white btn-sm px-3 py-1.5" style={{backgroundColor:'#ff5e29', fontSize:'0.78rem'}}>
                      Go somewhere
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border shadow-none rounded-3 overflow-hidden" style={{maxWidth:'280px'}} aria-hidden="true">
                  <div className="d-flex align-items-center justify-content-center" style={{height: '140px', backgroundColor: '#9aa4ad'}}></div>
                  <div className="card-body p-3"></div>
                  <h6 className="card-title placeholder-glow mb-2">
                    <span className="placeholder col-6 rounded" style={{backgroundColor:'#adb8c1'}}></span>
                  </h6>
                  <p className="card-text placeholder-glow mb-3">
                    <span className="placeholder col-7 rounded me-1" style={{backgroundColor:'#adb8c1'}}></span>
                    <span className="placeholder col-4 rounded me-1" style={{backgroundColor:'#adb8c1'}}></span>
                    <span className="placeholder col-4 rounded me-1" style={{backgroundColor:'#adb8c1'}}></span>
                    <span className="placeholder col-6 rounded me-1" style={{backgroundColor:'#adb8c1'}}></span>
                  </p>
                  <a className="btn disabled placeholder col-6 text-white py-1.5" style={{backgroundColor:'#ff5e29',border:'none'}} aria-disabled="true"></a>
                </div>
              </div>
            </div>
          </div>
        

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="how-it-works">
            <h6 className="fw-bold text-dark mb-1">How it works</h6>
            <p className="text-muted small mb-4" style={{fontSize: '0.78rem'}}>
              Create placeholders with the <code>.placeholder</code> class and a grid column class(e.g., <code>.col-6</code>)to set the <code>width</code>. They can replace the text inside an element or be added as a modifier class to an existing component.
            </p>
            <div className="d-flex flex-column gap-3">
              <p className="placeholder-glow mb-0">
                <span className="placeholder col-6 rounded py-2" style={{backgroundColor:'#9aa4ad'}}></span>
              </p>
              <a className="btn disabled placeholder col-4 text-white py-2" style={{backgroundColor:'#ff5e29',border:'none'}} aria-disabled="true"></a>
            
          </div>
        </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="width">
            <h6 className="fw-bold text-dark mb-1">Width</h6>
            <p className="text-muted small mb-3" style={{fontSize:'0.78rem'}}>
              You can change the <code>width</code> through grid column classes, width utilities, or inline styles.
            </p>

            <div className="d-flex flex-column gap-2 placeholder-glow">
              <span className="placeholder col-6 rounded py-1.5" style={{backgroundColor:'#adb8c1'}}></span>
              <span className="placeholder col-12 rounded py-1.5" style={{backgroundColor:'#adb8c1'}}></span>
              <span className="placeholder col-4 rounded py-1.5" style={{backgroundColor:'#adb8c1'}}></span>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="color">
            <h6 className="fw-bold text-dark mb-1">Color</h6>
            <p className="text-muted small mb-3" style={{fontSize:'0.78rem'}}>
              By default the <code>placeholder</code> uses <code>currentColor</code>. This can be overriden with a custom color or utility class.
            </p>

            <div className="d-flex flex-column gap-2">
              {colors.map((c,i) =>(
                <span key={i} className="placeholder col-12 rounded py-1.5" style={{backgroundColor: c.bg}}></span>
              ))}
            </div>
          </div>
        </div>
      

        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white" style={{}}>
            <div className="d-flex flex-column gap-2" style={{fontSize:'0.8rem'}}>
              <a href="#overview" className="text-decoration-none text-secondary py-1">Overview</a>
              <a href="#how-it-works" className="text-decoration-none text-secondary py-1">How it works</a>
              <a href="#width" className="text-decoration-none text-secondary py-1">Width</a>
              <a href="#color" className="text-decoration-none text-secondary py-1">Color</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default Placeholders;