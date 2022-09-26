import React, { useState } from "react";

import uuid from "uuid";

import Note from "./Note";

import DeleteAlert from "../DeleteAlert";
import EditNotePane from "../Pane/Edit";

const List = ({ notes = [], fetchNotes }) => {
  const [showEditNote, setShowEditNote] = useState(false);
  const [noteToBeEdited, setNoteToBeEdited] = useState({});
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [noteToBeDeleted, setNoteToBeDeleted] = useState({});

  return (
    <>
      <div>
        {notes.map(note => (
          <Note
            key={uuid.v1()}
            note={note}
            setNoteToBeDeleted={setNoteToBeDeleted}
            setNoteToBeEdited={setNoteToBeEdited}
            setShowDeleteAlert={setShowDeleteAlert}
            setShowEditNote={setShowEditNote}
          />
        ))}
      </div>
      <EditNotePane
        fetchNotes={fetchNotes}
        note={noteToBeEdited}
        setShowPane={setShowEditNote}
        showPane={showEditNote}
      />
      {showDeleteAlert && (
        <DeleteAlert
          noteToBeDeleted={noteToBeDeleted}
          refetch={fetchNotes}
          setNoteToBeDeleted={setNoteToBeDeleted}
          onClose={() => setShowDeleteAlert(false)}
        />
      )}
    </>
  );
};

export default List;
