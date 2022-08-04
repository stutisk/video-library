import React from "react";
import { MdOutlineDelete, MdOutlinePlaylistAdd } from "../Icons/Icons";
import { usePlaylist } from "../../Context/PlaylistContext";
import { useNavigate } from "react-router-dom";
import { useData } from "../../Context/dataContext";
const Playlistcard = ({ playlist }) => {
  const { DeletePlaylist, oneplaylist } = usePlaylist();

  console.log(oneplaylist);
  const navigate = useNavigate();

  return (
    <div>
      <div className="  w-72  border-2 border-sky-500   shadow shadow-sky-500 rounded px-1 pt-6 pb-6 mb-4 ">
        {oneplaylist.length > 0 ? (
          <div>
            <img
              className="h-auto w-auto hover:opacity-50 cursor-pointer "
              src={oneplaylist[0].image}
              onClick={() =>
                navigate(`/playlist/${playlist._id}/${playlist.title}`)
              }
            />
             <div className="">{oneplaylist.length} videos</div>
          </div>
          
        ) : (
          <>
            <button
              onClick={() =>
                navigate(`/playlist/${playlist._id}/${playlist.title}`)
              }
            >
              <MdOutlinePlaylistAdd size={80} />
            </button>

            <h1>Add Videos</h1>
          </>
        )}

        <div className="flex flex-row justify-between mt-10  ">
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
