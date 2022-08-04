import { MdNotifications, FaUserAlt } from "../Icons/Icons";

import { NavLink } from "react-router-dom";
function Navbar() {
  
  const activeStyle = {
    color: "#0ea5e9",
    fontWeight: "bold",
  };
  return (
    <nav className=" ">
      <div className="flex flex-row py-3 justify-between">
        <div className="search-container">
          <div class="flex ">
            <div class="mb-3 w-96">
              {/* Wip */}
              {/* <div class="input-group relative flex items-stretch w-full mb-4">
                <input
                  type="search"
                  className=" rounded-l-full form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-slate-400 bg-white bg-clip-padding border border-solid border-gray-300  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn rounded-r-full  px-6 py-2.5 bg-sky-500 text-white font-medium text-xs leading-tight uppercase  shadow-md  focus:bg-sky-500 focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-sky-600 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                  type="button"
                  id="button-addon2"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="w-4"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    ></path>
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <div className="buttons ">
          <ul className="cursor-pointer text-slate-400 font-medium text-xl flex flex-row gap-4 ">
            {/* <li className=" text-slate-50 hover:text-sky-500">
              <MdNotifications size={26} />
            </li> */}

            <NavLink
              to="/userpage"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <li className="text-slate-50 hover:text-sky-500">
                <FaUserAlt size={26} />
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export { Navbar };
