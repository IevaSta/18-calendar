import { FOCUS_DAY_CLASS, NEXT_MONTH, PREV_MONTH, RENDER_CALENDAR } from "../ActionsTypes/calendarActionsTypes";

function calendarReducer(state, action) {
    let newState = { ...state };

    const today = new Date();

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();
    let focusDay;


    const renderData = () => {
        newState.data = [];
        newState.year = currentYear;
        newState.month = currentMonth;

        let notesData = JSON.parse(localStorage.getItem('notesList_data')) || [];
        notesData.filter(n => n.date.year === currentYear && n.date.month === currentMonth);

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
                        dayObj.className = 'today';
                    } else if (focusDay === day) {
                        dayObj.className = 'focusDay';
                    }

                    const _day = day;
                    if (notesData.some(n => n.date.day === _day)) {
                        dayObj.className += ' dayBorder';
                    }

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

        case FOCUS_DAY_CLASS:
            currentYear = newState.year;
            currentMonth = newState.month;
            focusDay = action.payload;

            renderData();
            break;

        default:
    }
    return newState;
}

export default calendarReducer;