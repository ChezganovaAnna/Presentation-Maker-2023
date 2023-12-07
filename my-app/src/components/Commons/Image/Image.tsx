import React from 'react';
import { ImageContent } from "../../../types/types.ts";

type ImageComponentProps = {
  data: ImageContent;
};

function ImageComponent({ data }: ImageComponentProps) {
  const { imageSrc, pathImage, alt } = data.data;
  const { size, position } = data;

  const getImageSource = () => {
    if (imageSrc === "imageLink") {
      return pathImage;
    } else if (imageSrc === "imagebase64") {
      return `data:image/png;base64, ${pathImage}`;
    } else {
      return '';
    }
  };

  const imageStyle: React.CSSProperties = {
    position: "absolute",
    top: `${position.y}px`,
    left: `${position.x}px`,
    height: `${size.height}px`,
    width: `${size.width}px`,
  };

  return <img src={getImageSource()} alt={alt} style={imageStyle} />;
}

export default ImageComponent;