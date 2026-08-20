import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { updateAttribute, getAttributeById } from '../../services/apiService';
import { toast } from 'react-toastify';

function AddAttribute() {
  const navigate = useNavigate();
  const location = useLocation();

  const passedAttr = location.state?.attribute;

  const [formData, setFormData] = useState({
    id: passedAttr?.id || null,
    variant: passedAttr?.variant || 'Brand',
    value: passedAttr?.value || 'Dyson,H&M,Nike,Gopro,Rolex,Huawei,Zara,Thenorthface',
    attributeId: passedAttr?.displayId || 'BR-3922',
    option: passedAttr?.option || 'Dropdown',
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (passedAttr?.id) {
      getAttributeById(passedAttr.id)
        .then((res) => {
          if (res.data) {
            setFormData((prev) => ({
              ...prev,
              variant: res.data.attribute_name || prev.variant,
              value: res.data.attribute_value || prev.value,
            }));
          }
        })
        .catch((err) => {console.error('Error fetching attribute details:', err);
          toast.error('Failed to fetch attribute details');

        });
        
    }
  }, [passedAttr]);

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

      if (formData.id) {
        await updateAttribute(formData.id, {
          attribute_name: formData.variant,
          attribute_value: formData.value,
        });
      }

      toast.success('Attribute updated successfully!');
      setTimeout(() => {
      navigate('/attributes/list');
    }, 1000);
    } catch (err) {
      console.error('Error updating attribute:', err);
      setError(err.message || 'Failed to update attribute');
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
      
    }
  };

  return (
    <div className="content-card p-4 mb-4">
      <h6 className="fw-bold text-dark mb-4">Edit Attribute</h6>
      {error && (
        <div className="alert alert-danger py-2 mb-3" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <label className="form-label small text-muted">Attribute Variant</label>
            <input
              type="text"
              className="form-control form-control-sm"
              value={formData.variant}
              name="variant"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label small text-muted">Attribute Value</label>
            <input
              type="text"
              className="form-control form-control-sm"
              value={formData.value}
              name="value"
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
              className="form-control form-control-sm"
              value={formData.attributeId}
              name="attributeId"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="attrOption" className="form-label small text-muted">
              Option
            </label>
            <select
              name="option"
              id="attrOption"
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
          {submitting ? 'Saving...' : 'Edit Change'}
        </button>
      </form>

       
    </div>
  );
}

export default AddAttribute;