import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAttributes, deleteAttribute, updateAttribute } from '../../services/apiService';
import { toast } from 'react-toastify';
import frameIcon from '../../assets/Frame.png';
import editIcon from '../../assets/solar_pen-2-broken.png';
import trashIcon from '../../assets/solar_trash-bin-minimalistic-2-broken.png';

function AttributeList() {
  const navigate = useNavigate();
  const [attributes, setAttributes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const [blurredIds, setBlurredIds] = useState([]);

  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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

  const toggleBlurRow = (id) => {
    setBlurredIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
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
      // toast.success("Published status updated!");
    } catch (err) {
      console.error('Failed to update published status:', err);
    }
  };

  const handleDeleteRow = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this attribute?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteAttribute(id);

      setAttributes((prev) =>
        prev.filter((item) => item.id !== id)
      );

      setSelectedIds((prev) =>
        prev.filter((item) => item !== id)
      );

      toast.success("Attribute deleted successfully!");
    } catch (err) {
      console.error("Failed to delete attribute:", err);

      toast.error("Failed to delete attribute.");
    }
  };

  const actionButtons = (item, isBlurred) => [
    {
      icon: <img src={frameIcon} alt="View" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />,
      title: isBlurred ? 'Show Data' : 'Blur Data',
      className: '',
      style: {
        backgroundColor: isBlurred ? 'rgba(255, 193, 7, 0.25)' : 'rgba(238, 242, 247, 1)',
        color: isBlurred ? '#d97706' : '#2b364b',
      },
      onClick: () => toggleBlurRow(item.id),
    },
    {
      icon: <img src={editIcon} alt="Edit" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />,
      title: 'Edit',
      style: { color: '#FF6C2F', backgroundColor: 'rgba(255, 108, 47, 0.12)' },
      onClick: () => handleEditAttribute(item),
    },
    {
      icon: <img src={trashIcon} alt="Delete" style={{ width: '16px', height: '16px', objectFit: 'contain' }} />,
      title: 'Delete',
      style: { color: '#EF5F5F', backgroundColor: 'rgba(239, 95, 95, 0.12)' },
      onClick: () => handleDeleteRow(item.id),
    },
  ];

  
  const totalPages = Math.ceil(attributes.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAttributes = attributes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="content-card p-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold text-dark mb-0">All Attribute List</h6>
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-1">
            <span className="text-muted" style={{ fontSize: '0.8rem' }}>Show:</span>
            <select
              className="form-select form-select-sm"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              style={{ width: 'auto', fontSize: '0.8rem' }}
            >
              <option value={5}>5 per page</option>
              <option value={10}>10 per page</option>
              <option value={20}>20 per page</option>
            </select>
          </div>
          <select className="form-select form-select-sm" name="" id="" style={{ width: 'auto', fontSize: '0.8rem' }}>
            <option value="">This Month</option>
            <option value="">Last Month</option>
            <option value="">This Year</option>
          </select>
        </div>
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
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentAttributes.map((item) => {
                const isBlurred = blurredIds.includes(item.id);
                const cellBlurStyle = isBlurred
                  ? { filter: 'blur(5px)', userSelect: 'none', transition: 'filter 0.25s ease' }
                  : { transition: 'filter 0.25s ease' };

                return (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={selectedIds.includes(item.id)}
                        onChange={() => handleSelectRow(item.id)}
                      />
                    </td>
                    <td className="fw-medium text-dark" style={cellBlurStyle}>{item.displayId}</td>
                    <td className="fw-medium text-dark" style={cellBlurStyle}>{item.variant}</td>
                    <td className="text-muted" style={cellBlurStyle}>{item.value}</td>
                    <td className="text-muted" style={cellBlurStyle}>{item.option}</td>
                    <td className="text-muted" style={cellBlurStyle}>{item.createdOn}</td>
                    <td style={cellBlurStyle}>
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
                    <td>
                      <div className="d-inline-flex gap-1">
                        {actionButtons(item, isBlurred).map(({ icon, title, className, onClick, style }) => (
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
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="d-flex justify-content-between align-items-center mt-3">
        <span className="text-muted" style={{ fontSize: '0.78rem' }}>
          Showing {attributes.length === 0 ? 0 : startIndex + 1} to {Math.min(startIndex + itemsPerPage, attributes.length)} of {attributes.length} entries
        </span>

        <div className="d-flex align-items-center gap-1">
          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{ fontSize: '0.78rem' }}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
          <button
            className="btn btn-sm btn-light border text-muted px-2 py-1"
            type="button"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            style={{ fontSize: '0.78rem' }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AttributeList;