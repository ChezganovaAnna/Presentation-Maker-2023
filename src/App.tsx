import styles from './App.module.css';
import MyEditor from "./components/Editor/Editor";
import React from "react";
import store from "./store/store";
import {Provider} from "react-redux";


function App() {
    return (
        <Provider store={store}>
            <MyEditor className={styles.main}/>
        </Provider>
    );
}

export default App;
