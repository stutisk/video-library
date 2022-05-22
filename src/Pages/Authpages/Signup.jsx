import {IoIosArrowDropright} from "../../components/Icons/Icons"
import { Link } from "react-router-dom";
import {useRef,useEffect} from "react";
import axios  from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useLocation,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const notify = (message) => {
  toast(message)   
}

const Signup = () => {
  const useremail = useRef();
  const userpass = useRef();
  const userfirstname=useRef();
  const userlastname=useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const { isLogin, setLogin, Error,setError } = useAuth();
 
const signupHandler = async() => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      firstName: userfirstname.current.value,
      lastName: userlastname.current.value,
      email: useremail.current.value,
      password: userpass.current.value,
    });
    setLogin(true);
    notify("Signup Successful");
    console.log(response);
    const userDetail = {
      Email: response.data.createdUser.email,
      name:
        response.data.createdUser.firstName +
        " " +
        response.data.createdUser.lastName,
    };
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", response.data.encodedToken);
    localStorage.setItem("user", JSON.stringify(userDetail));

  } catch (error) {
    console.log(error);
    console.log(error.response.data.errors[0]);
    setError({ error: error.response.data.errors[0] });
  }

}
useEffect(() => {
  if (isLogin && location.state?.from.pathname) {
    navigate(location.state.from.pathname);
  } else if (isLogin) {
    navigate("/");
  }
}, [isLogin]);

  return (
      <section className="pl-60 ">
    <div className="w-full max-w-md ">
      <form className="  border-2 border-sky-500  shadow shadow-sky-500 rounded px-10 pt-6 pb-8 mb-4 ">
      <div className="mb-4">
          <label
            className="block text-slate-50 text-xl  mb-1"
            for="username"
          >
           First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Stuti"
            ref={userfirstname}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-50 text-xl  mb-1"
            for="lastname"
          >
           Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastname"
            type="text"
            placeholder="Sk"
            ref={userlastname}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-slate-50 text-xl  mb-1"
            for="email"
          >
           Email Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="stuti12345@gmail.com"
            ref={useremail}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-slate-50 text-xl  mb-1"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
            ref={userpass}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-slate-50 text-xl  mb-1"
            for="password"
          >
             Confirm Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**********"
           
          />
        </div>
        <div className="items-center justify-between p-3 gap-3">
        <button
              type="button"
              className="  inline-block px-6 py-2.5  text-slate-50 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
           onClick={signupHandler}
           >
           CREATE NEW ACCOUNT
        </button>        
        </div>
       
        <div>
             <Link to ="/login"
            className=" flex gap-2  place-content-center  text-xl text-slate-50 p-2"
            href="#"
          >
            Allready Have An Account 
            <IoIosArrowDropright size={26}  />
          </Link>
         
          
        </div>
        <div className="inline-block   text-base text-red-700  p-2">
            {Error.error}
          </div>
      </form>
    </div>
    </section>
  );
};

export { Signup };
