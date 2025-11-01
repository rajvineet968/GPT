import React, { useState, useContext } from "react";
import "./ChatWindow.css";
import Chat from "./Chat"; // ✅ we’ll use this for message display
import { MyContest } from "./MyContext";

function ChatWindow() {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(MyContest);
  const [Close,isClose] = useState(false);

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [ok,setok]=useState(false);

// sourcery skip: avoid-function-declarations-in-blocks
  function close(){
    isClose(true);
  }

  async function handleSend(e) {
    if (e.key === "Enter" && userInput.trim() !== "") {
      setok(true);
      const newMessage = { role: "user", content: userInput };

      setMessages((prev) => [...prev, newMessage]);
      setUserInput("");

        try {
          const res = await fetch("http://localhost:5000/api/chat", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ message: userInput }),
                      });

          const data = await res.json();

          const assistantReply = {
            role: "assistant",
            content: data.reply || "⚠️ No response from Groq",
          };

          setMessages((prev) => [...prev, assistantReply]);
        } catch (error) {
          console.error("Error fetching Groq response:", error);
          setMessages((prev) => [
            ...prev,
          { role: "assistant", content: "❌ Error: Groq connection failed." },
        ]);
      }
    }
  }


  return (
    <div className="chatwindow">
      {/* Navbar */}
      <div className="navbar">
        {/* Navbar Left*/}
        <div className="nav-left">
          {!isSidebarOpen && (
            <button className="open-sidebar-btn" onClick={() => setIsSidebarOpen(true)}>{/*hamburger sign to open sidebar */}
              <i className="fa-solid fa-bars"></i>
            </button>
          )}
          &nbsp;&nbsp;GPT <i className="fa-solid fa-chevron-down"></i>
        </div>

        {/* Navbar Center*/}
        <div className="nav-center">
          {Close==false?<button className="upgrade-btn">
            <i className="fa-solid fa-diamond" style={{ color: "blue" }}></i> &nbsp;Upgrade to Go 
            <i className="fa-solid fa-xmark" onClick={close}></i></button>:null}
        </div>

          {/* Navbar Right*/}
        <div className="nav-right">
          <i className="fa-regular fa-comment"></i>
        </div>
      </div>


      {/* ✅ Use your Chat component */}
      <div className="chat-area">
        <Chat messages={messages} />
      </div>

      {/* Chat input */}
      <div className="chat-input-container">
        <p className="startup-text" style={{ visibility: ok ? "hidden" : "visible" }}>What’s on your mind today?</p>
{/*subject to change */}
        <div className="input-row">
          <i className="fa-sharp fa-solid fa-plus icon"></i>
          <input
            type="text"
            placeholder="Ask anything"
            className="text-input"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleSend}
          />
          <i className="fa-solid fa-microphone icon"></i>&nbsp;&nbsp;&nbsp;{/**Subject to change with mic -> audio to text */}
        </div>
        <p className="info-text small center-text">
          GPT can make mistakes. Check important info. See Cookie Preferences.
        </p>
      </div>
    </div>
  );
}

export default ChatWindow;
