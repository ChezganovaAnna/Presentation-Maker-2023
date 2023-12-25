import React from 'react';
import Image from "../Image/Image";
import Text from "../../Commons/Text/Text"
import Primitive from "../../Commons/Primitive/Primitive"
import classes from "./Block.module.css";
import { ImageContent, Primitive as PrimitiveType, TextContent } from "../../../types/types";

type BlockProps = ImageContent | PrimitiveType | TextContent;

function Block({ position, size, rotate, type, data }: BlockProps) {
    const centerX = size.width / 2;
    const centerY = size.height / 2;

    const settings = {
        height: size.height,
        x: position.x,
        y: position.y,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: `${centerX}px ${centerY}px`,
        width: size.width,
    };

    return (
      <div className={classes.block}>
          {type === "image" && <Image data={data} settings={settings}/>}
          {type === "primitive" && <Primitive position={position} size={size} rotate={rotate} data={data} />}
          {type === "text" && <Text data={data} settings={settings}/>}
      </div>
    );
}

export default Block;