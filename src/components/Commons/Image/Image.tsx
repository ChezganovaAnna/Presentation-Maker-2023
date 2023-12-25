import React, {CSSProperties, useRef, useState} from 'react';
import { Size, Position } from "../../../types/types";
import useDragAndDrop from "../../../hooks/useDragAndDrop";

type ImageProps = {
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

function Image({ data, settings }: ImageProps) {
  const { src, alt, size, imageSrc } = data;

  const style: React.CSSProperties = {
    height: size?.height || "auto",
    width: size?.width || "auto",
  };

  const position = {
    x: settings.x,
    y: settings.y,
  }

  const imageRef = useRef<HTMLImageElement>(null);
  const [pos, setPos] = useState(position);
  useDragAndDrop(imageRef, setPos);

  const styleWithPos: CSSProperties = {
    position: "absolute",
    height: settings.height,
    left: pos.x,
    top: pos.y,
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