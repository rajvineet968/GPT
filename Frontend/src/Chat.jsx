import "./Chat.css";

function Chat({ messages }) {
  return (
    <div className="chat">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message-bubble ${msg.role === "user" ? "user" : "assistant"}`}>
          {msg.content}
        </div>
      ))}
    </div>
  );
}

export default Chat;
