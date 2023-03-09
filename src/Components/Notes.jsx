import { useContext, useEffect, useRef } from "react";
import { addNote, renderNotes } from "../Actions/notesActions";
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


    const noteRef = useRef();
    const addNewNote = () => {
        const note = noteRef.current.value;

        dispachDataNotes(addNote(
            [note]
        ));
        noteRef.current.value = '';
    }

    return (
        <div className='right'>
            <h2 className='right_header'>{weekDayTitle[weekDay] + ' ' + day}</h2>
            <form onSubmit={addNewNote} className="form">
                <input ref={noteRef} placeholder="Write your super note here!" />
                <button type="submit" className="yellow">Add</button>
            </form>
            <NotesList />
        </div>
    );
}

export default Notes;