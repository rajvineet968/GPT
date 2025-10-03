import React from "react";
import "./ChatWindow.css";
import Chat from "./Chat";

function ChatWindow() {
  return (
    <div className="chatwindow">
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          GPT <i className="fa-solid fa-chevron-down"></i>
        </div>
        <div className="nav-center">
          <i className="fa-solid fa-diamond"></i> &nbsp;Upgrade to Go
        </div>
        <div className="nav-right">
          <i className="fa-regular fa-comment"></i>
        </div>
      </div>

      {/* Chat area */}
      <div className="chat-area">
        <Chat />
      </div>

      {/* Chat input */}
      <div className="chat-input-container">
        <p className="info-text">What’s on your mind today?</p>
        <div className="input-row">
          <i className="fa-sharp fa-solid fa-plus icon"></i>
          <input
            type="text"
            placeholder="Ask anything"
            className="text-input"
          />
          <i className="fa-solid fa-microphone icon"></i>
          <i className="fa-brands fa-teamspeak icon"></i>
        </div>
        <p className="info-text small">
          GPT can make mistakes. Check important info. See Cookie Preferences.
        </p>
      </div>
    </div>
  );
}

export default ChatWindow;
