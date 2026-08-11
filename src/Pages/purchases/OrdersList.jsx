import React, { useState } from 'react'
import {BsBoxSeam,BsListTask,BsBagCheck,BsBagDash,BsEye,BsPencil,BsTrash} from "react-icons/bs";

const initialOrders = [
  {
    customerName :"Michael A. Miner",
    email : "michaelminer@dayrep.com",
    orderDate : "07 Jan, 2023",
    total : "$213.00",
    orderStatus : "Completed",


  },
   {
    customerName :"Theresa T. Brose" ,
    email : "theresbrose@dayrep.com",
    orderDate : "03 Dec, 2023",
    total : "$213.00",
    orderStatus : "Cancel",
  },
   {
    customerName :"James L. Erickson" ,
    email : "walterlcalabre@jourrapide.com",
    orderDate : "28 Sep, 2023",
    total : "$735.00",
    orderStatus : "Completed",
  },
   {
    customerName :"Lily W. Wilson" ,
    email : "olivehmize@rhyta.com",
    orderDate : "10 Aug, 2023",
    total : "$324.00",
    orderStatus : "Pending",
  },
  {
    customerName :"Sarah M. Brooks" ,
    email : "christasardina@dayrep.com",
    orderDate : "22 May, 2023",
    total : "$153.00",
    orderStatus : "Completed",
  },
  {
    customerName :"Joe k. Hall" ,
    email : "darrenwrivera@dayrep.com",
    orderDate : "15 Mar, 2023",
    total : "$424.00",
    orderStatus : "Cancel",
  },
  {
    customerName :"Ralph Hueber" ,
    email : "robertvleavitt@dayrep.com",
    orderDate : "19 Dec, 2023",
    total : "$521.00",
    orderStatus : "Pending",
  },
  {
    customerName :"Sarah Drescher" ,
    email : "lydiajanderson@dayrep.com",
    orderDate : "11 Jun, 2023",
    total : "$313.00",
    orderStatus : "Completed",
  },
  {
    customerName :"Leonie Meister" ,
    email : "leonie@dayrep.com",
    orderDate : "19 Mar, 2023",
    total : "$219.00",
    orderStatus : "Cancel",
  },
];

const stats = [
  {
    title : "Total Orders",
    value : "472",
    percent : "+ 6.9%",
    badge : "danger",
    icon : BsBoxSeam,
  },
  {
    title : "Order Items Over Time",
    value : "231",
    percent : "+ 13.2%",
    badge : "success",
    icon : BsListTask,
  },
  {
    title : "Return Order",
    value : "367",
    percent : "+ 2.1%",
    badge : "success",
    icon : BsBagDash,
  },
  {
    title : "Fulfilled Orders Over Time",
    value : "123",
    percent : "+ 3.1%",
    badge : "danger",
    icon : BsBagCheck,
  },
 
];
const statusColors = {
  Completed : { 
    style: {
      color: "rgba(34, 197, 94, 1)",
      backgroundColor: "rgba(211, 243, 223, 1)",
    },
  },
  Cancel : {bg:"bg-danger-subtle text-danger"},
  Pending : {
    style :{
      color :"rgba(249, 185, 49, 1)",
      backgroundColor :"rgba(254, 241, 214, 1)",
    },
  },
};


