import React from "react";

import { Dropdown } from "neetoui";

import DropdownMenu from "./DropdownMenu";

const NoteDropdown = ({ handleEditClick, handleDeleteClick }) => {
  const { Menu, MenuItem } = Dropdown;
  return (
    <Dropdown customTarget={DropdownMenu}>
      <Menu>
        <MenuItem.Button onClick={handleEditClick}>Edit</MenuItem.Button>
        <MenuItem.Button onClick={handleDeleteClick}>Delete</MenuItem.Button>
      </Menu>
    </Dropdown>
  );
};
export default NoteDropdown;
