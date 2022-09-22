import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { NOTES_NAVLINKS } from "./constants";

dayjs.extend(relativeTime);

export const getActiveNavLink = key =>
  NOTES_NAVLINKS.find(navlink => key === navlink.key);

export const findRelativeTime = time => dayjs(time).fromNow();

export const timeToTooltipContentFormat = time =>
  dayjs(time).format("dddd, h A");
