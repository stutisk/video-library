import { Videocards } from "../../components/Cards/Videocards";
import { Categories } from "../../components/Categories/Categories";
import {useData} from "../../Context/dataContext"
import {getFilterVideos} from "../../utils/getFilterVideos"
 
function Videolistingpage() {
  const {
    state: { videos, categorySelected },
  } = useData();
  const filteredVideos = getFilterVideos(videos, categorySelected );
  return (
    <div>
    <div className="flex gap-8 text-slate-50 font-medium text-2xl">

      <Categories />
  </div>
   <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
      {filteredVideos.map((videos) => (
        <Videocards video={videos} key={videos._id} />
       
      ))}
      
</div>
</div>
 
  );
}

export { Videolistingpage };
