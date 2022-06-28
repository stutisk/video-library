import { usePlaylist } from "../../Context/PlaylistContext";
import { Playlistvideocard } from "../../components/Cards/Playlistvideocard";
import { NavLink, useParams } from "react-router-dom";
const SinglePlaylist = () => {
  const { oneplaylist} = usePlaylist();
  const { playlistId, playlistName } = useParams();




  return (
    <div>
      <div className="text-4xl mb-10"> {playlistName}</div>

      {oneplaylist.length > 0 ? (
        <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
          {oneplaylist.map((videos) => (
            <Playlistvideocard
              key={videos._id}
              video={videos}
              playlistId={playlistId}
            
            />
          ))}
        </div>
      ) : (
        <div>
          <NavLink to="/videoList">
            <div className="p-2">
              <button
                type="button"
                class="  inline-block px-6 py-2.5  mb-5 text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
              >
                EXPLORE VIDEOS NOW
              </button>
              <div> Playlist is empty </div>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};
export { SinglePlaylist };
