import Sidebar from './Sidebar'
import ChatWindow from './ChatWindow'
import { MyContest } from './MyContext';
import "./App.css";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const providervalues = {isSidebarOpen,setIsSidebarOpen};

  return (
    <div className='app'>
      <MyContest.Provider value={providervalues}>
        {isSidebarOpen && <Sidebar />}
        <ChatWindow />
      </MyContest.Provider>
    </div>
  );
}

export default App;
