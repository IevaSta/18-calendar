import { FOCUS_DAY, RENDER_NOTES } from "../ActionsTypes/notesActionTypes";

function notesReducer(state, action) {

    let newState = { ...state };

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

        default:
    }
    return newState;
}
export default notesReducer;