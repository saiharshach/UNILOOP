import React, { useState } from 'react';
import './ChatPage.css';

const ChatPage = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'user', text: 'Hello!', time: '10:01 AM' },
    { sender: 'user', text: 'How can I help you?', time: '10:02 AM' },
    { sender: 'user', text: 'Do you have any questions?', time: '10:03 AM' },
  ]);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessage = {
      sender: 'me',
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, newMessage]);
    setInput('');
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <div className="user-avatar">U</div>
        <h2>Chat</h2>
      </div>
      <div className="chat-body">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-bubble ${msg.sender}`}>
            <span>{msg.text}</span>
            <div className="chat-time">{msg.time}</div>
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>➤</button>
      </div>
    </div>
  );
};

export default ChatPage;