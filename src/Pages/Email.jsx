import React, { useState, useEffect } from 'react';
import { emailAPI, formatDate } from '../services/api';

import inboxIcon from '../assets/inbox (1).png';
import inboxActiveIcon from '../assets/inbox (2).png';
import starIcon from '../assets/star (2).png';
import starActiveIcon from '../assets/star.png';
import draftIcon from '../assets/file.png';
import sendIcon from '../assets/send (1).png';
import trashSidebarIcon from '../assets/trush.png';
import tagSidebarIcon from '../assets/tag (2).png';
import userIcon from '../assets/user.png';
import tagIcon from '../assets/tag (1).png'; 
import purchaseTagIcon from '../assets/purchase tag.png'; 
import chatIcon from '../assets/chat (1).png';
import infoIcon from '../assets/info-square.png'; 
import updatesIcon from '../assets/Vector (6).png'; 
import trashIcon from '../assets/Frame (3).png';
import folderIcon from '../assets/Frame (1).png';
import bookmarkIcon from '../assets/bookmark.png';
import pdfIcon from '../assets/pdf.png';
import docIcon from '../assets/doc.png';
import imageIcon from '../assets/image icon.png';

import ellipseUpdates from '../assets/Ellipse (2).png';
import ellipseSocial from '../assets/Ellipse (3).png';
import ellipsePromotions from '../assets/Ellipse (4).png';
import ellipseForums from '../assets/Ellipse (5).png';

