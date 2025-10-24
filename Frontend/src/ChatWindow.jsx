import React, { useContext } from "react";
import "./ChatWindow.css";
import Chat from "./Chat";
import { MyContest } from "./MyContext";

function ChatWindow() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(MyContest);

  return (
    <div className="chatwindow">
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          {/* Show menu button only when sidebar is closed */}
          {!isSidebarOpen && (
            <button className="open-sidebar-btn" onClick={() => setIsSidebarOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
          &nbsp;&nbsp;GPT <i className="fa-solid fa-chevron-down"></i>
        </div>

        <div className="nav-center">
          <button className="upgrade-btn">
            <i className="fa-solid fa-diamond"></i> &nbsp;Upgrade to Go
          </button>
        </div>

        <div className="nav-right">
          <i className="fa-regular fa-comment"></i>
        </div>
      </div>

      {/* Chat area */}
      <div className="chat-area">
        <Chat />
      </div>

      {/* Chat input container */}
      <div className="chat-input-container">
        <p className="startup-text">What’s on your mind today?</p>
        <div className="input-row">
          <i className="fa-sharp fa-solid fa-plus icon"></i>
          <input
            type="text"
            placeholder="Ask anything"
            className="text-input"
          />
          <i className="fa-solid fa-microphone icon"></i>&nbsp;&nbsp;&nbsp;
          <div className="circle-icon">
            <i className="fa-brands fa-teamspeak icon"></i>
          </div>
        </div>
        <p className="info-text small center-text">
          GPT can make mistakes. Check important info. See Cookie Preferences.
        </p>
      </div>
    </div>
  );
}

export default ChatWindow;
