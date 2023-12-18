import styles from './App.module.css';
import MyEditor from "./components/Editor/Editor";
import { EditorContext } from "./context/presentation";
import React, { useContext } from "react";


function App() {
    const { editor } = useContext(EditorContext);
    return (
      <div>
        <MyEditor presentation={editor} className={styles.main}/>
      </div>
    );
}

export default App;
