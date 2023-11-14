import styles from './App.module.css';
import Head from "./components/Head/Head";
import MyEditor from "./components/Editor/Editor";
import { EditorContext } from "./context/presentation";
// import { Editor } from "./types/types";
import React, { useContext } from "react";

// type AppProps = {
//     editor: Editor;
// }

function App() {
    const { editor } = useContext(EditorContext);
    return (
        <div className={styles.main}>
            <MyEditor presentation={editor} />
        </div>
    );
}

export default App;
