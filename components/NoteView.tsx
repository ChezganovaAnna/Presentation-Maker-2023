import react from 'react';
import {Note} from "../model/notes";
import styles from './mystyle.css';


function NoteView(props: {note: Note}) {
    const {title, background, text, isPinned, isArchived} = props.note;
    return(
    <div style={{backgroundColor: background}}>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
    )
}

export {
    NoteView
}