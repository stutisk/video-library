import MockAPI  from "./components/Mockman/Mockman";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage/Homepage";

function App() {
    return (
      <div className="App">
      <Routes>  
      <Route path="/" element={<Homepage/>} />    
        <Route path="/mock" element={<MockAPI/>} />      
      </Routes> 
      </div>
    );
  }
  
  export default App;