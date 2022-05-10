import {
  MdExplore,
  MdOutlineFeaturedPlayList,
  BiLike,
  MdWatchLater,
  MdOutlineHistory,
} from "../Icons/Icons";
function Sidebar() {
  return (
    <div className="fixed top-0 left-0  ">
    <div className="flex flex-row "  >
    <div >
    <img src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_fill,r_0,w_72,x_0/v1652176870/Untitled_design_umeruf.png"  alt=""/>
  </div>
      <div className="text-slate-50 text-2xl pt-3 cursor-pointer">
          Galaxia <span className="text-sky-500">gana</span>
        </div>
     </div>
      <div>
        <ul className="text-slate-400 font-medium text-xl  p-4  ">
          <li className="py-4 flex flex-row gap-4 cursor-pointer  group hover:text-slate-50">
            {" "}
            <span className="group-hover:bg-sky-500 rounded-lg p-1">
              <MdExplore size={26} />{" "}
            </span>
            Explore
          </li>
          <li className="py-4 flex flex-row gap-4 cursor-pointer group hover:text-slate-50">
            {" "}
            <span className="group-hover:bg-sky-500 rounded-lg p-1">
              <MdOutlineFeaturedPlayList size={26} />{" "}
            </span>
            Playlist
          </li>
          <li className="py-4 flex flex-row gap-4 cursor-pointer  group hover:text-slate-50">
            {" "}
            <span className="group-hover:bg-sky-500 rounded-lg p-1">
              <BiLike size={26} />
            </span>{" "}
            Liked Videos
          </li>
          <li className="py-4 flex flex-row gap-4 cursor-pointer group hover:text-slate-50 ">
            {" "}
            <span className="group-hover:bg-sky-500 rounded-lg p-1">
              <MdWatchLater size={26} />{" "}
            </span>{" "}
            Watch Later
          </li>
          <li className="py-4 flex flex-row gap-4 cursor-pointer  group hover:text-slate-50">
            {" "}
            <span className="group-hover:bg-sky-500 rounded-lg p-1">
              <MdOutlineHistory size={26} />
            </span>{" "}
            History
          </li>
        </ul>
        
      </div>
    </div>
  );
}
export { Sidebar };
