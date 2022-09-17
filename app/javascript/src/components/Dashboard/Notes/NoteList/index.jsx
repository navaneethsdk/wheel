import React, { useState } from "react";

import Note from "./Note";

import DeleteAlert from "../DeleteAlert";
import EditNotePane from "../Pane/Edit";

const NoteList = ({ notes = [], fetchNotes }) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedDeleteNoteIds, setSelectedDeleteNoteIds] = useState([]);
  return (
    <>
      <div>
        {notes.map((note, idx) => (
          <Note
            key={idx}
            note={note}
            setSelectedDeleteNoteIds={setSelectedDeleteNoteIds}
            setSelectedNote={setSelectedNote}
            setShowDeleteAlert={setShowDeleteAlert}
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
      {showDeleteAlert && (
        <DeleteAlert
          refetch={fetchNotes}
          selectedDeleteNoteIds={selectedDeleteNoteIds}
          setSelectedDeleteNoteIds={setSelectedDeleteNoteIds}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </>
  );
};

export default NoteList;
