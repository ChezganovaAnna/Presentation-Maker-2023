import {CSSProperties, useRef} from "react";
import useDragAndDrop from "../../../hooks/useDragAndDrop";
import {usePresentationActions} from "../../../store/hooks/useRedux";
import { useState } from 'react';

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
        fontUnderline: boolean
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

function Text({id, data, settings}: TextProps) {

    const [text, setText] = useState(data.text);
    const [isEditable, setIsEditable] = useState(false);


    const ref = useRef(null);
    useDragAndDrop(ref, id);

    const presentationActions = usePresentationActions()

    const style:CSSProperties = {
        fontFamily: data.fontFamily,
        fontSize: data.fontSize,
        fill: data.fontColor,
        fontWeight: data.fontBold ? "bold" : "normal",
        fontStyle: data.fontItalic ? "italic" : "normal",
        textDecorationLine: data.fontStrikeThrough ? "line-through" : "none",
        textDecoration: data.fontUnderline ?"underline" : undefined,
        height: settings.height,
        left: settings.x,
        top: settings.y,
        width: settings.width,
        cursor: "move",
        userSelect: "none"
    };
    return (
        <>
            <text ref={ref} style={style} x={settings.x} y={settings.y}   onDoubleClick={() => {

               // presentationActions.editTextItem("hello")
            }}  >
                {data.text}
            </text>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                readOnly={!isEditable}
            />
        </>
    );
}


export default Text;
