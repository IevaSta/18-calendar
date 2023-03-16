import { ADD_NOTE, DELETE_NOTE, FOCUS_DAY, RENDER_NOTES } from "../ActionsTypes/notesActionTypes";

export function renderNotes() {
    return {
        type: RENDER_NOTES
    };
}

export function focusDay(data) {
    return {
        type: FOCUS_DAY,
        payload: data
    };
}

export function addNote(data) {
    return {
        type: ADD_NOTE,
        payload: data
    };
}

export function deleteNote(id) {
    return {
        type: DELETE_NOTE,
        payload: id
    };
}