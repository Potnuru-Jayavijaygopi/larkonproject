import { useState } from "react";
import { useNavigate } from "react-router-dom";
import{
  BsReceipt,
  BsClockHistory,
  BsCheck2Circle,
  BsXCircle,
  BsImage,
  BsEye,
  BsPencil,
  BsTrash,
}from 'react-icons/bs';
function InvoiceList({onNavigate}){
  const navigate = useNavigate();
  const initialInvoices =[
    {
      invoiceId: '#INV2540',
      billingName: 'Michael A. Miner',
      orderDate: '07 Jan,2023',
      total:'$452',
      paymentMethod:'Mastercard',
      status:'Completed',
    },
    {
      invoiceId:'#INV3924',
      billingName:'Theresa T. Brose',
      orderDate:'03 Dec,2023',
      total:'$783',
      paymentMethod:'Visa',
      status:'Cancel',
  
    },
    {
      invoiceId:'#INV5032',
      billingName:'James L. Erickson',
      orderDate:'28 Sep,2023',
      total:'$134',
      paymentMethod:'Paypal',
      status:'Completed',
    },
    {
      invoiceId:'#INV1695',
      billingName:'Lily W. Wilson',
      orderDate:'10 Aug,2023',
      total:'$945',
      paymentMethod:'Mastercard',
      status:'Pending',
    },
    {
      invoiceId:'#INV8473',
      billingName:'Sarah M. Brooks',
      orderDate:'22 May,2023',
      total:'$421',
      paymentMethod:'Visa',
      status:'Cancel',
    },
    {
      invoiceId:'#INV2150',
      billingName:'Joe K. Hall',
      orderDate:'15 Mar,2023',
      total:'$251',
      paymentMethod:'Paypal',
      status:'Completed',
    },
    {
      invoiceId:'#INV5636',
      billingName:'Ralph Hueber',
      orderDate:'15 Mar,2023',
      total:'$310',
      paymentMethod:'Visa',
      status:'Completed',
    },
    {
      invoiceId:'#INV2940',
      billingName:'Sarah Drescher',
      orderDate:'15 Mar,2023',
      total:'$241',
      paymentMethod:'Mastercard',
      status:'Completed',

    },
    {
      invoiceId:'#INV9027',
      billingName:'Leonie Meister',
      orderDate:'15 Mar,2023',
      total:'$136',
      paymentMethod:'Paypal',
      status:'Pending',
    },
 ];
 const[invoices,setInvoices]=useState(initialInvoices);
 const[selectedIds,setSelectedIds]=useState([]);
 const[currentPage,setCurrentPage]=useState(1);

 const handleViewInvoice = () => {
  if(navigate){
    navigate('/invoice/details');
  }else if(onNavigate){
    onNavigate('invoice-details');
  }
 };
 const handleSelectAll = (e) =>{
  if(e.target.checked){
    setSelectedIds(invoices.map((i) => i.invoiceId));
  }else{
    setSelectedIds([]);
  }
 };
 const handleSelectRow = (id) => {
  if(selectedIds.includes(id)){
    setSelectedIds(selectedIds.filter((item) => item !== id));
  }else{
    setSelectedIds([...selectedIds,id]);
  }
 };
 const handleDeleteRow =(id) => {
  setInvoices(invoices.filter((i) => i.invoiceId !== id));
};
const renderStatusBadge =(status) => {
  if(status === 'Completed'){
    return(
      <span className="badge bg-success-subtle text-success border border-success-subtle px-2 py-1"style={{fontSize:'0.7rem'}}>
        Completed
      </span>    
      );
  }else if(status === 'Cancel'){
    return(
      <span className="badge bg-danger-subtle text-danger border border-danger-subtle px-2 py-1"style={{fontSize:'0.7rem'}}>
        Cancel
      </span>
    );
  }else{
    return(
      <span className="badge bg-warning  px-2 py-1" style={{fontSize: '0.7rem',color:'#b45309'}}>
        Pending
      </span>
    );
  }
};
return(
  <>
  <div className="row g-3 mb-4">
    <div className="col-xl-3 col-sm-6">
      <div className="content-card p-3 d-flex align-items-center justify-content-between">
        <div>
          <span className="text-muted small d-block mb-1">Total Invoice</span>
          <h4 className="fw-bold text-dark mb-0">2310</h4>
        </div>
        <div
        className="rounded-3 d-flex align-items-center justify-content-center p-3"
        style={{backgroundColor:'#fff7ed',color:'#ea580c'}}
        >
          <BsReceipt className="fs-4"/>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-sm-6">
    <div className="content-card p-3 d-flex align-items-center justify-content-between">
      <div>
        <span className="text-muted small d-block mb-1">Pending Invoice</span>
        <h4 className="fw-bold text-dark mb-0">1000</h4>
       </div>
       <div
       className="rounded-3 d-flex align-items-center justify-content-center p-3"
       style={{backgroundColor:'#fff7ed',color:'#ea580c'}}
       >
        <BsClockHistory className="fs-4"/>
       </div>
    </div>
     </div>

     <div className="col-xl-3 col-sm-6">
      <div className="content-card p-3 d-flex align-items-center justify-content-between">
        <div>
        <span className="text-muted small d-block mb-1">Paid Invoice</span>
       <h4 className="fw-bold text-dark mb-0">1310</h4>
       </div>
       <div
       className="rounded-3 d-flex align-items-center justify-content-center p-3"
       style={{backgroundColor: '#fff7ed',color:'#ea580c'}}
       >
        <BsCheck2Circle className="fs-4"/>
       </div>
      </div>
     </div>

     <div className="col-xl-3 col-sm-6">
      <div className="content-card p-3 d-flex align-items-center justify-content-between">
        <div>
          <span className="text-muted small d-block mb-1">Inactive Invoice</span>
          <h4 className="fw-bold text-dark mb-0">1243</h4>
        </div>
        <div
        className="rounded-3 d-flex align-items-center justify-content-center p-3"
        style={{backgroundColor:'#fff7ed',color:'#ea580c'}}
        >
          <BsXCircle className="fs-4"/>
        </div>
      </div>
     </div>
  </div>
  <div className="content-card p-3 mb-4">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h6 className="fw-bold text-dark mb-0">All Invoices List</h6>
      <select className="form-select form-select-sm" style={{width:'auto',fontSize:'0.8rem'}}>
        <option value="this-month">This Month</option>
        <option value="last-month">Last Month</option>
        <option value="this-year">This Year</option>
      </select>
    </div>

    <div className="table-responsive">
      <table  className="table table-custom align-middle mb-0" style={{fontSize:'0.825rem'}}>
        <thead>
          <tr className="text-muted" style={{fontSize:'0.75rem'}}>
            <th style={{width:'30px'}}>
              <input
              type="checkbox"
              className="form-check-input"
              checked={selectedIds.length === invoices.length && invoices.length > 0}
              onChange={handleSelectAll}
              />
            </th>
            <th>Invoice ID</th>
            <th>Billing Name</th>
            <th>Order Date</th>
            <th>Total</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((item) =>(
         <tr key={item.invoiceId}>
          <td>
            <input
            type="checkbox"
            className="form-check-input"
            checked={selectedIds.includes(item.invoiceId)}
            onChange={() => handleSelectRow(item.invoiceId)}
            />
          </td>
          <td
          className="fw-medium text-dark cursor-pointer"
          onClick={handleViewInvoice}
          >
            {item.invoiceId}
          </td>
          <td>
            <div
            className="d-flex align-items-center gap-2 cursor-pointer"
            onClick={handleViewInvoice}
            >
              <div
              className="rounded-circle bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0"
              style={{width:'26px',height:'26px'}}
              >
                <BsImage style={{fontSize:'12px'}}className="text-dark opacity-75"/>
              </div>
              <span className="fw-medium text-dark">{item.billingName}</span>

            </div>
          </td>
          <td className="text-muted">{item.orderDate}</td>
          <td className="fw-bold text-dark">{item.total}</td>
          <td className="text-muted">{item.paymentMethod}</td>
          <td>{renderStatusBadge(item.status)}</td>
          <td className="text-end">
            <div className="d-inline-flex gap-1">
              <button
              className="action-btn"
              type="button"
              title="View Details"
              onClick={handleViewInvoice}
            >
              <BsEye/>
            </button>
            <button
            className="action-btn text-warning"
            type="button"
            title="Edit"
            onClick={handleViewInvoice}

            >
              <BsPencil/>

            </button>
            <button
            className="action-btn delete-btn text-danger"
            type="button"
            title="Delete"
            onClick={() => handleDeleteRow(item.invoiceId)}
            >
              <BsTrash/>
              </button>

            </div>
          </td>
        </tr>
          ))}
          </tbody>
      </table>
    </div>
    <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
      <button className="btn btn-sm btn-light border text-muted px-2 py-1" type="button" style={{fontSize:'0.78rem'}}>
        Previous
      </button>
      <button
      className={`btn btn-sm ${currentPage === 1 ? 'btn-add-product' : 'btn-light border'} px-2 py-1`}
      style={{fontSize: '0.78rem'}}
      onClick={() => setCurrentPage(1)}
      >
        1
      </button>
      <button
      className={`btn btn-sm ${currentPage === 2 ? 'btn-add-product' : 'btn-light border'} px-2 py-1`}
      type="button"
      style={{fontSize: '0.78rem'}}
      onClick={() => setCurrentPage(2)}
      >
        2
      </button>
      <button
      className={`btn btn-sm ${currentPage === 3 ? 'btn-add-product' : 'btn-light border'} px-2 py-1`}
      type="button"
      style={{fontSize: '0.78rem'}}
      onClick={() => setCurrentPage(3)}
      
      >
        3
      </button>
      <button className="btn btn-sm btn-light border text-muted px-2 py-1" type="button" style={{fontSize: '0.78rem'}}>
        Next
      </button>
      </div>
  </div>
  </> 
        );
      }
      export default InvoiceList;

