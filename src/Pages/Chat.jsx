import React, { useState } from 'react';

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

const initialConversations = [
  { id: 1, name: 'Gaston Lapierre', time: '10:20am', lastMessage: 'How are you today?', unread: false },
  { id: 2, name: 'Fantina LeBatelier', time: '11:03am', lastMessage: "Hey! a reminder for tommorow's meeting...", unread: false },
  { id: 3, name: 'Gilbert Chicoine', time: 'now', lastMessage: 'typing...', isTyping: true, unread: false },
  { id: 4, name: 'Mignonette Brodeur', time: 'Yesterday', lastMessage: "Are we going to have this week's planning meeting today?", unread: false },
  { id: 5, name: 'Thomas Menard', time: 'Yesterday', lastMessage: 'Please check this template...', unread: false },
  { id: 6, name: 'Melisande Lapointe', time: 'Yesterday', lastMessage: 'Are free for 10 minutes? would like to discuss something...', unread: false },
  { id: 7, name: 'Danielle Despins', time: '7/8/21', lastMessage: 'How are you?', unread: false },
  { id: 8, name: 'Onfroi Pichette', time: '7/8/21', lastMessage: 'whats going on?', unread: false },
];

const initialMessages = [
  { id: 1, sender: 'Gilbert Chicoine', text: 'Hey 😊', time: '8:20 am', isSender: false },
  { id: 2, sender: 'You', text: 'Hi', time: '8:20 am', isSender: true },
  { id: 3, sender: 'Gilbert Chicoine', text: "Hi Gaston, thanks for joining the meeting. Let's dive into our quarterly performance review.", time: '8:25 am', isSender: false },
  { id: 4, sender: 'You', text: "Hi Gilbert, thanks for having me. I'm ready to discuss how things have been going.", time: '8:25 am', isSender: true },
  { id: 5, sender: 'Gilbert Chicoine', hasImages: true, images: [chatCardImg1, chatCardImg2], time: '8:26 am', isSender: false },
  { id: 6, sender: 'You', text: 'I appreciate your honesty. Can you elaborate on some of those challenges? I want to understand how we can support you better in the future.', time: '8:27 am', isSender: true },
  { id: 7, sender: 'Gilbert Chicoine', text: "Thanks, Emily. I appreciate your support. Overall, I'm optimistic about our team's performance and looking forward to tackling new challenges in the next quarter.", time: '8:29 am', isSender: false },
];

export default function Chat() {
  const [activeTab, setActiveTab] = useState('Chat');
  const [selectedChat, setSelectedChat] = useState(initialConversations[2]);
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: 'You',
        text: inputText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSender: true,
      },
    ]);
    setInputText('');
  };

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
              {[...Array(8)].map((_, idx) => (
                <div key={idx} className="position-relative flex-shrink-0">
                  <img
                    src={defaultAvatar}
                    alt="avatar"
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
              {initialConversations.map((chat) => {
                const isSelected = selectedChat.id === chat.id;
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
                        className={`mb-0 text-truncate ${chat.isTyping ? 'fw-semibold' : 'text-secondary'}`}
                        style={{
                          fontSize: '0.8rem',
                          color: chat.isTyping ? '#FF6C2F' : undefined,
                        }}
                      >
                        {chat.lastMessage}
                      </p>
                    </div>
                    {!chat.isTyping && (
                      <img src={doubleCheckIcon} alt="read" style={{ width: '14px', height: '14px', opacity: 0.6 }} className="flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8 col-xl-9">
          <div className="card border-0 rounded-3 shadow-sm bg-white h-100 d-flex flex-column">
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
                    typing...
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

            <div className="p-4 flex-grow-1 d-flex flex-column gap-3" style={{ backgroundColor: '#FAFAFA' }}>
              {messages.map((msg) => (
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
                  {msg.hasImages && (
                    <div className="d-flex" style={{ gap: '48px' }}>
                      {msg.images.map((imgSrc, i) => (
                        <div
                          key={i}
                          className="d-flex align-items-center justify-content-center rounded-3"
                          style={{
                            width: '110px',
                            height: '80px',
                            backgroundColor: '#DCDCDC',
                            flexShrink: 0,
                          }}
                        >
                          <img
                            src={imgSrc}
                            alt="attachment icon"
                            style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="d-flex align-items-center gap-1 mt-1">
                    <span className="text-muted" style={{ fontSize: '0.7rem' }}>
                      {msg.time}
                    </span>
                    {msg.isSender && <img src={doubleCheckIcon} alt="delivered" style={{ width: '12px', height: '12px', opacity: 0.6 }} />}
                  </div>
                </div>
              ))}
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
          </div>
        </div>
      </div>
    </div>
  );
}