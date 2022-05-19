import {BiLike,MdWatchLater,MdOutlineFeaturedPlayList } from "../Icons/Icons";
import { useData } from "../../Context/dataContext";
import {getFilterVideos} from "../../utils/getFilterVideos";
const Videocards = () => {

  const {
    state: { videos,categoryBy},
   
  } = useData();
 
  const FinalProductList = getFilterVideos(categoryBy, videos);
  return (
    <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
    {FinalProductList.map((videos) => {
      return (
        <div className="w-72 border-2 hover:bottom-4 border-sky-500  shadow hover:shadow-md  shadow-sky-500  hover:shadow-sky-600 rounded cursor-pointer ">
        <div>
          <img
            className="h-auto  "
            src={videos.image}
            alt={videos.categoryName}
          />
        </div>
        <div className="flex p-2 gap-3">
          <div>
            <img
              className="  rounded-full"
              src={videos.creator}
            />
          </div>
          <div>
            {" "}
            <p className=" tracking-wide text-base text-left">
             {videos.title}
            </p>
          </div>
          <div className="flex gap-2">
          <BiLike/>
          <MdWatchLater/>
          <MdOutlineFeaturedPlayList/>
          </div>    
        </div>
        <div className="flex place-content-between tracking-wide text-base">
              <div>{videos.views}views</div>
              <div>{videos.date}</div>
          </div>
        
      </div>
       );
     })}
    
    </div>
  );
};

export { Videocards };