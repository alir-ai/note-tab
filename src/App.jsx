import { useState } from "react";
import "./App.css";
import AddNewNote from "./component/AddNewNote";
import NoteList from "./component/NoteList";
function App() {
  const [notes, setNotes] = useState([]);
  
  const handleDeleteNote = (id) => {
    // const filteredNotes = notes.filter((n) => n.id !== id);
    // setNotes(filteredNotes)

    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== id));
  };
  const handleCheckedNote = (e) => {
    const noteId = Number(e.target.value);
    // const newNotes = notes.map((note) =>
    //   note.id === noteId ? { ...note, completed: !note.completed } : note
    // );
    // setNotes(newNotes);

    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === noteId ? { ...note, completed: !note.completed } : note
      )
    );
  };

  return (
    <div className="container">
      <div className="note-header">my header</div>
      <div className="note-app">
        <AddNewNote setNotes={setNotes} />
        <div className="note-container">
          <NoteList
            notes={notes}
            onDelete={handleDeleteNote}
            onChecked={handleCheckedNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
