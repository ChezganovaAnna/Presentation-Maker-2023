import {CSSProperties, useRef} from "react";
import useDragAndDrop from "../../../hooks/useDragAndDrop";

type TextProps = {
    id: string,
    data: {
        text: string;
        fontFamily: string;
        fontSize: number;
        fontColor: string;
        fontBold: boolean;
        fontItalic: boolean;
        fontStrikeThrough: boolean;
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

function Text({ id, data, settings }: TextProps) {

    const ref = useRef(null);
    useDragAndDrop(ref, id);

    const bottomY = settings.y + settings.height

    const style: CSSProperties = {
        fontFamily: data.fontFamily,
        fontSize: data.fontSize,
        fill: data.fontColor,
        fontWeight: data.fontBold ? "bold" : "normal",
        fontStyle: data.fontItalic ? "italic" : "normal",
        textDecoration: data.fontStrikeThrough ? "line-through" : "none",
        height: settings.height,
        width: settings.width,
        userSelect: "none"
    };

    return (
        <text ref={ref} style={style} x={settings.x} y={bottomY}>
            {data.text}
        </text>
    );
}

export default Text;