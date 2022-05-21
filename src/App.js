import MockAPI from "./components/Mockman/Mockman";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import {
  Historypage,
  Homepage,
  Likedvideos,
  Playlist,
  Videolistingpage,
  Watchlater,
  Login,
  Signup,
  Userpage,
  Logout
} from "./Pages/index";
import { Pagenotfound } from "./Pages/Pagenotfound/Pagenotfound";
import { RequiresAuth } from "./RequiresAuth/RequiresAuth";
import { ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <main className="">
        <div className="flex flex-row  ">
          <div className="basis-72    ">
            <Sidebar />
          </div>
          <div className="basis-full ">
            <div className="flex flex-col ">
              <div className="basis-20  p-4  ">
                <Navbar />{" "}
              </div>
              <div className="basis-full  text-2xl text-slate-50 text-center ">
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/mock" element={<MockAPI />} />
                  <Route path="/videoList" element={<Videolistingpage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/logout" element={<Logout />} />
                  <Route path="/*" element={<Pagenotfound />} />

                  <Route
                    path="/history"
                    element={
                      <RequiresAuth>
                        <Historypage />
                      </RequiresAuth>
                    }
                  />
                  <Route
                    path="/likedVideos"
                    element={
                      <RequiresAuth>
                        <Likedvideos />
                      </RequiresAuth>
                    }
                  />
                  <Route
                    path="/playlist"
                    element={
                      <RequiresAuth>
                        <Playlist />
                      </RequiresAuth>
                    }
                  />
                  <Route
                    path="/watchLater"
                    element={
                      <RequiresAuth>
                        <Watchlater />
                      </RequiresAuth>
                    }
                  />
                  <Route
                    path="/userpage"
                    element={
                      <RequiresAuth>
                        <Userpage />
                      </RequiresAuth>
                    }
                  />
                  
                </Routes>
                
                <ToastContainer position="bottom-left" autoClose={1000} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
