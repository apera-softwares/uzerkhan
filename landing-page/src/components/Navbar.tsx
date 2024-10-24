import Link from "next/link";
import '../app/css/responsive.css'

const Navbar = () => {
  return (
    <header id="ashade-header">
      <div className="ashade-header-inner">
        <div className="ashade-logo-block">
          <a href="/" className="ashade-logo is-retina">
            <img src="/logo.png" alt="Ashade Logo" width="70" height="50" />
          </a>
        </div>
        <div className="ashade-nav-block">
          <nav className="ashade-nav">
            <ul className="main-menu">
              <li className="menu-item-has-children">
                <Link href="/">Home</Link>
                {/* <ul className="sub-menu">
                <li className="current-menu-item">
                  <a href="index.html">Home Video</a>
                </li>
                <li>
                  <a href="home02.html">Home Slider</a>
                </li>
                <li>
                  <a href="home03.html">Home Static</a>
                </li>
                <li>
                  <a href="maintenance.html">Maintenance</a>
                </li>
              </ul> */}
              </li>
              <li className="menu-item-has-children">
                <Link href="/portfolio">Works</Link>
               
              </li>
              <li className="menu-item-has-children">
                <a href="#">Showcase</a>
                <ul className="sub-menu">
                  <li className="menu-item-has-children">
                    <a href="#">Grid</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="gallery-grid-2columns.html">2 Columns</a>
                      </li>
                      <li>
                        <a href="gallery-grid-3columns.html">3 Columns</a>
                      </li>
                      <li>
                        <a href="gallery-grid-4columns.html">4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Masonry</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="gallery-masonry-2columns.html">2 Columns</a>
                      </li>
                      <li>
                        <a href="gallery-masonry-3columns.html">3 Columns</a>
                      </li>
                      <li>
                        <a href="gallery-masonry-4columns.html">4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Adjusted</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="gallery-adjusted-2columns.html">2 Columns</a>
                      </li>
                      <li>
                        <a href="gallery-adjusted-3columns.html">3 Columns</a>
                      </li>
                      <li>
                        <a href="gallery-adjusted-4columns.html">4 Columns</a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Ribbon</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="gallery-ribbon-large.html">Ribbon Large</a>
                      </li>
                      <li>
                        <a href="gallery-ribbon-medium.html">Ribbon Medium</a>
                      </li>
                      <li>
                        <a href="gallery-ribbon-vertical.html">
                          Ribbon Vertical
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Slider</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="gallery-slider-parallax.html">
                          Parallax Slider
                        </a>
                      </li>
                      <li>
                        <a href="gallery-slider-simple.html">Simple Slider</a>
                      </li>
                      <li>
                        <a href="gallery-slider-fade.html">Fade Slider</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="gallery-justified.html">Justified</a>
                  </li>
                  <li>
                    <a href="gallery-bricks-1x2.html">Bricks 1x2</a>
                  </li>
                  <li>
                    <a href="gallery-bricks-2x3.html">Bricks 2x3</a>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="about.html">About Me</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="contacts.html">Contacts</a>
              </li>
              <li>
                <a href="#" className="ashade-aside-toggler">
                  <span className="ashade-aside-toggler__icon01"></span>
                  <span className="ashade-aside-toggler__icon02"></span>
                  <span className="ashade-aside-toggler__icon03"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
