import CalendarDays from "./CalendarDays";

function Calendar() {
    return (
        <>
            <h2>Calendar</h2>
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
        </>
    )
}

export default Calendar;