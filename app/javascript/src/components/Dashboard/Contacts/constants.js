import * as yup from "yup";

import List from "./List";

export const CONTACTS_NAVLINKS = [
  {
    key: "all",
    label: "All",
    path: "/contacts?tab=all",
    component: List,
  },
  {
    key: "archived",
    label: "Archived",
    path: "/contacts?tab=archived",
    component: List,
  },
  {
    key: "completed",
    label: "Completed",
    path: "/contacts?tab=completed",
    component: List,
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
    dataIndex: "createdAt",
    key: "createdAt",
    width: "25%",
  },
  {
    title: "",
    dataIndex: "iconButton",
    key: "id",
    width: "25%",
  },
];
