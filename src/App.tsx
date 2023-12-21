import styles from './App.module.css';
import MyEditor from "./components/Editor/Editor";
import Presentation, { PresentationContext } from "./context/presentation";
// import { Editor } from "./types/types";
import React, { useContext } from "react";
import PresentationProvider from "./context/presentation";

function App() {
    const { presentation } = useContext(PresentationContext); //потом будет store
    return (
        <PresentationProvider>
            <MyEditor presentation={ presentation } className={styles.main}/>
        </PresentationProvider>
    );
}

export default App;
