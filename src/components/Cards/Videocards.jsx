import {BiLike,MdWatchLater,MdOutlineFeaturedPlayList } from "../Icons/Icons";
const Videocards = ({video}) => {
  return (
    
   <div>
      
        <div className="w-72 border-2 hover:bottom-4 border-sky-500  shadow hover:shadow-md  shadow-sky-500  hover:shadow-sky-600 rounded cursor-pointer ">
        <div>
          <img
            className="h-auto  "
            src={video.image}
            alt={video.categoryName}
          />
        </div>
        <div className="flex p-2 gap-3">
          <div>
            <img
              className="  rounded-full"
              src={video.creator}
            />
          </div>
          <div>
            {" "}
            <p className=" tracking-wide text-base text-left">
             {video.title}
            </p>
          </div>
          <div className="flex gap-2">
          <BiLike/>
          <MdWatchLater/>
          <MdOutlineFeaturedPlayList/>
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

export { Videocards };