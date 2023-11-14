import React from 'react';
import Block from "../Commons/Block/Block";
import styles from "./Slide.module.css";
import { Slide as SlideType, ImageContent } from "../../types/types";

type SlideProps = {
    slide: SlideType;
    isSelected: boolean;
    className?: string;
};

const Slide = ({slide, isSelected, className}: SlideProps) => {
    const classNames = `${styles.slide} ${isSelected ? `${className} selectedSlide` : className}`;

    const slideStyle: React.CSSProperties = {
        position: 'relative',
        background: slide.background?.type === "color"
            ? slide.background.color
            : slide.background?.type === "image"
                ? `url(${slide.background.pathImage})`
                : undefined,
    };

    return (
        <div className={classNames} style={slideStyle}>
            <p style={{ margin: '0px' }}>{slide.idSlide}</p>
            {slide.objects.map((object) => (
                <Block key={object.id} {...object} />
            ))}
        </div>
    )
}

export default Slide;