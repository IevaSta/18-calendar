import { useContext } from "react";
import DataContext from "./DataContext";

function NotesList() {

    const { dataNotes } = useContext(DataContext);

    const { day } = dataNotes;
    console.log(day);

    return (
        <div className="notesList">
            <ol>
                {dataNotes?.data?.map(d => day === d.date.day ?
                    <li key={d.id}>
                        <div className="delete_button">
                            <span>{d.note}</span>
                            <button className="grey">&#9760;</button>
                        </div>
                    </li>
                    : null)}

            </ol>
        </div>
    )
}

export default NotesList;