import React from "react";
import images from "../../constants/images";
const SubHeading = ({ title }) => (
  <div
    style={{
      marginBottom: "1rem",
      textAlign: "center",
    }}
  >
    <p className="p__cormorant">{title}</p>
    <img src={images.spoon} alt="sppon" className="spoon__img" />
  </div>
);

export default SubHeading;
