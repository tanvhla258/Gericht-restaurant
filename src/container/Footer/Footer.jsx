import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <AnimatedOnScroll
        animationIn="fadeInUp"
        className="app__footer-links_contact"
      >
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">2 W 12rd St, California, CA 10021, USA</p>
        <p className="p__opensans">(+84) 392659807</p>
        <p className="p__opensans">+1 215-658-885</p>
      </AnimatedOnScroll>
      <AnimatedOnScroll
        animationIn="fadeInUp"
        className="app__footer-links_logo"
      >
        <img src={images.gericht} alt="foooter logo" />
        <p className="p__opensans">
          "The best way to find your self is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          alt="sppon"
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll
        animationIn="fadeInUp"
        className="app__footer-links_work"
      >
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>

        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>

        <p className="p__opensans">07:00 am - 11:00 am</p>
      </AnimatedOnScroll>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Gericht. All Rights reserved</p>
    </div>
  </div>
);

export default Footer;
