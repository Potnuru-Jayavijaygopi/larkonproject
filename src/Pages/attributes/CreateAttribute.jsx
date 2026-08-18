import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAttribute } from '../../services/apiService';

function CreateAttribute() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    variant: '',
    value: '',
    attributeId: '',
    option: 'Dropdown',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      setError(null);
      await createAttribute({
        attribute_name: formData.variant || 'General',
        attribute_value: formData.value || 'Default',
      });
      alert('Attribute Created Successfully!');
      navigate('/attributes/list');
    } catch (err) {
      console.error('Error creating attribute:', err);
      setError(err.message || 'Failed to create attribute');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="content-card p-4 mb-4">
      <h6 className="fw-bold text-dark mb-4">Add Attribute</h6>
      {error && (
        <div className="alert alert-danger py-2 mb-3" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label htmlFor="attrVariant" className="form-label small text-muted">
              Attribute Name
            </label>
            <input
              type="text"
              id="attrVariant"
              name="variant"
              className="form-control form-control-sm"
              value={formData.variant}
              placeholder="Enter Name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="attrValue" className="form-label small text-muted">
              Attribute Value
            </label>
            <input
              type="text"
              id="attrValue"
              name="value"
              className="form-control form-control-sm"
              value={formData.value}
              placeholder="Enter Value"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="attrId" className="form-label small text-muted">
              Attribute ID
            </label>
            <input
              type="text"
              id="attrId"
              name="attributeId"
              className="form-control form-control-sm"
              value={formData.attributeId}
              placeholder="Enter Id"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label small text-muted">Option</label>
            <select
              name="option"
              id=""
              className="form-select form-select-sm"
              value={formData.option}
              onChange={handleChange}
            >
              <option value="Dropdown">Dropdown</option>
              <option value="Radio">Radio</option>
            </select>
          </div>
        </div>
        <button className="btn btn-add-product px-4" type="submit" disabled={submitting}>
          {submitting ? 'Adding...' : 'Add Change'}
        </button>
      </form>
    </div>
  );
}

export default CreateAttribute;