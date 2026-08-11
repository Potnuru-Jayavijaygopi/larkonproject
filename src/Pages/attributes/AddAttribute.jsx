import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function AddAttribute() {
  const navigate = useNavigate();
const [formData,setFormData] = useState({
  variant : "Brand",
  value : "Dyson,H&M,Nike,Gopro,Rolex,Huawei,Zara,Thenorthface",
  attributeId : "BR-3922",
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
  alert("Attribute Saved Successfully!");
  navigate("/attributes/list");
};



  return (
    <div className='content-card p-4 mb-4'>
      <h6 className='fw-bold text-dark mb-4'>Edit Attribute</h6>
      <form onSubmit={handleSubmit}>
        <div className='row g-3 mb-4'>
          <div className='col-md-6'>
            <label  className='form-label small text-muted'>
              Attribute Variant
            </label>
            <input type="text"  className='form-control form-control-sm' value={formData.variant} name='variant'
            onChange={handleChange}/>
          </div>
          <div className='col-md-6'>
            <label  className='form-label small text-muted'>Attribute Value</label>
            <input type="text"   className='form-control form-control-sm' value={formData.value} name='value' onChange={handleChange}/>
          </div>

          <div className='col-md-6'>
            <label htmlFor="attrId" className='form-label small text-muted'>Attribute ID</label>
            <input type="text" id='attrId' className='form-control form-control-sm' value={formData.attributeId} name='attributeId' onChange={handleChange}/>

          </div>

          <div className='col-md-6'>
            <label htmlFor="attrOption" className='form-label small text-muted'>Option</label>
            <select name="option" id="attrOption" className='form-select form-select-sm' value={formData.option}  onChange={handleChange}>
              <option value="Dropdown">Dropdown</option>
              <option value="Radio">Radio</option>

            </select>
          </div>


          </div>
          <button className='btn btn-add-product px-4' type='submit'> Edit Change</button>
          </form> 

    </div>
  )
}

export default AddAttribute;