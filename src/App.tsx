import styles from './App.module.css';
import MyEditor from "./components/Editor/Editor";
import { PresentationContext } from "./context/presentation";
import React, {useContext, useState} from "react";
import {Presentation} from "./types/types";
import {pres} from "./context/presentation";



function App() {

    const [state, setState] = useState<Presentation>( pres.presentation);

    return (
        <PresentationContext.Provider
            value={{
                presentation: state,
                setPresentation: setState
            }}
        >
            <MyEditor presentation={ state } className={styles.main}/>
        </PresentationContext.Provider>
    );
}

export default App;
