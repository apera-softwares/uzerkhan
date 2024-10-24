// components/HomeBackground.js
const HomeBackground = () => {
    return (
      <div className="ashade-home-background ashade-page-background is-video">
        <video
          src="/video/home-bg.mp4"
          poster="/img/bgs/bg-home01.png"
          muted
          autoPlay
          loop
        ></video>
      </div>
    );
  };
  
  export default HomeBackground;
  