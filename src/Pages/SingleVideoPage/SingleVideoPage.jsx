import React from "react";
import ReactPlayer from "react-player/lazy";
import { useWatch } from "../../Context/WatchContext";
import { useLike } from "../../Context/LikeContext";
import {BiLike,MdWatchLater,MdOutlineFeaturedPlayList } from "../../components/Icons/Icons"
const SingleVideoPage = ({video}) => {
  const { getLikedVideos } = useLike();
  const { getWatchedVideos } = useWatch();
  <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />

  return (
    <section className="w-full max-w-fit">
      <div className="   rounded px-3 pt-6 pb-8 mb-4 ">
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
        <div className="flex flex-row gap-8 mt-12 ">
        <div  > 
            <button
              type="button"
              class="  flex flex-row gap-1 px-3 py-2.5 w-48  text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
            onClick={() => getLikedVideos(video)}
            >
             <span className="text-slate-50"> <BiLike  size={28}/></span>  
            Like Video
            
            </button>
            
            </div>
            <div> <button
              type="button"
              class=" flex flex-row gap-1 px-3 py-2.5 w-48  text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
              onClick={() => getWatchedVideos(video)}
            >
                <span className="text-slate-50"> <MdWatchLater  size={28}/></span> 
            Watch Later
            </button></div>
            <div> <button
              type="button"
              class="  flex flex-row gap-1 px-3 py-2.5 w-48  text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
            >
                <span className="text-slate-50"> <MdOutlineFeaturedPlayList  size={28}/></span> 
           Add To Playlist
            </button></div>
    </div>
      </div>
    

    </section>
  );
};
export { SingleVideoPage };
