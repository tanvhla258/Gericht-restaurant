import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p className="p__cormorants">Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className="custom__button"
      >
        Visit Us
      </button>
    </div>

    <AnimatedOnScroll animationIn="fadeInLeft" className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </AnimatedOnScroll>
  </div>
);

export default FindUs;
