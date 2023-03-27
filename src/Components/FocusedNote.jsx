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
            <input value={note} onChange={event => setNote(event.target.value)} />
            <button onClick={() => handleCancelFocusNote()}>cancel</button>
            <button onClick={() => handleEditSave(n)}>save</button>
        </li>
    );
}

export default FocusedNote;