import React from 'react';
// @ts-ignore
import Size from "../../../types/types";

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

  if (imageSrc === "imageLink") {
    return <img style={style} src={pathImage} alt={alt} />;
  } else if (imageSrc === "imagebase64") {
    return <img style={style} src={`data:image/png;base64,${pathImage}`} alt={alt} />;
  } else {
    return null;
  }
}

export default ImageComponent;