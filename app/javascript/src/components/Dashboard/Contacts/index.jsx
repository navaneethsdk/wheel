import React, { useState, useEffect } from "react";

import { Settings, Plus, Search } from "@bigbinary/neeto-icons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";
import queryString from "query-string";

import { CONTACTS_NAVLINKS } from "./constants";
import { getActiveNavLink } from "./utils";

const Contacts = ({ history, location }) => {
  const { tab } = queryString.parse(location.search);
  const [activeNavlink, setActiveNavlink] = useState(
    () => getActiveNavLink(tab) || CONTACTS_NAVLINKS[0]
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
      <MenuBar showMenu title="Contacts">
        {CONTACTS_NAVLINKS.map(navlink => (
          <MenuBar.Block
            active={tab === navlink.key}
            key={navlink.key}
            label={navlink.label}
            onClick={() => setActiveNavlink(navlink)}
          />
        ))}
        <MenuBar.SubTitle>
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
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
      </MenuBar>
      {<activeNavlink.component />}
    </>
  );
};

export default Contacts;
