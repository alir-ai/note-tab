import { useState } from "react";

function AddNewNote({ setNotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return null;
    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTitle("");
    setDescription("");
    console.log(newNote);
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className="add-new-note">
      <h2>AddNewNote</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-field"
          placeholder="Note title..."
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-field"
          placeholder="Note description..."
        />
        <button type="submit" className="btn btn--primary">
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