function OrdersList() {
  const[orders, setOrders] = useState(initialOrders);
  const [currentPage,setCurrentPage] = useState(1);
  const handleDeleteRow = (email) =>{
    setOrders((prev) => prev.filter((item)=> item.email !== email));
  };

  const renderOrderStatusBadge = (status)=>{
    const badge = statusColors[status];
    return(
      <span className={`badge ${badge.bg} px-2 py-2`} style={{fontSize:"0.8rem",...badge.style,}}>
        {status}

      </span>
    );
  };
  return (
    <>
    <div className='row g-3 mb-4'>
      {
        stats.map(({title,value,percent,badge,icon:Icon})=>(
          <div className='col-xl-3 col-sm-6 ' key={title}>
            <div className='content-card p-3 d-flex align-items-center justify-content-between'>
              <div>
                <span className='text-muted small d-block mb-1'>
                  {title}
                </span>
                <div className='d-flex align-items-center gap-2'>
                  <h4 className='fw-bold text-dark mb-0'>{value}</h4>
                  <span className={`badge ${badge ==='danger' ? "bg-danger-subtle text-danger":""}`} style={{fontSize : "0.65rem",...(badge === "success" && {
                    color :"rgba(34,197,94,1)",
                    backgroundColor : "rgba(211,243,223,1)",
                  }),
                  }}>
                    {percent}
                  </span>
                  <span className='text-muted' style={{fontSize : "0.7rem"}}>
                    (Last Week)
                  </span>
                </div>
              </div>
              <div className='rounded-3 d-flex align-items-center justify-content-center p-3' style={{backgroundColor : "#fff7ed",color : "#ea580c"}}>
                <Icon className="fs-4"/>
              </div>
            </div>
          </div>
        ))
      }
    </div>
    <div className='content-card p-3 mb-4'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h6 className='fw-bold text-dark mb-0'> All Order Items</h6>
        <select name="" id="" className='form-select form-select-sm' style={{width : "auto", fontSize : "0.8rem"}}>
          <option value="this-month">This Month</option>
          <option value="last-month">Last Month</option>
          <option value="this-year">This Year</option>
        </select>
        </div> 
        <div className='table-responsive'>
          <table className='table table-custom align-middle mb-0' style={{fontSize:"0.825rem"}}>
            <thead>
              <tr className='text-muted' style={{fontSize:"0.75rem"}}>
                <th>Customer Name</th>
                <th>Email</th>
                <th>Order Date</th>
                <th>Total</th>
                <th>Order Status</th>
                <th className='text-center'>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                orders.map((item)=>(
                  <tr key={item.email}>
                    <td className='fw-medium text-dark'>
                      {item.customerName}
                    </td>
                    <td className='text-muted'>{item.email}</td>
                    <td className='text-muted'>{item.orderDate}</td>
                    <td className='fw-bold text-dark'>{item.total}</td>
                    <td>{renderOrderStatusBadge(item.orderStatus)}</td>
                    <td className='text-end'>
                      <div className='d-inline-flex gap-1'>
                        {[
                          {icon : BsEye,
                            title : "View",
                            className : "",
                            style:{backgroundColor: "rgba(238, 242, 247, 1)"}
                          },{
                            icon : BsPencil,
                            title : "Edit",
                            style : {color : "#FF6C2F",backgroundColor:"rgba(255, 108, 47, 0.1)"},

                          },
                          {
                            icon : BsTrash,
                            title : "Delete",
                            style : {color : "#EF5F5F",backgroundColor:"rgba(239, 95, 95, 0.1)"},
                            onClick : ()=>handleDeleteRow(item.email),

                          },
                        ].map(({icon:Icon,title,className,style,onClick,})=>(
                          <button key={title} type='button' title={title} className={`action-btn ${className || ""}`} style={style} onClick={onClick}><Icon/></button>
                        ))}
                      </div>
                    </td>

                  </tr>
                ))
              }
            </tbody>

          </table>

        </div>
        <div className='d-flex justify-content-end align-items-center mt-3 gap-1'>
          <button className='btn btn-sm btn-light border text-muted px-2 py-1' style={{fontSize : "0.78rem"}}>Previous</button>
          {[1,2,3].map((page)=>(
            <button key={page} type='button' onClick={()=>setCurrentPage(page)} className={`btn btn-sm ${currentPage === page ? "btn-add-product":"btn-light border"} px-2 py-1`} style={{fontSize : "0.78rem"}}>
              {page}
            </button>
          ))}
          <button className='btn btn-sm btn-light border text-muted px-2 py-1' style={{fontSize : "0.78rem"}}>Next</button>

        </div>

    </div>
    </>
  );
}

export default OrdersList