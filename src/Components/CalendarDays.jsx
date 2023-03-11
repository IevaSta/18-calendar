import DataContext from "./DataContext";
import { useContext, useEffect } from "react";
import { renderCalendar } from "../Actions/calendarActions";
import { focusDay } from "../Actions/notesActions";

function CalendarDays() {
    const { dataCalendar, dispachDataCalendar, dispachDataNotes } = useContext(DataContext);

    useEffect(() => {
        dispachDataCalendar(renderCalendar())
    }, [dispachDataCalendar]);

    const handleFocus = (day) => {

        if (day.weekDay !== '') {
            dispachDataNotes(focusDay({
                year: dataCalendar.year,
                month: dataCalendar.month,
                weekDay: day.weekDay,
                day: day.value
            }))
        }
    }

    return (
        <tbody>
            {dataCalendar && dataCalendar.data.map((week, i) => {
                return (
                    <tr key={i} >
                        {week.map(day => <td onClick={() => handleFocus(day)} key={day.value} className={day.className}>{day.value}</td>)}
                    </tr>
                )
            })}
        </tbody>
    )
}

export default CalendarDays;