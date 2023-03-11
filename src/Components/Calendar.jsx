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
                <h2>{dataCalendar && dataCalendar.year + ' ' + months[dataCalendar.month]}</h2>
                <div>
                    <button className='black' onClick={handlePrevMonth}>&#171;</button>
                    <button className='black' onClick={handleNextMonth}>&#187;</button>
                </div>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th>SAT</th>
                        <th>SUN</th>
                    </tr>
                </thead>
                <CalendarDays />
            </table>
        </div>
    )
}

export default Calendar;