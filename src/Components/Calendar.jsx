import { useContext } from "react";
import { nextMonth, prevMonth } from "../Actions/calendarActions";
import CalendarDays from "./CalendarDays";
import DataContext from "./DataContext";

function Calendar() {

    const { dataCalendar, dispachDataCalendar } = useContext(DataContext);

    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const handlePrevMonth = () => {
        dispachDataCalendar(prevMonth());
    };

    const handleNextMonth = () => {
        dispachDataCalendar(nextMonth());
    };

    return (
        <div className='left'>
            <div className='left_header'>
                <button onClick={handlePrevMonth}>{"<"}</button>
                <h2>{dataCalendar && dataCalendar.year + ' ' + months[dataCalendar.month]}</h2>
                <button onClick={handleNextMonth}>{">"}</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Mon</th>
                        <th>Tue</th>
                        <th>Wed</th>
                        <th>Thu</th>
                        <th>Fri</th>
                        <th>Sat</th>
                        <th>Sun</th>
                    </tr>
                </thead>
                <CalendarDays />
            </table>
        </div>
    )
}

export default Calendar;