import  { MouseEventHandler } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
    text?: string;
    icon?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ text, icon, onClick }: ButtonProps) {
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
        iconClass = "zmdi zmdi-spellcheck";
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
      default:
        break;
  }

  {/*text_color
   scissors
   copy
   новая кнопка*/}


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