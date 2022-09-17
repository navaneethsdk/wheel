import React from "react";

import { Dropdown } from "@bigbinary/neetoui";

import Menu from "./Menu";

const DropDownNote = ({ handleEditClick, handleDeleteClick }) => (
  <div>
    <Dropdown customTarget={Menu}>
      <li onClick={handleEditClick}>Edit</li>
      <li onClick={handleDeleteClick}>Delete</li>
    </Dropdown>
  </div>
);
export default DropDownNote;
