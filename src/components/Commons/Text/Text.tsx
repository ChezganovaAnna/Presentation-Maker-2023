    import { CSSProperties, useState, useRef } from "react";
    import useDragAndDrop from "../../../hooks/useDragAndDrop";

    export type TextProps = {
        data: {
            text: string;
            fontFamily: string;
            fontSize: number;
            fontColor: string;
            fontBold: boolean;
            fontItalica: boolean;
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

    function Text({ data, settings }: TextProps) {

    const position = {
        x: settings.x,
        y: settings.y,
    }

    const ref = useRef<HTMLElement>(null);
    const [pos, setPos] = useState(position);
    useDragAndDrop(ref, setPos);

    const style: CSSProperties = {
        position: "absolute",
        fontFamily: data.fontFamily,
        fontSize: data.fontSize,
        color: data.fontColor,
        fontWeight: data.fontBold ? "bold" : "normal",
        fontStyle: data.fontItalica ? "italic" : "normal",
        textDecoration: data.fontStrikeThrough ? "line-through" : "none",
        height: settings.height,
        left: pos.x,
        top: pos.y,
        width: settings.width,
        cursor: "move"
    };

        return (
            <span ref={ref}  style={style}>
              {data.text}
            </span>
        );
    }

    export default Text;
