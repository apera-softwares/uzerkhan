"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const albumItems = [
  {
    imgSrc: "/img/albums/grid/album01.png",
    alt: "My Special Day",
    category: "Action",
    title: "My Special Day",
    link: "/gallery-slider-parallax",
  },
  {
    imgSrc: "/img/albums/grid/album01.png",
    alt: "My Special Day 2",
    category: "Action",
    title: "My Special Day",
    link: "/gallery-slider-parallax",
  },
  {
    imgSrc: "/img/albums/grid/album01.png",
    alt: "My Special Day 2",
    category: "Action",
    title: "My Special Day",
    link: "/gallery-slider-parallax",
  },
  {
    imgSrc: "/img/albums/grid/album01.png",
    alt: "My Special Day 4",
    category: "Action",
    title: "My Special Day",
    link: "/gallery-slider-parallax",
  },
  {
    imgSrc: "/img/albums/grid/album02.png",
    alt: "Harley Davidson1",
    category: "Beauty",
    title: "Harley Davidson1",
    link: "/gallery-bricks-1x2",
  },

  {
    imgSrc: "/img/albums/grid/album02.png",
    alt: "Harley Davidson",
    category: "Beauty",
    title: "Harley Davidson2",
    link: "/gallery-bricks-1x2",
  },
  {
    imgSrc: "/img/albums/grid/album02.png",
    alt: "Harley Davidson",
    category: "Beauty",
    title: "Harley Davidson2",
    link: "/gallery-bricks-1x2",
  },
  {
    imgSrc: "/img/albums/grid/album03.png",
    alt: "Together Forever1",
    category: "Lifestyle",
    title: "Together Foreve3r1",
    link: "/gallery-grid-3columns",
  },

  {
    imgSrc: "/img/albums/grid/album03.png",
    alt: "Together Forever1",
    category: "Lifestyle",
    title: "Together Foreve3r12",
    link: "/gallery-grid-3columns",
  },
  {
    imgSrc: "/img/albums/grid/album03.png",
    alt: "Together Forever1",
    category: "Lifestyle",
    title: "Together Foreve3r123",
    link: "/gallery-grid-3columns",
  },
  {
    imgSrc: "/img/albums/grid/album04.png",
    alt: "Nature Wonders",
    category: "Humour",
    title: "Nature Wonders",
    link: "/gallery-nature",
  },
  {
    imgSrc: "/img/albums/grid/album05.png",
    alt: "Urban Exploration",
    category: "Sports",
    title: "Urban Exploration",
    link: "/gallery-urban",
  },
  {
    imgSrc: "/img/albums/grid/album06.png",
    alt: "Fashion Photoshoot",
    category: "Automobile",
    title: "Fashion Photoshoot",
    link: "/gallery-fashion",
  },

  {
    imgSrc: "/img/albums/grid/album06.png",
    alt: "Fashion Photoshoot",
    category: "Music Video",
    title: "Fashion Photoshoot",
    link: "/gallery-fashion",
  },
  {
    imgSrc: "/img/albums/grid/album06.png",
    alt: "Fashion Photoshoot",
    category: "Social Films",
    title: "Fashion Photoshoot",
    link: "/gallery-fashion",
  },

  {
    imgSrc: "/img/albums/grid/album06.png",
    alt: "Fashion Photoshoot",
    category: "Behind the Scene",
    title: "Fashion Photoshoot",
    link: "/gallery-fashion",
  },
];

const categories = [
  "All",
  "Action",
  "Beauty",
  "Lifestyle",
  "Humour",
  "Sports",
  "Automobile",
  "Music Video",
  "Social Films",
  "Behind the Scene",
];

const WorksGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? albumItems
      : albumItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="has-spotlight ashade-smooth-scroll" style={{ zIndex: 10 }}>
      {/* <Navbar /> */}

      {/* Category Filter */}
      <div className="filter-navbar fixed w-full cursor-pointer z-50 mt-10">
        <ul className="flex space-x-4 justify-center py-4 flex-wrap">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`cursor-pointer md:text-xl text:lg font-semibold md:font-bold transition-all duration-300 transform ${
                selectedCategory === category
                  ? "text-[#d0aa6b] scale-110 border-b-2 border-[#d0aa6b]"
                  : "text-[#808080] hover:text-white hover:scale-105"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      <main
        className="ashade-content-wrap md:mt-28 mt-36"
        style={{ color: "white", overflow: "scroll" }}
      >
        <div className="ashade-content-scroll">
          <div className="ashade-content">
            {/* <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12">
                  <p className="ashade-intro">
                    Photography is my passion. Through the lens the world looks
                    different and I would like to show you this difference. You
                    can see it in my albums that are presented here.
                  </p>
                </div>
              </div>
            </section> */}

            {/* Filtered Album Grid */}
            <section className="ashade-section">
              <div className="ashade-row">
                <div className="ashade-col col-12">
                  <div className="ashade-albums-grid ashade-grid ashade-grid-3cols">
                    {/* Album Items */}
                    {filteredItems.map((item, index) => (
                      <div
                        className="ashade-album-item ashade-grid-item cursor-pointer"
                        key={index}
                      >
                        <div className="ashade-album-item__media">
                          <div
                            style={{
                              padding: "56.25% 0 0 0",
                              position: "relative",
                            }}
                          >
                            <iframe
                              src="https://player.vimeo.com/video/1019300379?badge=0&autopause=0&player_id=0&app_id=58479"
                              frameBorder="0"
                              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                              style={{
                                position: "absolute",
                                top: "0",
                                left: "0",
                                width: "100%",
                                height: "100%",
                              }}
                              title={item.title}
                            ></iframe>
                          </div>
                        </div>
                        <h5>
                          <span>{item.category}</span>
                          {item.title}
                        </h5>
                        <Link href={item.link}>
                          {/* <a className="ashade-album-item__link"></a> */}
                          Link
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default WorksGrid;
