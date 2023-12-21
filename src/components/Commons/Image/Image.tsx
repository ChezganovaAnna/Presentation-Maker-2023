import React from 'react';
import { Size, Position } from "../../../types/types";

type ImageProps = {
  data: {
    src?: string;
    alt: string;
    size: Size;
    position?: Position;
    imageSrc?: string;
    pathImage?: string;
  };
};

function Image({ data }: ImageProps) {
  const { src, alt, size, imageSrc } = data;

  const style: React.CSSProperties = {
    height: size?.height || "auto",
    width: size?.width || "auto",
  };

 // const ref = useRef();


  if (imageSrc) {
    return <img style={style} src={imageSrc} alt={alt} />;
  } else if (src) {
    return <img style={style} src={src} alt={alt} />;
  } else {
    return null;
  }
}

export default Image;