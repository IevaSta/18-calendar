import { useContext } from "react";
import { deleteNote } from "../Actions/notesActions";
import DataContext from "./DataContext";

function NotesList() {

    const { dataNotes, dispachDataNotes } = useContext(DataContext);

    const { day } = dataNotes;

    return (
        <div className="notesList">
            <ol>
                {dataNotes?.data?.map(d => day === d.date.day ?
                    <li key={d.id}>
                        <div className="delete_button">
                            <span>{d.note}</span>
                            <button className="grey" onClick={() => dispachDataNotes(deleteNote(d.id))}>&#9760;</button>
                        </div>
                    </li>
                    : null)}
            </ol>
        </div>
    );
}

export default NotesList;