import { useContext } from "react";
import { EditorContext } from "../../context/presentation";
import Button from "../Commons/Button/Button";
import Input from "../Commons/InputDatas/Input";
import styles from "./ToolBar.module.css";
import Selected from "../Commons/Selected/Selected";
import useToolBar from "../hooks/useToolBar";
function ToolBar() {
    const { editor, setEditor } = useContext(EditorContext);
    const { download, upload } = useToolBar(editor, setEditor);
  return (
      <div className={styles.container}>
        <div className={styles.basic}>
            <Button icon={"undo"} />
            <Button icon={"redo"} />
        </div>
        <Button icon={"insert_text"} />
        <Button icon={"image"}/>
        <Button icon={"brush"} />
        <Button icon={"crop"} />
        <Button icon={"remove"} />
        <Input defaultValue={11} className={styles["font-size-input"]} />
        <Button icon={"add"} />
        <Button icon={"format_bold"} />
        <Button icon={"format_italic"} />
        <Button icon={"format_underlined"} />
        <Button icon={"text_color"} />
        <Button icon={"scissors"} />
        <Button icon={"copy"} />
        <Button icon={"search"} />
        <Button icon={"crop"} />
        <Button icon={"download"} onClick={download} />
        <Button icon={"upload_file"} onClick={upload} />
      </div>
  );
}

export default ToolBar;