import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleVideo } from "../../utils/serverRequests";
import ReactPlayer from "react-player";
import { BiLike, MdOutlinePlaylistAdd} from "../../components/Icons/Icons";
import { VideoNotes } from "../../components/VideoNotes/VideoNotes";


import axios from "axios";

const SingleVideoPage = () => {
  const { videoId } = useParams();
  const [video, setVideo] = useState({});

  // const singleVideo = async () => {
  //   try {
  //     const res = await axios.get(`/api/video/${videoId}`);
  //     console.log(res.data);
  //     setVideo(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   singleVideo();
  // }, [videoId]);

  useEffect(() => {
    async function singleVideo() {
        try {
            const res = await axios.get(`/api/video/${videoId}`)
            console.log(res.data);
  //     setVideo(res.data);
        } catch (e) {
            console.error(e);
        }
    };
    singleVideo();
}, [videoId]);

  return (
    <div className="flex flex-row gap-8 flex-wrap">
      <div className="w-2/3">
        <ReactPlayer
          controls
          url={`https://www.youtube.com/watch?v=7vNQZEMgo4w&list=RD7vNQZEMgo4w&start_radio=1`}
          className="react-player"
          width="100%"
        />
        <div className="text-justify">
          Teri Mitti Female Version - Kesari | Arko feat. Parineeti Chopra |
          Akshay Kumar | Manoj Muntashir
        </div>
        <div className="flex flex-row gap-4 mt-4 justify-end cursor-pointer">
          <BiLike size={30} />
          <MdOutlinePlaylistAdd size={30} />
        </div>
      </div>
      <div className=" w-80 shadow shadow-sky-500 rounded px-3 pt-6 pb-8 mb-4">
<VideoNotes/>
      </div>
      
    </div>
  );
};
export { SingleVideoPage };
