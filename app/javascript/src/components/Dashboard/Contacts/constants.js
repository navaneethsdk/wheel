import * as yup from "yup";

import ContactList from "./ContactList";
import Designation from "./Table/Designation";
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
    title: "NAME",
    dataIndex: "id",
    key: "id",
    width: "25%",
    render: Designation,
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    key: "id",
    width: "25%",
  },
  {
    title: "CREATED AT",
    dataIndex: "created_at",
    key: "id",
    width: "25%",
  },
  {
    title: "",
    dataIndex: "icon_button",
    fixed: "right",
    key: "id",
    width: "25%",
    render: Menu,
  },
];
