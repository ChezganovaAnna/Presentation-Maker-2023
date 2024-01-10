import React from "react";
import WorkPlace from "../WorkPlace/WorkPlace";
import ToolBar from "../ToolBar/ToolBar";
import SlideList from "../SlideList/SlideList";
import {useSelector} from 'react-redux';
import styles from './Editor.module.css';
import {RootState} from "../../store/reducers"; // Assuming you have a CSS module for styling

type EditorProps = {
    className: string;
};

function MyEditor({className}: EditorProps) {
    const state = useSelector((state: RootState) => state);
    console.log(state)
    const presentationName = useSelector((state: RootState) => state.presentation.name);

    return (
        <div className={`${className} ${styles.myEditor}`}>
            <div className={styles.div_toolbar_slide}>
                <ToolBar/>
            </div>
            <div className={styles.slide_list}>
                <SlideList/>
            </div>
            <div className={styles.workplace_slide}>
                <WorkPlace/>
            </div>
        </div>
    );
}

export default MyEditor;