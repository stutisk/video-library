
  import { MdOutlineDelete} from "../Icons/Icons";
import { useHistory } from "../../Context/HistoryContext";
  import { useNavigate } from "react-router-dom";
  
  const Historycard = ({ video }) => {
    const {DeleteVideo}=useHistory();
    const navigate = useNavigate();
  
    return (
      <div>
      
        <div 
        
        className="w-72  hover:bottom-4 shadow hover:shadow-md  shadow-sky-500  hover:shadow-sky-600 rounded cursor-pointer ">
         
          <div>
            <img
              className="h-auto  "
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
            <button onClick={() => DeleteVideo(video._id)}>
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
  
  export { Historycard };
  