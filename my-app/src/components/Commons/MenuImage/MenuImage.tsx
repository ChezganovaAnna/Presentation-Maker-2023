import { useContext } from "react";
import { EditorContext } from "../../../context/presentation";
import useToolBar from "../../hooks/useToolBar";

import Button from "../Button/Button";
import styles from "./MenuImage.module.css"
import Input from "../InputDatas/Input";

function MenuImage() {
  return (
    <div>
      <Button icon={"image"} iconAppearance={styles.button}/>
    </div>
  )
}

export default MenuImage;