export default function EmailDashboard() {
  const [activeTab, setActiveTab] = useState('Primary');
  const [activeSidebar, setActiveSidebar] = useState('Inbox');
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Compose Modal State
  const [showCompose, setShowCompose] = useState(false);
  const [composeTo, setComposeTo] = useState('');
  const [composeSubject, setComposeSubject] = useState('');
  const [composeBody, setComposeBody] = useState('');
  const [sending, setSending] = useState(false);

  const fetchEmails = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await emailAPI.getAll();
      if (Array.isArray(res.data)) {
        setEmails(res.data);
      } else if (Array.isArray(res)) {
        setEmails(res);
      } else {
        setEmails([]);
      }
    } catch (err) {
      console.error('Failed to fetch emails:', err);
      setError('Unable to load emails from server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  const handleSelectOne = (id) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter((item) => item !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };

  const handleToggleStar = async (email, e) => {
    if (e) e.stopPropagation();
    const newStarred = !email.is_starred;
    // Optimistic update
    setEmails((prev) =>
      prev.map((item) =>
        item.id === email.id ? { ...item, is_starred: newStarred } : item
      )
    );
    try {
      await emailAPI.update(email.id, { is_starred: newStarred });
    } catch (err) {
      console.error('Failed to toggle star:', err);
    }
  };

  const handleDeleteSelected = async () => {
    if (selectedEmails.length === 0) return;
    if (!window.confirm(`Delete ${selectedEmails.length} selected email(s)?`)) return;

    const idsToDelete = [...selectedEmails];
    setEmails((prev) => prev.filter((e) => !idsToDelete.includes(e.id)));
    setSelectedEmails([]);

    for (const id of idsToDelete) {
      try {
        await emailAPI.delete(id);
      } catch (err) {
        console.error('Failed to delete email ID:', id, err);
      }
    }
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!composeTo.trim() || !composeSubject.trim() || !composeBody.trim()) {
      alert('Please fill in recipient email, subject, and body.');
      return;
    }

    setSending(true);
    try {
      await emailAPI.send({
        sender_id: 1,
        receiver_email: composeTo.trim(),
        subject: composeSubject.trim(),
        body: composeBody.trim(),
        folder: 'Sent',
        is_read: false,
        is_starred: false,
      });

      setShowCompose(false);
      setComposeTo('');
      setComposeSubject('');
      setComposeBody('');
      alert('Email sent successfully!');
      fetchEmails();
    } catch (err) {
      console.error('Failed to send email:', err);
      alert(err.message || 'Failed to send email.');
    } finally {
      setSending(false);
    }
  };

  // Filter emails by sidebar selection
  const filteredEmails = emails.filter((item) => {
    const f = (item.folder || '').toLowerCase();
    if (activeSidebar === 'Inbox') return f === 'inbox' || f === '';
    if (activeSidebar === 'Starred') return Boolean(item.is_starred);
    if (activeSidebar === 'Draft') return f === 'draft';
    if (activeSidebar === 'Sent Mail') return f === 'sent';
    if (activeSidebar === 'Trash Mail') return f === 'trash';
    if (activeSidebar === 'Important') return Boolean(item.is_starred || !item.is_read);
    return true;
  });

  // Calculate counts for badges
  const inboxUnreadCount = emails.filter(
    (e) => (e.folder || '').toLowerCase() === 'inbox' && !e.is_read
  ).length;

  const draftCount = emails.filter(
    (e) => (e.folder || '').toLowerCase() === 'draft'
  ).length;

  return (
    <div className="p-3 bg-light min-vh-100" style={{ fontFamily: 'sans-serif' }}>
      <div className="container-fluid px-0">
        <div className="row g-3">
          {/* Left Sidebar */}
          <div className="col-12 col-lg-2">
            <div className="bg-white rounded-3 shadow-sm p-3 h-100 d-flex flex-column justify-content-between">
              <div>
                <button
                  type="button"
                  onClick={() => setShowCompose(true)}
                  className="btn w-100 text-white fw-semibold mb-4 py-2"
                  style={{ backgroundColor: '#FF6C58', borderRadius: '8px', fontSize: '0.9rem' }}
                >
                  Compose
                </button>

                <div className="d-flex flex-column gap-2 mb-4" style={{ fontSize: '0.85rem' }}>
                  <div
                    onClick={() => setActiveSidebar('Inbox')}
                    className="d-flex align-items-center justify-content-between px-2 py-2 rounded-2"
                    style={{
                      cursor: 'pointer',
                      fontWeight: activeSidebar === 'Inbox' ? 'bold' : 'normal',
                      backgroundColor: activeSidebar === 'Inbox' ? '#f8f9fa' : 'transparent',
                      color: '#424E5A',
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={activeSidebar === 'Inbox' ? inboxActiveIcon : inboxIcon}
                        alt="Inbox"
                        style={{ width: '16px', height: '16px' }}
                      />
                      <span>Inbox</span>
                    </div>
                    {inboxUnreadCount > 0 && (
                      <span className="badge bg-danger-subtle text-danger px-2 py-1" style={{ fontSize: '0.7rem', borderRadius: '4px' }}>
                        {inboxUnreadCount}
                      </span>
                    )}
                  </div>

                  <div
                    onClick={() => setActiveSidebar('Starred')}
                    className="d-flex align-items-center gap-2 px-2 py-2 rounded-2"
                    style={{
                      cursor: 'pointer',
                      fontWeight: activeSidebar === 'Starred' ? 'bold' : 'normal',
                      backgroundColor: activeSidebar === 'Starred' ? '#f8f9fa' : 'transparent',
                      color: '#424E5A',
                    }}
                  >
                    <img src={starIcon} alt="Starred" style={{ width: '16px', height: '16px' }} />
                    <span>Starred</span>
                  </div>

                  <div
                    onClick={() => setActiveSidebar('Draft')}
                    className="d-flex align-items-center justify-content-between px-2 py-2 rounded-2"
                    style={{
                      cursor: 'pointer',
                      fontWeight: activeSidebar === 'Draft' ? 'bold' : 'normal',
                      backgroundColor: activeSidebar === 'Draft' ? '#f8f9fa' : 'transparent',
                      color: '#424E5A',
                    }}
                  >
                    <div className="d-flex align-items-center gap-2">
                      <img src={draftIcon} alt="Draft" style={{ width: '16px', height: '16px' }} />
                      <span>Draft</span>
                    </div>
                    {draftCount > 0 && (
                      <span className="badge bg-info-subtle text-info px-2 py-1" style={{ fontSize: '0.7rem', borderRadius: '4px' }}>
                        {draftCount}
                      </span>
                    )}
                  </div>

                  <div
                    onClick={() => setActiveSidebar('Sent Mail')}
                    className="d-flex align-items-center gap-2 px-2 py-2 rounded-2"
                    style={{
                      cursor: 'pointer',
                      fontWeight: activeSidebar === 'Sent Mail' ? 'bold' : 'normal',
                      backgroundColor: activeSidebar === 'Sent Mail' ? '#f8f9fa' : 'transparent',
                      color: '#424E5A',
                    }}
                  >
                    <img src={sendIcon} alt="Sent Mail" style={{ width: '16px', height: '16px' }} />
                    <span>Sent Mail</span>
                  </div>

                  <div
                    onClick={() => setActiveSidebar('Trash Mail')}
                    className="d-flex align-items-center gap-2 px-2 py-2 rounded-2"
                    style={{
                      cursor: 'pointer',
                      fontWeight: activeSidebar === 'Trash Mail' ? 'bold' : 'normal',
                      backgroundColor: activeSidebar === 'Trash Mail' ? '#f8f9fa' : 'transparent',
                      color: '#424E5A',
                    }}
                  >
                    <img src={trashSidebarIcon} alt="Trash Mail" style={{ width: '16px', height: '16px' }} />
                    <span>Trash Mail</span>
                  </div>

                  <div
                    onClick={() => setActiveSidebar('Important')}
                    className="d-flex align-items-center gap-2 px-2 py-2 rounded-2"
                    style={{
                      cursor: 'pointer',
                      fontWeight: activeSidebar === 'Important' ? 'bold' : 'normal',
                      backgroundColor: activeSidebar === 'Important' ? '#f8f9fa' : 'transparent',
                      color: '#424E5A',
                    }}
                  >
                    <img src={tagSidebarIcon} alt="Important" style={{ width: '16px', height: '16px' }} />
                    <span>Important</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-uppercase text-secondary fw-bold px-2 d-block mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                    Labels
                  </span>
                  <div className="d-flex flex-column gap-2" style={{ fontSize: '0.82rem', color: '#424E5A' }}>
                    <div className="d-flex align-items-center gap-2 px-2 py-1 cursor-pointer" onClick={() => setActiveTab('Updates')}>
                      <img src={ellipseUpdates} alt="Updates" style={{ width: '8px', height: '8px' }} />
                      <span>Updates</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 px-2 py-1 cursor-pointer" onClick={() => setActiveTab('Social')}>
                      <img src={ellipseSocial} alt="Social" style={{ width: '8px', height: '8px' }} />
                      <span>Social</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 px-2 py-1 cursor-pointer" onClick={() => setActiveTab('Promotions')}>
                      <img src={ellipsePromotions} alt="Promotions" style={{ width: '8px', height: '8px' }} />
                      <span>Promotions</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 px-2 py-1 cursor-pointer" onClick={() => setActiveTab('Forums')}>
                      <img src={ellipseForums} alt="Forums" style={{ width: '8px', height: '8px' }} />
                      <span>Forums</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-top">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span className="badge bg-secondary-subtle text-secondary px-2 py-1 fw-semibold" style={{ fontSize: '0.7rem' }}>
                    FREE
                  </span>
                </div>
                <span className="text-uppercase text-secondary fw-bold d-block mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.5px' }}>
                  Storage
                </span>
                <div className="progress mb-2" style={{ height: '5px', backgroundColor: '#E9ECEF' }}>
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '46%' }} aria-valuenow="46" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <small className="text-secondary" style={{ fontSize: '0.7rem' }}>
                  7.02 GB (46%) of 15 GB used
                </small>
              </div>
            </div>
          </div>

          {/* Right Email List */}
          <div className="col-12 col-lg-10">
            <div className="card border-0 rounded-3 shadow-sm bg-white p-3">
              <div className="d-flex align-items-center gap-2 mb-3 pb-2 flex-wrap justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <div className="btn-group bg-light rounded-2 border p-1">
                    <button type="button" className="btn btn-sm btn-light border-0 px-2 py-1" onClick={fetchEmails} title="Refresh">
                      <img src={inboxIcon} alt="inbox" style={{ width: '15px', height: '15px' }} />
                    </button>
                    <button type="button" className="btn btn-sm btn-light border-0 px-2 py-1">
                      <img src={infoIcon} alt="info" style={{ width: '15px', height: '15px' }} />
                    </button>
                    <button type="button" className="btn btn-sm btn-light border-0 px-2 py-1" onClick={handleDeleteSelected} title="Delete selected">
                      <img src={trashIcon} alt="trash" style={{ width: '15px', height: '15px' }} />
                    </button>
                  </div>

                  <button type="button" className="btn btn-sm btn-light bg-light rounded-2 border px-3 py-1 d-flex align-items-center gap-1">
                    <img src={folderIcon} alt="folder" style={{ width: '15px', height: '15px' }} />
                    <span className="text-secondary" style={{ fontSize: '0.65rem' }}>▼</span>
                  </button>

                  <button type="button" className="btn btn-sm btn-light bg-light rounded-2 border px-3 py-1 d-flex align-items-center gap-1">
                    <img src={bookmarkIcon} alt="bookmark" style={{ width: '15px', height: '15px' }} />
                    <span className="text-secondary" style={{ fontSize: '0.65rem' }}>▼</span>
                  </button>
                </div>

                <span className="badge bg-light text-secondary border px-3 py-2 fw-medium" style={{ fontSize: '0.8rem' }}>
                  Folder: {activeSidebar} ({filteredEmails.length})
                </span>
              </div>

              {/* Tabs */}
              <div className="d-flex border-bottom mb-2 align-items-center gap-4 px-2 overflow-x-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('Primary')}
                  className="btn border-0 py-2 px-1 fw-semibold d-flex align-items-center gap-2 rounded-0"
                  style={{
                    marginBottom: '-1px',
                    color: activeTab === 'Primary' ? '#FF6C58' : '#8486A7',
                    borderBottom: activeTab === 'Primary' ? '2px solid #FF6C58' : 'none',
                  }}
                >
                  <img src={inboxIcon} alt="primary" style={{ width: '16px', height: '16px' }} />
                  <span>Primary</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('Social')}
                  className="btn border-0 py-2 px-1 fw-semibold d-flex align-items-center gap-2 rounded-0"
                  style={{
                    marginBottom: '-1px',
                    color: activeTab === 'Social' ? '#FF6C58' : '#8486A7',
                    borderBottom: activeTab === 'Social' ? '2px solid #FF6C58' : 'none',
                  }}
                >
                  <img src={userIcon} alt="social" style={{ width: '16px', height: '16px' }} />
                  <span>Social</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('Promotions')}
                  className="btn border-0 py-2 px-1 fw-semibold d-flex align-items-center gap-2 rounded-0"
                  style={{
                    marginBottom: '-1px',
                    color: activeTab === 'Promotions' ? '#FF6C58' : '#8486A7',
                    borderBottom: activeTab === 'Promotions' ? '2px solid #FF6C58' : 'none',
                  }}
                >
                  <img src={purchaseTagIcon} alt="promotions" style={{ width: '16px', height: '16px' }} />
                  <span>Promotions</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('Updates')}
                  className="btn border-0 py-2 px-1 fw-semibold d-flex align-items-center gap-2 rounded-0"
                  style={{
                    marginBottom: '-1px',
                    color: activeTab === 'Updates' ? '#FF6C58' : '#8486A7',
                    borderBottom: activeTab === 'Updates' ? '2px solid #FF6C58' : 'none',
                  }}
                >
                  <img src={updatesIcon} alt="updates" style={{ width: '16px', height: '16px' }} />
                  <span>Updates</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('Forums')}
                  className="btn border-0 py-2 px-1 fw-semibold d-flex align-items-center gap-2 rounded-0"
                  style={{
                    marginBottom: '-1px',
                    color: activeTab === 'Forums' ? '#FF6C58' : '#8486A7',
                    borderBottom: activeTab === 'Forums' ? '2px solid #FF6C58' : 'none',
                  }}
                >
                  <img src={chatIcon} alt="forums" style={{ width: '16px', height: '16px' }} />
                  <span>Forums</span>
                </button>
              </div>

              {/* Email Table */}
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ fontSize: '0.85rem' }}>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="text-center py-4 text-secondary">
                          <div className="spinner-border spinner-border-sm text-primary me-2" role="status" />
                          Loading emails...
                        </td>
                      </tr>
                    ) : filteredEmails.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-4 text-secondary">
                          No emails found in {activeSidebar}.
                        </td>
                      </tr>
                    ) : (
                      filteredEmails.map((email) => {
                        const senderDisplay = email.receiver_email || 'Larkon System';
                        const timeDisplay = formatDate(email.sent_at);
                        const isUnread = !email.is_read;

                        return (
                          <tr key={email.id} style={{ cursor: 'pointer' }}>
                            <td style={{ width: '30px' }}>
                              <input
                                type="checkbox"
                                className="form-check-input"
                                checked={selectedEmails.includes(email.id)}
                                onChange={() => handleSelectOne(email.id)}
                              />
                            </td>

                            <td style={{ width: '28px' }} onClick={(e) => handleToggleStar(email, e)}>
                              <img
                                src={email.is_starred ? starActiveIcon : starIcon}
                                alt="star"
                                style={{ width: '16px', height: '16px' }}
                              />
                            </td>

                            <td style={{ width: '28px' }}>
                              <img
                                src={tagIcon}
                                alt="tag"
                                style={{
                                  width: '15px',
                                  height: '15px',
                                  filter: isUnread ? 'none' : 'grayscale(100%) opacity(0.4)',
                                }}
                              />
                            </td>

                            <td className="text-nowrap" style={{ width: '150px', fontWeight: isUnread ? '700' : '400', color: isUnread ? '#424E5A' : '#8486A7' }}>
                              {senderDisplay}
                            </td>

                            <td>
                              <div className="d-flex align-items-center flex-wrap gap-1">
                                <span className="me-1" style={{ fontWeight: isUnread ? '700' : '400', color: isUnread ? '#424E5A' : '#8486A7' }}>
                                  {email.subject}
                                </span>
                                {email.body && (
                                  <span className="me-2 text-truncate" style={{ maxWidth: '400px', fontWeight: '400', color: '#8486A7' }}>
                                    — {email.body}
                                  </span>
                                )}
                              </div>
                            </td>

                            <td className="text-end text-nowrap" style={{ width: '100px', fontSize: '0.8rem', color: '#8486A7' }}>
                              {timeDisplay}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              <div className="d-flex align-items-center justify-content-between pt-3 mt-2 border-top">
                <small style={{ fontSize: '0.80rem', color: '#8486A7' }}>
                  Showing 1 - {filteredEmails.length} of {filteredEmails.length}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compose Email Modal */}
      {showCompose && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
        >
          <div className="card shadow-lg border-0 rounded-4" style={{ width: '90%', maxWidth: '540px' }}>
            <div className="card-header bg-white border-bottom d-flex align-items-center justify-content-between py-3 px-4">
              <h6 className="fw-bold mb-0" style={{ color: '#313B5E' }}>Compose New Email</h6>
              <button type="button" className="btn-close shadow-none" onClick={() => setShowCompose(false)} />
            </div>
            <form onSubmit={handleSendEmail}>
              <div className="card-body p-4">
                <div className="mb-3">
                  <label className="form-label small text-secondary">To (Recipient Email)</label>
                  <input
                    type="email"
                    required
                    className="form-control bg-light border-light-subtle"
                    placeholder="e.g. client@example.com"
                    value={composeTo}
                    onChange={(e) => setComposeTo(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small text-secondary">Subject</label>
                  <input
                    type="text"
                    required
                    className="form-control bg-light border-light-subtle"
                    placeholder="Enter email subject"
                    value={composeSubject}
                    onChange={(e) => setComposeSubject(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small text-secondary">Message</label>
                  <textarea
                    required
                    rows="5"
                    className="form-control bg-light border-light-subtle"
                    placeholder="Type your message here..."
                    value={composeBody}
                    onChange={(e) => setComposeBody(e.target.value)}
                  />
                </div>
              </div>
              <div className="card-footer bg-white border-top d-flex justify-content-end gap-2 py-3 px-4">
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-sm px-3"
                  onClick={() => setShowCompose(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={sending}
                  className="btn btn-sm text-white px-4"
                  style={{ backgroundColor: '#FF6C58' }}
                >
                  {sending ? 'Sending...' : 'Send Email'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}