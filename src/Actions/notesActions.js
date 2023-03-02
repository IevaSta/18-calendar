import { FOCUS_DAY, RENDER_NOTES } from "../ActionsTypes/notesActionTypes";

export function renderNotes() {
    return {
        type: RENDER_NOTES
    }
};

export function focusDay(data) {
    return {
        type: FOCUS_DAY,
        payload: data
    }
};