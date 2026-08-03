import React, { useState } from 'react'
import { BsEye, BsImage, BsPencil, BsTrash } from 'react-icons/bs';


  const initialPurchases  = [
    {
      id : "#INV2540",
      orderBy : "Michael A. Miner",
      items : "T-shirt , Wallet",
      purchaseStatus : "Items Received",
      date : "07 Jan, 2023",
      total : "$621",
      paymentMethod : "Mastercard",
      paymentStatus : "Completed",
    },{
      id : "#INV3924",
      orderBy : "Theresa T. Brose",
      items : "Golden Dress , Sunglass",
      purchaseStatus : "Items Received",
      date : "03 Dec, 2023",
      total : "$502",
      paymentMethod : "Visa",
      paymentStatus : "Cancel", 
    },{
      id :"#INV5032",
      orderBy : "James L. Erickson",
      items : "Shoes , Cargo Pant",
      purchaseStatus : "Items Received",
      date : "28 Sep, 2023",
      total : "$218",
      paymentMethod : "Paypal",
      paymentStatus : "Completed",
    },{
      id : "#INV1695",
      orderBy : "Lily W. Wilson",
      items : "Watch , T-shirt",
      purchaseStatus  :"Items Received",
      date : "10 Aug, 2023",
      total : "$428",
      paymentMethod : "Mastercard",
      paymentStatus : "Pending",
    },{
       id : "#INV8473",
       orderBy : "Sarah M. Brooks",
       items : "Hand Bag , Watch",
       purchaseStatus : "Items Received",
       date : "22 May, 2023",
       total : "$314",
       paymentMethod : "Visa",
       paymentStatus : "Cancel",
    },{
      id : "#INV2150",
      orderBy : "Joe K. Hall",
      items : "Headphone , Dress",
      purchaseStatus : "Items Received",
      date  : "15 Mar, 2023",
      total : "$591",
      paymentMethod : "Paypal",
      paymentStatus : "Completed",
    },
    {
      id : "#INV5636",
      orderBy : "Ralph Hueber",
      items : "Headphone",
      purchaseStatus : "Items Received",
      date : "19 Dec, 2023",
      total : "$815",
      paymentMethod : "Visa",
      paymentStatus : "Completed",

    },{
      id : "#INV2940",
      orderBy : "Sarah Drescher",
      items : "Cap , Sunglass , Hand Bag",
      purchaseStatus : "Items Received",
      date : "11 Jun, 2023",
      total : "$715",
      paymentMethod : "Mastercard",
      paymentStatus : "Completed",
    },
    {
      id :"#INV9027",
      orderBy : "Leonie Meister",
      items : "Headphone , T-shirt",
      purchaseStatus : "Items Received",
      date : "19 Mar, 2023",
      total : "$351",
      paymentMethod : "Paypal",
      paymentStatus : "Pending",
    },
  ];
  const paymentStatusMap ={
    Completed : {
      bg : "bg-success-subtle",
      text : "text-success",
      border : "border-success-subtle",

    },
    Cancel : {
      bg : "bg-danger-subtle",
      text : "text-danger",
      border :"border-danger-subtle",
    },
    Pending : {
      bg : "bg-warning-subtle",
      text : "text-warning",
      border : "border-warning-subtle",
    }
  };
  const actionButtons = [
    {icon : <BsEye/>,title : "View",className : ""},
    {icon : <BsPencil/>,title : "Edit",className : "text-warning"},
  ];
  function PurchaseList() {
    const [purchases,setPurchases] = useState(initialPurchases);
    const [selectedIds,setSelectedIds] = useState([]);
    const[currentPage,setCurrentPage] = useState(1);
    const handleSelectAll = ({target : {checked}})=>setSelectedIds(checked ? purchases.map(({id})=>id):[]);


    const handleSelectRow = (id)=>
      setSelectedIds((prev)=>prev.includes(id) ? prev.filter((item)=>item !== id) : [...prev, id]);

    const handleDeleteRow = (id)=>setPurchases((prev)=>prev.filter((item)=>item.id !== id));

    const renderPaymentStatusBadge = (status)=>{
      const style = paymentStatusMap[status] || paymentStatusMap.Pending;
      return (
        <span className={`badge ${style.bg} ${style.text} border ${style.border} px-2 py-1`} style={{fontSize : "0.7rem"}}>{status}

        </span>
      );
    };
   return (
    <div className='content-card p-3 mb-4'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h6 className='fw-bold text-dark mb-0'>All Purchase Items</h6>
        <select name="" id="" className='form-select form-select-sm' style={{width : "auto",fontSize:"0.8rem"}}>
          {["This Month", "Last Month","This Year"].map((item)=>(
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className='table-responsive'>
        <table className='table table-custom align-middle mb-0' style={{fontSize : "0.825rem"}}>
          <thead>
            <tr className='text-muted' style={{fontSize : "0.75rem"}}>
              <th style={{width : "30px"}}>
                <input type="checkbox" className='form-check-input'checked = {purchases.length > 0 && selectedIds.length === purchases.length} onChange={handleSelectAll} />
              </th>
              <th>ID</th>
              <th>Order By</th>
              <th>Items</th>
              <th>Purchase Status</th>
              <th>Date</th>
              <th>Total</th>
              <th>Payment Method</th>
              <th>Payment Status</th>
              <th className='text-end'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              purchases.map((item)=>(
                <tr key={item.id}>
                  <td>
                    <input type="checkbox" className='form-check-input' checked = {selectedIds.includes(item.id)} onChange={()=>handleSelectRow(item.id)}/>
                  </td>
                  <td className='fw-medium text-dark'>{item.id}</td>
                  <td>
                    <div className='d-flex align-items-center gap-2'>
                      <div className='rounded-circle bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0' style={{width : 26,height : 26}}>
                        <BsImage className='text-dark opacity-75' style={{fontSize : 12}}/>

                      </div>
                      <span className='fw-medium text-dark'>{item.orderBy}</span>
                    </div>
                  </td>
                  <td className='text-muted'>{item.items}</td>
                  <td>
                    <span className='badge bg-success text-white px-2 py-1' style={{fontSize : "0.68rem",backgroundColor : "#10b981",}}>{item.purchaseStatus}</span>
                  </td>
                  <td className='text-muted'>{item.date}</td>
                  <td className='fw-bold text-dark'>{item.total}</td>
                  <td className='text-muted'>{item.paymentMethod}</td>
                  <td>{renderPaymentStatusBadge(item.paymentStatus)}</td>
                  <td className='text-end'>
                    <div className='d-inline-flex gap-1'>
                      {
                        actionButtons.map((btn)=>(
                          <button key={btn.title} type='button' title={btn.title} className={`action-btn ${btn.className}`}>{btn.icon}</button>
                        ))
                      }
                      <button type='button' title='Delete' className='action-btn delete-btn text-danger' onClick={()=> handleDeleteRow(item.id)}>
                        <BsTrash/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-end align-items-center mt-3 gap-1'>
        <button className='btn btn-sm btn-light  border text-muted px-2 py-1' type='button' style={{fontSize : "0.78rem"}}>Previous</button>
        {[1,2,3].map((page)=>(
          <button key={page} type='button' onClick={()=>setCurrentPage(page)} className={`btn btn-sm ${currentPage === page ? "btn-add-product" : "btn-light border"} px-2 py-1`} style={{fontSize : "0.78rem"}}>{page}</button>

        ))}
        <button className='btn btn-sm btn-light border text-muted px-2 py-1' type='button'
        style={{fontSize : "0.78rem"}}>Next</button>

      </div>
    </div>
  );
}

export default PurchaseList;