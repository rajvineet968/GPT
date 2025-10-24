import React, { useContext } from "react";
import "./Sidebar.css";
import { MyContest } from "./MyContext";

function Sidebar() {
  const { setIsSidebarOpen } = useContext(MyContest);

  return (
    <section className="sidebar">
      {/* Top logo */}
      <button className="button1" onClick={() => setIsSidebarOpen(false)}>
        <i className="fa-brands fa-openai logo"></i>
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/* Sidebar options */}
      <div className="sidebar-options">
        <div className="sidebar-item">
          <i className="fa-solid fa-pen-to-square"></i>
          <span>New Chat</span>
        </div>
        <div className="sidebar-item">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search Chats</span>
        </div>
        <div className="sidebar-item">
          <i className="fa-regular fa-images"></i>
          <span>Library</span>
        </div>
        <div className="sidebar-item">
          <i className="fa-regular fa-file"></i>
          <span>Projects</span>
        </div>
      </div>

      {/* History */}
      <ul className="history">
        <p className="chat-title">Chats</p>
        <li>his1</li>
        <li>his2</li>
        <li>his3</li>
      </ul>

      {/* Sign */}
      <div className="sign">
        <p>User</p>
        <button>Upgrade</button>
      </div>
    </section>
  );
}

export default Sidebar;
