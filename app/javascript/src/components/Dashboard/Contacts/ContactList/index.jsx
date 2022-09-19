import React, { useState, useEffect } from "react";

import EmptyContactsListImage from "images/EmptyNotesList";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import contactApi from "apis/contact";
import EmptyState from "components/Common/EmptyState";

import NewContactPane from "../Pane/Create";
import Table from "../Table";

const Contacts = () => {
  const [loading, setLoading] = useState(true);
  const [showNewContactPane, setShowNewContactPane] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [contacts, setContacts] = useState([]);
  const [selectedContactIds, setSelectedContactIds] = useState([]);

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

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Container>
      <Header
        menuBarToggle={function noRefCheck() {}}
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
        <>
          {/* <SubHeader
            rightActionBlock={
              <Button
                disabled={!selectedContactIds.length}
                icon={Delete}
                label="Delete"
                onClick={() => setShowDeleteAlert(true)}
              />
            }
          /> */}
          <Table
            contacts={contacts}
            selectedContactIds={selectedContactIds}
            setSelectedContactIds={setSelectedContactIds}
          />
        </>
      ) : (
        <EmptyState
          image={EmptyContactsListImage}
          primaryAction={() => setShowNewContactPane(true)}
          primaryActionLabel="Add New Contact"
          subtitle="Add your contacts to send customized emails to them."
          title="Looks like you don't have any contacts!"
        />
      )}
      <NewContactPane
        fetchContacts={fetchContacts}
        setShowPane={setShowNewContactPane}
        showPane={showNewContactPane}
      />
    </Container>
  );
};

export default Contacts;
