import * as yup from "yup";

import Home from "./Home";

export const NOTES_NAVLINKS = [
  {
    key: "all",
    label: "All",
    path: "/notes?tab=all",
    component: Home,
  },
  {
    key: "users",
    label: "Users",
    path: "/notes?tab=users",
    component: Home,
  },
  {
    key: "leads",
    label: "Leads",
    path: "/notes?tab=leads",
    component: Home,
  },
  {
    key: "visitors",
    label: "Visitors",
    path: "/notes?tab=visitors",
    component: Home,
  },
];

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];
