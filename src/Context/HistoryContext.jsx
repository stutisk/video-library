import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import axios from "axios";

const HistoryContext = createContext();

const useHistory = () => useContext(HistoryContext);

const HistoryProvider = ({ children }) => {
  useEffect(() => {
    async function history() {
      try {
        const res = await axios.get(`/api/user/history`, {
          headers: { authorization: localStorage.getItem("token") },
        });
        console.log(res.data.history);
        setHistoryList(res.data.video);
      } catch (e) {
        console.error(e);
      }
    }
    history();
  }, []);


  const addVideoInHistory = async (requestBody) => {
    try {
      const res = await axios.post(
        "/api/user/history",
        { video: requestBody },
        {
          headers: { authorization: localStorage.getItem("token") },
        }
      );
      console.log(res.data.history)
      setHistoryList(res.data.history);
    } catch (error) {
      console.log(error);
    }
  };

  const [historylist, setHistoryList] = useState({});
  return (
    <HistoryContext.Provider
      value={{ historylist, setHistoryList, addVideoInHistory }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export { useHistory, HistoryProvider };
