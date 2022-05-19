import { dataReducer } from "../Reducer/dataReducer";
import { createContext, useContext } from "react";
import { useReducer,useEffect} from "react";
import {getCategories,getVideos} from "../utils//serverRequests";


const DataContext = createContext();
const useData = () => useContext(DataContext);

const initialState = {
  categories: [], 
  videos:[],
  categoryBy: "",
  categorySelected:"",
};


const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  
  console.log(state)

  useEffect(() => {
    getCategories(dispatch);
    getVideos(dispatch)
    
  }, []);

  return (
    <DataContext.Provider value={{state,dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
