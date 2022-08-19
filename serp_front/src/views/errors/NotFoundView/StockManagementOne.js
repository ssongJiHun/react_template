import React from "react";

import SensorCardList from "src/components/SensorCardList";
import InOutHistory from "src/components/InOutHistory";

import { Box, Typography } from "@mui/material";
import StockingTable from "src/components/Stock_Table/StockingTable";

const StockManagementOne = () => {
  return (
    <div width="100%">
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "14px",
          mt: "20px",
          mb: "10px",
        }}
      >
        재고현황
      </Typography>
      <SensorCardList />
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "14px",
          mt: "20px",
          mb: "10px",
        }}
      >
        재고 입고하기
      </Typography>
      <StockingTable />
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "14px",
          mt: "20px",
          mb: "10px",
        }}
      >
        입고내역
      </Typography>
      <Box sx={{ width: "100%", height: "197px" }}>
        <InOutHistory />
      </Box>
    </div>
  );
};

export default StockManagementOne;
