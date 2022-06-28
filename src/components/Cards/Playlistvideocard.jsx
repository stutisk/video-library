import { MdOutlineDelete} from "../Icons/Icons";
import { usePlaylist } from "../../Context/PlaylistContext";
  import { useNavigate,useParams } from "react-router-dom";
  
  const Playlistvideocard = ({ video}) => {
    const { playlistId } = useParams();
   const {DeleteVideoFromPlaylist}=usePlaylist();
    const navigate = useNavigate();
  
    return (
      <div>
      
        <div 
        
        className="w-72  hover:bottom-4 shadow hover:shadow-md  shadow-sky-500  hover:shadow-sky-600 rounded cursor-pointer ">
         
          <div>
            <img
              className="h-auto "
              src={video.image}
              alt={video.categoryName}
           
              onClick={() => navigate(`/video/${video._id}`)}/>
          </div>
          <div className="flex p-2 gap-3">
            <div>
  
              <img className="  rounded-full" src={video.creator} alt={video.categoryName}/>
  
            
            </div>
            <div>
              {" "}
              <p className=" tracking-wide text-base text-left">{video.title}</p>
            </div>
            <div className="flex gap-2">
            <div className="mt-1 cursor-pointer text-rose-900 ">
            <button 
            onClick={() =>DeleteVideoFromPlaylist(playlistId,video._id)}>
              <MdOutlineDelete size={30} />{" "}
            </button>
          </div>
             
            </div>
          </div>
          <div className="flex place-content-between tracking-wide text-base">
            <div>{video.views}views</div>
            <div>{video.date}</div>
          </div>
        </div>
      
      </div>
    );
  };
  
  export { Playlistvideocard  };
  