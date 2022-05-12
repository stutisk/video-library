import MockAPI from "./components/Mockman/Mockman";
import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Navbar } from "./components/Navbar/Navbar";
import {Historypage,Homepage,Likedvideos, Playlist,Videolistingpage,Watchlater } from "./Pages/index"

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
                  <Route path="/history" element={<Historypage />} />
                  <Route path="/likedVideos" element={<Likedvideos />} />
                  <Route path="/playlist" element={<Playlist />} />
                  <Route path="/videoList" element={<Videolistingpage />} />
                  <Route path="/watchLater" element={<Watchlater />} />

                </Routes>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
