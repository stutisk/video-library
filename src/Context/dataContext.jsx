import { dataReducer } from "../Reducer/dataReducer";
import { createContext, useContext,useState } from "react";
import { useReducer,useEffect} from "react";
import {getCategories,getVideos} from "../utils//serverRequests";


const DataContext = createContext();
const useData = () => useContext(DataContext);

const initialState = {
  categories: [], 
  videos:[],
  categorySelected:"All",
};


const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [selectedvideo,setSelectedvideo]=useState([])
  console.log(state)

  useEffect(() => {
    getCategories(dispatch);
    getVideos(dispatch)
    
  }, []);

  return (
    <DataContext.Provider value={{state,dispatch ,selectedvideo,setSelectedvideo}}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
