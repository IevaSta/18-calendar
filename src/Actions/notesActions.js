import { ADD_NOTE, CANCEL_FOCUS_NOTE, DELETE_NOTE, FOCUS_DAY, FOCUS_NOTE, RENDER_NOTES, SAVE_EDIT_NOTE } from "../ActionsTypes/notesActionTypes";

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

export function focusNote(id) {
    return {
        type: FOCUS_NOTE,
        payload: id
    };
} cancelFocusNote()

export function cancelFocusNote() {
    return {
        type: CANCEL_FOCUS_NOTE
    };
}

export function saveEditNote(id, data) {
    return {
        type: SAVE_EDIT_NOTE,
        payload: { id, data }
    };
}