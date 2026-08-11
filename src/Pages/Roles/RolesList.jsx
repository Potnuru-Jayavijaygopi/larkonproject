import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import fbLogo from '../../assets/b779f6b631701009f303806c4a7d19870ca946fa.png';
import slackLogo from '../../assets/23c8790872253515ff74ef29b6ab6c3a54a368fc.png';
import zoomLogo from '../../assets/3c6c6c6ab342c5f81168a7bc3c192cca820507e7.png';
import analyticsLogo from '../../assets/877a30f612215219feb09958beb7d8393c985727.png';
import meetLogo from '../../assets/498903510996db8c13cba17db61c33930b8adcca.png';
import mailLogo from '../../assets/993616137194c587732e600c285624c32531a6a1.png';
import stripeLogo from '../../assets/2d010ffe507d66ea7ee9913fca57053ad9e712f4.png';

import defaultAvatar from '../../assets/Frame.svg';
import viewIcon from '../../assets/solar_eye-broken.svg';
import editIcon from '../../assets/solar_pen-2-broken.svg';
import deleteIcon from '../../assets/solar_trash-bin-minimalistic-2-broken.svg';

const initialRolesData = [
  {
    id: 1,
    role: 'Workspace Manager',
    workspace: 'Facebook',
    workspaceLogo: fbLogo,
    tags: ['Manager', 'Product'],
    users: [1, 2, 3, 4],
    status: true,
  },
  {
    id: 2,
    role: 'Product Owner',
    workspace: 'Slack',
    workspaceLogo: slackLogo,
    tags: ['Manager', 'Product', 'Data'],
    users: [1, 2, 3],
    status: false,
  },
  {
    id: 3,
    role: 'Product Designer',
    workspace: 'Zoom',
    workspaceLogo: zoomLogo,
    tags: ['Designer', 'Data'],
    users: [1],
    status: true,
  },
  {
    id: 4,
    role: 'Data Analyst',
    workspace: 'Analytics',
    workspaceLogo: analyticsLogo,
    tags: ['Data'],
    users: [1, 2, 3],
    status: false,
  },
  {
    id: 5,
    role: 'Tech Lead',
    workspace: null,
    tags: ['Product', 'Data', 'Supporter'],
    users: [],
    status: false,
  },
  {
    id: 6,
    role: 'Product Manager',
    workspace: 'Meet',
    workspaceLogo: meetLogo,
    tags: ['System Design'],
    users: [1, 2, 3, 4],
    status: true,
  },
  {
    id: 7,
    role: 'Chief Product Owner',
    workspace: 'Mail',
    workspaceLogo: mailLogo,
    tags: ['Manager', 'Product'],
    users: [1, 2],
    status: true,
  },
  {
    id: 8,
    role: 'Support Team Head',
    workspace: 'Stripe',
    workspaceLogo: stripeLogo,
    tags: ['QA'],
    users: [1],
    status: false,
  },
];

