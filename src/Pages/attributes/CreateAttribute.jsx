import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreateAttribute() {
  const navigate = useNavigate();
  const[formData,setFormData] = useState({
    variant : "Enter Name",
    value : "Enter Value",
    attributeId : "Enter Id",
    option : "Dropdown",

  });
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setFormData((prev)=>({
      ...prev,[name]:value,
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log(formData);
    alert("Attributed Created Successfully!");

    navigate("/attributes/list");


  };
  return (
    <div className='content-card p-4 mb-4'>
      <h6 className='fw-bold text-dark mb-4'>Add Attribute</h6>
      <form onSubmit={handleSubmit}>
        <div className='row g-3 mb-4'>
          <div className='col-md-6'>
            <label htmlFor="attrVariant" className='form-label small text-muted'>Attribute Name</label>
            <input type="text" id='attrVariant' name='variant' className='form-control form-control-sm' value={formData.variant} onChange={handleChange}/>
          </div>
          <div className='col-md-6'>
            <label htmlFor="attrValue" className='form-label small text-muted'>Attribute Value</label>
            <input type="text" id='attrValue' name='value' className='form-control form-control-sm' value={formData.value} onChange={handleChange}/>
          </div>
          <div className='col-md-6'>
            <label htmlFor="attrId" className='form-label small text-muted'>Attribute ID</label>
            <input type="text" id='attrId' name='attributeId' className='form-control form-control-sm' value={formData.attributeId} onChange={handleChange}/>
          </div>
          <div className='col-md-6'>
            <label  className='form-label small text-muted'>Option</label>
            <select name="option" id="" className='form-select form-select-sm' value={formData.option} onChange={handleChange}>
              <option value="Dropdown">Dropdown</option>
              <option value="Radio">Radio</option>

            </select>
          </div>
        </div>
        <button className='btn btn-add-product px-4' type='submit'>Add Change</button>
      </form>

    </div>
  )
}

export default CreateAttribute