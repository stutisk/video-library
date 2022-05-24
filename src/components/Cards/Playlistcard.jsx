import React from "react";
import { MdOutlineDelete, MdOutlinePlaylistAdd } from "../Icons/Icons";
import { usePlaylist } from "../../Context/PlaylistContext";
import {  useNavigate } from "react-router-dom";
const Playlistcard = ({ playlist }) => {
  const { DeletePlaylist } = usePlaylist();
  const  navigate =useNavigate();

  return (
    <div>
      <div className="  w-72  border-2 border-sky-500   shadow shadow-sky-500 rounded px-1 pt-6 pb-6 mb-4 ">
        <button onClick={() => navigate(`/playlist/${playlist._id}`)}>
          <MdOutlinePlaylistAdd size={80} />
        </button>
        <h1>Add Videos</h1>
        <div className="flex flex-row justify-between mt-10  " >
          <div className="">{playlist.title}</div>
          <div className="mt-1 cursor-pointer text-rose-900 ">
            <button onClick={() => DeletePlaylist(playlist._id)}>
              <MdOutlineDelete size={30} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Playlistcard };
