import React, { useState } from 'react';
import { BsArrowCounterclockwise, BsBagCheck, BsCheck2Circle, BsEye, BsImage, BsPencil, BsPeople, BsPerson, BsTrash, BsXCircle } from 'react-icons/bs';
const summaryCards = [
  {
    title : "Return Order",
    value : "367",
    unit : "Items",
    badge : "+ 6.9%",
    badgeType : "danger",
    icon : BsCheck2Circle,
  },
  {
    title : "Pending Return Order",
    value : "201",
    unit : "Items",
    icon : BsXCircle,
  },
  {
    title : "Total Customer",
    value : "5,634",
    badge : "+ 8.9%",
    badgeColor: "rgba(34, 197, 94, 1)",
    badgeBg: "rgba(211, 243, 223, 1)",
    icon : BsPerson,
  },
  {
    title : "Return Order Received",
    value : "864",
    unit : "Items",
    badge : "+ 9.1%",
    badgeType : "danger",
    icon : BsBagCheck,
  },
  
];

const initialReturns = [
  {
    id : "#INV2540",
    orderBy : "Michael A. Miner",
    items : "T-shirt , Wallet",
    returnDate :"07 Jan, 2023",
    total : "$289.00",
    returnStatus : "Completed",
  },
  {
    id : "#INV3924",
    orderBy : "Theresa T. Brose",
    items : "Golden Dress , Sunglass",
    returnDate :"03  Dec, 2023",
    total : "$213.00",
    returnStatus : "Completed",
  },
  {
    id : "#INV1695",
    orderBy : "Lily W. Wilson",
    items : "Watch , T-shirt",
    returnDate :"10 Aug, 2023",
    total : "$324.00",
    returnStatus : "Pending",
  },
  {
    id : "#INV8473",
    orderBy : "Sarah M. Brooks",
    items : "Hand Bag , Watch",
    returnDate :"22 May, 2023",
    total : "$153.00",
    returnStatus : "Completed",
  },
  {
    id : "#INV2150",
    orderBy : "Joe K. Hall",
    items : "Headphone , Dress",
    returnDate :"15 Mar, 2023",
    total : "$424.00",
    returnStatus : "Pending",
  },
  {
    id : "#INV5636",
    orderBy : "Ralph Hueber",
    items : "Headphone",
    returnDate :"19 Dec, 2023",
    total : "$521.00",
    returnStatus : "Pending",
  },
  {
    id : "#INV2940",
    orderBy : "Sarah Drescher",
    items : "Cap , Sunglass , Hand Bag",
    returnDate :"11 Jun, 2023",
    total : "$313.00",
    returnStatus : "Completed",
  },
  {
    id : "#INV9027",
    orderBy : "Leonie Meister",
    items : "Headphone , T-shirt",
    returnDate :"19 Mar, 2023",
    total : "$219.00",
    returnStatus : "Completed",
  },
];
const badgeType = {
  Completed : "success" ,
  Pending : "warning",
};

