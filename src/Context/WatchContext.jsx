import { createContext } from "react";
import { useContext, useState } from "react";
import axios from "axios";

const WatchContext = createContext();
const useWatch = () => useContext(WatchContext);
console.log("hey");
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
      console.log("watch later",res.data.watchlater);
      setwatchList(res.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteWatchLater= async (video) => {
    try {
      const res = await axios.delete(
        `/api/user/watchlater/${video._id}`,
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      console.log("watch  delete later",res.data.watchlater);
      setwatchList(res.data.watchlater);
    } catch (error) {
      console.log(error);
    }
  };
  


  const [watchList, setwatchList] = useState([]);
  console.log(watchList);

  return (
    <WatchContext.Provider value={{ watchList, setwatchList, getWatchedVideos,DeleteWatchLater }}>
      {children}
    </WatchContext.Provider>
  );
};

export { useWatch, WatchProvider };
