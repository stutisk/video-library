import { createContext } from "react";
import { useContext, useState } from "react";
import axios from "axios";


const PlaylistContext = createContext();
const usePlaylist = () => useContext(PlaylistContext);
console.log("hey");
const PlaylistProvider = ({ children }) => {

  const createNewPlaylist = async (requestBody) => {
    try {
      const res = await axios.post(
        "/api/user/playlists",
        {  playlist:  requestBody },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      console.log("playlist",res.data.playlists);
      setPlaylist(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  
 
  
 
  
  const [modal, setModal] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  console.log(playlist)
 

  return (
    <PlaylistContext.Provider value={{ modal, setModal,createNewPlaylist,setPlaylist,playlist }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export {usePlaylist, PlaylistProvider };                                                                                         