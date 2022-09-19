import { CONTACTS_NAVLINKS } from "./constants";

export const getActiveNavLink = key =>
  CONTACTS_NAVLINKS.find(navlink => key === navlink.key);
