import Sidebar from '../../Components/Sidebar';
import checkBadge from "../../assets/image.png";


import {
  BsBoxFill,
  BsExclamationCircleFill,
  BsImage
} from 'react-icons/bs';

function InvoiceDetails({onNavigate}) {
  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="app-container " style={{marginTop:'-40px',marginRight:'100px'}}>
    <Sidebar activePage="invoice-details" onNavigate={onNavigate}/>
      <div className="main-content">
        
        <main className="page-container">
        <div className="mx-auto" style={{maxWidth:'920px',transform: 'translateX(-60px)'}}>
          <div className="content-card p-0 mb-4 overflow-hidden shadow-sm">
            <div
            className="p-4 position-relative"
            style={{backgroundColor:'#e6f4f1',borderBottom:'1px solid #d1e7e2'}}
            >
              <div className="row align-items-center">
                <div className="col-sm-6 mb-3 mb-sm-0">
                  <div className="d-flex align-items-center gap-2 fw-bold text-dark fs-5 mb-2">
                    <span className="logo-icon bg-primary-orange text-white rounded p-1 d-inline-flex">
                    <BsBoxFill style={{fontSize:'1.1rem'}}/>  
                    </span>
                    Larkon
                  </div>
                  <h6 className="fw-bold text-dark mb-1" style={{fontSize: '0.85rem'}}>Larkon Admin</h6>
                  <p className="text-muted small mb-0" style={{fontSize:'0.75rem',lineHeight:'1.4'}}>
                    1729 Bangor St.<br/>
                    Houlton,ME,04370,United States<br/>
                    Phone:+(1)(142)-532-9019
                  </p>
                </div>
                <div className="col-sm-6 text-start ps-3">
                  <div className="text-muted small" style={{fontSize:'0.78rem',lineHeight:'1.6'}}>
                    <div><strong className="text-dark d-inline-block"style={{width: "87px"}}>Invoice :</strong><span className="text-nowrap">#INV-0758267/90</span></div>
                    <div><strong className="text-dark d-inline-block" style={{width: "90px"}}>Issue Date :</strong><span>23 April 2024</span></div>
                    <div><strong className="text-dark d-inline-block" style={{width: "90px"}}>Due date :</strong><span>26 April 2024</span></div>
                    <div><strong className="text-dark d-inline-block" style={{width: "90px"}}>Amount :</strong><span>$737.00</span></div>
                    <div className="mt-1">
                      <strong className="text-dark me-3">Status :</strong>{''}
                      <span className="badge bg-success px-2 py-1" style={{fontSize: '0.68rem', backgroundColor: '#10b981'}}>
                        Paid
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
              className="position-absolute top-100 start-50 translate-middle "
              style={{zIndex: 10}}
              >
                <img src={checkBadge} alt="Paid"style={{ width: "55px",height: "55px",objectFit: "contain",display: "block",}}/>
              </div>
            </div>
            <div className="p-4 pt-5">
              <div className="row g-4 mb-4">
               <div  className="col-sm-6">
              <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '0.825rem'}}>Issue From :</h6>
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem'}}>Larok Admin.INC </h6>
              <p className="text-muted small mb-0" style={{fontSize:'0.75rem',lineHeight:'1.5'}}>
                2437 Romano Street Cambridge, MA 02141<br/>
                Phone : +(31) 781-417-2004<br/>
                Email : JulianeKuhn@jourrapide.com
              </p>
            </div>

            <div  className="col-sm-6">
              <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '0.825rem'}}>Issue For :</h6>
              <h6 className="fw-bold text-dark mb-1" style={{ fontSize: '0.875rem'}}>Gaston Lapierre </h6>
              <p className="text-muted small mb-0" style={{fontSize:'0.75rem',lineHeight:'1.5'}}>
                1344 Hershell Hollow Road WA 98168, USA<br/>
                Phone : +(123) 732-760-5760<br/>
                Email : hello@dundermuffin.com
              </p>
            </div>
            </div>
            


            <div className="table-responsive mb-4">
              <table className="table align-middle mb-0" style={{fontSize: '0.8rem'}}>
                <thead>
                  <tr className="text-muted border-bottom" style={{ fontSize: '0.725rem'}}>
                    <th>Product Name</th>
                    <th className="text-center">Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Tax</th>
                    <th className="text-end">Total</th>
                  </tr>
                </thead>
                <tbody>

                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-light rounded p-2 text-secondary d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                          <BsImage style={{fontSize: '14px'}}/>
                        </div>
                        <div>
                          <div className="fw-bold text-dark" style={{fontSize: '0.8rem'}}>Men Black Slim Fit T-shirt</div>
                          <div className="text-muted small" style={{fontSize: '0.7rem'}}>Size : M</div>

                        </div>
                      </div>
                    </td>

                    <td className="text-center">1</td>
                    <td className="text-center">$80.00</td>
                    <td className="text-center">$3.00</td>
                    <td className="text-center fw-medium text-dark">$83.00</td>
                  </tr>


                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-light rounded p-2 text-secondary d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                          <BsImage style={{fontSize: '14px'}}/>
                        </div>
                        <div>
                          <div className="fw-bold text-dark" style={{fontSize: '0.8rem'}}>Dark Green Cargo Pant</div>
                          <div className="text-muted small" style={{fontSize: '0.7rem'}}>Size : M</div>

                        </div>
                      </div>
                    </td>

                    <td className="text-center">3</td>
                    <td className="text-center">$110.00</td>
                    <td className="text-center">$4.00</td>
                    <td className="text-center fw-medium text-dark">$330.00</td>
                  </tr>

                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-light rounded p-2 text-secondary d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                          <BsImage style={{fontSize: '14px'}}/>
                        </div>
                        <div>
                          <div className="fw-bold text-dark" style={{fontSize: '0.8rem'}}>Men Dark Brown Wallet</div>
                          <div className="text-muted small" style={{fontSize: '0.7rem'}}>Size : S</div>

                        </div>
                      </div>
                    </td>

                    <td className="text-center">1</td>
                    <td className="text-center">$132.00</td>
                    <td className="text-center">$5.00</td>
                    <td className="text-center fw-medium text-dark">$137.00</td>
                  </tr>

                  <tr>
                    <td>
                      <div className="d-flex align-items-center gap-2">
                        <div className="bg-light rounded p-2 text-secondary d-flex align-items-center justify-content-center" style={{width: '32px', height: '32px'}}>
                          <BsImage style={{fontSize: '14px'}}/>
                        </div>
                        <div>
                          <div className="fw-bold text-dark" style={{fontSize: '0.8rem'}}>Kid's Yellow  T-shirt</div>
                          <div className="text-muted small" style={{fontSize: '0.7rem'}}>Size : S</div>

                        </div>
                      </div>
                    </td>

                    <td className="text-center">2</td>
                    <td className="text-center">$110.00</td>
                    <td className="text-center">$5.00</td>
                    <td className="text-center fw-medium text-dark">$223.00</td>
                  </tr>
               </tbody>
              </table>
            </div>

            <div className="row justify-content-end mb-4">
              <div className="col-sm-6 col-md-5 text-end">
                <div className="d-flex justify-content-between text-muted mb-2 small" style={{fontSize: '0.78rem'}}>
                  <span>Sub Total :</span>
                  <span className="fw-medium text-dark">$777.00</span>
                </div>

                <div className="d-flex justify-content-between text-muted mb-2 small" style={{fontSize: '0.78rem'}}>
                  <span>Discount :</span>
                  <span className="fw-medium text-dark">$60.00</span>
                </div>

                <div className="d-flex justify-content-between text-muted mb-2 small" style={{fontSize: '0.78rem'}}>
                  <span>Estimated Tax (15.5%) :</span>
                  <span className="fw-medium text-dark">$20.00</span>
                </div>
                <hr className="my-2"/>
                <div className="d-flex justify-content-between text-muted mb-2 small" style={{fontSize: '0.78rem'}}>
                  <span>Grand Amount :</span>
                  <span>$737.00</span>
                </div>
             </div>
            </div>

            <div className="p-3 mb-4 rounded-3 d-flex align-items-start gap-2"
            style={{backgroundColor: '#fce7f3', color: '#be185d', fontSize: '0.75rem', lineHeight: '1.5'}}
            >
              <BsExclamationCircleFill className="mt-1 flex-shrink-0 "style={{fontSize: '14px'}}/>
              <span>
                All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credit details supplied as confirmation of work undertaken will be charged the agreed quoted  fee noted above.
              </span>

            </div>

            <div className="d-flex justify-content-end gap-2">
              <button className="btn text-white px-4 py-1 small rounded-2 border-0"
              type="button"
              style={{backgroundColor: '#2dd4bf', fontSize: '0.78rem', fontWeight: '500'}}
              onClick={handlePrint}
              >
                Print
              </button>

              <button
              className="btn px-4 py-1 small rounded-2"
              type="button"
              style={{
                border: '1px solid #f87171',
                color: '#ef4444',
                backgroundColor: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: '500',
              }}
              >
                Submit

              </button>
            </div>
          </div>
       </div>
    </div>
    </main>
            
    </div>
  </div>
  );
}
export default InvoiceDetails;