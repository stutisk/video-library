import { usePlaylist } from "../../Context/PlaylistContext";
import { Videocards } from "../../components/Cards/Videocards";
import { NavLink } from "react-router-dom";
const SinglePlaylist = () => {
    const {oneplaylist} =usePlaylist();
    return(
        <div>
{
oneplaylist > 0?
( oneplaylist.map((playlist) => (
<Videocards key={playlist._id} video={oneplaylist} />
))
):(
    <div>
        Playlist is empty 
        <NavLink to="/videoList">

        <div className="p-2">
          <button
            type="button"
            class="  inline-block px-6 py-2.5   text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
          >
            EXPLORE VIDEOS NOW
          </button>
        </div>
      </NavLink>
        </div>
)
}


        </div>
    )
}
export {SinglePlaylist}