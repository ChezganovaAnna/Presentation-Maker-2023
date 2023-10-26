import {NotesModel, Note} from "../model/notes"

const notesModel1: NotesModel = {
    viewMode: 'grid',
    notes:[]
}

const notesModel2: NotesModel = {
    viewMode: 'list',
    notes:[]
}

const note1: Note = {
    id: 'id1',
    title: 'Title1',
    text: 'Text1',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteOnlyTitle: Note = {
    id: 'id2',
    title: 'Only title',
    text: '',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteOnlyText: Note = {
    id: 'id3',
    title: '',
    text: 'only text',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteLongTitle: Note = {
    id: 'id4',
    title: 'Длинный заголовок Длинный заголовок Длинный заголовок Длинный заголовок Длинный заголовок Длинный заголовок',
    text: '',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteLongNote: Note = {
    id: 'id5',
    title: 'Длинный заголовок Длинный заголовок Длинный заголовок Длинный заголовок Длинный заголовок Длинный заголовок',
    text: 'Длинный текст Длинный текст Длинный текст Длинный текст Длинный текст Длинный текст Длинный текст Длинный текст',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const noteLongText: Note = {
    id: 'id6',
    title: 'ршшшшш',
    text: 'Длинный текст Длинный текст Длинный текст Длинный текст Длинный текст Длинный текст Длинный текст Длинный текст',
    background: "#f39f76",
    isPinned: false,
    isArchived: false,
}

const notePinned: Note = {
    id: 'id7',
    title: 'Title1',
    text: 'Text1',
    background: "#f39f76",
    isPinned: true,
    isArchived: false,
}

const noteArchived: Note = {
    id: 'id8',
    title: 'Title1',
    text: 'Text1',
    background: "#f39f76",
    isPinned: false,
    isArchived: true,
}

const NotesModelGridMaximum: NotesModel = {
    viewMode: 'grid',
    notes: [note1, noteOnlyTitle, noteOnlyText, noteLongTitle, noteLongText, noteLongNote, notePinned, noteArchived],
}

const NotesModelListMaximum: NotesModel = {
    viewMode: 'list',
    notes: [note1, noteOnlyTitle, noteOnlyText, noteLongTitle, noteLongText, noteLongNote, notePinned, noteArchived],
}

const NotesModelGridMedium: NotesModel = {
    viewMode: 'grid',
    notes: [note1, noteLongNote, notePinned, noteArchived],
}

const NotesModelListMedium: NotesModel = {
    viewMode: 'list',
    notes: [note1, noteLongNote, notePinned, noteArchived],
}

const NotesModelGridMinimum: NotesModel = {
    viewMode: 'grid',
    notes: [note1, noteLongNote],
}

const NotesModelListMinimum: NotesModel = {
    viewMode: 'list',
    notes: [noteArchived],
}

export{
    NotesModelListMinimum,
    NotesModelGridMinimum,
    NotesModelListMedium,
    NotesModelGridMedium,
    NotesModelListMaximum,
    NotesModelGridMaximum,
    noteArchived,
    notePinned,
    noteLongText,
    noteLongNote,
    noteLongTitle

}/*ещё что-то*/
