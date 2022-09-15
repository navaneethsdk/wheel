import React, { useState } from "react";

import Note from "./Note";

import EditNotePane from "../Pane/Edit";

const NoteList = ({ notes = [], fetchNotes }) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  return (
    <>
      <div>
        {notes.map((note, idx) => (
          <Note
            key={idx}
            note={note}
            setSelectedNote={setSelectedNote}
            setShowEditNote={setShowEditNote}
          />
        ))}
      </div>
      <EditNotePane
        fetchNotes={fetchNotes}
        note={selectedNote}
        setShowPane={setShowEditNote}
        showPane={showEditNote}
      />
    </>
  );
};

export default NoteList;
