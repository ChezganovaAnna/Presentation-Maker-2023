import { useContext } from "react";
import { EditorContext } from "../../../context/presentation";
import useToolBar from "../../hooks/useToolBar";

import Button from "../Button/Button";
import styles from "./MenuText.module.css"
import Input from "../InputDatas/Input";

function MenuText() {
  return (
    <div>
      <Button icon={"remove"} iconAppearance={styles.button}/>
      <Input defaultValue={11} className={styles["font-size-input"]} />
      <Button icon={"add"} iconAppearance={styles.button}/>
      <Button icon={"insert_text"} iconAppearance={styles.button}/>
      <Button icon={"brush"} iconAppearance={styles.button}/>
      <Button icon={"format_bold"} iconAppearance={styles.button}/>
      <Button icon={"format_italic"} iconAppearance={styles.button}/>
      <Button icon={"format_underlined"} iconAppearance={styles.button}/>
      <Button icon={"text_color"} iconAppearance={styles.button}/>
    </div>
  )
}

export default MenuText