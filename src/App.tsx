import styles from './App.module.css';
import MyEditor from "./components/Editor/Editor";
import Presentation, { PresentationContext } from "./context/presentation";
// import { Editor } from "./types/types";
import React, { useContext } from "react";

function App() {
    const { presentation } = useContext(PresentationContext);
    return (
        <div>
            <MyEditor presentation={ presentation } className={styles.main}/>
        </div>
    );
}

export default App;
