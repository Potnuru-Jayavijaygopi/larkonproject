import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function Pagination(){
  const[page1, setPage1] = useState(1);
  const[page2, setPage2] = useState(1);
  const[roundedpage1, setRoundedPage1] = useState(2);
  const[roundedPage2, setRoundedPage2] = useState(2);
  const[alignPage1, setAlignPage1] = useState(1);
  const[alignPage2, setAlignPage2] = useState(1);
  const[sizeLg, setSizeLg] = useState(1);
  const[sizeDef, setSizeDef] = useState(1);
  const[sizeSm, setSizeSm] = useState(1);

  return(
    <div className="container-fluid p-4">
      <div className="row g-4">
        <div className="col-xl-9 col-lg-8">
          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="default-buttons">
            <h6 className="fw-bold text-dark mb-1">Default Button</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Use the button classes on an <code>&lt;a&gt;</code>, <code>&lt;button&gt</code> or <code>&lt;input&gt;</code> element.
            </p>
            <div className="d-flex-column gap-3">
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0 gap-1" style={{fontSize:'0.825rem'}}>
                  <li className={`page-item ${page1 === 1 ? 'disabled' : ''}`}>
                    <button className="page-item-btn btn border-light-subtle text-secondary px-3 py-1.5" onClick={() => setPage1((p) => Math.max(1, p - 1))}>
                      Previous
                    </button>
                  </li>
                  {[1,2, 3].map((num) =>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn ${page1 === num ? 'text-white' : 'text-secondary border-light-subtle'} px-3 py-1.5`}
                      style={{backgroundColor: page1 === num ? '#ff5e29' : 'transparent', borderRadius: '0.25rem'}}
                      onClick={() => setPage1(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                  <li className={`page-item ${page1 === 3 ? 'disabled' : ''}`}>
                    <button className="page-item-btn btn border-light-subtle text-secondary px-3 py-1.5" onClick={() => setPage1((p) => Math.min(3, p+1))}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
              <nav aria-label="Page navigation example with icons">
                <ul className="pagination mb-0 gap-1" style={{fontSize:'0.825rem'}}>
                  <li className="page-item">
                    <button className="btn border-light-subtle text-secondary px-2.5 py-1.5" onClick={() => setPage2((p) => Math.max(1, p - 1))}>
                      <BsChevronLeft style={{fontSize: '0.75rem'}}/>
                    </button>
                  </li>
                  {[1, 2, 3].map((num)=>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn ${page2 === num ? 'text-white' : 'text-secondary border-light-subtle'} px-3 py-1.5`}
                      style={{backgroundColor: page2 === num ? '#ff5e29' : 'transparent', borderRadius: '0.25rem'}}
                      onClick={() => setPage2(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button className="btn border-light-subtle text-secondary px-2.5 py-1.5" onClick={() => setPage2((p) => Math.min(3, p + 1))}>
                      <BsChevronRight style={{fontSize: '0.75rem'}}/>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="rounded-pagination">
            <h6 className="fw-bold text-dark mb-1">Rounded Pagination</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
              Simple pagination inspired by Rdio, great for apps and search results.
            </p>
            <div className="d-flex-column gap-3">
              <nav aria-label=" Rounded Page navigation">
                <ul className="pagination mb-0 gap-1" style={{fontSize:'0.825rem'}}>
                  <li className="page-item">
                    <button className="btn rounded-pill btn border-light-subtle text-secondary px-3 py-1.5" onClick={() => setRoundedPage1((p) => Math.max(1, p - 1))}>
                      Previous
                    </button>
                  </li>
                  {[1,2, 3].map((num) =>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn rounded-circle ${roundedpage1 === num ? 'text-white' : 'text-secondary border-light-subtle'} d-flex align-items-center justify-content-center`}
                      style={{ width: '32px', height: '32px',backgroundColor: roundedpage1 === num ? '#ff5e29' : 'transparent' }}
                      onClick={() => setRoundedPage1(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                  <li className={"page-item"}>
                    <button className="btn rounded-pill border-light-subtle text-secondary px-3 py-1.5" onClick={() => setRoundedPage1((p) => Math.min(3, p+1))}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
              <nav aria-label=" Rounded icon Page navigation">
                <ul className="pagination mb-0 gap-2" style={{fontSize:'0.825rem'}}>
                  <li className="page-item">
                    <button className="btn rounded-circle border-light-subtle text-secondary d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}onClick={() => setRoundedPage2((p) => Math.max(1, p - 1))}>
                      <BsChevronLeft style={{fontSize: '0.75rem'}}/>
                    </button>
                  </li>
                  {[1, 2, 3].map((num)=>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn rounded-circle  ${roundedPage2 === num ? 'text-white' : 'text-secondary border-light-subtle'} d-flex align-items-center justify-content-center`}
                      style={{width: '32px', height:'32px',backgroundColor: roundedPage2 === num ? '#ff5e29' : 'transparent'}}
                      onClick={() => setRoundedPage2(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button className="btn rounded-circle border-light-subtle text-secondary d-flex align-items-center justify-content-center" style={{width:'32px',height:'32px'}}onClick={() => setRoundedPage2((p) => Math.min(3, p + 1))}>
                      <BsChevronRight style={{fontSize: '0.75rem'}}/>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="alignment">
            <h6 className="fw-bold text-dark mb-1">Alignment</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
               Change the alignment of pagination components with flexibox utilities.
            </p>
            <div className="d-flex-column gap-3">
              <nav aria-label="Center aligned pagination">
                <ul className="pagination justify-content-center mb-0 gap-1" style={{fontSize:'0.825rem'}}>
                  <li className="page-item">
                    <button className="btn btn border-light-subtle text-secondary px-3 py-1.5" onClick={() => setAlignPage1((p) => Math.max(1, p - 1))}>
                      Previous
                    </button>
                  </li>
                  {[1,2, 3].map((num) =>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn ${alignPage1 === num ? 'text-white' : 'text-secondary border-light-subtle'} px-3 py-1.5`}
                      style={{backgroundColor: alignPage1 === num ? '#ff5e29' : 'transparent', borderRadius: '0.25rem'}}
                      onClick={() => setAlignPage1(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button className="btn btn border-light-subtle text-secondary px-3 py-1.5" onClick={() => setAlignPage1((p) => Math.min(3, p+1))}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
              <nav aria-label="Right aligned pagination">
                <ul className="pagination justify-content-end mb-0 gap-1" style={{fontSize:'0.825rem'}}>
                  <li className="page-item">
                    <button className="btn border-light-subtle text-secondary px-3 py-1.5" onClick={() => setAlignPage2((p) => Math.max(1, p - 1))}>
                      Previous
                    </button>
                  </li>
                  {[1, 2, 3].map((num)=>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn ${alignPage2 === num ? 'text-white' : 'text-secondary border-light-subtle'} px-3 py-1.5`}
                      style={{backgroundColor:alignPage2 === num ? '#ff5e29' : 'transparent', borderRadius: '0.25rem'}}
                      onClick={() => setAlignPage2(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button className="btn border-light-subtle text-secondary px-3 py-1.5" onClick={() => setAlignPage2((p) => Math.min(3, p + 1))}>
                      Next
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-3 p-4 bg-white mb-4" id="sizing">
            <h6 className="fw-bold text-dark mb-1">Sizing</h6>
            <p className="text-muted small mb-3" style={{fontSize: '0.78rem'}}>
               Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.
            </p>
            <div className="d-flex-column gap-3">
              <nav aria-label="Large pagination">
                <ul className="pagination pagination-lg  mb-0 gap-1">
                  
                  {[1,2, 3].map((num) =>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn ${sizeLg === num ? 'text-white' : 'text-secondary border-light-subtle'} px-4 py-2 fs-5`}
                      style={{backgroundColor: sizeLg === num ? '#ff5e29' : 'transparent', borderRadius: '0.375rem'}}
                      onClick={() => setSizeLg(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>


              <nav aria-label=" Default pagination">
                <ul className="pagination mb-0 gap-1" style={{fontSize:'0.825rem'}}>
                  
                  {[1, 2, 3].map((num)=>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn ${sizeDef === num ? 'text-white' : 'text-secondary border-light-subtle'} px-3 py-1.5`}
                      style={{backgroundColor:sizeDef === num ? '#ff5e29' : 'transparent', borderRadius: '0.25rem'}}
                      onClick={() => setSizeDef(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

               <nav aria-label=" Small pagination">
                <ul className="pagination pagination-sm mb-0 gap-1" style={{fontSize:'0.75rem'}}>
                  
                  {[1, 2, 3].map((num)=>(
                    <li key={num} className="page-item">
                      <button
                      className={`btn ${sizeSm === num ? 'text-white' : 'text-secondary border-light-subtle'} px-2.5 py-1`}
                      style={{backgroundColor:sizeSm === num ? '#ff5e29' : 'transparent', borderRadius: '0.25rem'}}
                      onClick={() => setSizeSm(num)}
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-lg-4">
          <div className="card border-0 shadow-sm rounded-3 p-3 bg-white sticky-top" style={{top:'80px', zIndex: 10}}>
            <div className="d-flex flex-column gap-2" style={{fontSize: '0.8re'}}>
              <a href="#default-buttons" className="text-decoration-none text-secondary py-1">Default Buttons</a>
              <a href="#rounded-pagination" className="text-decoration-none text-secondary py-1">Rounded Pagination</a>
              <a href="#alignment" className="text-decoration-none text-secondary py-1">Alignment</a>
              <a href="#sizing" className="text-decoration-none text-secondary py-1">Sizing</a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Pagination;