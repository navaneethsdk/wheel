import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { buildContactColumns, modifyContactDateFormat } from "../utils";

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

  return (
    <div className="contact-table-height table-striped-rows w-full">
      <NeetoUITable
        allowRowClick
        rowSelection
        columnData={buildContactColumns(handleDelete)}
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
