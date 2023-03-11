import { NEXT_MONTH, PREV_MONTH, RENDER_CALENDAR } from "../ActionsTypes/calendarActionsTypes";

function calendarReducer(state, action) {

    let newState = { ...state };

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
                let dayObj = { weekDay: '', value: '', className: '' };

                const weekDay = new Date(currentYear, currentMonth, day).getDay();

                if (i === weekDay && day < daysInMonth) {
                    dayObj.weekDay = weekDay;
                    dayObj.value = ++day;


                    if (today.getDate() === day &&
                        today.getMonth() === currentMonth &&
                        today.getFullYear() === currentYear) {
                        dayObj.className = ' today';
                    };

                } else if (day >= daysInMonth) {
                    dayObj.value = ++day - daysInMonth;
                    dayObj.className = 'notThisMonth';
                } else {
                    dayObj.value = prevDaysInMonth - (weekDay - i) + 1;
                    dayObj.className = 'notThisMonth';
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

        case PREV_MONTH:
            if (!newState.month) {
                currentYear = newState.year - 1;
                currentMonth = 11;
            } else {
                currentYear = newState.year;
                currentMonth = newState.month - 1;
            }

            renderData();
            break;

        case NEXT_MONTH:
            if (newState.month === 11) {
                currentYear = newState.year + 1;
                currentMonth = 0;
            } else {
                currentYear = newState.year;
                currentMonth = newState.month + 1;
            }
            renderData();
            break;
        default:
    }
    return newState;
}

export default calendarReducer;