import ToastMessage from "./ToastMessage";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const openNotes = allNotes - completedNotes;

  if (!allNotes)
    return (
      <ToastMessage>
        ☹️<span>NO Notes has been already added.</span><span>&times;</span>
      </ToastMessage>
    );

  return (
    <ul className="note-status">
      <li>
        All
        <span>{allNotes}</span>
      </li>
      <li>
        Completed
        <span>{completedNotes}</span>
      </li>
      <li>
        open
        <span>{openNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
