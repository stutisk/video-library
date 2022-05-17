import { createContext, useContext } from "react";

import { useState } from "react";

const AuthContext = createContext({});

const useAuth=()=>  useContext(AuthContext)

const AuthProvider=({children}) => {
    const [isLogin, setLogin] = useState(false);
    const [Error, setError] = useState("");
return(
    <AuthContext.Provider value={{isLogin, setLogin,Error, setError}}>
        {children}
    </AuthContext.Provider>
)

}
export {AuthProvider,useAuth}