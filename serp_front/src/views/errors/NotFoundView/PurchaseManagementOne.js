import React from "react";

import SensorCardList from "src/components/SensorCardList";
import Edit from "@mui/icons-material/Edit";
import TotalProductTable from "src/components/TotalProductTable";
import InOutHistory from "src/components/InOutHistory";

import { Box, Typography } from "@mui/material";

const PurchaseManage = () => {
  return (
    <div width="100%">
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "14px",
        }}
      >
        센서 구매수량
        <Edit
          sx={{ ml: "13px", color: "#919294", width: "14px", height: "14px" }}
        />
      </Typography>
      <SensorCardList />
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          fontSize: "14px",
          mt: "15px",
          mb: "10px",
        }}
      >
        센서 출고수량
      </Typography>
      <SensorCardList />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: "100%", mr: "13px" }}>
          <Box>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
                fontSize: "14px",
                mt: "15px",
                mb: "10px",
              }}
            >
              구매한 수량
            </Typography>
            <TotalProductTable />
          </Box>
          <Box sx={{ mt: "26px" }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: 600,
                fontSize: "14px",
                mb: "10px",
              }}
            >
              출고하기
            </Typography>
            <TotalProductTable />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "428.5px" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontWeight: 600,
              fontSize: "14px",
              mt: "15px",
              mb: "10px",
            }}
          >
            구매/출고 내역
          </Typography>
          <InOutHistory />
        </Box>
      </Box>
    </div>
  );
};

export default PurchaseManage;
