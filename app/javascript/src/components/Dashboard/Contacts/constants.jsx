import React from "react";

import { Typography, Avatar } from "@bigbinary/neetoui";
import * as yup from "yup";

import ContactList from "./ContactList";
import Menu from "./Table/Menu";

export const CONTACTS_NAVLINKS = [
  {
    key: "all",
    label: "All",
    path: "/contacts?tab=all",
    component: ContactList,
  },
  {
    key: "archived",
    label: "Archived",
    path: "/contacts?tab=archived",
    component: ContactList,
  },
  {
    key: "completed",
    label: "Completed",
    path: "/contacts?tab=completed",
    component: ContactList,
  },
];

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const CONTACT_TABLE_COLUMN_DATA = [
  {
    title: "NAME & ROLE",
    dataIndex: "name",
    key: "name",
    width: "25%",
    render: (name, { role, profile_pic }) => (
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
    ),
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "email",
    width: "25%",
  },
  {
    title: "CREATED AT",
    dataIndex: "created_at",
    key: "created_at",
    width: "25%",
  },
  {
    title: "",
    dataIndex: "icon_button",
    key: "id",
    width: "25%",
    render: Menu,
  },
];
