import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import userIcon from '../../assets/solar_users-group-two-rounded-bold-duotone.svg';
import buildingIcon from '../../assets/solar_backpack-bold-duotone (1).svg';
import rocketIcon from '../../assets/solar_rocket-2-bold-duotone.svg';
import notebookIcon from '../../assets/solar_notebook-bold-duotone_.svg';

import viewIcon from '../../assets/solar_eye-broken.svg';
import editIcon from '../../assets/solar_pen-2-broken.svg';
import deleteIcon from '../../assets/solar_trash-bin-minimalistic-2-broken.svg';
import { permissionAPI, formatDate } from '../../services/api';

const getTagColorClass = (role) => {
  switch (role) {
    case 'Manager': return 'role-pill-manager';
    case 'Administrator': return 'role-pill-administrator';
    case 'Developer': return 'role-pill-developer';
    case 'Analyst': return 'role-pill-analyst';
    case 'Trial': return 'role-pill-trial';
    default: return 'role-pill-default';
  }
};

const formatDateTime = (dateStr) => {
  if (!dateStr) return '';
  const normalized = typeof dateStr === 'string' ? dateStr.replace(' ', 'T') : dateStr;
  const d = new Date(normalized);
  
  if (isNaN(d.getTime())) {
    return typeof formatDate === 'function' ? formatDate(dateStr) : String(dateStr);
  }

  const day = d.getDate();
  const month = d.toLocaleString('en-US', { month: 'short' });
  const year = d.getFullYear();

  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const formattedHours = String(hours).padStart(2, '0');

  return `${day} ${month} ${year}, ${formattedHours}:${minutes} ${ampm}`;
};

const formatRelativeUpdateDate = (dateStr) => {
  if (!dateStr) return '';
  const d = new Date(typeof dateStr === 'string' ? dateStr.replace(' ', 'T') : dateStr);
  if (isNaN(d.getTime())) return String(dateStr);

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const isToday = d.toDateString() === today.toDateString();
  const isYesterday = d.toDateString() === yesterday.toDateString();

  if (isToday) return 'Today';
  if (isYesterday) return 'Yesterday';

  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return `${day} ${d.toLocaleString('en-US', { month: 'short' })} ${year}`;
};

const toDateInputValue = (dateStr) => {
  if (!dateStr) return '';
  const normalized = typeof dateStr === 'string' ? dateStr.replace(' ', 'T') : dateStr;
  const d = new Date(normalized);
  if (isNaN(d.getTime())) return '';
  return d.toISOString().split('T')[0];
};

