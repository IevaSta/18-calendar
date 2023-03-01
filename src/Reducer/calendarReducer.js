import { RENDER_CALENDAR } from "../ActionsTypes/calendarActionsTypes";

function calendarReducer(state, action) {

    let newState = state ? { ...state } :
        {
            year: '',
            month: '',
            data: []
        };

    const today = new Date();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();

    const renderData = () => {
        newState.data = [];
        newState.year = currentYear;
        newState.month = currentMonth;

        const prevDaysInMonth = new Date(currentYear, currentMonth, 0).getDate();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        let day = 0;

        while (day < daysInMonth) {
            let week = [];

            for (let i = 0; i < 7; i++) {
                let dayObj = { value: '', className: '' };

                const weekDay = new Date(currentYear, currentMonth, day).getDay();

                if (i === weekDay && day < daysInMonth) {
                    dayObj.value = ++day;
                } else if (day >= daysInMonth) {
                    dayObj.value = ++day - daysInMonth;
                } else {
                    dayObj.value = prevDaysInMonth - (weekDay - i) + 1;
                }

                week = [...week, dayObj];
            }
            newState.data = [...newState.data, week];
        }
    }

    switch (action.type) {
        case RENDER_CALENDAR:
            renderData();
            break;



        default:
    }

    return newState;

}

export default calendarReducer;