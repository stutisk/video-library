import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { BiLike, MdOutlinePlaylistAdd } from "../../components/Icons/Icons";
import { VideoNotes } from "../../components/VideoNotes/VideoNotes";
import { useLike } from "../../Context/LikeContext";
import { usePlaylist } from "../../Context/PlaylistContext";
import { PlaylistModal } from "../../components/PlaylistModal/PlaylistModal";
import axios from "axios";
import { useHistory } from "../../Context/HistoryContext";



const SingleVideoPage = () => {


  const { videoId } = useParams();

  const [video, setVideo] = useState({});
  const { list, getLikedVideos, DeleteVideos } = useLike();
  const { setModal, modal } = usePlaylist();
  const {historyVideohandler} = useHistory()
  const showModal = () => {
    
    setModal(true) && <PlaylistModal />;
  
};

  useEffect(() => {
    async function singleVideo() {
      try {
        const res = await axios.get(`/api/video/${videoId}`);
        console.log(res.data);
        setVideo(res.data.video);
      } catch (e) {
        console.error(e);
      }
    }
    singleVideo();
  }, [videoId]);

 

  return (
    <div className="flex flex-row gap-8 flex-wrap">
      <div className="w-2/3">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=${video.url}`}
          className="react-player"
          width="100%"
         
        />
        <div className="text-justify">{video.description}</div>
        <div className="flex flex-row gap-4 mt-4 justify-end cursor-pointer">
          {list.some((p) => p.id === video.id) ? (
            <button
              className="text-sky-500 "
              onClick={() => DeleteVideos(video)}
            >
              <BiLike size={30} />
            </button>
          ) : (
            <button onClick={() => getLikedVideos(video)}>
              <BiLike size={30} />
            </button>
          )}
          
          <div>
          <div className="p-2">
            <button
              onClick={showModal}
            >
              <MdOutlinePlaylistAdd size={30} />
            </button>
          </div>
          {modal && <PlaylistModal />}
        </div>
        </div>
      </div>
      <div className=" w-80 shadow shadow-sky-500 rounded px-3 pt-6 pb-8 mb-4">
        <VideoNotes />
      </div>
    </div>
  );
};
export { SingleVideoPage };
