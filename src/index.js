import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext";
import { DataProvider } from "./Context/dataContext";
import { LikeProvider } from "./Context/LikeContext";
import { WatchProvider } from "./Context/WatchContext";
import {PlaylistProvider} from "./Context/PlaylistContext"
import { HistoryProvider } from "./Context/HistoryContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <HistoryProvider>
      <WatchProvider>
      <PlaylistProvider>
        <LikeProvider>
          <DataProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </DataProvider>
        </LikeProvider>
        </PlaylistProvider>
      </WatchProvider>
      </HistoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
