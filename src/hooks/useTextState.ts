import React, { useRef, useState, CSSProperties } from "react";
import {TextProps } from "../components/Commons/Text/Text";
import useDragAndDrop from "../hooks/useDragAndDrop";
import exp from "constants";

export function Text({ data, settings }: TextProps) {

  const position = {
    x: settings.x,
    y: settings.y,
  }
  const [prevTexts, setState] = useState({ data, settings });

  const setText = (prevTexts: TextProps[]) => {
    setState((prevState) => ({
      ...prevState,
      texts: prevTexts,
    }));
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

  const handleDelete = () => {
    setText((prevTexts) => prevTexts.filter((text) => text.id !== data.id));
  }

  const handleCreate = () => {
    setText((prevTexts) => [...prevTexts, { ...data, id: Math.random() }]);
  }
}

export default handleDelete;
export default handleCreate;