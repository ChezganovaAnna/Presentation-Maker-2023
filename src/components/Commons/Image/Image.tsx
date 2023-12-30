import React, {CSSProperties, useRef, useState} from 'react';
import { Size, Position } from "../../../types/types";
import useDragAndDrop from "../../../hooks/useDragAndDrop";

type ImageProps = {
  id: string,
  data: {
    src?: string;
    alt: string;
    size: Size;
    position?: Position;
    imageSrc?: string;
    pathImage?: string;
  };
  settings: {
    height: number,
    x: number,
    y: number,
    transform: string,
    transformOrigin: string,
    width: number,
  }
};

function Image({ id, data, settings }: ImageProps) {
  const { src, alt, size, imageSrc } = data;

  const style: React.CSSProperties = {
    height: size?.height || "auto",
    width: size?.width || "auto",
  };

  const imageRef = useRef<HTMLImageElement>(null);
  useDragAndDrop(imageRef, id);

  const styleWithPos: CSSProperties = {
    position: "absolute",
    height: settings.height,
    left: settings.x,
    top: settings.y,
    width: settings.width,
    cursor: "move"
  };

  if (imageSrc) {
    return <img ref={imageRef} style={styleWithPos} src={imageSrc} alt={alt} />;
  } else {
    return null;
  }
}

export default Image;