import React from "react";

import { Dropdown } from "neetoui";

import DropdownMenu from "./DropdownMenu";

const ContactDropdown = ({ handleDelete }) => {
  const { Menu, MenuItem } = Dropdown;
  return (
    <Dropdown customTarget={DropdownMenu}>
      <Menu>
        <MenuItem.Button onClick={handleDelete}>Delete</MenuItem.Button>
      </Menu>
    </Dropdown>
  );
};
export default ContactDropdown;
