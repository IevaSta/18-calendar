import { useContext } from "react";
import DataContext from "./DataContext";

function NotesList() {

    const { dataNotes, dispachDataNotes } = useContext(DataContext);

    return (
        <div className="notesList">
            <ul>
                {dataNotes && dataNotes.data?.map(day => <li key={day.id}>{day.note}</li>)}
            </ul>
        </div>
    )
}

export default NotesList;