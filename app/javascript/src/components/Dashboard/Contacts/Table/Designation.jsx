import React from "react";

import { Typography, Avatar } from "@bigbinary/neetoui";

const Designation = ({ name = "Richard Hanson", role = "Owner" }) => (
  <div className="flex flex-row items-center">
    <Avatar className="mr-2" size="large" user={{ name }} />
    <div className="flex flex-col">
      <Typography style="h5">{name}</Typography>
      <Typography style="body3">{role}</Typography>
    </div>
  </div>
);

export default Designation;
