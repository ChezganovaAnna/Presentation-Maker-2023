import React from 'react';
// @ts-ignore
import Size from "../../../types/types";
import defaultImage from "../../../images/fire.jpg"


type ImageComponentProps = {
  data: {
    src: string;
    alt: string;
    size: Size;
    imageSrc?: string; // Make imageSrc optional
    pathImage?: string; // Make pathImage optional
  };
};

function ImageComponent({ data }: ImageComponentProps) {
  const { src, alt, size, imageSrc, pathImage } = data;

  const style: React.CSSProperties = {
    height: size?.height || "auto",
    width: size?.width || "auto",
  };

  const getImageSource = () => {
    if (imageSrc === "imageLink") {
      return pathImage;
    } else if (imageSrc === "imagebase64") {
      return  pathImage;
    } else {
      return defaultImage;
    }
  };

  return <img style={style} src={getImageSource()} alt={alt} />;
}

export default ImageComponent;