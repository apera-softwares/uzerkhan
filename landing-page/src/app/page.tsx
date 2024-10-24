import React from "react";
// import "./css/default-skin/preloader.gif"
// import "./css/default-skin/default-skin.css"
// import "./css/justifiedGallery.min.css"
import "./css/line-awesome.css";
// import "./css/photoswipe.css"
import "./css/responsive.css";
import "./css/style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import "./css/"

const Home = () => {
  return (
    <div className="ashade-home-template has-spotlight ashade-smooth-scroll">
      {/* Header */}
      <Navbar />

      {/* Home Background */}
      <div className="ashade-home-background ashade-page-background is-video">
        <video
          src="/home-bg.mp4"
          poster="img/bgs/bg-home01.png"
          muted
          autoPlay
          loop
        />
      </div>

   
      <Footer />

   
    </div>
  );
};

export default Home;
