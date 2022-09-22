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
  contact: null,
  tag: null,
};

export const TAG_VALUES = [
  { value: "gettingStarted", label: "Getting Started" },
  { value: "onboarding", label: "Onboarding" },
  { value: "userFlow", label: "User Flow" },
  { value: "ux", label: "UX" },
  { value: "bugs", label: "Bugs" },
  { value: "v2", label: "V2" },
];

export const CONTACTS = [
  { value: "ronaldRichard", label: "Ronald Richard" },
  { value: "jacobJones", label: "Jacob Jones" },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(CONTACTS.map(contact => contact.label)),
      value: yup.string().oneOf(CONTACTS.map(contact => contact.value)),
    }),
  tag: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(TAG_VALUES.map(tag => tag.label)),
      value: yup.string().oneOf(TAG_VALUES.map(tag => tag.value)),
    }),
});
