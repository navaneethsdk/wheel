import { NOTES_NAVLINKS } from "./constants";

export const getActiveNavLink = key =>
  NOTES_NAVLINKS.find(navlink => key === navlink.key);
