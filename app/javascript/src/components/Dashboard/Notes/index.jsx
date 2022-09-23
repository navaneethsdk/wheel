import React, { useState, useEffect } from "react";

import { Settings, Plus, Search } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";
import queryString from "query-string";

import { NOTES_NAVLINKS } from "./constants";
import { getActiveNavLink } from "./utils";

const Notes = ({ history, location }) => {
  const { tab } = queryString.parse(location.search);
  const [activeNavlink, setActiveNavlink] = useState(
    () => getActiveNavLink(tab) || NOTES_NAVLINKS[0]
  );

  useEffect(() => {
    history.push(activeNavlink?.path);
  }, [activeNavlink]);

  if (location.state?.resetTab) {
    location.state.resetTab = null;
    setActiveNavlink(() => getActiveNavLink(tab));
  }

  return (
    <>
      <MenuBar showMenu title="Notes">
        {NOTES_NAVLINKS.map(navlink => (
          <MenuBar.Block
            active={tab === navlink.key}
            key={navlink.key}
            label={navlink.label}
            onClick={() => setActiveNavlink(navlink)}
          />
        ))}
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => {},
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Settings,
            },
            {
              icon: Plus,
            },
            {
              icon: Search,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Block count={80} label="Europe" />
        <MenuBar.Block count={60} label="Middle-East" />
        <MenuBar.Block count={60} label="Asia" />
      </MenuBar>
      <activeNavlink.component />
    </>
  );
};

export default Notes;
