import { ADD_NOTE, CANCEL_FOCUS_NOTE, DELETE_NOTE, FOCUS_DAY, FOCUS_NOTE, RENDER_NOTES, SAVE_EDIT_NOTE } from "../ActionsTypes/notesActionTypes";
import getId from "../Functions/getId";

function notesReducer(state, action) {
    let newState = { ...state };

    newState.data = JSON.parse(localStorage.getItem('notesList_data')) || [];

    const today = new Date();

    let year = today.getFullYear();
    let month = today.getMonth();
    let day = today.getDate();
    let weekDay = new Date(year, month, day - 1).getDay();

    const renderData = () => {
        newState = { ...newState, year, month, day, weekDay }
    }

    switch (action.type) {
        case RENDER_NOTES:
            renderData();
            break;

        case FOCUS_DAY:
            year = action.payload.year;
            month = action.payload.month;
            day = action.payload.day;
            weekDay = action.payload.weekDay;
            renderData();
            break;

        case ADD_NOTE:
            newState.data = [...newState.data, { ...action.payload, id: getId() }];
            localStorage.setItem('notesList_data', JSON.stringify(newState.data));
            break;

        case DELETE_NOTE:
            newState.data = [...newState.data?.filter(n => n.id !== action.payload)];
            localStorage.setItem('notesList_data', JSON.stringify(newState.data));
            break;

        case FOCUS_NOTE:
            newState.data = newState.data?.map(e => ({ ...e, focus: e.id === action.payload }));
            break;

        case CANCEL_FOCUS_NOTE:
            newState.data = newState.data?.map(e => ({ ...e, focus: null }));
            break;

        case SAVE_EDIT_NOTE:
            newState.data = newState.data?.map(e => e.id === action.payload.id ? { ...e, ...action.payload.data } : { ...e });
            localStorage.setItem('notesList_data', JSON.stringify(newState.data));
            break;

        default:
    }
    return newState;
}
export default notesReducer;