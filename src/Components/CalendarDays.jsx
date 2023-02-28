import DataContext from "./DataContext";
import { useContext, useEffect } from "react";
import { renderCalendar } from "../Actions/calendarActions";

function CalendarDays() {
    const { dataCalendar, dispachDataCalendar } = useContext(DataContext);

    useEffect(() => {
        dispachDataCalendar(renderCalendar())
    }, [dispachDataCalendar]);

    return (
        <tbody>
            {dataCalendar && dataCalendar.data.map((week, i) => {
                return (
                    <tr key={i} >
                        {week.map(day => <td key={day.value} >{day.value}</td>)}
                    </tr>
                )
            })}

        </tbody>
    )
}

export default CalendarDays;