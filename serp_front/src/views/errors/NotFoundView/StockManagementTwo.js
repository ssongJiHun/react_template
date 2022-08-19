import React from "react";

import { Box, Typography } from "@mui/material";
import SearchField from "src/components/SearchField";
import StockManagementTable from "src/components/StockManagementTable";
import DefaultBox from "src/components/DefaultBox";

const StockManagementTwo = () => {
  return (
    <div width="100%">
      <SearchField />
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "14px",
          my: "20px",
        }}
      >
        총 제품(0)
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "100%", mr: "13px" }}>
          <StockManagementTable />
        </Box>
        <Box sx={{ width: "100%" }}>
          <DefaultBox />
        </Box>
      </Box>
    </div>
  );
};

export default StockManagementTwo;
