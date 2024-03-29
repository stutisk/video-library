import { createContext } from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const notify = (message) => {
  toast(message);
};

const WatchContext = createContext();
const useWatch = () => useContext(WatchContext);
const WatchProvider = ({ children }) => {
  const getWatchedVideos = async (requestBody) => {
    try {
      const res = await axios.post(
        "/api/user/watchlater",
        { video: requestBody },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      notify("Added To Watch Later");
      setwatchList(res.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteWatchLater = async (video) => {
    try {
      const res = await axios.delete(`/api/user/watchlater/${video._id}`, {
        headers: { authorization: localStorage.getItem("token") },
      });
      notify("Removed From Watch Later");
      setwatchList(res.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  const [watchList, setwatchList] = useState([]);

  return (
    <WatchContext.Provider
      value={{ watchList, setwatchList, getWatchedVideos, DeleteWatchLater }}
    >
      {children}
    </WatchContext.Provider>
  );
};

export { useWatch, WatchProvider };