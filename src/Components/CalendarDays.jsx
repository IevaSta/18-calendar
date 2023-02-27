import { useState } from "react";

function CalendarDays() {

    const [weeksTr, setWeeksTr] = useState([{}]);

    /*
    [{
        weekDay : 1-7,
        day: 1-31
    }]
    */

    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();



    /*
    savaites dienu listas ==> [1..7]   tr
    metodas menesio dienu listui 28-30-31    td
    */

    return (
        <tbody>

        </tbody>
    )
}

export default CalendarDays;