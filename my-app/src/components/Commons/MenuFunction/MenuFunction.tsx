import { useContext } from "react";
import { EditorContext } from "../../../context/presentation";
import Button from "../Button/Button";
import useToolBar from "../../hooks/useToolBar";
import styles from "./MenuFunction.module.css"

function MenuFunction() {
  const { editor, setEditor } = useContext(EditorContext);
  const { download, upload } = useToolBar(editor, setEditor);
  return(
     <div>
       <Button icon={"undo"}  iconAppearance={styles.button}/>
       <Button icon={"redo"} iconAppearance={styles.button}/>
       <Button icon={"scissors"} iconAppearance={styles.button}/>
       <Button icon={"copy"} iconAppearance={styles.button}/>
       <Button icon={"search"} iconAppearance={styles.button}/>
       <Button icon={"crop"} iconAppearance={styles.button}/>
       <Button icon={"download"} iconAppearance={styles.button} onClick={download}/>
       <Button icon={"upload"} iconAppearance={styles.button} onClick={upload} />
     </div>
  )
}

export default MenuFunction;