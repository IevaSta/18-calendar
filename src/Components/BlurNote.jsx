import { useContext } from "react";
import { focusDayClass } from "../Actions/calendarActions";
import { deleteNote } from "../Actions/notesActions";
import DataContext from "./DataContext";

function BlurNote() {
    const { dataNotes, dispachDataNotes, dispachDataCalendar } = useContext(DataContext);

    const { day } = dataNotes;

    const handleDelete = async (id) => {
        await dispachDataNotes(deleteNote(id))
        dispachDataCalendar(focusDayClass(day));
    }

    const handleFocusNote = (note) => {
        console.log(note);
    }

    return (
        <div className="notesList">
            <ol>
                {dataNotes?.data?.map(d => day === d.date.day ?
                    <li key={d.id}>
                        <div onClick={() => handleFocusNote(d.note)} className="note">
                            <span>{d.note}</span>
                            <button className="grey" onClick={() => handleDelete(d.id)}>&#9760;</button>
                        </div>
                    </li>
                    : null)}
            </ol>
        </div>
    );
}

export default BlurNote;