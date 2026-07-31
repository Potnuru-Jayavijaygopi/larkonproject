import React, { useState } from 'react'
import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom'

function AttributeList() {
  const navigate = useNavigate();
  const initialAttributes = [
    {
      id:'BR-3922',
      variant : "Brand",
      value : 'Dyson ,H&M ,Nike ,Gopro ,Huawei ,Rolex ,Zara ,Thenorthface',
      option : 'Dropdown',
      createdOn : '10 Sep 2023',
      published : true,
    },
    {
      id:'CL - 3721',
      variant : 'Color',
      value : "Black ,Blue ,Green ,Yellow ,White",
      option : "Dropdown",
      createdOn : "16 May 2024",
      published : true,
    },
    {
      id : 'SZ-2291',
      variant : "size",
      value : "XS ,S ,M ,XL ,XXL ,3XL",
      option :"Radio",
      createdOn :"12 March 2024",
      published : true,
    },
    {
      id:'PC-1022',
      variant : "Packaging",
      value : "Paper Box ,Plastic Box ,Heard Box ,Tin",
      option : "Dropdown",
      createdOn : "02 Jan 2024",
      published : false,
    },
    {
      id : "ML-0022",
      variant : "Material",
      value : "Cotton ,Polyster ,Leather ,Chiffon ,Denim ,Linen ,Satin",
      option : "Dropdown",
      createdOn : "20 April 2024",
      published : true,
    },{
      id:'MM-9011',
      variant : "Memory",
      value :"64 ,128 ,250 ,512 ,1TB",
      option :"Radio",
      createdOn : "29 March 2024",
      published : true,
    },{
      id : "SZ-2911",
      variant : "Shoes Size",
      value : '18 to 22 ,38 to 44',
      option : "Radio",
      createdOn : "o3 Dec 2023",
      published : true,
    },{
      id:"ST-4525",
      variant : "Style",
      value : "Classic ,Modern ,Ethnic ,Western",
      option : "Dropdown",
      createdOn  : "30 Jun 2024",
      published : false,
    },
  ];
  const pageNumbers = [1,2,3];

    const[attributes,setAttributes] = useState(initialAttributes);
    const[selectedIds,setSelectedIds] = useState([]);
    const[currentPage,setCurrentPage] = useState(1);
    const handleEditAttribute = ()=>{
      navigate ? navigate("/attributes/add") : onNavigate?.("add-attribute");
    };
    const handleSelectAll = ({target :{checked}}) => {
      setSelectedIds(checked ? attributes.map(({id})=>id):[]);
      
    };
    const handleSelectRow = (id)=>{
      setSelectedIds((prev)=>prev.includes(id) ? prev.filter((item)=>item !== id) : [...prev,id]);
    };
    const handleTogglePublished = (id)=>{
      setAttributes((prev)=>prev.map((item)=>item.id === id ? {...item,published : !item.published} : item));
    };
    const handleDeleteRow = (id)=>{
      setAttributes((prev)=>prev.filter((item)=>item.id !==id));
      setSelectedIds((prev)=>prev.filter((item)=>item !== id));
    };
    const actionButtons = (id)=>[
      {
        icon : <BsEye/>,
        title : "View",
        className : "",
        onClick : handleEditAttribute,
      },
      {
        icon : <BsPencil/>,
        title : "Edit",
        className : "text-warning",
        onClick : handleEditAttribute,
      },{
        icon : <BsTrash/>,
        title : "Delete",
        className : "delete-btn text-danger",
        onClick : ()=>handleDeleteRow(id),
      },
    ];
  return (
    <div className='content-card p-3 mb-4'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h6 className='fw-bold text-dark mb-0'>All Attribute List</h6>
        <select className='form-select form-select-sm' name="" id="" style={{width : "auto", fontSize:"0.8rem"}}>
          <option value="">This Month</option>
          <option value="">This Month</option>
          <option value="">This Year</option>
        </select>
      </div>
      <div className='table-responsive'>
        <table 
        className='table table-custom align-middle mb-0' style={{forSize : "0.825rem"}}>
          <thead>
            <tr className='text-muted' style={{fontSize:"0.75rem"}}>
              <th style={{width : "30px"}}>
                <input type="checkbox" className='form-check-input' checked={attributes.length>0 && selectedIds.length === attributes.length} 
                onChange={handleSelectAll} />

              </th>
              <th>ID</th>
              <th>Variant</th>
              <th>Value</th>
              <th>Option</th>
              <th>Created On</th>
              <th>Published</th>
              <th className='text-end'>Action</th>

            </tr>
          </thead>
          <tbody>
            {attributes.map((item)=>(
              <tr key={item.id}>
                <td>
                  <input type="checkbox" className='form-check-input' checked={selectedIds.includes(item.id)} onChange={()=>handleSelectRow(item.id)} />
                </td>
                <td className='fw-medium text-dark'>{item.id}</td>
                <td className='fw-medium text-dark'>{item.variant}</td>
                <td className='text-muted'>{item.value}</td>
                <td className='text-muted'>{item.option}</td>
                <td className='text-muted'>{item.createdOn}</td>
                <td>
                  <div className='form-check form-switch mb-0'>
                    <input type="checkbox" role='switch' className='form-check-input cursor-pointer' checked={item.published} onChange={()=>handleTogglePublished(item.id)} style={{backgroundColor:item.published ? "#ff5e29":"",borderColor:item.published ? "#ff5e29":"",}} />
                  </div>
                </td>
                <td className='text-end'>
                  <div className='d-inline-flex gap-1'>
                    {
                      actionButtons(item.id).map(({icon,title,className,onClick}) =>(
                        <button key={title}
                        type='button'
                        title={title}
                        className={`action-btn ${className}`} onClick={onclick}>{icon}</button>

                      ))
                    }
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-end align-items-center mt-3 gap-1'>
        <button className='btn btn-sm btn-light border text-muted px-2 py-1' type='button' style={{fontSize : "0.78rem"}}>Previous</button>
        {
          pageNumbers.map((page)=>(
            <button
            key={page}
            type='button'
            onClick={()=>setCurrentPage(page)}
            className={`btn btn-sm ${
              currentPage === page ? "btn-add-product":"btn-light border"
            } px-2 py-1`} style={{fontSize:"0.78rem"}}>{page}</button>
          ))
        }
        <button className='btn btn-sm btn-light border text-muted px-2 py-1' type='button' style={{fontSize : "0.78rem"}}>Next

        </button>
      </div>

    </div>
  );
}

export default AttributeList