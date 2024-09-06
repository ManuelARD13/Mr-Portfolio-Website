import video from "@assets/background-waves.webm";

//Evaluate performance enhancement

function VideoBackground() {
  return (
    <div className="video-background">
      <video
        src={video}
        autoPlay
        muted
        loop
        className="video"
        preload="auto"
      ></video>
    </div>
  );
}

export default VideoBackground;
