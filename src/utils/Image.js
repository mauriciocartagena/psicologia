import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image = (image) => {
  return <LazyLoadImage src={image.src} />;
};

export default Image;
