import React, { useState, useEffect } from "react";

import EmptyContactsListImage from "images/EmptyNotesList";
import { Button, PageLoader, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import contactApi from "apis/contact";
import EmptyState from "components/Common/EmptyState";

import DeleteAlert from "./DeleteAlert";
import Create from "./Pane/Create";
import Table from "./Table";

const List = () => {
  const [loading, setLoading] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [selectedContactIds, setSelectedContactIds] = useState([]);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [contactToBeDeleted, setContactToBeDeleted] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const { data } = await contactApi.fetch();
      setContacts(data.contacts);
    } catch (error) {
      logger.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowDeleteAlert(false);
    Toastr.success("Contact Deleted Successfully.");
  };

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        title="All Contacts"
        actionBlock={
          <Button
            icon="ri-add-line"
            label="Add New Contact"
            onClick={() => setShowNewContactPane(true)}
          />
        }
        searchProps={{
          value: searchTerm,
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {contacts.length ? (
        <Table
          contacts={contacts}
          selectedContactIds={selectedContactIds}
          setContactToBeDeleted={setContactToBeDeleted}
          setSelectedContactIds={setSelectedContactIds}
          setShowDeleteAlert={setShowDeleteAlert}
        />
      ) : (
        <EmptyState
          image={EmptyContactsListImage}
          primaryAction={() => setShowNewContactPane(true)}
          primaryActionLabel="Add New Contact"
          subtitle="Add your contacts to send customized emails to them."
          title="Looks like you don't have any contacts!"
        />
      )}
      <Create
        fetchContacts={fetchContacts}
        setShowPane={setShowNewContactPane}
        showPane={showNewContactPane}
      />
      {showDeleteAlert && (
        <DeleteAlert
          contactToBeDeleted={contactToBeDeleted}
          refetch={fetchContacts}
          setContactToBeDeleted={setContactToBeDeleted}
          onClose={handleClose}
        />
      )}
    </Container>
  );
};

export default List;
