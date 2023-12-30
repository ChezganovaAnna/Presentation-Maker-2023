import React from 'react';
import Image from "../Image/Image";
import Text from "../../Commons/Text/Text"
import Primitive from "../../Commons/Primitive/Primitive"
import classes from "./Block.module.css";
import {ImageContent, Primitive as PrimitiveType, TextContent} from "../../../types/types";

type BlockProps = ImageContent | PrimitiveType | TextContent & { id: string };

function Block({id, position, size, rotate, type, data}: BlockProps) {
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

    switch (type) {
        case "image": return <Image data={data} settings={settings} id={id}/>
        case "primitive": return <Primitive position={position} size={size} rotate={rotate} data={data} id={id}/>
        case "text": return <Text data={data} settings={settings} id={id}/>
    }
}

export default Block;