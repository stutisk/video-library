import MockAPI  from "./components/Mockman/Mockman";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
    return (
      <div className="App">  
      <main className="h-screen">
      <div className="flex flex-row h-screen">
        <div className="basis-72  bg-slate-800  ">
          <Sidebar />
        </div>
        <div className="basis-full bg-slate-900">
        <Routes> 
      <Route path="/" element={<Homepage/>} />    
      <Route path="/mock" element={<MockAPI/>} />      
      </Routes> 
        </div>
      </div>
    </main>
    
      </div>
    );
  }
  
  export default App;