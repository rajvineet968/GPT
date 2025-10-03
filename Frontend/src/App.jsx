import Sidebar from './Sidebar'
import ChatWindow from './ChatWindow'
import { MyContest } from './MyContext';
import "./App.css";

function App() {
  const providervalues={};
  return (
    <div className='app'>
      <MyContest.Provider values={providervalues}>
        <Sidebar></Sidebar>
        <ChatWindow></ChatWindow>
      </MyContest.Provider>
    </div>
  );
}

export default App;
