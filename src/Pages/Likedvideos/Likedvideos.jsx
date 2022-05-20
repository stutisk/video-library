import { NavLink } from "react-router-dom";
import { useLike } from "../../Context/LikeContext";
import { Videocards } from "../../components/Cards/Videocards";


const Likedvideos = () => {
    const {list}=useLike();
   


  return (
    <div>
      <div className="text-slate-50 font-medium text-2xl"> VIDEOS IN THE LIST <span>{list.length}</span></div>
         {list.length > 0 ?(
            <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
              {list.map((video) => (
            <Videocards key={video._id} video={video} />
           ))}
           </div>
          
           
      ):
      (
        <div>
      
      <NavLink to="/videoList">

        <div className="p-2">
          <button
            type="button"
            class="  inline-block px-6 py-2.5   text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
          >
            EXPLORE VIDEOS NOW
          </button>
        </div>
      </NavLink>
      </div> 
      )}
    </div>
  );
};

export { Likedvideos };
