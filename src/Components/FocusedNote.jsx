import { useContext } from "react";
import { useState } from "react";
import { cancelFocusNote } from "../Actions/notesActions";
import DataContext from "./DataContext";

function FocusedNote({ n }) {

    const { dispachDataNotes } = useContext(DataContext);

    const [note, setNote] = useState(n.note)

    const handleCancelFocusNote = () => {
        dispachDataNotes(cancelFocusNote())
    }

    return (
        <li key={n.id}>
            <input value={note} onChange={event => setNote(event.target.value)} />
            <button onClick={() => handleCancelFocusNote()}>cancel</button>
            <button>save</button>
        </li>
    );
}

export default FocusedNote;