const RolesList = () => {
  const navigate = useNavigate();
  const [roles, setRoles] = useState(initialRolesData);

  const handleToggleStatus = (id) => {
    setRoles((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleDelete = (id) => {
    setRoles((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="roles-list-wrapper w-100">
      <style>{`
        html, body, .roles-list-wrapper {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
          font-family: 'Public Sans', sans-serif !important;
          color: #334155;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        html::-webkit-scrollbar, 
        body::-webkit-scrollbar, 
        .roles-list-wrapper::-webkit-scrollbar {
          display: none !important;
        }

        .figma-card-container {
          border: 1px solid var(--border-color, #e2e8f0) !important;
          background-color: var(--card-bg, #ffffff);
          border-radius: 8px;
          width: 100%;
          box-sizing: border-box;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .roles-table {
          width: 100%;
          margin-bottom: 0;
          table-layout: auto;
        }

        .roles-table th {
          font-family: 'Public Sans', sans-serif !important;
          font-size: 0.75rem !important;
          font-weight: 700 !important;
          color: #64748b !important;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          border-bottom: 1px solid var(--border-color, #eaedf1);
          padding: 0.75rem 1rem;
          white-space: nowrap;
        }

        .roles-table td {
          vertical-align: middle;
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border-color, #eaedf1);
          font-size: 0.85rem;
          color: #334155;
          white-space: nowrap;
        }

        .tag-badge {
          background-color: #F8FAFC;
          border: 1px solid var(--border-color, #e2e8f0);
          color: #5D7186;
          font-family: 'Public Sans', sans-serif !important;
          font-size: 10.5px;
          font-weight: 700;
          line-height: 100%;
          padding: 3px 8px;
          border-radius: 4px;
          display: inline-block;
        }

        .avatar-group {
          display: flex;
          align-items: center;
        }
        
        .avatar-circle {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background-color: #e0e0e0;
          border: 2px solid #ffffff;
          margin-left: -8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .avatar-group .avatar-circle:first-child {
          margin-left: 0;
        }

        .form-check-input:checked {
          background-color: var(--primary-orange, #ff5e29);
          border-color: var(--primary-orange, #ff5e29);
        }

        .form-check-input {
          cursor: pointer;
          width: 34px;
          height: 18px;
        }

        .add-link-btn {
          color: var(--primary-orange, #ff5e29);
          background: none;
          border: none;
          font-size: 12px;
          font-weight: 600;
          padding: 0;
          cursor: pointer;
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
          width: 26px;
          height: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px !important;
          border: 1px solid var(--border-color, #eaedf1);
          color: #5d7186;
          font-size: 12px;
          text-decoration: none;
        }

        .page-link-custom.active {
          background-color: var(--primary-orange, #ff5e29);
          color: #ffffff;
          border-color: var(--primary-orange, #ff5e29);
        }

        .table-container-responsive {
          width: 100%;
          overflow-x: auto;
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }

        .table-container-responsive::-webkit-scrollbar {
          display: none !important;
        }
      `}</style>

      <div className="container-fluid p-0">
        <div className="figma-card-container shadow-sm p-3 p-md-4 d-flex flex-column justify-content-between">
          <div className="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom" style={{ borderColor: 'var(--border-color, #e2e8f0)' }}>
            <h5 className="mb-0 fw-bold" style={{ fontSize: '1rem', color: '#1e293b' }}>
              All Roles List
            </h5>
            <button
              className="btn btn-sm d-inline-flex align-items-center gap-1"
              style={{
                backgroundColor: 'var(--primary-orange, #ff5e29)',
                color: '#ffffff',
                fontWeight: 600,
                fontSize: '0.825rem',
                borderRadius: '6px',
                padding: '6px 14px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/roles/create')}
            >
              + Create Role
            </button>
          </div>

          <div className="table-container-responsive">
            <table className="table roles-table align-middle mb-0">
              <thead>
                <tr>
                  <th style={{ width: '22%' }}>Role</th>
                  <th style={{ width: '20%' }}>Workspace</th>
                  <th style={{ width: '25%' }}>Tags</th>
                  <th style={{ width: '15%' }}>Users</th>
                  <th style={{ width: '8%' }}>Status</th>
                  <th className="text-end" style={{ width: '10%' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {roles.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <span 
                        className="fw-semibold cursor-pointer"
                        style={{ cursor: 'pointer', color: '#1e293b' }}
                        onClick={() => navigate('/roles/edit')}
                      >
                        {item.role}
                      </span>
                    </td>

                    <td>
                      {item.workspace ? (
                        <div className="d-flex align-items-center gap-2">
                          <img
                            src={item.workspaceLogo}
                            alt={item.workspace}
                            style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                          />
                          <span>{item.workspace}</span>
                        </div>
                      ) : (
                        <button 
                          className="add-link-btn"
                          onClick={() => navigate('/roles/create')}
                        >
                          + Add Workspace
                        </button>
                      )}
                    </td>

                    <td>
                      <div className="d-flex flex-wrap gap-1">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="tag-badge">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td>
                      {item.users.length > 0 ? (
                        <div className="avatar-group">
                          {item.users.map((usr, i) => (
                            <div key={i} className="avatar-circle">
                              <img 
                                src={defaultAvatar} 
                                alt="User" 
                                style={{ width: '14px', height: '14px', objectFit: 'contain' }} 
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <button 
                          className="add-link-btn"
                          onClick={() => navigate('/roles/create')}
                        >
                          + Add User
                        </button>
                      )}
                    </td>

                    <td>
                      <div className="form-check form-switch mb-0">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={item.status}
                          onChange={() => handleToggleStatus(item.id)}
                        />
                      </div>
                    </td>

                    <td>
                      <div className="d-flex align-items-center justify-content-end gap-1">
                        <button 
                          className="action-btn-custom btn-view-bg" 
                          title="View"
                          onClick={() => navigate('/roles/edit')}
                        >
                          <img src={viewIcon} alt="View" style={{ width: '16px', height: '16px' }} />
                        </button>
                        <button 
                          className="action-btn-custom btn-edit-bg" 
                          title="Edit"
                          onClick={() => navigate('/roles/edit')}
                        >
                          <img src={editIcon} alt="Edit" style={{ width: '16px', height: '16px' }} />
                        </button>
                        <button 
                          className="action-btn-custom btn-delete-bg" 
                          title="Delete"
                          onClick={() => handleDelete(item.id)}
                        >
                          <img src={deleteIcon} alt="Delete" style={{ width: '16px', height: '16px' }} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex align-items-center justify-content-between pt-3 border-top mt-3" style={{ borderColor: 'var(--border-color, #e2e8f0)' }}>
            <small className="text-muted" style={{ fontSize: '12px' }}>
              Showing <strong className="text-dark">10</strong> of <strong className="text-dark">59</strong> Results
            </small>

            <div className="d-flex align-items-center gap-1">
              <a href="#prev" className="page-link-custom">‹</a>
              <a href="#page1" className="page-link-custom active">1</a>
              <a href="#page2" className="page-link-custom">2</a>
              <a href="#page3" className="page-link-custom">3</a>
              <a href="#next" className="page-link-custom">›</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesList;