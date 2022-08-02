import {Categorycard} from "../../components/Cards/Categorycard"
import { Link } from "react-router-dom";
function Homepage() {
  
  return (
    <>
      <section>
        <header className="relative ">
          <div className="h-96 ">
            <img
              src="https://legacy.npr.org/news/graphics/2014/12/tape.gif"
              className=" rounded-lg w-full h-96 bg-cover opacity-  "
              alt="banner-hero"
            />
          </div>
          <div className="absolute bottom-1 inset-x-1/4  p-2">
          <Link to ="/videoList">
          <button
        
              type="button"
              class="  inline-block px-6 py-2.5   text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
            >
            EXPLORE NOW
            </button>
            </Link>
          </div>
        </header>
        <div className="text-slate-50  ">
          <p className="text-4xl underline underline-offset-8 my-8">Categories</p>
          <Categorycard/>
         
        </div>
      </section>
    </>
  );
}
export { Homepage };
