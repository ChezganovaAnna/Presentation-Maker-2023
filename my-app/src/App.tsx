import styles from './App.module.css';
import MyEditor from "./components/Editor/editor";
import { Editor } from "./types/types";

type AppProps = {
  editor: Editor,
}
function App(props:AppProps) {
  return (
    <div className={styles.main}>
      <MyEditor presentation={props.editor} />
    </div>
  );
}

export default App;
