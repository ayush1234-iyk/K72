const Video = () => {
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline   // helps autoplay on mobile
        src="/hero/videos.mp4" // ✅ correct path
      />
    </div>
  );
};

export default Video;


