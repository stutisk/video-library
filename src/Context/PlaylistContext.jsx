import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const notify = (message) => {
  toast(message);
};

const PlaylistContext = createContext();
const usePlaylist = () => useContext(PlaylistContext);

const PlaylistProvider = ({ children }) => {
  const createNewPlaylist = async (requestBody) => {
    try {
      const res = await axios.post(
        "/api/user/playlists",
        { playlist: requestBody },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      notify("New Playlist Has Been Created");
      console.log("playlist", res.data.playlists);
      setPlaylist(res.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const addVideo = async (playlistId, requestBody) => {
    console.log(requestBody);
    try {
      const res = await axios.post(
        `/api/user/playlists/${playlistId}`,
        { video: requestBody },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      notify("Video added to playlist");
      console.log(res.data);
      setPlaylistOne(res.data.playlist.videos);
    } catch (error) {
      console.log(error);
    }
  };

  const Playlist = async () => {
    try {
      const res = await axios.get(
        `/api/user/playlists`,

        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      console.log("Playlist", res.data);
      setPlaylist(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Playlist();
    addVideo();
  }, []);

  const DeletePlaylist = async (id) => {
    try {
      const res = await axios.delete(
        `/api/user/playlists/${id}`,

        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      notify("You Deleted The Playlist");
      console.log(res.data.playlists);
      setPlaylist(res.data.playlists);
    } catch (error) {
      console.log(error);
    }
  };

  const [modal, setModal] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [oneplaylist, setPlaylistOne] = useState([]);
  console.log(oneplaylist);

  return (
    <PlaylistContext.Provider
      value={{
        oneplaylist,
        modal,
        setModal,
        createNewPlaylist,
        setPlaylist,
        playlist,
        setPlaylistOne,
        addVideo,
        DeletePlaylist,
      }}
    >
      {children}
    </PlaylistContext.Provider>
  );
};

export { usePlaylist, PlaylistProvider };
