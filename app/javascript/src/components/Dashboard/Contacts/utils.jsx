import React from "react";

import dayjs from "dayjs";
import { Typography, Avatar } from "neetoui";

import { CONTACTS_NAVLINKS, CONTACT_TABLE_COLUMN_DATA } from "./constants";
import ContactDropdown from "./Table/ContactDropdown";

const renderMenuColumn = handleDelete => {
  const menuColumn = () => <ContactDropdown handleDelete={handleDelete} />;

  return menuColumn;
};

const renderProfileColumn = (name, { role, profilePic }) => (
  <div className="flex flex-row items-center">
    <Avatar
      className="mr-2"
      size="large"
      user={{ name, imageUrl: profilePic }}
    />
    <div className="flex flex-col">
      <Typography style="h5">{name}</Typography>
      <Typography style="body3">{role}</Typography>
    </div>
  </div>
);

export const buildContactColumns = handleDelete =>
  CONTACT_TABLE_COLUMN_DATA.map(column => {
    if (column["dataIndex"] === "name") {
      return { ...column, render: renderProfileColumn };
    } else if (column["dataIndex"] === "iconButton") {
      return { ...column, render: renderMenuColumn(handleDelete) };
    }

    return column;
  });

export const getActiveNavLink = key =>
  CONTACTS_NAVLINKS.find(navlink => key === navlink.key);

export const modifyContactDateFormat = contacts =>
  contacts.map(contact => ({
    ...contact,
    createdAt: stringToDate(contact["createdAt"]),
  }));

export const stringToDate = dateString =>
  dayjs(dateString).format("D MMM, YYYY");
