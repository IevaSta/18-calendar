import DataContext from "./DataContext";
import { useContext, useEffect } from "react";
import { renderCalendar } from "../Actions/calendarActions";

function CalendarDays() {
    const { dataCalendar, dispachDataCalendar } = useContext(DataContext);

    useEffect(() => {
        dispachDataCalendar(renderCalendar())
    }, [dispachDataCalendar]);

    const handleFocus = (day) => {
        console.log(day);
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