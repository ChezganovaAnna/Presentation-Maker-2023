import React from 'react';
// @ts-ignore
import { ImageContent as TImage, Primitive as TPrimitive, TextContent as TText } from "../../../types/types";
import ImageComponent from "../ImageContent/Image";
import Text from "../../Commons/TextContent/Text"
import Primitive from "../../Commons/Primitive/Primitive"
import classes from "./Block.module.css";

type BlockProps = TPrimitive | TImage | TText;

function Block({ position, size, rotate, type, data, opacity }: BlockProps) {
    const centerX = size.width / 2;
    const centerY = size.height / 2;

    const style: React.CSSProperties = {
        height: size.height,
        left: position.x,
        top: position.y,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: `${centerX}px ${centerY}px`,
        width: size.width,
    };

    if (type === "image") {
        return <ImageComponent data={{ src: "imageLink", alt: "imageAlt", size: { width: 100, height: 100 }, imageSrc: data?.imageSrc, pathImage: data?.pathImage || "" }} />;
    }

    if (type === "text") {
        return <Text data={data}/>;
    }

    if (type === "primitive") {
        return <Primitive position={position} size={size} opacity={opacity} rotate={rotate} data={data}/>
    }

    return (
        <div className={classes.block} style={style}>
            {

            }
        </div>
    );
}

export default Block;


