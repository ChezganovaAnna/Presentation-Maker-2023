import {ChangeEventHandler, MouseEventHandler} from "react";
import classes from "./Button.module.css";

type ButtonProps = {
    text?: string;
    icon?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};


function Button({ text, icon, onClick}: ButtonProps) {
    const isIconButton = !!icon && !text;
    const isTextButton = !!text && !icon;
    const classNameTypeButton = isIconButton
      ? "button_icon"
      : isTextButton
        ? "button_text"
        : "";

  let iconClass: string = ""
  switch (icon) {
    case "undo":
      iconClass = "zmdi zmdi-long-arrow-left";
      break;
    case "redo":
      iconClass  = "zmdi zmdi-long-arrow-right";
      break;
    case "Тема":/*считаю тема нам не нужна, ее надо везде убрать*/
      iconClass = "";
      break;
    case "insert_text":
      iconClass = "zmdi zmdi-paypal";{/*spellcheck*/}
      break;
    case "image":
      iconClass = "zmdi zmdi-image";
      break;
    case "remove":
      iconClass = "zmdi zmdi-minus";
      break;
    case "add":
      iconClass = "zmdi zmdi-plus";
      break;
    case "format_bold":
      iconClass = "zmdi zmdi-format-bold";
      break;
    case "format_italic":
      iconClass = "zmdi zmdi-format-italic";
      break;
    case "format_underlined":
      iconClass = "zmdi zmdi-format-underlined";
      break;
    case "format_strikethrough":
      iconClass = "zmdi zmdi-format-strikethrough-s";
      break;
    case "delete":
      iconClass = "zmdi zmdi-delete";
      break;
    case "text_color":
      iconClass = "zmdi zmdi-format-color-text";
      break;
    case "brush":
      iconClass = "zmdi zmdi-brush";
      break;
    case "scissors":
      iconClass = "zmdi zmdi-scissors";
      break;
    case "copy":
      iconClass = "zmdi zmdi-copy";
      break;
    case "search":
      iconClass = "zmdi zmdi-search";
      break;
    case "crop":
      iconClass = "zmdi zmdi-crop";
      break;
    case "upload":
      iconClass = "zmdi zmdi-upload";
      break;
    case "download":
      iconClass = "zmdi zmdi-download";
      break;
    case "triangle":
      iconClass = "zmdi zmdi-triangle-up";
      break;
    case "circle":
      iconClass = "zmdi zmdi-circle-o";
      break;
    case "rectangle":
      iconClass = "zmdi zmdi-square-o";
      break;
    case "category":
      iconClass = "zmdi zmdi-shape";
      break;
    case "change_history":
      iconClass = "zmdi zmdi-book";
      break;
    default:
      break;
  }



  return (
      <button
        type="button"
        className={`${classes.button} ${classNameTypeButton}`}
        onClick={onClick}
      >
          {isIconButton && (
            <i className={iconClass}></i>
          )}
          {isTextButton && <span className={classes.text}>{text}</span>}
      </button>
    );
}

export default Button;