import { useContext } from "react";
import { useState } from "react";
import { cancelFocusNote, saveEditNote } from "../Actions/notesActions";
import DataContext from "./DataContext";

function FocusedNote({ n }) {

    const { dispachDataNotes } = useContext(DataContext);

    const [note, setNote] = useState(n.note)

    const handleCancelFocusNote = () => {
        dispachDataNotes(cancelFocusNote())
    }

    const handleEditSave = (n) => {
        const isNote = note;

        if (isNote) {
            dispachDataNotes(saveEditNote(n.id, { note: isNote }))
        }
    }

    return (
        <li key={n.id}>
            <div className="note">
                <input value={note} onChange={event => setNote(event.target.value)} onKeyUp={e => e.key === 'Enter' && handleEditSave(n)} />
                <button className="grey" onClick={handleCancelFocusNote}>&#10005;</button>
            </div>
        </li>
    );
}

export default FocusedNote;