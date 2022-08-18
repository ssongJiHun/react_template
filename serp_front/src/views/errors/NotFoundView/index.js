import React from "react";

import SearchField from "src/components/SearchField";
import Registration_Button from "src/components/Registration_Button";
import MemoData from "src/components/Company_Data/MemoData";
import DefaultBox from "src/components/DefaultBox";
import CompanyData from "src/components/Company_Data/CompanyData";
import CompanyListTable from "src/components/CompanyListTable";
import SensorCardList from "src/components/SensorCardList";
import Edit from "@mui/icons-material/Edit";
import TotalProductTable from "src/components/TotalProductTable";

import { Box, Typography } from "@mui/material";

const NotFoundView = () => {
  return (
    <div width="100%">
      {/* <Box sx={{ width: "100%", minWidth: "440px" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <SearchField />
          <Registration_Button />
        </Box>
        <Typography
          sx={{ fontWeight: 600, fontSize: "12px", mt: "19px", mb: "10px" }}
        >
          총 업체(0)
        </Typography>
        <Box sx={{ display: "flex" }}>
          <CompanyListTable />
          <CompanyData />
        </Box>
      </Box> */}
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
        <Box sx={{ width: "50%", height: "414px" }}>
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
                mt: "15px",
                mb: "10px",
              }}
            >
              출고하기
            </Typography>
            <TotalProductTable />
          </Box>
        </Box>
        <Box sx={{ width: "50%" }}>
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
            출고하기
          </Typography>
          <DefaultBox />
        </Box>
      </Box>
    </div>
  );
};

export default NotFoundView;
