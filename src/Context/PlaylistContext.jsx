import { createContext } from "react";
import { useContext, useState,useEffect } from "react";
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
      setPlaylist(res.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlaylist = async (playlistId) => {
    try {
      const res = await axios.post(
        `/api/user/playlists/${playlistId}`,
        
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      console.log("playlist",res.data.playlists.videos);
      setPlaylistOne(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(async () => {
    try {
      const res = await axios.get(`/api/user/playlists`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log(res)
      setPlaylist(res);
    } catch (error) {
      console.log(error);
    }
  }, []);
 
  const DeletePlaylist = async (id) => {
    try {
      const res = await axios.delete(
        `/api/user/playlists/${id}`,
       
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      console.log(res.data.playlists);
      setPlaylist(res.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };
  
 
  
  const [modal, setModal] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const[oneplaylist,setPlaylistOne]=useState([])
  console.log(playlist)
 

  return (
    <PlaylistContext.Provider value={{ modal, setModal,createNewPlaylist,setPlaylist,playlist ,setPlaylistOne,getPlaylist,DeletePlaylist}}>
      {children}
    </PlaylistContext.Provider>
  );
};

export {usePlaylist, PlaylistProvider };                                                                                         