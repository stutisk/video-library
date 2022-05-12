import {IoIosArrowDropright} from "../../components/Icons/Icons"
import { Link } from "react-router-dom";
const Login = () => {
  return (
      <section className="pl-60 pt-5">
    <div class="w-full max-w-sm ">
      <form class="  border-2 border-sky-500 shadow shadow-sky-500 rounded px-3 pt-6 pb-8 mb-4 ">
        <div class="mb-4">
          <label
            class="block text-slate-50 text-xl  mb-2"
            for="username"
          >
           Email Address
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="stuti12345@gmail.com"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-slate-50 text-xl  mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
          />
        </div>
        <div class="flex items-center justify-between p-3 gap-3">
        <button
              type="button"
              class="  inline-block px-6 py-2.5   text-slate-50 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
            >
            LOGIN
        </button>
        <button
              type="button"
              class="  inline-block px-6 py-2.5   text-slate-50 font-medium text-xl  border-2 hover:border-2 border-sky-500 hover:border-double    rounded   focus:ring-0 transition duration-150 ease-in-out"
            >
            LOGIN AS GUEST
        </button>
         
        </div>
        <div>
             <a
            class="inline-block   text-xl text-green-700  p-2"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div>
             <Link to ="/signup"
            class=" flex gap-2  place-content-center  text-xl text-slate-50 p-2"
            href="#"
          >
            Create New Account
            <IoIosArrowDropright size={26}  />
          </Link>
         
          
        </div>
      </form>
    </div>
    </section>
  );
};

export { Login };
