import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext";
import { DataProvider } from "./Context/dataContext";
import { LikeProvider } from "./Context/LikeContext";
import { WatchProvider } from "./Context/WatchContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WatchProvider>
        <LikeProvider>
          <DataProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </DataProvider>
        </LikeProvider>
      </WatchProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
