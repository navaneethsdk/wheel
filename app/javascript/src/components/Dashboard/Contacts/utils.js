import { CONTACTS_NAVLINKS } from "./constants";

export const getActiveNavLink = key =>
  CONTACTS_NAVLINKS.find(navlink => key === navlink.key);

export const stringToDate = dateString => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(dateString);
  return `${date.getDate()} ${
    monthNames[date.getMonth()]
  }, ${date.getFullYear()}`;
};
