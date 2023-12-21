import { useContext } from "react";
import { PresentationContext } from "../../context/presentation";
import Button from "../Commons/Button/Button";
import InputDatas from "../Commons/InputDatas/InputDatas";
import styles from "./ToolBar.module.css";
import Selected from "../Commons/Selected/Selected";
import useToolBar from "../../hooks/useToolBar";

type ToolBarProps = {
    className: string;
}

function ToolBar({className}: ToolBarProps) {
    const { presentation, setPresentation } = useContext(PresentationContext);
    const { download, upload } = useToolBar(presentation, setPresentation);
  return (
      <div className={`${styles.container} ${className}`}>
          <p>Функции с презентацией</p>
          <div className={styles.options}>
              <Button icon={"undo"}/>
              <Button icon={"redo"}/>
              <Button icon={"download"} onClick={download}/>
              <Button icon={"upload"} onClick={upload} />
              <Button icon={"scissors"}/>
              <Button icon={"copy"}/>
              <Button icon={"search"}/>
              <Button icon={"crop"}/>
              <Button icon="change_history"/>
              <div className={styles.options_slides}>
                  <div className={styles.deal_slides}>
                    <Button icon={"remove"}/>
                    <span className={styles.text}>Delete slide</span>
                  </div>
                  <div className={styles.deal_slides}>
                    <Button icon={"add"}/>
                    <span className={styles.text}>Create slide</span>
                  </div>
              </div>
          </div>
          <p>Работа с текстом</p>
          <div className={styles.options}>
              <Button icon={"remove"}/>
              <InputDatas defaultValue={11} className={styles["font-size-input"]}/>
              <Button icon={"add"}/>
              <Button icon={"insert_text"}/>
              <Button icon={"brush"}/>
              <Button icon={"format_bold"}/>
              <Button icon={"format_italic"}/>
              <Button icon={"format_underlined"}/>
              <Button icon={"text_color"}/>
          </div>
          <p>Работа с картинками</p>
          <div className={styles.options}>
              <Button icon={"image"}/>
          </div>
          <p>Работа с примитивами</p>
          <div className={styles.options}>
              <Button icon="category"/>
              <Button icon="rectangle"/>
              <Button icon="circle"/>
              <Button icon="triangle"/>
          </div>
      </div>
  );
}

export default ToolBar;