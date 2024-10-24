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

      {/* Home Links and Titles */}
      <div className="ashade-home-link--works ashade-home-link-wrap">
        <div className="ashade-home-link is-link">
          <span>My Photo Portfolio</span>
          <span>Explore Works</span>
        </div>
      </div>
      <div className="ashade-home-link--contacts ashade-home-link-wrap">
        <div className="ashade-home-link is-link">
          <span>How to find me</span>
          <span>Contact Me</span>
        </div>
      </div>

      {/* Home Title and Back Button */}
      <div className="ashade-page-title-wrap is-inactive">
        <h1 className="ashade-page-title">&nbsp;</h1>
      </div>

      <div className="ashade-home-return ashade-back-wrap is-inactive">
        <div className="ashade-back is-home-return">
          <span>Return</span>
          <span>Back</span>
        </div>
      </div>

      {/* Home Contacts Block */}
      <div id="ashade-home-contacts">
        <div className="ashade-row">
          <div className="ashade-col col-12">
            <p className="ashade-intro">
              Nice to meet you, friend! My name is Adrew Shade. I’m a
              professional photographer from Denver, Colorado. If you have any
              questions, suggestions or you just want to book a photo session
              feel free to use the contact form below. Lets make something great
              together!
            </p>
          </div>
        </div>
        <div className="ashade-row">
          <div className="ashade-col col-4">
            <div className="ashade-contact-details">
              <h4 className="ashade-contact-details__title">
                <span>My Contacts and Socials</span>
                How to Find Me
              </h4>
              <ul className="ashade-contact-details__list">
                <li>
                  <i className="ashade-contact-icon la la-map-marker" />
                  1250 Welton St, Denver, CO 80204
                </li>
                <li>
                  <i className="ashade-contact-icon la la-phone" />
                  <a href="tel:+11234567890">+1 (123) 456 - 78 - 90</a>
                </li>
                <li>
                  <i className="ashade-contact-icon la la-envelope" />
                  <a href="mailto:a.shade@example.com">a.shade@example.com</a>
                </li>
                <li className="ashade-contact-socials">
                  <i className="ashade-contact-icon la la-share-alt" />
                  <a href="facebook.com" target="_blank">
                    Fb
                  </a>
                  <a href="twitter.com" target="_blank">
                    Tw
                  </a>
                  <a href="instagram.com" target="_blank">
                    In
                  </a>
                  <a href="500px.com" target="_blank">
                    Px
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="ashade-col col-8">
            <form
              action="mail.php"
              method="post"
              className="ashade-contact-form"
            >
              <div className="ashade-row ashade-small-gap">
                <div className="ashade-col col-4">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="ashade-col col-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="ashade-col col-4">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone"
                    required
                  />
                </div>
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="ashade-contact-form__footer">
                <div className="ashade-contact-form__response"></div>
                <div className="ashade-contact-form__submit">
                  <input type="submit" value="Send Message" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Home Works Block */}
      <div id="ashade-home-works">
        <div className="ashade-row">
          <div className="ashade-col col-12">
            <p className="ashade-intro">
              Photography is my passion. Through the lens the world looks
              different and i would like to show you this difference. You can
              see it in my albums that are presented here.
            </p>
            <div className="ashade-albums-grid ashade-grid ashade-grid-3cols is-masonry">
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img
                    src="img/albums/masonry/album01.png"
                    alt="My Special Day"
                  />
                </div>
                <h5>
                  <span>Wedding Photos</span>
                  My Special Day
                </h5>
                <a
                  href="gallery-slider-parallax.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img
                    src="img/albums/masonry/album02.png"
                    alt="Harley Davidson"
                  />
                </div>
                <h5>
                  <span>Commercial Photos</span>
                  Harley Davidson
                </h5>
                <a
                  href="gallery-bricks-1x2.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img
                    src="img/albums/masonry/album03.png"
                    alt="Together Forever"
                  />
                </div>
                <h5>
                  <span>Love Story</span>
                  Together Forever
                </h5>
                <a
                  href="gallery-grid-3columns.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img
                    src="img/albums/masonry/album05.png"
                    alt="Sunset Nature"
                  />
                </div>
                <h5>
                  <span>Nature Photos</span>
                  Sunset Nature
                </h5>
                <a
                  href="gallery-masonry-4columns.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img
                    src="img/albums/masonry/album04.png"
                    alt="Girl on Farm"
                  />
                </div>
                <h5>
                  <span>Personal Session</span>
                  Girl on Farm
                </h5>
                <a
                  href="gallery-ribbon-large.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img src="img/albums/masonry/album06.png" alt="City Tour" />
                </div>
                <h5>
                  <span>Travel Photos</span>
                  City Tour
                </h5>
                <a
                  href="gallery-masonry-3columns.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img
                    src="img/albums/masonry/album08.png"
                    alt="Colors of Nature"
                  />
                </div>
                <h5>
                  <span>Nature Photos</span>
                  Colors of Nature
                </h5>
                <a
                  href="gallery-justified.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img
                    src="img/albums/masonry/album07.png"
                    alt="Auto Showroom"
                  />
                </div>
                <h5>
                  <span>Commercial Photo</span>
                  Auto Showroom
                </h5>
                <a
                  href="gallery-adjusted-3columns.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img src="img/albums/masonry/album09.png" alt="Abandoned" />
                </div>
                <h5>
                  <span>Travel Photos</span>
                  Abandoned
                </h5>
                <a
                  href="gallery-ribbon-medium.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img src="img/albums/masonry/album11.png" alt="Let's Play" />
                </div>
                <h5>
                  <span>Personal Session</span>
                  Let's Play
                </h5>
                <a
                  href="gallery-ribbon-vertical.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img src="img/albums/masonry/album10.png" alt="True Love" />
                </div>
                <h5>
                  <span>Love Story</span>
                  True Love
                </h5>
                <a
                  href="gallery-slider-fade.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
              <div className="ashade-album-item ashade-grid-item">
                <div className="ashade-album-item__image">
                  <img src="img/albums/masonry/album12.png" alt="New Family" />
                </div>
                <h5>
                  <span>Wedding Photos</span>
                  New Family
                </h5>
                <a
                  href="gallery-bricks-2x3.html"
                  className="ashade-album-item__link"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <aside id="ashade-aside">
        <a href="#" className="ashade-aside-close">
          Close Sidebar
        </a>
        <div className="ashade-aside-inner">
          <div className="ashade-aside-content">
            <div className="ashade-widget ashade-widget--about">
              <div className="ashade-widget--about__head">
                <img src="img/general/owner-avatar.png" alt="Andrew Shade" />
                <h5>
                  <span>Photographer</span>
                  Andrew Shade
                </h5>
              </div>
              <p>
                Nice to meet you, friend! My name is Andrew Shade. I am from
                Denver. Photography is my passion. Through the lens the world
                looks different and I would like to show you this difference.
              </p>
              <p className="align-right">
                <a href="about.html" className="ashade-learn-more">
                  Learn More
                </a>
              </p>
            </div>

            <div className="ashade-widget ashade-widget--contacts">
              <h5 className="ashade-widget-title">
                <span>My contacts and socials</span>
                How to find me
              </h5>
              <ul className="ashade-contact-details__list">
                <li>
                  <i className="ashade-contact-icon la la-map-marker"></i>
                  1250 Welton St, Denver, CO 80204
                </li>
                <li>
                  <i className="ashade-contact-icon la la-phone"></i>
                  <a href="tel:+11234567890">+1 (123) 456 - 78 - 90</a>
                </li>
                <li>
                  <i className="ashade-contact-icon la la-envelope"></i>
                  <a href="mailto:a.shade@example.com">a.shade@example.com</a>
                </li>
                <li className="ashade-contact-socials">
                  <i className="ashade-contact-icon la la-share-alt"></i>
                  <a href="facebook.com" target="_blank">
                    Fb
                  </a>
                  <a href="twitter.com" target="_blank">
                    Tw
                  </a>
                  <a href="instagram.com" target="_blank">
                    In
                  </a>
                  <a href="500px.com" target="_blank">
                    Px
                  </a>
                </li>
              </ul>
              <p className="align-right">
                <a href="contacts.html" className="ashade-learn-more">
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </aside>

      <div className="ashade-home-block-overlay"></div>
      <div className="ashade-menu-overlay"></div>
      <div className="ashade-aside-overlay"></div>
      <div className="ashade-cursor is-inactive">
        <span className="ashade-cursor-circle"></span>
        <span className="ashade-cursor-slider"></span>
        <span className="ashade-cursor-close ashade-cursor-label">Close</span>
        <span className="ashade-cursor-zoom ashade-cursor-label">Zoom</span>
      </div>
    </div>
  );
};

export default Home;
