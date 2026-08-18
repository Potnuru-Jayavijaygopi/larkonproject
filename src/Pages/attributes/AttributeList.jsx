import React, { useState, useEffect } from 'react';
import { BsEye, BsPencil, BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getAttributes, deleteAttribute, updateAttribute } from '../../services/apiService';

function AttributeList() {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const pageNumbers = [1, 2, 3];

  useEffect(() => {
    fetchAttributes();
  }, []);

  const fetchAttributes = async () => {
    try {
      setLoading(true);
      const res = await getAttributes();
      const rawData = res.data || [];
      const formatted = rawData.map((item) => ({
        id: item.id,
        displayId: `ATTR-${item.id}`,
        variant: item.attribute_name || 'General',
        value: item.attribute_value || '',
        option: 'Dropdown',
        createdOn: item.created_at
          ? new Date(item.created_at).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
          : 'N/A',
        published: true,
        rawItem: item,
      }));
      setAttributes(formatted);
    } catch (err) {
      console.error('Error fetching attributes:', err);
      setError(err.message || 'Failed to load attributes');
    } finally {
      setLoading(false);
    }
  };

  const handleEditAttribute = (item) => {
    navigate('/attributes/edit', { state: { attribute: item } });
  };

  const handleSelectAll = ({ target: { checked } }) => {
    setSelectedIds(checked ? attributes.map(({ id }) => id) : []);
  };

  const handleSelectRow = (id) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleTogglePublished = async (id) => {
    const target = attributes.find((item) => item.id === id);
    if (!target) return;
    const newPublished = !target.published;
    setAttributes((prev) =>
      prev.map((item) => (item.id === id ? { ...item, published: newPublished } : item))
    );
    try {
      await updateAttribute(id, {
        attribute_name: target.variant,
        attribute_value: target.value,
      });
    } catch (err) {
      console.error('Failed to update published status:', err);
    }
  };

  const handleDeleteRow = async (id) => {
    try {
      await deleteAttribute(id);
      setAttributes((prev) => prev.filter((item) => item.id !== id));
      setSelectedIds((prev) => prev.filter((item) => item !== id));
    } catch (err) {
      console.error('Failed to delete attribute:', err);
      setAttributes((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const actionButtons = (item) => [
    {
      icon: <BsEye />,
      title: 'View',
      className: '',
      style: { backgroundColor: 'rgba(238, 242, 247, 1)' },
      onClick: () => handleEditAttribute(item),
    },
    {
      icon: <BsPencil />,
      title: 'Edit',
      style: { color: '#FF6C2F', backgroundColor: 'rgba(255, 108, 47, 0.1)' },
      onClick: () => handleEditAttribute(item),
    },
    {
      icon: <BsTrash />,
      title: 'Delete',
      style: { color: '#EF5F5F', backgroundColor: 'rgba(239, 95, 95, 0.1)' },
      onClick: () => handleDeleteRow(item.id),
    },
  ];

  return (
    <div className="content-card p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold text-dark mb-0">All Attribute List</h6>
        <select className="form-select form-select-sm" name="" id="" style={{ width: 'auto', fontSize: '0.8rem' }}>
          <option value="">This Month</option>
          <option value="">Last Month</option>
          <option value="">This Year</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center py-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger py-2 text-center" role="alert">
          {error}
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-custom align-middle mb-0" style={{ fontSize: '0.825rem' }}>
            <thead>
              <tr className="text-muted" style={{ fontSize: '0.75rem' }}>
                <th style={{ width: '30px' }}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={attributes.length > 0 && selectedIds.length === attributes.length}
                    onChange={handleSelectAll}
                  />
                </th>
                <th>ID</th>
                <th>Variant</th>
                <th>Value</th>
                <th>Option</th>
                <th>Created On</th>
                <th>Published</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {attributes.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedIds.includes(item.id)}
                      onChange={() => handleSelectRow(item.id)}
                    />
                  </td>
                  <td className="fw-medium text-dark">{item.displayId}</td>
                  <td className="fw-medium text-dark">{item.variant}</td>
                  <td className="text-muted">{item.value}</td>
                  <td className="text-muted">{item.option}</td>
                  <td className="text-muted">{item.createdOn}</td>
                  <td>
                    <div className="form-check form-switch mb-0">
                      <input
                        type="checkbox"
                        role="switch"
                        className="form-check-input cursor-pointer"
                        checked={item.published}
                        onChange={() => handleTogglePublished(item.id)}
                        style={{
                          backgroundColor: item.published ? '#ff5e29' : '',
                          borderColor: item.published ? '#ff5e29' : '',
                        }}
                      />
                    </div>
                  </td>
                  <td >
                    <div className="d-inline-flex gap-1">
                      {actionButtons(item).map(({ icon, title, className, onClick, style }) => (
                        <button
                          key={title}
                          type="button"
                          title={title}
                          className={`action-btn ${className || ''}`}
                          onClick={onClick}
                          style={style}
                        >
                          {icon}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="d-flex justify-content-end align-items-center mt-3 gap-1">
        <button className="btn btn-sm btn-light border text-muted px-2 py-1" type="button" style={{ fontSize: '0.78rem' }}>
          Previous
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            className={`btn btn-sm ${currentPage === page ? 'btn-add-product' : 'btn-light border'} px-2 py-1`}
            style={{ fontSize: '0.78rem' }}
          >
            {page}
          </button>
        ))}
        <button className="btn btn-sm btn-light border text-muted px-2 py-1" type="button" style={{ fontSize: '0.78rem' }}>
          Next
        </button>
      </div>
    </div>
  );
}

export default AttributeList;