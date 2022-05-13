import {IoIosArrowDropright} from "../../components/Icons/Icons"
import { Link } from "react-router-dom";
const Signup = () => {
  return (
      <section className="pl-60 ">
    <div class="w-full max-w-md ">
      <form class="  border-2 border-sky-500  shadow shadow-sky-500 rounded px-10 pt-6 pb-8 mb-4 ">
      <div class="mb-4">
          <label
            class="block text-slate-50 text-xl  mb-1"
            for="username"
          >
           First Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Stuti"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-slate-50 text-xl  mb-1"
            for="username"
          >
           Last Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Sk"
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-slate-50 text-xl  mb-1"
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
            class="block text-slate-50 text-xl  mb-1"
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
        <div class="mb-6">
          <label
            class="block text-slate-50 text-xl  mb-1"
            for="password"
          >
             Confirm Password
          </label>
          <input
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
          />
        </div>
        <div class="items-center justify-between p-3 gap-3">
        <button
              type="button"
              class="  inline-block px-6 py-2.5  text-slate-50 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
            >
           CREATE NEW ACCOUNT
        </button>
        
         
        </div>
       
        <div>
             <Link to ="/login"
            class=" flex gap-2  place-content-center  text-xl text-slate-50 p-2"
            href="#"
          >
            Allready Have An Account 
            <IoIosArrowDropright size={26}  />
          </Link>
         
          
        </div>
      </form>
    </div>
    </section>
  );
};

export { Signup };
