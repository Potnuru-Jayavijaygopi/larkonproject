import React, { useState } from 'react';

import inboxIcon from '../assets/inbox (1).png';
import inboxActiveIcon from '../assets/inbox (2).png';
import starIcon from '../assets/star (2).png';
import starActiveIcon from '../assets/Star.png';
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

  const emails = [
    {
      id: 1,
      sender: 'Daniel J. Olsen',
      subject: 'Lucas Kriebel (@Daniel J. Olsen) has sent you a direct message on Twitter!',
      preview: '@Daniel J. Olsen - Very cool :) Nicklas, You have a ...',
      time: '11:49 am',
      starred: false,
      important: true,
      isBold: true,
    },
    {
      id: 2,
      sender: 'Jack P. Roldan',
      subject: 'Images',
      preview: '',
      attachments: [
        { name: 'IMG_201', type: 'img' },
        { name: 'IMG_202', type: 'img' },
        { name: 'IMG_203', type: 'img' },
      ],
      badge: '+5',
      time: 'Feb 21',
      starred: true,
      important: true,
      isBold: false,
    },
    {
      id: 3,
      sender: 'Betty C. Cox (11)',
      subject: 'Train/Bus',
      preview: 'Yes ok, great! I’m not stuck in Stockholm anymore, we’re making progress.',
      time: 'Feb 19',
      starred: false,
      important: false,
      isBold: false, 
    },
    {
      id: 4,
      sender: 'Medium',
      subject: 'This Week’s Top Stories',
      preview: '— Our top pick for you on Medium this week The Man Who Destroyed America’s Ego',
      time: 'Feb 28',
      starred: false,
      important: true,
      isBold: true,
    },
    {
      id: 5,
      sender: 'Death to Stock',
      subject: '(no subject)',
      attachments: [
        { name: 'dashboard.pdf', type: 'pdf' },
        { name: 'pages-data.pdf', type: 'pdf' },
      ],
      time: 'Feb 28',
      starred: true,
      important: false,
      isBold: false,
    },
    {
      id: 6,
      sender: 'Revibe',
      subject: '(no subject)',
      attachments: [
        { name: 'doc1.doc', type: 'doc' },
        { name: 'doc2.doc', type: 'doc' },
        { name: 'doc3.doc', type: 'doc' },
        { name: 'doc4.doc', type: 'doc' },
      ],
      time: 'Feb 27',
      starred: false,
      important: true,
      isBold: false,
    },
    {
      id: 7,
      sender: 'Erik, me (5)',
      subject: 'Regarding our meeting',
      preview: '— That’s great, see you on Thursday!',
      time: 'Feb 24',
      starred: true,
      important: false,
      isBold: false,
    },
    {
      id: 8,
      sender: 'KanbanFlow',
      subject: 'Task assigned: Clone ARP’s website',
      preview: '— You have been assigned a task by Alex@Work on the board Web.',
      time: 'Feb 24',
      starred: true,
      important: false,
      isBold: false,
    },
    {
      id: 9,
      sender: 'Tobias Berggren',
      subject: 'Let’s go fishing!',
      preview: '— Hey, You wanna join me and Fred at the lake tomorrow? It’ll be awesome.',
      time: 'Feb 23',
      starred: false,
      important: true,
      isBold: false,
    },
    {
      id: 10,
      sender: 'Charukaw, me (7)',
      subject: 'Hey man',
      preview: '— Nah man sorry i don’t. Should i get it?',
      time: 'Feb 23',
      starred: true,
      important: true,
      isBold: false,
    },
    {
      id: 11,
      sender: 'Stack Exchange',
      subject: '1 new items in your Stackexchange inbox',
      preview: '— The following items were added to your Stack Exchange global inbox since you last check...',
      time: 'Feb 21',
      starred: true,
      important: false,
      isBold: false,
    },
    {
      id: 12,
      sender: 'Google Drive Team',
      subject: 'You can now use your storage in Google Drive',
      preview: '— Hey Nicklas Sandell! Thank you for purchasing extra storage space in Google Drive.',
      time: 'Feb 20',
      starred: true,
      important: false,
      isBold: false,
    },
    {
      id: 13,
      sender: 'Peter, me (3)',
      subject: 'Hello',
      preview: '— Trip home from Colombo has been arranged, then Jenna will come get me from Stockholm. :-)',
      time: 'Mar 6',
      starred: false,
      important: true,
      isBold: false,
    },
    {
      id: 14,
      sender: 'me, Susanna (7)',
      subject: 'Since you asked... and i’m inconceivably bored of the train station',
      preview: '— Alright thanks, I’ll have to re-book that somehow, i’ll get back to ...',
      time: 'Mar 6',
      starred: false,
      important: false,
      isBold: false,
    },
  ];

  const handleSelectOne = (id) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter((item) => item !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };

  return (
    <div className="p-3 bg-light min-vh-100" style={{ fontFamily: 'sans-serif' }}>
      <div className="container-fluid px-0">
        <div className="row g-3">
          <div className="col-12 col-lg-2">
            <div className="bg-white rounded-3 shadow-sm p-3 h-100 d-flex flex-column justify-content-between">
              <div>
                <button
                  type="button"
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
                    <span className="badge bg-danger-subtle text-danger px-2 py-1" style={{ fontSize: '0.7rem', borderRadius: '4px' }}>
                      7
                    </span>
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
                    <span className="badge bg-info-subtle text-info px-2 py-1" style={{ fontSize: '0.7rem', borderRadius: '4px' }}>
                      32
                    </span>
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
                    <div className="d-flex align-items-center gap-2 px-2 py-1">
                      <img src={ellipseUpdates} alt="Updates" style={{ width: '8px', height: '8px' }} />
                      <span>Updates</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 px-2 py-1">
                      <img src={ellipseSocial} alt="Social" style={{ width: '8px', height: '8px' }} />
                      <span>Social</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 px-2 py-1">
                      <img src={ellipsePromotions} alt="Promotions" style={{ width: '8px', height: '8px' }} />
                      <span>Promotions</span>
                    </div>
                    <div className="d-flex align-items-center gap-2 px-2 py-1">
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

          <div className="col-12 col-lg-10">
            <div className="card border-0 rounded-3 shadow-sm bg-white p-3">
              <div className="d-flex align-items-center gap-2 mb-3 pb-2 flex-wrap">
                <div className="btn-group bg-light rounded-2 border p-1">
                  <button type="button" className="btn btn-sm btn-light border-0 px-2 py-1">
                    <img src={inboxIcon} alt="inbox" style={{ width: '15px', height: '15px' }} />
                  </button>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2 py-1">
                    <img src={infoIcon} alt="info" style={{ width: '15px', height: '15px' }} />
                  </button>
                  <button type="button" className="btn btn-sm btn-light border-0 px-2 py-1">
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

                <button
                  type="button"
                  className="btn btn-sm btn-light bg-light rounded-2 border px-3 py-1 d-flex align-items-center gap-1 fw-medium"
                  style={{ fontSize: '0.85rem', color: '#8486A7' }}
                >
                  <span>More</span>
                  <span style={{ fontSize: '0.65rem' }}>▼</span>
                </button>
              </div>

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

              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0" style={{ fontSize: '0.85rem' }}>
                  <tbody>
                    {emails.map((email) => (
                      <tr key={email.id} style={{ cursor: 'pointer' }}>
                        <td style={{ width: '30px' }}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={selectedEmails.includes(email.id)}
                            onChange={() => handleSelectOne(email.id)}
                          />
                        </td>

                        <td style={{ width: '28px' }}>
                          <img
                            src={email.starred ? starActiveIcon : starIcon}
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
                              filter: email.important ? 'none' : 'grayscale(100%) opacity(0.4)',
                            }}
                          />
                        </td>

                        <td className="text-nowrap" style={{ width: '150px', fontWeight: email.isBold ? '700' : '400', color: email.isBold ? '#424E5A' : '#8486A7' }}>
                          {email.sender}
                        </td>

                        <td>
                          <div className="d-flex align-items-center flex-wrap gap-1">
                            <span className="me-1" style={{ fontWeight: email.isBold ? '700' : '400', color: email.isBold ? '#424E5A' : '#8486A7' }}>
                              {email.subject}
                            </span>
                            {email.preview && (
                              <span className="me-2" style={{ fontWeight: '400', color: '#8486A7' }}>
                                {email.preview}
                              </span>
                            )}

                            {email.attachments && (
                              <span className="d-inline-flex gap-1 align-items-center">
                                {email.attachments.map((att, idx) => (
                                  <span
                                    key={idx}
                                    className="badge bg-light border fw-normal d-inline-flex align-items-center gap-1 px-2 py-1"
                                    style={{ fontSize: '0.72rem', borderRadius: '4px', color: '#8486A7' }}
                                  >
                                    <img
                                      src={att.type === 'pdf' ? pdfIcon : att.type === 'doc' ? docIcon : imageIcon}
                                      alt="file"
                                      style={{ width: '12px', height: '12px' }}
                                    />
                                    {att.name}
                                  </span>
                                ))}
                                {email.badge && (
                                  <span
                                    className="badge bg-light border fw-normal px-2 py-1"
                                    style={{ fontSize: '0.72rem', borderRadius: '4px', color: '#8486A7' }}
                                  >
                                    {email.badge}
                                  </span>
                                )}
                              </span>
                            )}
                          </div>
                        </td>

                        <td className="text-end text-nowrap" style={{ width: '80px', fontSize: '0.8rem', color: '#8486A7' }}>
                          {email.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex align-items-center justify-content-between pt-3 mt-2 border-top">
                <small style={{ fontSize: '0.80rem', color: '#8486A7' }}>
                  Showing 1 - 20 of 289
                </small>
                <div className="d-flex gap-1">
                  <button type="button" className="btn btn-light btn-sm border px-2 py-1" style={{ color: '#8486A7' }}>‹</button>
                  <button type="button" className="btn btn-sm px-2 py-1 text-white" style={{ backgroundColor: '#FF6C58', borderColor: '#FF6C58' }}>
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}