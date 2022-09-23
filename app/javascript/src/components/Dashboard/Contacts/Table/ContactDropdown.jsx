import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Dropdown } from "neetoui";

const ContactDropdown = ({ handleDelete }) => {
  const { Menu, MenuItem } = Dropdown;
  const renderDropdownMenu = () => <MenuHorizontal size={16} />;

  return (
    <Dropdown customTarget={renderDropdownMenu}>
      <Menu>
        <MenuItem.Button style="danger" onClick={handleDelete}>
          Delete
        </MenuItem.Button>
      </Menu>
    </Dropdown>
  );
};
export default ContactDropdown;
