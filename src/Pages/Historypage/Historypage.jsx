import { useHistory } from "../../Context/HistoryContext";
import { Historycard } from "../../components/Cards/Historycard";
import { NavLink } from "react-router-dom";


const Historypage = () => {
  const { historylist ,DeleteHistory} = useHistory();
  return (
    <div>
      <div className="text-slate-50 font-medium text-2xl">
        {" "}
        VIDEOS IN THE HISTORY LIST : <span>{historylist.length}</span>
      </div>
      {historylist.length > 0 ? (
        <div>
            <div className="p-2">
            <button
              type="button"
              class="  inline-block px-6 py-2.5   text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
            onClick={DeleteHistory}
            >
             CLEAR FULL HISTORY
            
            </button>
          </div>
          <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
            {historylist.map((video) => (
              <Historycard key={video._id} video={video} />
            ))}
          </div>
          
        </div>
      ) : (
        <div>
          <NavLink to="/videoList">
            <div className="p-2">
              <button
                type="button"
                class="  inline-block px-6 py-2.5   text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600  focus:ring-0 transition duration-150 ease-in-out"
              >
                EXPLORE  VIDEOS NOW
              </button>
            </div>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export { Historypage };
