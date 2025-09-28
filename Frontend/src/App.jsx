import React from "react";
import Sidebar from "./components/";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        {/* Main chat area / content goes here */}
      </div>
    </div>
  );
}

export default App;
