import react from 'react';
import {Note} from "../model/notes"
import {NoteView} from "./NoteView"
import styles from './mystyle.css'


type ListViewProps = {
    notes: Array<Note>
}
//(props: {notes: Array<Note>})
//(props: {props: ListViewProps})
function ListView(props: ListViewProps){
    const {notes: Note} = props
    const notArchivedNotes = notes.filter(note:Note => !note.isArchived)
    return(
        <div>
            <div>
                <p>Pinned</p>
                {notArchivedNotes.map(note:Note => note.IsPinned && <NoteView key={note.id} note={note}></NoteView>)}
            </div>
            <div>
                <p>Others</p>
                {notArchivedNotes.map(note:Note => !note.IsPinned && <NoteView key={note.id} note={note}></NoteView>)}
            </div>
        </div>
    )
}

export {
    ListView
}