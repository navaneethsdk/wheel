import * as yup from "yup";

import ContactList from "./ContactList";
import Menu from "./Menu";

export const CONTACTS_NAVLINKS = [
  {
    key: "all",
    label: "All",
    description: "Manage user",
    path: "/contacts?tab=profile",
    component: ContactList,
  },
  {
    key: "archived",
    label: "Archived",
    description: "Manage email",
    path: "/contacts?tab=email",
    component: ContactList,
  },
  {
    key: "completed",
    label: "Completed",
    description: "Manage password",
    path: "/contacts?tab=password",
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
    title: "Name",
    dataIndex: "name",
    key: "id",
    width: "25%",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "id",
    width: "25%",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "id",
    width: "25%",
  },
  {
    title: "Options",
    dataIndex: "icon_button",
    fixed: "right",
    key: "id",
    width: "25%",
    render: Menu,
  },
];
