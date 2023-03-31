import React, { useRef } from "react";

import "./Gallery.css";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else current.scrollLeft += 300;
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAa", marginTop: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          distinctio obcaecati inventore illum! Nemo minus modi temporibus?
          Veniam dolor, ut, sapiente repellendus voluptatibus expedita quas
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <AnimatedOnScroll
              animationInDelay={index * 300}
              key={`gallery_image-${index + 1}`}
              className="app__gallery-images_card flex__center"
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </AnimatedOnScroll>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
