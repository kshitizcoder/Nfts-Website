import React from "react";
import logo from "../images/logo.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-warpper ">
          <div className="footbranding footerItems">
            <img src={logo} alt="" className="img-fluid" />
            <p>
              Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed
              augue. Posuere ac in in nisl sed augue.
            </p>
          </div>
          <div className="footLinks footerItems">
            <h4>Marketplace</h4>
            <ul>
              <li>NFTs</li>
              <li>Art</li>
              <li>Collectibles</li>
              <li>Virtual world</li>
            </ul>
          </div>
          <div className="footLinks footerItems">
            <h4>Info</h4>
            <ul>
              <li>Activity</li>
              <li>Stats</li>
              <li>Rankings</li>
            </ul>
          </div>
          <div className="footLinks footerItems">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Support</li>
              <li>Features</li>
              <li>Top Creators</li>
            </ul>
          </div>
          <div className="footLinks footerItems">
            <h4>Resources</h4>
            <ul>
              <li>Info</li>
              <li>Affiliates</li>
              <li>Associated</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
