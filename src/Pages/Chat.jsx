import React, { useState, useEffect } from 'react';
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
import chatCardImg1 from '../assets/Frame 116.png';
import chatCardImg2 from '../assets/Frame 116.png';

export default function Chat() {
  const [activeTab, setActiveTab] = useState('Chat');
  const [conversations, setConversations] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  // Fetch all conversations from backend
  useEffect(() => {
    async function loadConversations() {
      setLoading(true);
      try {
        const res = await chatAPI.getConversations();
        const data = Array.isArray(res.data) ? res.data : Array.isArray(res) ? res : [];
        if (data.length > 0) {
          // Format conversation items
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
          }));
          setConversations(formatted);
          setSelectedChat(formatted[0]);
        }
      } catch (err) {
        console.warn('Could not load conversations from server:', err);
      } finally {
        setLoading(false);
      }
    }
    loadConversations();
  }, []);

  // Fetch messages when selected chat changes
  useEffect(() => {
    if (!selectedChat) return;

    async function loadMessages() {
      if (selectedChat.conversationId) {
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

      // Default sample messages if conversation is empty
      setMessages([
        {
          id: 1,
          sender: selectedChat.name,
          text: `Hi! How can I assist you with your orders today?`,
          time: '10:00 am',
          isSender: false,
        },
        {
          id: 2,
          sender: 'You',
          text: `Hello ${selectedChat.name}, I wanted to check the status of my recent purchase.`,
          time: '10:02 am',
          isSender: true,
        },
      ]);
    }

    loadMessages();
  }, [selectedChat]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputText.trim() || !selectedChat) return;

    const newMessage = {
      id: Date.now(),
      sender: 'You',
      text: inputText.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSender: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    const textToSend = inputText.trim();
    setInputText('');

    // Try sending to backend if conversationId exists
    if (selectedChat.conversationId) {
      try {
        await chatAPI.sendMessage(selectedChat.conversationId, {
          message: textToSend,
        });
      } catch (err) {
        console.warn('Could not post message to API:', err.message);
      }
    }
  };

  // Filter conversations
  const filteredConversations = conversations.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
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

      <div className="row g-3">
        {/* Left Contact List */}
        <div className="col-12 col-lg-4 col-xl-3">
          <div className="card border-0 rounded-3 shadow-sm bg-white p-3 h-100">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h5 className="fw-bold mb-0" style={{ color: '#313B5E', fontSize: '1.1rem' }}>Chat</h5>
              <button className="btn btn-link p-0 text-muted">
                <img src={settingsIcon} alt="settings" style={{ width: '18px', height: '18px' }} />
              </button>
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

            {/* Active Users Avatars */}
            <div className="d-flex gap-2 overflow-x-auto pb-3 mb-2 border-bottom">
              {conversations.slice(0, 8).map((c, idx) => (
                <div 
                  key={idx} 
                  className="position-relative flex-shrink-0 cursor-pointer"
                  onClick={() => setSelectedChat(c)}
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
                    className={`btn btn-sm border-0 fw-bold px-3 py-1 ${isActive ? 'border-bottom border-2' : 'text-muted'}`}
                    onClick={() => setActiveTab(tab)}
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
              {loading ? (
                <div className="text-center py-4 text-secondary small">
                  Loading chats...
                </div>
              ) : filteredConversations.length === 0 ? (
                <div className="text-center py-4 text-secondary small">
                  No contacts found.
                </div>
              ) : (
                filteredConversations.map((chat) => {
                  const isSelected = selectedChat && selectedChat.id === chat.id;
                  return (
                    <div
                      key={chat.id}
                      onClick={() => setSelectedChat(chat)}
                      className={`d-flex align-items-center p-2 rounded-3 ${isSelected ? 'bg-light' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        src={defaultAvatar}
                        alt={chat.name}
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
                            {chat.name}
                          </h6>
                          <span className="text-muted flex-shrink-0" style={{ fontSize: '0.72rem' }}>
                            {chat.time}
                          </span>
                        </div>
                        <p
                          className="mb-0 text-truncate text-secondary"
                          style={{
                            fontSize: '0.8rem',
                          }}
                        >
                          {chat.lastMessage}
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

        {/* Right Chat Pane */}
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

                  <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center">
                      <img src={videoIcon} alt="video" style={{ width: '18px', height: '18px' }} />
                    </button>
                    <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center">
                      <img src={phoneIcon} alt="phone" style={{ width: '18px', height: '18px' }} />
                    </button>
                    <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center">
                      <img src={userIcon} alt="profile" style={{ width: '18px', height: '18px' }} />
                    </button>
                    <button className="btn btn-light rounded-circle p-2 d-flex align-items-center justify-content-center">
                      <img src={dotsIcon} alt="more" style={{ width: '18px', height: '18px' }} />
                    </button>
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
                        {msg.text && (
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
                            {msg.text}
                          </div>
                        )}

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

                <div className="p-3 border-top bg-white">
                  <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
                    <button type="button" className="btn btn-link p-1 text-muted">
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

                    <button type="button" className="btn btn-link p-1 text-muted">
                      <img src={paperclipIcon} alt="attach" style={{ width: '20px', height: '20px' }} />
                    </button>
                    <button type="button" className="btn btn-link p-1 text-muted">
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