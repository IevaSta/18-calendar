function FocusedNote({ n }) {
    return (
        <li key={n.id}>
            <input value={n.note} />
            <button>cancel</button>
            <button>save</button>
        </li>
    );
}

export default FocusedNote;