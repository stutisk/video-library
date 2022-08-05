import {
  MdExplore,
  MdOutlineFeaturedPlayList,
  BiLike,
  MdWatchLater,
  MdOutlineHistory,
} from "../Icons/Icons";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Sidebar() {
  const activeStyle = {

    color: "#0ea5e9",
    fontWeight: "bold",
   
  };
  return (
    <div className="fixed top-0 left-0  ">
      <Link to="/">
        <div className="flex flex-row ">
          <div>
            <img
              src="https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_50/v1652290248/GALAXIA_2_nmtyzj.png"
              alt=""
            />
          </div>
          <div className="text-slate-50 text-2xl pt-3 cursor-pointer">
            Galaxia <span className="text-sky-500">gana</span>
          </div>
        </div>
      </Link>
      <div>
        <ul className="text-slate-400 font-medium text-xl  p-4  ">
          <NavLink
            to="/videoList"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {" "}
            <li className="py-4 flex flex-row gap-4 cursor-pointer  group hover:text-slate-50 focus-visible:bg-blue-600">
              {" "}
              <span className="group-hover:bg-sky-500  group-active:bg-sky-500 rounded-lg p-1">
                <MdExplore size={26} />{" "}
              </span>
              Explore
            </li>
          </NavLink>
          <NavLink
            to="/playlist"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="py-4 flex flex-row gap-4 cursor-pointer group hover:text-slate-50">
              {" "}
              <span className="group-hover:bg-sky-500 rounded-lg p-1">
                <MdOutlineFeaturedPlayList size={26} />
              </span>
              Playlist
            </li>
          </NavLink>
          <NavLink
            to="/likedVideos"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="py-4 flex flex-row gap-4 cursor-pointer  group hover:text-slate-50">
              {" "}
              <span className="group-hover:bg-sky-500 rounded-lg p-1">
                <BiLike size={26} />
              </span>{" "}
              Liked Videos
            </li>
          </NavLink>
          <NavLink
            to="/watchLater"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="py-4 flex flex-row gap-4 cursor-pointer group hover:text-slate-50 ">
              {" "}
              <span className="group-hover:bg-sky-500 rounded-lg p-1">
                <MdWatchLater size={26} />{" "}
              </span>{" "}
              Watch Later
            </li>
          </NavLink>
          <NavLink
            to="/history"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <li className="py-4 flex flex-row gap-4 cursor-pointer  group hover:text-slate-50">
              {" "}
              <span className="group-hover:bg-sky-500 rounded-lg p-1">
                <MdOutlineHistory size={26} />
              </span>{" "}
              History
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
export { Sidebar };