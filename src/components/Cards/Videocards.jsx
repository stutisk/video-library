import {
  BiLike,
  MdWatchLater,
  MdOutlineFeaturedPlayList,
} from "../Icons/Icons";
import { useLike } from "../../Context/LikeContext";
import { useWatch } from "../../Context/WatchContext";
import { NavLink } from "react-router-dom";

const Videocards = ({ video }) => {
  const { getLikedVideos, list, DeleteVideos } = useLike();
  const { getWatchedVideos, watchList, DeleteWatchLater } = useWatch();


  return (
    <div>
      <NavLink to="/singlevideopage">
      <div className="w-72  hover:bottom-4 shadow hover:shadow-md  shadow-sky-500  hover:shadow-sky-600 rounded cursor-pointer ">
        <div>
          <img
            className="h-auto  "
            src={video.image}
            alt={video.categoryName}
          />
        </div>
        <div className="flex p-2 gap-3">
          <div>
            <img className="  rounded-full" src={video.creator} />
          </div>
          <div>
            {" "}
            <p className=" tracking-wide text-base text-left">{video.title}</p>
          </div>
          <div className="flex gap-2">
            {list.some((p) => p.id === video.id) ? (
              <span
                className="text-sky-500 "
                onClick={() => DeleteVideos(video)}
              >
                <BiLike />
              </span>
            ) : (
              <span onClick={() => getLikedVideos(video)}>
                <BiLike />
              </span>
            )}
            {watchList.some((p) => p.id === video.id) ? (
              <span
                className="text-sky-500 "
                onClick={() => DeleteWatchLater(video)}
              >
                <MdWatchLater />
              </span>
            ) : (
              <span onClick={() => getWatchedVideos(video)}>
                <MdWatchLater />
              </span>
            )}

            <span  >
            <MdOutlineFeaturedPlayList />
            </span>
           
            
          </div>
        </div>
        <div className="flex place-content-between tracking-wide text-base">
          <div>{video.views}views</div>
          <div>{video.date}</div>
        </div>
      </div>
      </NavLink>
    </div>
  );
};

export { Videocards };
