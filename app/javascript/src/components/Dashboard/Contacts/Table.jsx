import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACT_TABLE_COLUMN_DATA } from "./constants";

const Table = ({
  selectedContactIds,
  setSelectedContactIds,
  contacts = [],
}) => (
  <div className="notes-table-height w-full">
    <NeetoUITable
      allowRowClick
      rowSelection
      columnData={CONTACT_TABLE_COLUMN_DATA}
      currentPageNumber={1}
      defaultPageSize={9}
      rowData={contacts}
      selectedRowKeys={selectedContactIds}
      onRowSelect={selectedRowKeys => setSelectedContactIds(selectedRowKeys)}
    />
  </div>
);

export default Table;
