
import { EditorContext } from "../../context/presentation";
import Button from "../Commons/Button/Button";
import Input from "../Commons/InputDatas/Input";
import styles from "./ToolBar.module.css";
import Selected from "../Commons/Selected/Selected";
import MenuButtonPrimitives from "../Commons/MenuButtonPrimitive/MenuButtonPrimitive";
import MenuFunction from "../Commons/MenuFunction/MenuFunction";
import MenuText from "../Commons/MenuText/MenuText";
import MenuImage from "../Commons/MenuImage/MenuImage";

type ToolBarProps = {
  className: string;
}
function ToolBar({className}:ToolBarProps) {
  return (
      <div className={`${className} ${styles.container}`}>
        {/*это моя добавка MenuFunction */}
        <MenuFunction />
        <MenuText />
        <MenuImage />
        <MenuButtonPrimitives />
      </div>
  );
}

export default ToolBar;