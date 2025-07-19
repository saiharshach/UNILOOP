import React from 'react';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="chat-avatar"
        />
        <h2>Chat with John Doe</h2>
      </div>

      <div className="chat-messages">
        <div className="message received">Hello!</div>
        <div className="message received">How can I help you?</div>
        <div className="message received">Do you have any questions?</div>
        <div className="message sent">Hi!</div>
        <div className="message sent">I have a question about your product</div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button className="send-btn">➤</button>
      </div>
    </div>
  );
};

export default ChatPage;