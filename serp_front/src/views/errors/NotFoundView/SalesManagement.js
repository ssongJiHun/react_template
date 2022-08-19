import React from "react";

import SensorCardList from "src/components/SensorCardList";
import InOutHistory from "src/components/InOutHistory";

import { Box, Typography, Button } from "@mui/material";
import SearchField from "src/components/SearchField";
import CachedIcon from "@mui/icons-material/Cached";
import OrderInfoDetail from "src/components/OrderInfoDetail";
import CompanyOrderTable from "src/components/CompanyOrderTable";

const SalesManagement = () => {
  return (
    <div width="100%">
      <Box
        sx={{
          display: "flex",
          mb: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchField />
        <Button
          sx={{
            background: "#3855B3",
            fontWeight: 600,
            color: "#FFFFFF",
            width: "65px",
            height: "32px",
            padding: "9.5px 0px",
            fontSize: "12px",
            "& .MuiButton-startIcon": {
              margin: "0px",
            },
          }}
          variant="contained"
          startIcon={<CachedIcon />}
        >
          초기화
        </Button>
      </Box>
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
        발주현황
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
              발주하기
            </Typography>
            <CompanyOrderTable />
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
              발주 제품 상세정보
            </Typography>
            <OrderInfoDetail />
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "539px" }}>
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
            발주내역
          </Typography>
          <InOutHistory />
        </Box>
      </Box>
    </div>
  );
};

export default SalesManagement;
