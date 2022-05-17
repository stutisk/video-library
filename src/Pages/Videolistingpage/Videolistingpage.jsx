
import {Videocards} from "../../components/Cards/Videocards"
function Videolistingpage() {
  return (
    
      <div>
        <div className="flex gap-8 text-slate-50 font-medium text-xl">
          <button className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-1 rounded-full">
            All
          </button>
          <button className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-2.5 rounded-full" >Chill</button>
          <button className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-2.5 rounded-full" >Focus</button>
          <button className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-2.5 rounded-full" >Feel Good</button>
          <button className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-2.5 rounded-full" >Sleep</button>
          <button className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-2.5 rounded-full" >Party</button>
        </div>
        <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
<Videocards/><Videocards/><Videocards/><Videocards/><Videocards/><Videocards/><Videocards/>

        </div>
      </div>

   
  );
}

export { Videolistingpage };
