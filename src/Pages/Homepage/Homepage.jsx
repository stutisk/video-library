import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Navbar } from "../../components/Navbar/Navbar";
function Homepage() {
  return (
    <main className="h-screen">
      <div className="flex flex-row h-screen">
        <div className="basis-72  bg-slate-800  ">
          <Sidebar />
        </div>
        <div className="basis-full bg-slate-900">
          <div className="flex flex-col ">
            <div className="basis-20  p-4  ">
              <Navbar />{" "}
            </div>
            <div className="basis-full  text-2xl text-slate-50 text-center">
              <section className="h-96 relative">
                <div>
                  <img
                    src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1652207173/istockphoto-696537216-612x612_bftymq.jpg"
                    className=" rounded-lg w-full h-96 bg-cover  "
                  />
                </div>
                <div className="absolute top-1/4 left-0  p-2">
                  <h1 className="text-5xl text-slate-800 ">
                    Welcome To Galaxia{" "}
                    <span className="text-sky-500">gana</span>
                  </h1>
                  <p className="py-4 font-medium text-2xl text-slate-800">Life is Better With Music </p>
                 
                  <button
                    type="button"
                    class="  inline-block px-6 py-2.5 border-2 border-slate-900  text-slate-800 font-medium text-xl   rounded hover:bg-black  hover:text-slate-50 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    EXPLORE NOW
                  </button>
                </div>
              </section>
              <div className="text-slate-50 p-4 text-3xl ">Categories</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export { Homepage };
