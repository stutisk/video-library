import React from "react";
import { useAuth } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
const Userpage = () => {
  const { setLogin } = useAuth();
  
  const LogoutHandler = () => {
    return setLogin(false);
  };
  return (
    <section className="pl-60 pt-5">
      <div class="w-full max-w-sm ">
        <div class="  border-2 border-sky-500 shadow shadow-sky-500 rounded px-3 pt-6 pb-8 mb-4 ">
          <h1>User Details</h1>
          <div class=" items-center p-3 ">
            <Link to="/logout">
              <button
                type="button"
                class="  inline-block px-6 py-2.5   text-slate-50 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
                onClick={LogoutHandler}
              >
                LOGOUT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Userpage };
