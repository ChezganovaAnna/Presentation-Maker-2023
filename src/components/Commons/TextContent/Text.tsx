import { CSSProperties } from "react";

type TextProps = {
    data: {
        text: string;
        fontFamily: string;
        fontSize: number;
        fontColor: string;
        fontBold: boolean;
        fontItalica: boolean;
        fontStrikeThrough: boolean;
    };
};

function Text({ data }: TextProps) {
    const style: CSSProperties = {
        fontFamily: data.fontFamily,
        fontSize: data.fontSize,
        color: data.fontColor,
        fontWeight: data.fontBold ? "bold" : "normal",
        fontStyle: data.fontItalica ? "italic" : "normal",
        textDecoration: data.fontStrikeThrough ? "line-through" : "none",
    };

    return <span style={style}>{data.text}</span>;
}

export default Text;

// css
// @font-face {
//     font-family: "MyFont";
//     src: url("/fonts/MyFont.ttf") format("truetype");
// }
//
// .my-class {
//     font-family: "MyFont", sans-serif;
// }
