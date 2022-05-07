import MockAPI  from "./components/Mockman/Mockman";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
      <div className="App">
      <Routes>    
        <Route path="/mock" element={<MockAPI/>} />      
      </Routes> 
      </div>
    );
  }
  
  export default App;