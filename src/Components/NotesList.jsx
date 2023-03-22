import { useContext } from "react";
import BlurNote from "./BlurNote";
import DataContext from "./DataContext";
import FocusedNote from "./FocusedNote"

function NotesList() {
    const { dataNotes } = useContext(DataContext);

    const { day } = dataNotes;

    return (
        <ol className="notesList">
            {dataNotes.data?.map(note => note.date.day === day && (note.focus ? <FocusedNote key={note.id} n={note} /> : <BlurNote key={note.id} n={note} />))}
        </ol>
    );
}

export default NotesList;