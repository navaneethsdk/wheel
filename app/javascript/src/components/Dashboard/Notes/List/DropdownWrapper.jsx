import React from "react";

import { Dropdown } from "neetoui";

import DropdownMenu from "./DropdownMenu";

const DropdownWrapper = ({ handleEdit, handleDelete }) => {
  const { Menu, MenuItem } = Dropdown;

  return (
    <Dropdown customTarget={DropdownMenu}>
      <Menu>
        <MenuItem.Button onClick={handleEdit}>Edit</MenuItem.Button>
        <MenuItem.Button style="danger" onClick={handleDelete}>
          Delete
        </MenuItem.Button>
      </Menu>
    </Dropdown>
  );
};
export default DropdownWrapper;
