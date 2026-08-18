import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { roleAPI } from '../../services/api';

const RoleCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rolesName: '',
    workspace: 'Facebook',
    userName: '',
    status: 'Active',
  });

  const [tags, setTags] = useState(['Manager', 'Product']);
  const [tagInput, setTagInput] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleTagKeyDown = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.rolesName.trim()) {
      setError('Please enter a role name.');
      return;
    }

    setSubmitting(true);
    setError(null);
    try {
      const descriptionPayload = JSON.stringify({
        workspace: formData.workspace,
        tags: tags,
        users: formData.userName ? [formData.userName] : ['Admin'],
      });

      await roleAPI.create({
        role_name: formData.rolesName.trim(),
        description: descriptionPayload,
        status: formData.status,
      });

      alert('New Role created successfully!');
      navigate('/roles');
    } catch (err) {
      console.error('Failed to create role:', err);
      setError(err.message || 'Failed to create role on the server.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="role-create-wrapper page-container w-100">
      <style>{`
        .role-create-wrapper {
          font-family: 'Public Sans', sans-serif !important;
          color: #334155;
        }

        .figma-card-container {
          border: 1px solid var(--border-color, #e2e8f0) !important;
          background-color: var(--card-bg, #ffffff);
          border-radius: 8px;
          width: 100%;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .card-header-title {
          font-family: 'Public Sans', sans-serif !important;
          font-weight: 700 !important;
          font-size: 0.95rem !important;
          color: #1e293b !important;
          line-height: 100% !important;
          border-bottom: 1px solid var(--border-color, #e2e8f0);
        }

        .form-label-custom {
          font-family: 'Public Sans', sans-serif !important;
          font-weight: 600 !important;
          font-size: 0.825rem !important;
          color: #1e293b !important;
          line-height: 100% !important;
          margin-bottom: 8px;
          display: block;
        }

        .form-control-custom, .form-select-custom {
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 6px;
          padding: 8px 12px;
          font-size: 0.85rem;
          color: #334155;
          background-color: #ffffff;
          transition: border-color 0.15s ease-in-out;
        }

        .form-control-custom::placeholder {
          color: #adb5bd;
        }

        .form-control-custom:focus, .form-select-custom:focus {
          border-color: var(--primary-orange, #ff5e29);
          box-shadow: 0 0 0 0.2rem rgba(255, 94, 41, 0.15);
          outline: none;
        }

        .tags-input-container {
          border: 1px solid var(--border-color, #e2e8f0);
          border-radius: 6px;
          padding: 5px 10px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 6px;
          background-color: #ffffff;
          min-height: 38px;
        }

        .tag-pill {
          background-color: var(--primary-orange, #ff5e29);
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .tag-pill-close {
          cursor: pointer;
          font-size: 12px;
          line-height: 1;
          opacity: 0.8;
        }

        .tag-pill-close:hover {
          opacity: 1;
        }

        .tag-input-field {
          border: none;
          outline: none;
          font-size: 0.85rem;
          color: #334155;
          flex-grow: 1;
          min-width: 80px;
          background: transparent;
        }

        .form-check-input-custom {
          cursor: pointer;
        }

        .form-check-input-custom:checked {
          background-color: var(--primary-orange, #ff5e29);
          border-color: var(--primary-orange, #ff5e29);
        }

        .btn-create-custom {
          background-color: var(--primary-orange, #ff5e29);
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 8px 20px;
          font-size: 0.825rem;
          font-weight: 600;
          transition: background-color 0.2s ease;
          cursor: pointer;
        }

        .btn-create-custom:hover {
          background-color: var(--primary-orange-hover, #e04d1c);
          color: #ffffff;
        }
      `}</style>

      <div className="container-fluid p-0">
        <form onSubmit={handleSubmit}>
          <div className="figma-card-container shadow-sm p-3 p-md-4">
            <h6 className="card-header-title pb-3 mb-4">
              Roles Information
            </h6>

            {error && (
              <div className="alert alert-danger py-2 small mb-3">{error}</div>
            )}

            <div className="row g-3 g-md-4 mb-3">
              <div className="col-md-6">
                <label className="form-label-custom">Roles Name</label>
                <input
                  type="text"
                  name="rolesName"
                  className="form-control form-control-custom w-100"
                  value={formData.rolesName}
                  onChange={handleInputChange}
                  placeholder="Role name (e.g. Workspace Manager)"
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label-custom">Add Workspace</label>
                <select
                  name="workspace"
                  className="form-select form-select-custom w-100 cursor-pointer"
                  value={formData.workspace}
                  onChange={handleInputChange}
                >
                  <option value="Facebook">Facebook</option>
                  <option value="Slack">Slack</option>
                  <option value="Zoom">Zoom</option>
                  <option value="Analytics">Analytics</option>
                  <option value="Meet">Meet</option>
                  <option value="Mail">Mail</option>
                  <option value="Stripe">Stripe</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label-custom">Tag</label>
                <div className="tags-input-container">
                  {tags.map((tag, index) => (
                    <span key={index} className="tag-pill">
                      {tag}
                      <span
                        className="tag-pill-close"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        ✕
                      </span>
                    </span>
                  ))}
                  <input
                    type="text"
                    className="tag-input-field"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    placeholder={tags.length === 0 ? "Type tag & press enter" : ""}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <label className="form-label-custom">User Name</label>
                <input
                  type="text"
                  name="userName"
                  className="form-control form-control-custom w-100"
                  value={formData.userName}
                  onChange={handleInputChange}
                  placeholder="Enter user name (e.g. Gaston Lapierre)"
                />
              </div>

              <div className="col-12 mt-2">
                <label className="form-label-custom">User Status</label>
                <div className="d-flex align-items-center gap-4">
                  <div className="form-check d-flex align-items-center gap-2 mb-0">
                    <input
                      className="form-check-input form-check-input-custom"
                      type="radio"
                      name="status"
                      id="statusActive"
                      value="Active"
                      checked={formData.status === 'Active'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label small text-dark fw-medium" htmlFor="statusActive" style={{ cursor: 'pointer' }}>
                      Active
                    </label>
                  </div>

                  <div className="form-check d-flex align-items-center gap-2 mb-0">
                    <input
                      className="form-check-input form-check-input-custom"
                      type="radio"
                      name="status"
                      id="statusInactive"
                      value="In Active"
                      checked={formData.status === 'In Active'}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label small text-muted fw-medium" htmlFor="statusInactive" style={{ cursor: 'pointer' }}>
                      In Active
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-top mt-3" style={{ borderColor: 'var(--border-color)' }}>
              <button type="submit" disabled={submitting} className="btn btn-create-custom">
                {submitting ? 'Creating...' : 'Create Roles'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleCreate;