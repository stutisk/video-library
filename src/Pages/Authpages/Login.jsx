import { IoIosArrowDropright } from "../../components/Icons/Icons";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useLocation,useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const useremail = useRef();
  const userpass = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  

  const { isLogin, setLogin, Error, setError } = useAuth();

  const loginHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: useremail.current.value,
        password: userpass.current.value,
      });
      setLogin(true);
      console.log(response);
      console.log(response.data.error);
      const userDetail = {
        Email: response.data.foundUser.email,
        name:
          response.data.foundUser.firstName +
          " " +
          response.data.foundUser.lastName,
      };
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(userDetail));
    } catch (error) {
      console.log(error)
      // console.log(error.response.data.errors[0]);
      // setError({ error: error.response.data.errors[0] });
    }
  };
  const guestLogin = () => {
    useremail.current.value = "adarshbalika@gmail.com";
    userpass.current.value = "adarshBalika123";
    loginHandler();

    console.log(useremail.current.value);
  };
  useEffect(() => {
    if (isLogin && location.state?.from.pathname) {
      navigate(location.state.from.pathname);
    } else if (isLogin) {
      navigate("/");
    }
  }, [isLogin,location.state.from.pathname,navigate]);
  return (
    <section className="pl-60 pt-5">
      <div className="w-full max-w-sm ">
        <form className="  border-2 border-sky-500 shadow shadow-sky-500 rounded px-3 pt-6 pb-8 mb-4 ">
          <div className="mb-4">
            <label className="block text-slate-50 text-xl  mb-2" for="username">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="stuti12345@gmail.com"
              ref={useremail}
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-50 text-xl  mb-2" for="password">
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

          <div className="flex items-center justify-between p-3 gap-3">
            <button
              type="button"
              className="  inline-block px-6 py-2.5   text-slate-50 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
              onClick={loginHandler}
            >
              LOGIN
            </button>
            <button
              type="button"
              className="  inline-block px-6 py-2.5   text-slate-50 font-medium text-xl  border-2 hover:border-2 border-sky-500 hover:border-double    rounded   focus:ring-0 transition duration-150 ease-in-out"
              onClick={guestLogin}
            >
              LOGIN AS GUEST
            </button>
          </div>
          <div>
            <Link to="" className="inline-block   text-xl text-green-700  p-2">
              Forgot Password?
            </Link>
          </div>
          <div>
            <Link
              to="/signup"
              className=" flex gap-2  place-content-center  text-xl text-slate-50 p-2"
              href="#"
            >
              Create New Account
              <IoIosArrowDropright size={26} />
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

export { Login };
