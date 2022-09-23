import React from "react";

import { MenuVertical } from "neetoicons";

const DropdownMenu = () => (
  <button className="flex h-5 w-8 flex-row items-center justify-center rounded-sm py-1.5 px-2">
    <MenuVertical
      className="order-none flex-none flex-grow-0"
      color="#68737D"
      size={16}
    />
  </button>
);

export default DropdownMenu;
