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
        'MON',
        'TUE',
        'WED',
        'THU',
        'FRI',
        'SAT',
        'SUN'
    ];

    const { year, month, day, weekDay } = dataNotes;

    const noteRef = useRef();

    const addNewNote = () => {
        const note = noteRef.current.value;

        if (note) {
            dispachDataNotes(addNote(
                {
                    date: { year, month, day },
                    note
                }
            ));

            noteRef.current.value = '';
        }
    }

    return (
        <div className='right'>
            <h2 className='right_header'>{weekDayTitle[weekDay] + ' ' + day}</h2>
            <form onSubmit={addNewNote} className="form">
                <input ref={noteRef} placeholder="Write your super note here!" />
                <button type="submit" className="grey">&#9788;</button>
            </form>
            <NotesList />
        </div>
    );
}

export default Notes;