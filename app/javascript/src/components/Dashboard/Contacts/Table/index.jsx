import React from "react";

import { Table as NeetoUITable, Typography, Avatar } from "neetoui";

import ContactDropdown from "./ContactDropdown";

import { CONTACT_TABLE_COLUMN_DATA } from "../constants";
import { stringToDate } from "../utils";

const Table = ({
  selectedContactIds,
  setContactToBeDeleted,
  setSelectedContactIds,
  setShowDeleteAlert,
  contacts = [],
}) => {
  const handleDelete = () => {
    setShowDeleteAlert(true);
  };
  const modifyContactDateFormat = contacts =>
    contacts.map(contact => ({
      ...contact,
      created_at: stringToDate(contact["created_at"]),
    }));
  const renderMenuColumn = () => (
    <ContactDropdown handleDelete={handleDelete} />
  );
  const renderProfileColumn = (name, { role, profile_pic }) => (
    <div className="flex flex-row items-center">
      <Avatar
        className="mr-2"
        size="large"
        user={{ name, imageUrl: profile_pic }}
      />
      <div className="flex flex-col">
        <Typography style="h5">{name}</Typography>
        <Typography style="body3">{role}</Typography>
      </div>
    </div>
  );
  const buildContactColumns = columnsWithNoRenderedComponents =>
    columnsWithNoRenderedComponents.map(column => {
      if (column["dataIndex"] === "name") {
        return { ...column, render: renderProfileColumn };
      } else if (column["dataIndex"] === "icon_button") {
        return { ...column, render: renderMenuColumn };
      }

      return column;
    });
  return (
    <div className="contact-table-height table-striped-rows w-full">
      <NeetoUITable
        allowRowClick
        rowSelection
        columnData={buildContactColumns(CONTACT_TABLE_COLUMN_DATA)}
        currentPageNumber={1}
        defaultPageSize={9}
        rowData={modifyContactDateFormat(contacts)}
        selectedRowKeys={selectedContactIds}
        onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
        onRowClick={(_, note) => {
          setContactToBeDeleted(note);
        }}
      />
    </div>
  );
};

export default Table;
