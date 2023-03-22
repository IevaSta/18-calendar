import { useContext } from "react";
import { focusDayClass } from "../Actions/calendarActions";
import { deleteNote, focusNote } from "../Actions/notesActions";
import DataContext from "./DataContext";

function BlurNote({ n }) {
    const { dataNotes, dispachDataNotes, dispachDataCalendar } = useContext(DataContext);

    const { day } = dataNotes;

    const handleDelete = async (id) => {
        await dispachDataNotes(deleteNote(id))
        dispachDataCalendar(focusDayClass(day));
    }

    const handleFocusNote = (id) => {
        dispachDataNotes(focusNote(id))
    }

    return (
        <div className="notesList">
            <li>
                <div onClick={() => handleFocusNote(n.id)} className="note">
                    <span>{n.note}</span>
                    <button className="grey" onClick={() => handleDelete(n.id)}>&#9760;</button>
                </div>
            </li>
        </div>
    );
}

export default BlurNote;