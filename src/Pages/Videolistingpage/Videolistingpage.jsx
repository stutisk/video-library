import { Videocards } from "../../components/Cards/Videocards";
import { Categories } from "../../components/Categories/Categories";
import { useData } from "../../Context/dataContext";
import { getFilterVideos } from "../../utils/getFilterVideos";

function Videolistingpage() {
  const {
    state: { videos, categorySelected },
  } = useData();
  const filteredVideos = getFilterVideos(videos, categorySelected);
  return (
    <>
      <Categories />

      <div className="flex flex-row flex-wrap  gap-10 p-6  ">
        {filteredVideos.map((videos) => (
          <Videocards video={videos} key={videos._id} />
        ))}
      </div>
    </>
  );
}

export { Videolistingpage };
