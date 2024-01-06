function NoteList({ notes, onDelete, onChecked }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
          onChecked={onChecked}
        />
      ))}
    </div>
  );
}

export default NoteList;

function NoteItem({ note, onDelete, onChecked }) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => onDelete(note.id)}>❌</button>
          <input type="checkbox"
           value={note.id}
            id={note.id}
             name={note.id}
             checked={note.checked}
              onChange={onChecked} />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-us", options)}
      </div>
    </div>
  );
}
