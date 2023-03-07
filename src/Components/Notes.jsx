import { useContext, useEffect } from "react";
import { renderNotes } from "../Actions/notesActions";
import DataContext from "./DataContext";
import NotesList from "./NotesList";

function Notes() {

    const { dataNotes, dispachDataNotes } = useContext(DataContext);

    useEffect(() => {
        dispachDataNotes(renderNotes())
    }, [dispachDataNotes]);

    const weekDayTitle = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    const { year, month, day, weekDay, data } = dataNotes;

    return (
        <div className='right'>
            <h2 className='right_header'>{weekDayTitle[weekDay] + ' ' + day}</h2>
            <form>

            </form>
            <NotesList />
        </div>
    );
}

export default Notes;