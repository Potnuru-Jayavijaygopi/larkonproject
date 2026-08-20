import React, { useState, useEffect, useRef } from 'react';
import { chatAPI } from '../services/api';

import searchIcon from '../assets/Search.png';
import settingsIcon from '../assets/settings.png';
import videoIcon from '../assets/bx bx-video.png';
import phoneIcon from '../assets/bx bx-phone-call.png';
import userIcon from '../assets/bx bx-user.png';
import dotsIcon from '../assets/bx bx-dots-vertical-rounded.png';
import doubleCheckIcon from '../assets/tick.png';
import smileIcon from '../assets/smile.png';
import paperclipIcon from '../assets/paperclip.png';
import sendIcon from '../assets/send.png';
import defaultAvatar from '../assets/Image (1).png';

export default function Chat() {
  const [activeTab, setActiveTab] = useState('Chat');
  const [conversations, setConversations] = useState([]);
  
  const [groups] = useState([
    {
      id: 'g1',
      name: 'Design Team Hub',
      time: '12:30 PM',
      lastMessage: 'Updated the Figma wireframes for dashboard.',
      status: 'Active',
      avatar: defaultAvatar,
      type: 'Group',
    },
    {
      id: 'g2',
      name: 'Project Alpha Sync',
      time: '11:15 AM',
      lastMessage: 'Meeting starts in 10 mins. Please join.',
      status: 'Active',
      avatar: defaultAvatar,
      type: 'Group',
    },
    {
      id: 'g3',
      name: 'Engineering Guild',
      time: 'Yesterday',
      lastMessage: 'Code review guidelines have been updated.',
      status: 'Active',
      avatar: defaultAvatar,
      type: 'Group',
    },
    {
      id: 'g4',
      name: 'Marketing Strategy 2026',
      time: '2 days ago',
      lastMessage: 'Campaign assets are finalized.',
      status: 'Active',
      avatar: defaultAvatar,
      type: 'Group',
    },
    {
      id: 'g5',
      name: 'Product Launch Hub',
      time: '3 days ago',
      lastMessage: 'Check the deployment checklist.',
      status: 'Active',
      avatar: defaultAvatar,
      type: 'Group',
    },
  ]);

  const [contacts] = useState([
    {
      id: 'c1',
      name: 'Emma Watson',
      time: 'Yesterday',
      lastMessage: 'Let me know when you are free to talk.',
      status: 'Active',
      avatar: defaultAvatar,
      type: 'Contact',
    },
    {
      id: 'c2',
      name: 'Michael Jordan',
      time: '2 days ago',
      lastMessage: 'Document sent successfully.',
      status: 'Active',
      avatar: defaultAvatar,
      type: 'Contact',
    },
    {
      id: 'c3',
      name: 'Sarah Connor',
      time: '3 days ago',
      lastMessage: 'See you tomorrow at the office!',
      status: 'Active',
      avatar: defaultAvatar,
      type: 'Contact',
    },
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  const [showThreeDotsMenu, setShowThreeDotsMenu] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  
  const [isVideoCalling, setIsVideoCalling] = useState(false);
  const [isAudioCalling, setIsAudioCalling] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const fileInputRef = useRef(null);
  const emojisList = ['😀', '😂', '😍', '👍', '🔥', '🎉', '❤️', '👏', '🚀', '✨', '😎', '🙌'];

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  useEffect(() => {
    async function loadConversations() {
      setLoading(true);
      try {
        const res = await chatAPI.getConversations();
        const data = Array.isArray(res.data) ? res.data : Array.isArray(res) ? res : [];
        if (data.length > 0) {
          const formatted = data.map((item, idx) => ({
            id: item.conversation_id || item.user_id || idx + 1,
            conversationId: item.conversation_id,
            userId: item.user_id,
            name: `${item.first_name || ''} ${item.last_name || ''}`.trim() || 'Chat Contact',
            time: item.last_message_time
              ? new Date(item.last_message_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
              : 'now',
            lastMessage: item.last_message || 'Start a conversation',
            status: item.status || 'Active',
            avatar: item.profile_image || defaultAvatar,
            unreadCount: parseInt(item.unread_count || 0, 10),
            type: 'Chat',
          }));
          setConversations(formatted);
          if (activeTab === 'Chat' && !selectedChat) {
            setSelectedChat(formatted[0]);
          }
        }
      } catch (err) {
        console.warn('Could not load conversations from server:', err);
      } finally {
        setLoading(false);
      }
    }
    loadConversations();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchQuery('');
    setShowEmojiPicker(false);
    if (tab === 'Chat' && conversations.length > 0) {
      setSelectedChat(conversations[0]);
    } else if (tab === 'Group' && groups.length > 0) {
      setSelectedChat(groups[0]);
    } else if (tab === 'Contact' && contacts.length > 0) {
      setSelectedChat(contacts[0]);
    } else {
      setSelectedChat(null);
    }
  };

  useEffect(() => {
    if (!selectedChat) return;

    async function loadMessages() {
      if (selectedChat.conversationId && activeTab === 'Chat') {
        setLoadingMessages(true);
        try {
          const res = await chatAPI.getMessages(selectedChat.conversationId);
          const msgs = Array.isArray(res.data) ? res.data : Array.isArray(res) ? res : [];
          if (msgs.length > 0) {
            setMessages(
              msgs.map((m) => ({
                id: m.id,
                sender: m.sender_name || (m.is_sender ? 'You' : selectedChat.name),
                text: m.message_text || m.text || m.message,
                image: m.image_url || m.image || null,
                time: m.created_at
                  ? new Date(m.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : 'Just now',
                isSender: Boolean(m.is_sender || m.sender_id === 1),
              }))
            );
            return;
          }
        } catch (e) {
          console.warn('Failed to load conversation messages:', e);
        } finally {
          setLoadingMessages(false);
        }
      }

      setMessages([
        {
          id: 1,
          sender: selectedChat.name,
          text: `Hi! Welcome to ${selectedChat.name}.`,
          time: '10:00 AM',
          isSender: false,
        },
        {
          id: 2,
          sender: 'You',
          text: `Hello! Good to be connected here.`,
          time: '10:02 AM',
          isSender: true,
        },
      ]);
    }

    loadMessages();
  }, [selectedChat, activeTab]);

  const handleSendMessage = async (e, imageUrl = null) => {
    if (e) e.preventDefault();
    if ((!inputText.trim() && !imageUrl) || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      sender: 'You',
      text: inputText.trim(),
      image: imageUrl,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSender: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    const textToSend = inputText.trim();
    setInputText('');
    setShowEmojiPicker(false);

    if (selectedChat.conversationId && activeTab === 'Chat') {
      try {
        await chatAPI.sendMessage(selectedChat.conversationId, {
          message: textToSend,
          image_url: imageUrl,
        });
      } catch (err) {
        console.warn('Could not post message to API:', err.message);
      }
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleSendMessage(null, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  let currentActiveList = [];
  if (activeTab === 'Chat') {
    currentActiveList = conversations;
  } else if (activeTab === 'Group') {
    currentActiveList = groups;
  } else if (activeTab === 'Contact') {
    currentActiveList = contacts;
  }

  const filteredList = currentActiveList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4" style={{ backgroundColor: '#F4F5F8', minHeight: '100vh', fontFamily: "'Hanken Grotesk', sans-serif" }}>
      <style>{`
        *::-webkit-scrollbar {
          display: none !important;
          width: 0 !important;
          height: 0 !important;
        }
        * {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
      `}</style>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageSelect}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {isVideoCalling && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
          <div className="bg-white p-4 rounded shadow text-center" style={{ width: '320px' }}>
            <h5 className="mb-3 text-dark">Video Call with {selectedChat?.name}</h5>
            <div className="spinner-border text-primary mb-3" role="status"></div>
            <p className="text-muted small mb-4">Connecting secure stream...</p>
            <button className="btn btn-danger w-100 fw-bold" onClick={() => setIsVideoCalling(false)}>
              End Call
            </button>
          </div>
        </div>
      )}

      {isAudioCalling && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75" style={{ zIndex: 1050 }}>
          <div className="bg-white p-4 rounded shadow text-center" style={{ width: '320px' }}>
            <h5 className="mb-2 text-dark">Audio Call</h5>
            <p className="text-muted small mb-3">Calling {selectedChat?.name}...</p>
            <div className="spinner-grow text-success mb-4" role="status"></div>
            <button className="btn btn-danger w-100 fw-bold" onClick={() => setIsAudioCalling(false)}>
              Disconnect
            </button>
          </div>
        </div>
      )}

      {showProfileModal && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 1050 }}>
          <div className="bg-white p-4 rounded shadow text-center" style={{ width: '320px' }}>
            <img src={defaultAvatar} alt="profile" className="rounded-circle mb-3" style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
            <h5 className="mb-1 text-dark fw-bold">{selectedChat?.name}</h5>
            <p className="text-muted small mb-3">Status: {selectedChat?.status || 'Active'}</p>
            <p className="text-secondary small mb-4">Type: {selectedChat?.type || 'Contact'}</p>
            <button className="btn btn-secondary w-100 btn-sm fw-bold" onClick={() => setShowProfileModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="row g-3">
        <div className="col-12 col-lg-4 col-xl-3">
          <div className="card border-0 rounded-3 shadow-sm bg-white p-3 h-100 position-relative">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="fw-bold mb-0" style={{ color: '#313B5E', fontSize: '1.1rem' }}>Chat</h5>
              
              <div className="position-relative">
                <button 
                  className="btn btn-link p-0 text-muted"
                  onClick={() => setShowSettingsMenu(!showSettingsMenu)}
                >
                  <img src={settingsIcon} alt="settings" style={{ width: '18px', height: '18px' }} />
                </button>
                {showSettingsMenu && (
                  <div className="position-absolute end-0 mt-2 bg-white border rounded shadow-sm py-2" style={{ zIndex: 100, width: '140px' }}>
                    <button className="dropdown-item py-1 px-3 small text-secondary" onClick={() => setShowSettingsMenu(false)}>Preferences</button>
                    <button className="dropdown-item py-1 px-3 small text-secondary" onClick={() => setShowSettingsMenu(false)}>Profile</button>
                    <button className="dropdown-item py-1 px-3 small text-danger" onClick={() => setShowSettingsMenu(false)}>Logout</button>
                  </div>
                )}
              </div>
            </div>

            <div className="position-relative mb-3">
              <input
                type="text"
                className="form-control bg-light border-0 ps-3 pe-5"
                placeholder="Search ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ borderRadius: '8px', fontSize: '0.85rem', height: '38px', fontFamily: "'Hanken Grotesk', sans-serif" }}
              />
              <img
                src={searchIcon}
                alt="search"
                className="position-absolute end-0 top-50 translate-middle-y me-3 opacity-50"
                style={{ width: '16px', height: '16px' }}
              />
            </div>

            <div className="d-flex gap-2 overflow-x-auto pb-3 mb-2 border-bottom">
              {conversations.slice(0, 8).map((c, idx) => (
                <div 
                  key={idx} 
                  className="position-relative flex-shrink-0 cursor-pointer"
                  onClick={() => {
                    setActiveTab('Chat');
                    setSelectedChat(c);
                  }}
                >
                  <img
                    src={defaultAvatar}
                    alt={c.name}
                    className="rounded-circle"
                    style={{ width: '36px', height: '36px', objectFit: 'cover' }}
                  />
                  <span
                    className="position-absolute bottom-0 end-0 bg-success rounded-circle border border-2 border-white"
                    style={{ width: '10px', height: '10px' }}
                  ></span>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-around border-bottom mb-2 pb-2">
              {['Chat', 'Group', 'Contact'].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    className={`btn btn-sm border-0 fw-bold px-3 py-1 ${isActive ? 'border-bottom border-2' : 'text-muted'}`}
                    onClick={() => handleTabChange(tab)}
                    style={{
                      fontSize: '0.85rem',
                      fontFamily: "'Hanken Grotesk', sans-serif",
                      color: isActive ? '#FF6C2F' : undefined,
                      borderColor: isActive ? '#FF6C2F' : 'transparent',
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>

            <div className="d-flex flex-column gap-1 overflow-y-auto" style={{ maxHeight: '550px', overflowX: 'hidden' }}>
              {loading && activeTab === 'Chat' && conversations.length === 0 ? (
                <div className="text-center py-4 text-secondary small">
                  Loading chats...
                </div>
              ) : filteredList.length === 0 ? (
                <div className="text-center py-4 text-secondary small">
                  No records found.
                </div>
              ) : (
                filteredList.map((item) => {
                  const isSelected = selectedChat && selectedChat.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedChat(item)}
                      className={`d-flex align-items-center p-2 rounded-3 ${isSelected ? 'bg-light' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={defaultAvatar}
                        alt={item.name}
                        className="rounded-circle flex-shrink-0 me-3"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                      <div className="flex-grow-1 min-w-0 me-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h6
                            className="mb-0 text-truncate"
                            style={{
                              color: '#313B5E',
                              fontWeight: 700,
                              fontSize: '15px',
                              fontFamily: "'Hanken Grotesk', sans-serif",
                            }}
                          >
                            {item.name}
                          </h6>
                          <span className="text-muted flex-shrink-0" style={{ fontSize: '0.72rem' }}>
                            {item.time}
                          </span>
                        </div>
                        <p
                          className="mb-0 text-truncate text-secondary"
                          style={{
                            fontSize: '0.8rem',
                          }}
                        >
                          {item.lastMessage}
                        </p>
                      </div>
                      <img src={doubleCheckIcon} alt="read" style={{ width: '14px', height: '14px', opacity: 0.6 }} className="flex-shrink-0" />
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8 col-xl-9">
          <div className="card border-0 rounded-3 shadow-sm bg-white h-100 d-flex flex-column">
            {selectedChat ? (
              <>
                <div className="p-3 border-bottom d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src={defaultAvatar}
                      alt={selectedChat.name}
                      className="rounded-circle me-3"
                      style={{ width: '42px', height: '42px', objectFit: 'cover' }}
                    />
                    <div>
                      <h6
                        className="mb-0"
                        style={{
                          color: '#313B5E',
                          fontWeight: 600,
                          fontSize: '16px',
                          fontFamily: "'Hanken Grotesk', sans-serif",
                        }}
                      >
                        {selectedChat.name}
                      </h6>
                      <small className="fw-semibold" style={{ fontSize: '0.75rem', color: '#28a745' }}>
                        Active Now
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 position-relative">
                    <button 
                      className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                      onClick={() => setIsVideoCalling(true)}
                      title="Video Call"
                    >
                      <img src={videoIcon} alt="video" style={{ width: '18px', height: '18px' }} />
                    </button>

                    <button 
                      className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                      onClick={() => setIsAudioCalling(true)}
                      title="Audio Call"
                    >
                      <img src={phoneIcon} alt="phone" style={{ width: '18px', height: '18px' }} />
                    </button>
                    <button 
                      className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                      onClick={() => setShowProfileModal(true)}
                      title="View Profile"
                    >
                      <img src={userIcon} alt="profile" style={{ width: '18px', height: '18px' }} />
                    </button>
                    
                    <div className="position-relative">
                      <button 
                        className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center"
                        onClick={() => setShowThreeDotsMenu(!showThreeDotsMenu)}
                      >
                        <img src={dotsIcon} alt="more" style={{ width: '18px', height: '18px' }} />
                      </button>
                      {showThreeDotsMenu && (
                        <div className="position-absolute end-0 mt-2 bg-white border rounded shadow-sm py-2" style={{ zIndex: 100, width: '150px' }}>
                          <button className="dropdown-item py-1 px-3 small text-secondary" onClick={() => setShowThreeDotsMenu(false)}>View Details</button>
                          <button className="dropdown-item py-1 px-3 small text-secondary" onClick={() => setShowThreeDotsMenu(false)}>Clear Chat</button>
                          <button className="dropdown-item py-1 px-3 small text-danger" onClick={() => setShowThreeDotsMenu(false)}>Block</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-4 flex-grow-1 d-flex flex-column gap-3 overflow-y-auto" style={{ backgroundColor: '#FAFAFA', maxHeight: '580px' }}>
                  {loadingMessages ? (
                    <div className="text-center py-4 text-secondary small">
                      Loading conversation...
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <div key={msg.id} className={`d-flex flex-column ${msg.isSender ? 'align-items-end' : 'align-items-start'}`}>
                        <div
                          className="p-3 shadow-sm"
                          style={{
                            maxWidth: '70%',
                            borderRadius: msg.isSender ? '12px 12px 0px 12px' : '12px 12px 12px 0px',
                            backgroundColor: msg.isSender ? '#FF6C2F' : '#F1F3F5',
                            color: msg.isSender ? '#FFFFFF' : '#313B5E',
                            fontSize: '14px',
                            fontWeight: 500,
                            lineHeight: '1.4',
                            fontFamily: "'Hanken Grotesk', sans-serif",
                          }}
                        >
                          {msg.text && <div className="mb-1">{msg.text}</div>}
                          {msg.image && (
                            <img
                              src={msg.image}
                              alt="attachment"
                              className="img-fluid rounded mt-1"
                              style={{ maxHeight: '200px', objectFit: 'cover' }}
                            />
                          )}
                        </div>

                        <div className="d-flex align-items-center gap-1 mt-1">
                          <span className="text-muted" style={{ fontSize: '0.7rem' }}>
                            {msg.time}
                          </span>
                          {msg.isSender && <img src={doubleCheckIcon} alt="delivered" style={{ width: '12px', height: '12px', opacity: 0.6 }} />}
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-3 border-top bg-white position-relative">
                  {showEmojiPicker && (
                    <div className="position-absolute bottom-100 start-0 mb-2 bg-white border rounded shadow p-2 d-flex flex-wrap gap-2" style={{ width: '240px', zIndex: 100 }}>
                      {emojisList.map((emoji) => (
                        <button
                          key={emoji}
                          type="button"
                          className="btn btn-light btn-sm p-1"
                          style={{ fontSize: '1.1rem', width: '32px', height: '32px' }}
                          onClick={() => {
                            setInputText((prev) => prev + emoji);
                          }}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  )}

                  <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
                    <button 
                      type="button" 
                      className="btn btn-link p-1 text-muted"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      title="Insert Emoji"
                    >
                      <img src={smileIcon} alt="smile" style={{ width: '20px', height: '20px' }} />
                    </button>

                    <input
                      type="text"
                      className="form-control border-0 bg-light px-3 py-2"
                      placeholder="Enter your Message"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      style={{ borderRadius: '8px', fontSize: '0.88rem', color: '#313B5E', fontFamily: "'Hanken Grotesk', sans-serif" }}
                    />

                    <button 
                      type="button" 
                      className="btn btn-link p-1 text-muted"
                      onClick={() => fileInputRef.current.click()}
                      title="Attach Image"
                    >
                      <img src={paperclipIcon} alt="attach" style={{ width: '20px', height: '20px' }} />
                    </button>
                    
                    <button 
                      type="button" 
                      className="btn btn-link p-1 text-muted"
                      onClick={() => setIsVideoCalling(true)}
                      title="Video Call"
                    >
                      <img src={videoIcon} alt="video attach" style={{ width: '20px', height: '20px' }} />
                    </button>

                    <button
                      type="submit"
                      className="btn border-0 d-flex align-items-center justify-content-center p-2 ms-1"
                      style={{ backgroundColor: '#FF6C2F', borderRadius: '8px' }}
                    >
                      <img src={sendIcon} alt="send" style={{ width: '18px', height: '18px' }} />
                    </button>
                  </form>
                </div>
              </>
            ) : (
              <div className="p-5 text-center text-muted m-auto">
                Select a conversation to start chatting.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}