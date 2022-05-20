import { PlaylistModal } from "../../components/PlaylistModal/PlaylistModal";
import { usePlaylist } from "../../Context/PlaylistContext";
import {Playlistcard} from "../../components/Cards/Playlistcard"

function Playlist() {
  const { setModal,modal,playlist } = usePlaylist();
  
const showModal  =() =>  {
  {setModal(true) && <PlaylistModal />} 

}

  return (
//    
<div>
<div className="text-slate-50 font-medium text-2xl">  <span>{playlist.length}</span> PLAYLISTS</div>

   {playlist.length > 0 ?(
     
      <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
       
        {playlist.map((playlist) => (
      <Playlistcard key={playlist._id} playlists={playlist} />
     ))}
     </div>
    
     
):
(
  <div>
         <div className="p-2">
           <button
             type="button"
             className="  inline-block px-6 py-2.5   text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  "
          onClick={showModal}
  
           >
             CREATE PLAYLIST
        </button>
        </div>
     {modal && <PlaylistModal />}   
 
      </div>
)}
<Playlistcard/>
</div>
  );
}

export { Playlist };
