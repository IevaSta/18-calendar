import { ADD_NOTE, FOCUS_DAY, RENDER_NOTES } from "../ActionsTypes/notesActionTypes";

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
        case FOCUS_DAY:
            year = action.payload.year;
            month = action.payload.month;
            day = action.payload.day;
            weekDay = action.payload.weekDay;
            renderData();
            break;

        case ADD_NOTE:
            newState.data = [...newState.data, ...action.payload]
            localStorage.setItem('notesList_data', JSON.stringify(newState.data));
            break;

        case RENDER_NOTES:
            renderData();
            break;

        default:
    }
    return newState;
}
export default notesReducer;