function ReturnOrders() {
  const[returns,setReturns] = useState(initialReturns);
  const[selectedIds,setSelectedIds] = useState([]);
  const[currentPage,setCurrentPage] = useState(1);

  const handleSelectAll = (e)=>{
    setSelectedIds(e.target.checked ? returns.map((item)=> item.id):[]);
  };
  const handleSelectRow = (id)=>{
    setSelectedIds((prev)=>prev.includes(id) ? prev.filter((item)=> item !==id):[...prev,id]);
  };
  const handleDeleteRow = (id)=>{
    setReturns((prev)=>prev.filter((item)=>item.id !== id));
  };
  return (
    <>
    <div className="row g-3 mb-4">
  {summaryCards.map((card, index) => {
    const Icon = card.icon;

    return (
      <div className="col-xl-3 col-sm-6" key={index}>
        <div className="content-card p-3 d-flex align-items-center justify-content-between">
          <div>
            <div className="d-flex align-items-center gap-1 mb-1">
              <span className="text-muted small">{card.title}</span>

              {card.badge && (
                <span
                  className={`badge bg-${card.badgeType}-subtle text-${card.badgeType}  ms-1`}
                  style={{ fontSize: "0.65rem",color : card.badgeColor,backgroundColor:card.badgeBg }}
                >
                  {card.badge}
                </span>
              )}
            </div>

            <h4 className="fw-bold text-dark mb-0">
              {card.value}

              {card.unit && (
                <span
                  className="text-muted ms-1"
                  style={{ fontSize: "0.75rem" }}
                >
                  {card.unit}
                </span>
              )}
            </h4>
          </div>

          <div
            className="rounded-3 d-flex align-items-center justify-content-center p-3"
            style={{
              backgroundColor: "#fff7ed",
              color: "#ea580c",
            }}
          >
            <Icon className="fs-4" />
          </div>
        </div>
      </div>
    );
   })}
  </div>
  <div className='content-card p-3 mb-4'>
    <div className='d-flex justify-content-between align-items-center mb-3'>
      <h6 className='fw-bold text-dark mb-0'>All Return Items</h6>
      <select name="" id="" className='form-select form-select-sm' style={{width : "auto" ,fontSize : "0.8rem"}}>
        <option value="this-month">This Month</option>
        <option value="last-month">Last Month</option>
        <option value="this-year">This Year</option>
      </select>
    </div>
    <div className='table-responsive'>
      <table className='table table-custom align-middle mb-0' style={{fontSize:"0.825rem"}}>
        <thead>
          <tr className='text-muted' style={{fontSize : "0.75rem"}}>
            <th style={{width:"30px"}}>
              <input type="checkbox" className='form-check-input' checked={selectedIds.length === returns.length && returns.length > 0} onChange={handleSelectAll}/>
            </th>
            <th>ID</th>
            <th>Order By</th>
            <th>Items</th>
            <th>Return Date</th>
            <th>Total</th>
            <th>Return Status</th>
            <th className='text-center'>Action</th>

          </tr>
        </thead>
        <tbody>
          {
            returns.map((item)=>(
              <tr key={item.id}>
                <td>
                  <input type="checkbox" className='form-check-input' checked = {selectedIds.includes(item.id)} onChange={()=>handleSelectRow(item.id)} />
                </td>
                <td className='fw-medium text-dark'>{item.id}</td>
                <td>
                  <div className='d-flex align-items-center gap-2'>
                    <div className='rounded-circle bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center flex-shrink-0' style={{width:"26px",height:"26px",}}>
                      <BsImage className='text-dark opacity-75' style={{fontSize:"12px"}}/>
                    </div>
                    <span className='fw-medium text-dark'>{item.orderBy}</span>
                  </div>
                </td>
                <td className='text-muted'>{item.items}</td>
                <td className='text-muted'>{item.returnDate}</td>
                <td className='fw-bold text-dark'>{item.total}</td>
                <td>
                  <span className={`badge ${item.returnStatus === "Completed" ? "":`bg-${badgeType[item.returnStatus]}-subtle text-${badgeType[item.returnStatus]}`} px-2 py-2`}
                  style={{
                    fontSize : "0.8rem",
                    ...(item.returnStatus === "Completed" && {color : "rgba(34,197,94,1)",backgroundColor:"rgba(211,243,223,1)"}),
                  }}>{item.returnStatus}</span>
                </td>
                <td className='text-end'>
                  <div className='d-inline-flex gap-1'>
                    <button className='action-btn' type='button' title='view' style={{backgroundColor:"rgba(238, 242, 247, 1)"}}><BsEye/>

                    </button>
                    <button className='action-btn ' type='button' title='Edit' style={{color:"rgba(255, 108, 47, 1)",backgroundColor:"rgba(255, 108, 47, 0.1)"}}><BsPencil/></button>
                    <button className='action-btn delete-btn  ' type='button' title='Delete' onClick={()=>handleDeleteRow(item.id)} style={{color:"rgba(239, 95, 95, 1)",backgroundColor:"rgba(239, 95, 95, 0.1)"}}><BsTrash/></button>
                  </div>

                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
      <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            style={{ fontSize: "0.78rem" }}
          >
            Previous
          </button>

          {[1, 2, 3].map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setCurrentPage(page)}
              className={`btn btn-sm ${
                currentPage === page
                  ? "btn-add-product"
                  : "btn-light border"
              } px-2 py-1`}
              style={{ fontSize: "0.78rem" }}
            >
              {page}
            </button>
          ))}

          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            style={{ fontSize: "0.78rem" }}
          >
            Next
          </button>
        </div>

  </div>
  </>
  )
}

export default ReturnOrders