const Permissions = () => {
  const [permissions, setPermissions] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [blurredRows, setBlurredRows] = useState({});

  const fetchPermissions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await permissionAPI.getAll();
      const rawList = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];

      const formatted = rawList.map((p, index) => {
        let assignedTo = ['Administrator', 'Developer'];
        if (index % 3 === 0) assignedTo = ['Manager'];
        else if (index % 3 === 1) assignedTo = ['Administrator', 'Developer'];
        else assignedTo = ['Manager', 'Administrator', 'Analyst'];

        return {
          id: p.id,
          name: p.permission_name || p.name,
          assignedTo: p.assignedTo || assignedTo,
          createdDate: formatDateTime(p.created_at || new Date()),
          lastUpdate: formatRelativeUpdateDate(p.updated_at || new Date()),
          raw: p,
        };
      });

      setPermissions(formatted);
    } catch (err) {
      console.error('Failed to fetch permissions:', err);
      setError('Unable to load permissions from the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedItems(permissions.map((p) => p.id));
    } else {
      setSelectedItems([]);
    }
  };

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) {
      setPermissions((prev) => prev.filter((p) => p.id !== id));
      setSelectedItems((prev) => prev.filter((itemId) => itemId !== id));
      toast.success('row deleted successfully');
      try {
        await permissionAPI.delete(id);
      } catch (err) {
        console.error('Failed to delete permission on server:', err);
      }
    }
  };

  const toggleBlur = (id) => {
    setBlurredRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleEditClick = (row) => {
    setEditingId(row.id);
    setEditFormData({
      name: row.name,
      assignedTo: Array.isArray(row.assignedTo) ? row.assignedTo[0] : row.assignedTo || 'Manager',
      createdDate: row.raw?.created_at || row.createdDate,
      lastUpdate: row.raw?.updated_at || row.lastUpdate,
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleSave = async (id) => {
    const targetPerm = permissions.find((p) => p.id === id);
    const payload = {
      permission_name: editFormData.name || targetPerm?.name || '',
      description: targetPerm?.raw?.description || 'Permission rule',
      status: editFormData.status || targetPerm?.raw?.status || 'Active',
    };

    try {
      await permissionAPI.update(id, payload);
    } catch (err) {
      console.warn('Backend update failed, updating local state:', err);
    }

    setPermissions((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          return {
            ...p,
            name: editFormData.name,
            assignedTo: Array.isArray(editFormData.assignedTo) ? editFormData.assignedTo : [editFormData.assignedTo],
            createdDate: editFormData.createdDate ? formatDateTime(editFormData.createdDate) : p.createdDate,
            lastUpdate: editFormData.lastUpdate ? formatRelativeUpdateDate(editFormData.lastUpdate) : p.lastUpdate,
            raw: {
              ...p.raw,
              permission_name: editFormData.name,
              status: payload.status,
              updated_at: editFormData.lastUpdate || p.raw?.updated_at,
            },
          };
        }
        return p;
      })
    );

    setEditingId(null);
    setEditFormData({});
    toast.success('row update successfully');
  };

  const totalPages = Math.ceil(permissions.length / itemsPerPage) || 1;
  const paginatedPermissions = permissions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="permissions-wrapper page-container w-100">
      <style>{`
        html, body, .permissions-wrapper {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          font-family: 'Public Sans', sans-serif !important;
          color: #334155;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        html::-webkit-scrollbar, 
        body::-webkit-scrollbar, 
        .permissions-wrapper::-webkit-scrollbar {
          display: none !important;
        }

        .metric-label {
          font-family: 'Public Sans', sans-serif !important;
          font-weight: 600 !important;
          font-size: 0.825rem !important;
          color: #1e293b !important;
          line-height: 100% !important;
        }

        .stat-number {
          font-family: 'Public Sans', sans-serif !important;
          font-weight: 700;
          color: #1e293b;
          font-size: 1.25rem;
          line-height: 1.2;
        }

        .metric-card {
          border: 1px solid var(--border-color, #e2e8f0);
          background-color: var(--card-bg, #ffffff);
          border-radius: 8px;
          padding: 12px 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .metric-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 94, 41, 0.1);
        }

        .table-card {
          border: 1px solid var(--border-color, #e2e8f0);
          background-color: var(--card-bg, #ffffff);
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .permissions-table th {
          font-family: 'Public Sans', sans-serif !important;
          font-size: 0.75rem !important;
          font-weight: 700 !important;
          color: #64748b !important;
          text-transform: none;
          letter-spacing: 0.03em;
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          padding: 0.75rem 1rem;
        }

        .permissions-table td {
          vertical-align: middle;
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border-color, #e2e8f0);
          font-size: 0.85rem;
          color: #334155;
        }

        .role-pill {
          font-family: 'Public Sans', sans-serif !important;
          font-size: 11px;
          font-weight: 700;
          line-height: 100%;
          padding: 3px 7px;
          border-radius: 4px;
          display: inline-block;
          border: none;
        }

        .role-pill-manager {
          background-color: rgba(255, 94, 41, 0.1);
          color: var(--primary-orange, #ff5e29);
        }

        .role-pill-administrator {
          background-color: #E6F8F7;
          color: #4ECAC2;
        }

        .role-pill-analyst {
          background-color: #DCFCE7;
          color: #22C55E;
        }

        .role-pill-developer {
          background-color: #f1f5f9;
          color: #334155;
        }

        .role-pill-trial {
          background-color: #fef9c3;
          color: #854d0e;
        }

        .role-pill-default {
          background-color: #f8fafc;
          color: #64748b;
        }

        .action-btn-custom {
          width: 44px;
          height: 32px;
          border-radius: 8px;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: opacity 0.2s ease;
          cursor: pointer;
        }

        .action-btn-custom:hover {
          opacity: 0.8;
        }

        .btn-view-bg {
          background-color: #EEF2F7;
        }

        .btn-edit-bg {
          background-color: rgba(255, 108, 47, 0.1);
        }

        .btn-delete-bg {
          background-color: rgba(239, 95, 95, 0.1);
        }

        .page-link-custom {
          padding: 3px 8px;
          border-radius: 6px !important;
          border: 1px solid var(--border-color, #e2e8f0);
          color: #64748b;
          font-size: 12px;
          text-decoration: none;
          cursor: pointer;
        }

        .page-link-custom.active {
          background-color: var(--primary-orange, #ff5e29);
          color: #ffffff;
          border-color: var(--primary-orange, #ff5e29);
        }
      `}</style>

      <div className="container-fluid p-0">
        <div className="row g-3 mb-3">
          <div className="col-md-3">
            <div className="metric-card shadow-sm d-flex align-items-center justify-content-between">
              <div>
                <small className="metric-label d-block mb-1">Employees</small>
                <div className="stat-number">54</div>
              </div>
              <div className="metric-icon-box">
                <img src={userIcon} alt="Employees" style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="metric-card shadow-sm d-flex align-items-center justify-content-between">
              <div>
                <small className="metric-label d-block mb-1">Assigned Manager</small>
                <div className="stat-number">13</div>
              </div>
              <div className="metric-icon-box">
                <img src={buildingIcon} alt="Assigned Manager" style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="metric-card shadow-sm d-flex align-items-center justify-content-between">
              <div>
                <small className="metric-label d-block mb-1">Project</small>
                <div className="stat-number">19</div>
              </div>
              <div className="metric-icon-box">
                <img src={rocketIcon} alt="Project" style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="metric-card shadow-sm d-flex align-items-center justify-content-between">
              <div>
                <small className="metric-label d-block mb-1">License Used</small>
                <div className="stat-number">36/50</div>
              </div>
              <div className="metric-icon-box">
                <img src={notebookIcon} alt="License Used" style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>
        </div>

        <div className="table-card shadow-sm p-3 p-md-4">
          <div className="d-flex align-items-center justify-content-between pb-2 mb-2">
            <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '0.95rem' }}>
              All Permissions List ({permissions.length})
            </h6>

            <select className="form-select form-select-sm border-light-subtle text-muted" style={{ width: '120px', fontSize: '12px', cursor: 'pointer' }}>
              <option>This Month</option>
              <option>Last Month</option>
              <option>This Year</option>
            </select>
          </div>

          {error && (
            <div className="alert alert-danger py-2 small mb-3">{error}</div>
          )}

          <div className="table-responsive">
            <table className="table permissions-table align-middle mb-0">
              <thead>
                <tr>
                  <th style={{ width: '4%' }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handleSelectAll}
                      checked={
                        selectedItems.length === permissions.length &&
                        permissions.length > 0
                      }
                    />
                  </th>
                  <th style={{ width: '22%' }}>Name</th>
                  <th style={{ width: '26%' }}>Assigned To</th>
                  <th style={{ width: '26%' }}>Created Date & Time</th>
                  <th style={{ width: '12%' }}>Last Update</th>
                  <th className="text-start" style={{ width: '10%' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-muted">
                      <div className="spinner-border spinner-border-sm text-primary me-2" role="status" />
                      Loading permissions from backend...
                    </td>
                  </tr>
                ) : paginatedPermissions.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-muted">
                      No permissions found.
                    </td>
                  </tr>
                ) : (
                  paginatedPermissions.map((row) => {
                    const isEditing = editingId === row.id;
                    const isBlurred = blurredRows[row.id];
                    const blurStyle = isBlurred ? { filter: 'blur(4px)', transition: 'filter 0.2s' } : {};

                    return (
                      <tr key={row.id}>
                        <td>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedItems.includes(row.id)}
                            onChange={() => handleSelectItem(row.id)}
                          />
                        </td>

                        <td style={blurStyle}>
                          {isEditing ? (
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={editFormData.name || ''}
                              onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                            />
                          ) : (
                            <span className="fw-medium text-dark">{row.name}</span>
                          )}
                        </td>

                        <td style={blurStyle}>
                          {isEditing ? (
                            <select
                              className="form-select form-select-sm"
                              value={editFormData.assignedTo || 'Manager'}
                              onChange={(e) => setEditFormData({ ...editFormData, assignedTo: e.target.value })}
                            >
                              <option value="Manager">Manager</option>
                              <option value="Administrator">Administrator</option>
                              <option value="Developer">Developer</option>
                              <option value="Analyst">Analyst</option>
                              <option value="Trial">Trial</option>
                            </select>
                          ) : (
                            <div className="d-flex flex-wrap gap-1">
                              {row.assignedTo.map((role, idx) => (
                                <span key={idx} className={`role-pill ${getTagColorClass(role)}`}>
                                  {role}
                                </span>
                              ))}
                            </div>
                          )}
                        </td>

                        <td className="text-secondary" style={blurStyle}>
                          {isEditing ? (
                            <input
                              type="date"
                              className="form-control form-control-sm"
                              value={toDateInputValue(editFormData.createdDate)}
                              onChange={(e) => setEditFormData({ ...editFormData, createdDate: e.target.value })}
                            />
                          ) : (
                            row.createdDate
                          )}
                        </td>

                        <td className="text-secondary" style={blurStyle}>
                          {isEditing ? (
                            <input
                              type="date"
                              className="form-control form-control-sm"
                              value={toDateInputValue(editFormData.lastUpdate)}
                              onChange={(e) => setEditFormData({ ...editFormData, lastUpdate: e.target.value })}
                            />
                          ) : (
                            row.lastUpdate
                          )}
                        </td>

                        <td>
                          <div className="d-flex align-items-center justify-content-end gap-1">
                            {isEditing ? (
                              <>
                                <button
                                  className="btn btn-sm btn-success me-1 px-2 py-1"
                                  style={{ fontSize: '12px', fontWeight: '500' }}
                                  onClick={() => handleSave(row.id)}
                                >
                                  Save
                                </button>
                                <button
                                  className="btn btn-sm btn-secondary px-2 py-1"
                                  style={{ fontSize: '12px', fontWeight: '500' }}
                                  onClick={handleCancel}
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  className={`action-btn-custom btn-view-bg ${isBlurred ? 'border border-warning' : ''}`}
                                  title={isBlurred ? 'Unblur Row' : 'View / Blur Row'}
                                  onClick={() => toggleBlur(row.id)}
                                >
                                  <img src={viewIcon} alt="View" style={{ width: '16px', height: '16px' }} />
                                </button>
                                <button
                                  className="action-btn-custom btn-edit-bg"
                                  title="Edit"
                                  onClick={() => handleEditClick(row)}
                                >
                                  <img src={editIcon} alt="Edit" style={{ width: '16px', height: '16px' }} />
                                </button>
                                <button
                                  className="action-btn-custom btn-delete-bg"
                                  title="Delete"
                                  onClick={() => handleDelete(row.id)}
                                >
                                  <img src={deleteIcon} alt="Delete" style={{ width: '16px', height: '16px' }} />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="d-flex align-items-center justify-content-end gap-1 pt-3 border-top mt-3" style={{ borderColor: 'var(--border-color)' }}>
              <button
                type="button"
                className="page-link-custom"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  type="button"
                  className={`page-link-custom ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                type="button"
                className="page-link-custom"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Permissions;