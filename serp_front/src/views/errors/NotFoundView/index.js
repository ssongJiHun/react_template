import React from "react";

import SensorCardList from "src/components/SensorCardList";
import Edit from "@mui/icons-material/Edit";
import TotalProductTable from "src/components/TotalProductTable";
import InOutHistory from "src/components/InOutHistory";

import { Box, Typography } from "@mui/material";
import SearchField from "src/components/SearchField";
import Registration_Button from "src/components/Registration_Button";
import TotalAccountTable from "src/components/TotalAccountTable";

const NotFoundView = () => {
  return (
    <div width="100%">
      <Box sx={{ display: "flex", mb: "20px" }}>
        <SearchField />
        <Registration_Button />
      </Box>
      <TotalAccountTable />
    </div>
  );
};

export default NotFoundView;
