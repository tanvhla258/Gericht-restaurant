import React from "react";
import images from "../../constants/images";
import "./AboutUs.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <AnimatedOnScroll
        animationIn="slideInLeft"
        className="app__aboutus-content_about"
      >
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo facere
          officia eum asperiores facilis ullam, porro nam laborum aspernatur
          omnis fugiat exercitationem vitae repudiandae tempore esse neque
          corrupti eius voluptas.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </AnimatedOnScroll>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <AnimatedOnScroll
        animationIn="slideInRight"
        className="app__aboutus-content_history"
      >
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo facere
          officia eum asperiores facilis ullam, porro nam laborum aspernatur
          omnis fugiat exercitationem vitae repudiandae tempore esse neque
          corrupti eius voluptas.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </AnimatedOnScroll>
    </div>
  </div>
);

export default AboutUs;
