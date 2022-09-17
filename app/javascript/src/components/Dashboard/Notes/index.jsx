import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/Common/EmptyState";

import NodeList from "./NoteList";
import NewNotePane from "./Pane/Create";

const Notes = () => {
  const [loading, setLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      setLoading(true);
      const { data } = await notesApi.fetch();
      setNotes(data.notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        menuBarToggle={function noRefCheck() {}}
        title="All Notes"
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add New Note"
            onClick={() => setShowNewNotePane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {notes.length ? (
        <>
          {/* <SubHeader
            rightActionBlock={
              <Button
                disabled={!selectedNoteIds.length}
                icon={Delete}
                label="Delete"
                onClick={() => setShowDeleteAlert(true)}
              />
            }
          /> */}
          {/* <Table
            fetchNotes={fetchNotes}
            notes={notes}
            setSelectedNoteIds={setSelectedNoteIds}
          /> */}
          <NodeList fetchNotes={fetchNotes} notes={notes} />
        </>
      ) : (
        <EmptyState
          image={EmptyNotesListImage}
          primaryAction={() => setShowNewNotePane(true)}
          primaryActionLabel="Add New Note"
          subtitle="Add your notes to send customized emails to them."
          title="Looks like you don't have any notes!"
        />
      )}
      <NewNotePane
        fetchNotes={fetchNotes}
        setShowPane={setShowNewNotePane}
        showPane={showNewNotePane}
      />
    </Container>
  );
};

export default Notes;
