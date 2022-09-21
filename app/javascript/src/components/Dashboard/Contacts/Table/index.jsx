import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACT_TABLE_COLUMN_DATA } from "../constants";
import { stringToDate } from "../utils";

const Table = ({
  selectedContactIds,
  setSelectedContactIds,
  contacts = [],
}) => {
  const modifyContactDateFormat = contacts =>
    contacts.map(contact => ({
      ...contact,
      created_at: stringToDate(contact["created_at"]),
    }));
  return (
    <div className="contact-table-height table-striped-rows w-full">
      <NeetoUITable
        allowRowClick
        rowSelection
        columnData={CONTACT_TABLE_COLUMN_DATA}
        currentPageNumber={1}
        defaultPageSize={9}
        rowData={modifyContactDateFormat(contacts)}
        selectedRowKeys={selectedContactIds}
        onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
      />
    </div>
  );
};

export default Table;
