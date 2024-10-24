import React from 'react'
import "../app/css/responsive.css";

const Footer = () => {
  return (
    <footer id="ashade-footer">
    <div className="ashade-footer-inner">
      <div className="ashade-footer__socials">
        <ul className="ashade-socials">
          <li><a href="#">Fb</a></li>
          <li><a href="#">Tw</a></li>
          <li><a href="#">In</a></li>
          <li><a href="#">Yt</a></li>
        </ul>
      </div>
      <div className="ashade-footer__copyright">
        Copyright &copy; 2020. All Rights Reserved.
      </div>
    </div>
  </footer>
  )
}

export default Footer
