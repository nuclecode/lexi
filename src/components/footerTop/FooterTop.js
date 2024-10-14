import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import './FooterTop.scss';

const FooterTop = () => {
  return (
    <div className="footer-top">
      {/* First Section: Logo and Brand */}
      <div className="footer-top__brand">
        <h3>Open to Partnerships</h3>
        <p> with Architects, Designers, Real Estate Agencies</p>
        
      </div>

      {/* Second Section: Vision */}
      <div className="footer-top__vision">
        <h4>OUR VISION</h4>
        <p>
          At LEXI team, our passion is to transform spaces into functional, beautiful environments, ensuring safety and innovation through exceptional craftsmanship and sustainable practices that enhance the lives of our clients.
        </p>
      </div>

      {/* Third Section: Contact and Social Links */}
      <div className="footer-top__contact">
        <div className="footer-top__email-phone">
          <p>Email us: <a href="mailto:olexii@lexi.ltd">olexii@lexi.ltd</a></p>
          <p>Call us:  <a href="tel:+447482051203">07482051203</a></p>
        </div>
        <div className="footer-top__social">
          <h4>Follow us:</h4>
          <div className="footer-top__social-icons">
            <Link href="https://twitter.com" aria-label="Twitter">
              <FaTwitter />
            </Link>
            <Link href="https://facebook.com" aria-label="Facebook">
              <FaFacebookF />
            </Link>
            <Link href="https://youtube.com" aria-label="YouTube">
              <FaYoutube />
            </Link>
            <Link href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
