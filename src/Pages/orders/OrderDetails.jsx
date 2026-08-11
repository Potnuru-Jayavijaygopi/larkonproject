import React from 'react';
import {
  BsImage,
  BsCheckCircle,
  BsPencil,
  BsDownload,
  BsShop,
  BsCalendarEvent,
  BsPerson,
  BsCardText,
  BsCreditCard,
  BsReceipt,
  BsTag,
  BsTruck,
  BsFileEarmarkText,
} from 'react-icons/bs';

function OrderDetails({onNavigate}){
  return(
    <div className='container-fluid p-4'>
      <div className='content-card p-3 mb-4 shadow-sm'>
        <div className='d-flex flex-wrap align-items-center justify-content-between gap-3'>
          <div>
            <div className='d-flex align-items-center gap-2 mb-1'>
              <h5 className='fw-bold text-dark mb-0'>#0758267/90</h5>
              <span className='badge bg-success-subtle text-success border border-success-subtle px-2 py-1'style={{fontSize:'0.68rem'}}>Paid</span>
              <span className='badge bg-warning-subtle text-warning border border-warning-subtle px-2 py-1'style={{fontSize:'0.68rem'}}>In Progress</span>
            </div>
            <p className='text-muted small mb-0'style={{fontSize:'0.75rem'}}>
              Oreder/ Order Details / #0758267/90 -April 23, 2024 at 6:23 pm
            </p>
          </div>
          <div className='d-flex gap-2'>
            <button className='btn btn-outline-secondary btn-sm px-3' type='button' style={{fontSize:'0.78rem'}}>
              Refund
            </button>
             <button className='btn btn-outline-secondary btn-sm px-3' type='button' style={{fontSize:'0.78rem'}}>
              Return
            </button>
             <button className='btn btn-add-product btn-sm px-3' type='button' style={{fontSize:'0.78rem'}}>
              Edit Order
            </button>
          </div>
        </div>  
      </div>
      <div className='row g-4'>
        <div className='col-xl-8 col-lg-7'>
          <div className='content-card p-4 mb-4 shadow-sm'>
            <h6 className='fw-bold text-dark mb-3' style={{ fontSize:'0.85re'}}>Progress</h6>
            <div className='row g-2 text-center mb-3'>
              <div className='col'>
                <div className='progress mb-2' style={{fontSize:'6px'}}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{fontSize:'0.68rem'}}>Order Confirming</span>
              </div>
              <div className='col'>
                <div className='progress mb-2' style={{fontSize:'6px'}}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{fontSize:'0.68rem'}}>Payment Pending</span>
              </div>
              <div className='col'>
                <div className='progress mb-2' style={{fontSize:'6px'}}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{fontSize:'0.68rem'}}>Processing ⏳</span>
              </div>
              <div className='col'>
                <div className='progress mb-2' style={{fontSize:'6px'}}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{fontSize:'0.68rem'}}>Shipping</span>
              </div>
              <div className='col'>
                <div className='progress mb-2' style={{fontSize:'6px'}}>
                  <div className='progress-bar bg-success w-100'></div>
                </div>
                <span className='text-muted d-block' style={{fontSize:'0.68rem'}}>Delivered</span>
              </div>
            </div>
            <div className='d-flex justify-content-between align-items-center border-top pt-3'>
              <span className='text-muted' style={{fontSize:'0.75rem' }}>
                &rarr: Estimated Shipping date : <strong>Ap 25 , 2024</strong>
              </span>
              <button className='btn btn-add-product btn-sm px-3' type='button' style={{fontSize:'0.75rem'}}>
                Make As Ready To Ship
              </button>
            </div>
          </div>
          <div className='content-card p-4 mb-4 shadow-sm'>
            <h6 className='fw-bold text-dark mb-3' style={{fontSize:'0.85rem'}}>Product</h6>
            <div className='table-responsive'>
              <table className='table table-borderless align-middle mb-0' style={{ fontSize:'0.8rem' }}>
                <thead>
                  <tr className='text-muted border-bottom' style={{fontSize:'0.72rem' }}>
                    <th>Product name & Size</th>
                    <th>Status</th>
                    <th>Qunatity</th>
                    <th>Price</th>
                    <th>Text</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-bottom'>
                    <td>
                      <div className='d-flex align-items-center gap-2'>
                        <div className='rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center p-2' style={{ width:'40px', height:'40px' }}>
                          <BsImage className='text-muted' />
                        </div>
                        <div>
                          <strong className='d-block text-dark'>Men Black Slim Fit T-shirt</strong>
                          <span className='text-muted small' style={{fontSize:'0.7rem'}}>Size : M </span>
                        </div>
                      </div>
                    </td>
                    <td><span className='badge bg-success-subtle text-success border border-success-subtle px-2 py-1' style={{fontSize:'0.65rem '}}>Ready</span></td>
                    <td className='text-muted'>1</td>
                    <td className='text-muted'>$80.00</td>
                    <td className='text-muted'>$3.00</td>
                    <td className='fw-bold text-dark'>$83.00</td>
                  </tr>
                  <tr className='border-bottom'>
                    <td>
                      <div className='d-flex align-items-center gap-2'>
                        <div className='rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center p-2' style={{ width:'40px', height:'40px' }}>
                          <BsImage className='text-muted' />
                        </div>
                        <div>
                          <strong className='d-block text-dark'>Dark Green Cargo Pent</strong>
                          <span className='text-muted small' style={{fontSize:'0.7rem'}}>Size : M </span>
                        </div>
                      </div>
                    </td>
                    <td><span className='badge bg-success-subtle text-success border border-success-subtle px-2 py-1' style={{fontSize:'0.65rem '}}>Ready</span></td>
                    <td className='text-muted'>3</td>
                    <td className='text-muted'>$330.00</td>
                    <td className='text-muted'>$4.00</td>
                    <td className='fw-bold text-dark'>$334.00</td>
                  </tr>

                  <tr className='border-bottom'>
                    <td>
                      <div className='d-flex align-items-center gap-2'>
                        <div className='rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center p-2' style={{ width:'40px', height:'40px' }}>
                          <BsImage className='text-muted' />
                        </div>
                        <div>
                          <strong className='d-block text-dark'>Men Dark Brown Wallet </strong>
                          <span className='text-muted small' style={{fontSize:'0.7rem'}}>Size : S </span>
                        </div>
                      </div>
                    </td>
                    <td><span className='badge bg-success-subtle text-success border border-success-subtle px-2 py-1' style={{fontSize:'0.65rem '}}>Ready</span></td>
                    <td className='text-muted'>1</td>
                    <td className='text-muted'>$132.00</td>
                    <td className='text-muted'>$5.00</td>
                    <td className='fw-bold text-dark'>$137.00</td>
                  </tr>

                  <tr className='border-bottom'>
                    <td>
                      <div className='d-flex align-items-center gap-2'>
                        <div className='rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center p-2' style={{ width:'40px', height:'40px' }}>
                          <BsImage className='text-muted' />
                        </div>
                        <div>
                          <strong className='d-block text-dark'>Kid's Yellow T-shirt</strong>
                          <span className='text-muted small' style={{fontSize:'0.7rem'}}>Size : S </span>
                        </div>
                      </div>
                    </td>
                    <td><span className='badge bg-success-subtle text-success border border-success-subtle px-2 py-1' style={{fontSize:'0.65rem '}}>Ready</span></td>
                    <td className='text-muted'>2</td>
                    <td className='text-muted'>$220.00</td>
                    <td className='text-muted'>$3.00</td>
                    <td className='fw-bold text-dark'>$223.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         <div className="content-card p-4 mb-4 shadow-sm">
                     <h6 className="fw-bold text-dark mb-4" style={{ fontSize: '0.85rem' }}>Order Timeline</h6>
         
                     <div className="border-start border-2 ps-3 ms-2" style={{ borderColor: '#e2e8f0' }}>
                       <div className="mb-4 position-relative">
                         <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                           <span className="rounded-circle bg-warning text-white p-1 d-inline-flex align-items-center justify-content-center" style={{ width: '18px', height: '18px', fontSize: '0.6rem' }}>C</span>
                         </div>
                         <div className="d-flex justify-content-between align-items-start">
                           <div>
                             <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>The packing has been started</strong>
                             <span className="text-muted small" style={{ fontSize: '0.72rem' }}>Confirmed by Gaston Lapierre</span>
                           </div>
                           <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                         </div>
                       </div>
         
                       <div className="mb-4 position-relative">
                         <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                           <BsCheckCircle className="text-success bg-white rounded-circle" style={{ fontSize: '1.1rem' }} />
                         </div>
                         <div className="d-flex justify-content-between align-items-start">
                           <div>
                             <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>The Invoice has been sent to the customer</strong>
                             <span className="text-muted small d-block mb-2" style={{ fontSize: '0.72rem' }}>
                               Invoice email was sent to <span className="text-primary-orange">hello@dundermuffilin.com</span>
                             </span>
                             <button className="btn btn-outline-secondary btn-sm py-1 px-3" style={{ fontSize: '0.72rem' }}>
                               Resend Invoice
                             </button>
                           </div>
                           <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                         </div>
                       </div>
         
                       <div className="mb-4 position-relative">
                         <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                           <BsCheckCircle className="text-success bg-white rounded-circle" style={{ fontSize: '1.1rem' }} />
                         </div>
                         <div className="d-flex justify-content-between align-items-start">
                           <div>
                             <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>The Invoice has been created</strong>
                             <span className="text-muted small d-block mb-2" style={{ fontSize: '0.72rem' }}>Invoice created by Gaston Lapierre</span>
                             <button className="btn btn-add-product btn-sm py-1 px-3 d-inline-flex align-items-center gap-1" style={{ fontSize: '0.72rem' }}>
                               <BsDownload /> Download Invoice
                             </button>
                           </div>
                           <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                         </div>
                       </div>
         
                       <div className="mb-4 position-relative">
                         <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                           <BsCheckCircle className="text-success bg-white rounded-circle" style={{ fontSize: '1.1rem' }} />
                         </div>
                         <div className="d-flex justify-content-between align-items-start">
                           <div>
                             <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>Order Payment</strong>
                             <span className="text-muted small d-block mb-1" style={{ fontSize: '0.72rem' }}>Using Master Card</span>
                             <span className="text-muted small" style={{ fontSize: '0.72rem' }}>
                               Status : <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-0">Paid</span>
                             </span>
                           </div>
                           <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                         </div>
                       </div>
         
                       <div className="position-relative">
                         <div className="position-absolute" style={{ left: '-25px', top: '0' }}>
                           <BsCheckCircle className="text-success bg-white rounded-circle" style={{ fontSize: '1.1rem' }} />
                         </div>
                         <div className="d-flex justify-content-between align-items-start">
                           <div>
                             <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>4 Order conform by Gaston Lapierre</strong>
                             <div className="d-flex gap-1 mt-2">
                               <button className="btn btn-light border btn-sm py-0 px-2 text-muted" style={{ fontSize: '0.68rem' }}>Order 1</button>
                               <button className="btn btn-light border btn-sm py-0 px-2 text-muted" style={{ fontSize: '0.68rem' }}>Order 2</button>
                               <button className="btn btn-light border btn-sm py-0 px-2 text-muted" style={{ fontSize: '0.68rem' }}>Order 3</button>
                               <button className="btn btn-light border btn-sm py-0 px-2 text-muted" style={{ fontSize: '0.68rem' }}>Order 4</button>
                             </div>
                           </div>
                           <span className="text-muted small" style={{ fontSize: '0.7rem' }}>April 23, 2024, 09:40 am</span>
                         </div>
                       </div>
                     </div>
                   </div>
         
                   <div className="row g-3">
                     <div className="col-sm-3">
                       <div className="content-card p-3 d-flex align-items-center justify-content-between shadow-sm">
                         <div>
                           <span className="text-muted d-block" style={{ fontSize: '0.68rem' }}>Vender</span>
                           <strong className="text-dark" style={{ fontSize: '0.78rem' }}>Catpiller</strong>
                         </div>
                         <div className="rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                           <BsShop />
                         </div>
                       </div>
                     </div>
         
                     <div className="col-sm-3">
                       <div className="content-card p-3 d-flex align-items-center justify-content-between shadow-sm">
                         <div>
                           <span className="text-muted d-block" style={{ fontSize: '0.68rem' }}>Date</span>
                           <strong className="text-dark" style={{ fontSize: '0.78rem' }}>April 23 , 2024</strong>
                         </div>
                         <div className="rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                           <BsCalendarEvent />
                         </div>
                       </div>
                     </div>
         
                     <div className="col-sm-3">
                       <div className="content-card p-3 d-flex align-items-center justify-content-between shadow-sm">
                         <div>
                           <span className="text-muted d-block" style={{ fontSize: '0.68rem' }}>Paid By</span>
                           <strong className="text-dark" style={{ fontSize: '0.78rem' }}>Gaston Lapierre</strong>
                         </div>
                         <div className="rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                           <BsPerson />
                         </div>
                       </div>
                     </div>
         
                     <div className="col-sm-3">
                       <div className="content-card p-3 d-flex align-items-center justify-content-between shadow-sm">
                         <div>
                           <span className="text-muted d-block" style={{ fontSize: '0.68rem' }}>Reference #IMEMO</span>
                           <strong className="text-dark" style={{ fontSize: '0.78rem' }}>#0758267/90</strong>
                         </div>
                         <div className="rounded-3 p-2 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                           <BsCardText />
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>
         
                 <div className="col-xl-4 col-lg-5">
                   <div className="content-card p-4 mb-4 shadow-sm">
                     <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.85rem' }}>Order Summary</h6>
         
                     <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
                       <span className="d-flex align-items-center gap-2">
                         <BsReceipt className="text-muted" /> Sub Total :
                       </span>
                       <strong className="text-dark">$777.00</strong>
                     </div>
                     <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
                       <span className="d-flex align-items-center gap-2">
                         <BsTag className="text-muted" /> Discount :
                       </span>
                       <strong className="text-dark">-$60.00</strong>
                     </div>
                     <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
                       <span className="d-flex align-items-center gap-2">
                         <BsTruck className="text-muted" /> Delivery Charge :
                       </span>
                       <strong className="text-dark">$00.00</strong>
                     </div>
                     <div className="d-flex justify-content-between py-2 border-bottom text-muted" style={{ fontSize: '0.78rem' }}>
                       <span className="d-flex align-items-center gap-2">
                         <BsFileEarmarkText className="text-muted" /> Estimated Tax (15.5%) :
                       </span>
                       <strong className="text-dark">$20.00</strong>
                     </div>
                     <div className="d-flex justify-content-between pt-3 text-dark" style={{ fontSize: '0.85rem' }}>
                       <strong className="fw-bold">Total Amount</strong>
                       <strong className="fw-bold">$737.00</strong>
                     </div>
                   </div>
         
                   <div className="content-card p-4 mb-4 shadow-sm">
                     <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.85rem' }}>Payment Information</h6>
         
                     <div className="d-flex align-items-center justify-content-between border rounded p-2 mb-3">
                       <div className="d-flex align-items-center gap-2">
                         <BsCreditCard className="text-primary fs-5" />
                         <div>
                           <strong className="d-block text-dark" style={{ fontSize: '0.78rem' }}>Master Card</strong>
                           <span className="text-muted" style={{ fontSize: '0.7rem' }}>xxxx xxxx xxxx 7812</span>
                         </div>
                       </div>
                       <BsCheckCircle className="text-success" />
                     </div>
         
                     <div className="mb-2" style={{ fontSize: '0.75rem' }}>
                       <span className="text-muted d-block">Transaction ID : <span className="text-dark">#IDN768139059</span></span>
                     </div>
                     <div style={{ fontSize: '0.75rem' }}>
                       <span className="text-muted d-block">Card Holder Name : <span className="text-dark">Gaston Lapierre</span></span>
                     </div>
                   </div>
         
                   <div className="content-card p-4 mb-4 shadow-sm">
                     <h6 className="fw-bold text-dark mb-3" style={{ fontSize: '0.85rem' }}>Customer Details</h6>
         
                     <div className="d-flex align-items-center gap-3 mb-3 border-bottom pb-3">
                       <div className="rounded bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center p-2" style={{ width: '40px', height: '40px' }}>
                         <BsPerson className="fs-5 text-muted" />
                       </div>
                       <div>
                         <strong className="d-block text-dark" style={{ fontSize: '0.8rem' }}>Gaston Lapierre</strong>
                         <span className="text-primary-orange d-block" style={{ fontSize: '0.72rem' }}>hello@dundermuffilin.com</span>
                       </div>
                     </div>
         
                     <div className="mb-3 border-bottom pb-2">
                       <div className="d-flex justify-content-between align-items-center mb-1">
                         <strong className="text-dark" style={{ fontSize: '0.75rem' }}>Contact Number</strong>
                         <BsPencil className="text-muted cursor-pointer small" />
                       </div>
                       <span className="text-muted" style={{ fontSize: '0.72rem' }}>(723) 732-760-5760</span>
                     </div>
         
                     <div className="mb-3 border-bottom pb-2">
                       <div className="d-flex justify-content-between align-items-center mb-1">
                         <strong className="text-dark" style={{ fontSize: '0.75rem' }}>Shipping Address</strong>
                         <BsPencil className="text-muted cursor-pointer small" />
                       </div>
                       <p className="text-muted mb-0" style={{ fontSize: '0.72rem' }}>
                         Wilson's Jewelers LTD<br />
                         1344 Hershell Hollow Road ,<br />
                         Tukwila, WA 98168 ,<br />
                         United States<br />
                         (723) 732-760-5760
                       </p>
                     </div>
         
                     <div>
                       <div className="d-flex justify-content-between align-items-center mb-1">
                         <strong className="text-dark" style={{ fontSize: '0.75rem' }}>Billing Address</strong>
                         <BsPencil className="text-muted cursor-pointer small" />
                       </div>
                       <span className="text-muted" style={{ fontSize: '0.72rem' }}>Same as shipping address</span>
                     </div>
                   </div>
         
                   <div
                     className="content-card p-4 shadow-sm d-flex align-items-center justify-content-center bg-secondary bg-opacity-25"
                     style={{ height: '220px' }}
                   >
                     <BsImage className="display-4 text-dark opacity-50" />
                   </div>
                 </div>
               </div>
             </div>
           );
         }
         
         export default OrderDetails;