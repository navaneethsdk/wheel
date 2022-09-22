import * as yup from "yup";

import ContactList from "./ContactList";

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

export const ROLE = [
  { value: "owner", label: "Owner" },
  { value: "admin", label: "Admin" },
  { value: "member", label: "Member" },
];

export const CONTACT_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const CONTACT_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLE.map(role => role.label)),
      value: yup.string().oneOf(ROLE.map(role => role.value)),
    }),
});

export const CONTACT_TABLE_COLUMN_DATA = [
  {
    title: "NAME & ROLE",
    dataIndex: "name",
    key: "name",
    width: "25%",
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
  },
];
