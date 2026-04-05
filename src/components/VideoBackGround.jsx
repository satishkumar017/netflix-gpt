import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";
const VideoBackGround = ({ movieId }) => {
 
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(movieId);
   
  return (
    <div className="fixed inset-0 -z-10 ">
      <iframe
        className="w-full h-full scale-125 "
              src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
