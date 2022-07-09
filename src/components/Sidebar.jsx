import React, {useState} from "react";

export default function Sidebar(props) {
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <p className="text-header">{note.body.split("\n")[0]}</p>
        <p className="text-snippet">{note.body.split("\n")[1]}</p>
        <p className="text-snippet">{`${note.date[0]} ${note.date[1]} ${note.date[2]} ${note.date[3]} ${note.date[4]}`}</p>
        <button
          className="delete-btn"
          onClick={(event) => props.deleteNote(event, note.id)}
        >
          <i className="gg-trash trash-icon"></i>
        </button>
      </div>
    </div>
  ));

  const [hideSide, setHideSide] = useState(true);

  return (
    <div className={`pane sidebar ${hideSide ? "nav-spacing" : "side-hide"}`}>
      <div className="sidebar-button-div">
        <button
          className="sidebar-button"
          onClick={() => setHideSide((prev) => !prev)}
        >
          {hideSide ? "<" : ">"}
        </button>
      </div>
      <div className="sidebar--header">
        <button className="new-note-btn" onClick={props.newNote}>
          Create Note
        </button>
        <div className="note-header-div">
          <p>Notes</p>
        </div>
      </div>
      <div className="display-notes">{noteElements}</div>
    </div>
  );
}
