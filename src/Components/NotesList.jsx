import { useContext } from "react";
import DataContext from "./DataContext";

function NotesList() {

    const { dataNotes, dispachDataNotes } = useContext(DataContext);

    const { day } = dataNotes;
    console.log(day);

    return (
        <div className="notesList">
            <ul>
                {dataNotes?.data?.map(d => day === d.date.day ? <li key={d.id}>{d.note}</li> : null)}
            </ul>
        </div>
    )
}

export default NotesList;