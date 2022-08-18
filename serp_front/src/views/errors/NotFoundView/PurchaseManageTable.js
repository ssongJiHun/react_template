import React from "react";

import { Box } from "@mui/material";
import SearchField from "src/components/SearchField";
import Registration_Button from "src/components/Registration_Button";
import TotalAccountTable from "src/components/TotalAccountTable";

const PurchaseManageTable = () => {
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

export default PurchaseManageTable;
