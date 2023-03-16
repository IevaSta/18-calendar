import { FOCUS_DAY_CLASS, NEXT_MONTH, PREV_MONTH, RENDER_CALENDAR } from "../ActionsTypes/calendarActionsTypes";

export function renderCalendar() {
    return {
        type: RENDER_CALENDAR
    };
}

export function prevMonth() {
    return {
        type: PREV_MONTH
    };
}

export function nextMonth() {
    return {
        type: NEXT_MONTH
    };
}

export function focusDayClass(day) {
    return {
        type: FOCUS_DAY_CLASS,
        payload: day
    };
}
