import { createContext } from "react";
import { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const notify = (message) => {
  toast(message)   
}

const LikeContext = createContext();
const useLike = () => useContext(LikeContext);

const LikeProvider = ({ children }) => {

  const getLikedVideos = async (requestBody) => {
    try {
      const res = await axios.post(
        "/api/user/likes",
        { video: requestBody },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      notify("You liked the video");
      console.log(res.data.likes);
      setList(res.data.likes);
    } catch (error) {
      console.log(error);
    }
  };
  
  const DeleteVideos = async (video) => {
    try {
      const res = await axios.delete(
        `/api/user/likes/${video._id}`,
       
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      notify("You unliked the video");
      console.log(res.data);
      setList(res.data.likes);
    } catch (error) {
      console.log(error);
    }
  };
  
  const [list, setList] = useState([]);
 

  return (
    <LikeContext.Provider value={{ list, setList, getLikedVideos,DeleteVideos }}>
      {children}
    </LikeContext.Provider>
  );
};

export { useLike, LikeProvider };
