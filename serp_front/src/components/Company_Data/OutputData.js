import { Grid, Typography, Box, TextField } from "@mui/material";
import { Fragment } from "react";

const rows = [
  {
    asdas: "주식회사 소더코드",
    asdasd: "오재현",
    asdasds: "",
  },
];

const OutputData = () => {
  return (
    <Box
      sx={{
        color: "#919294",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "140%",
        height: "210px"
      }}
      fullwidth3
    >
      <Box
        sx={{
          display: "flex",
          mb: "5px",
          ml: "20px",
        }}
      >
        <Box sx={{ width: "150px" }}>업체명</Box>
        <Box
          sx={{
            width: "100%",
            fontWeight: 600,
            color: "#3855B3",
          }}
        >
          주식회사 소더코드
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "5px",
          ml: "20px",
        }}
      >
        <Box sx={{ width: "150px" }}>대표자명</Box>
        <Box sx={{ width: "100%" }}>오재현</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          mb: "5px",
          ml: "20px",
        }}
      >
        <Box sx={{ width: "150px" }}>대표자명</Box>
        <Box sx={{ width: "100%" }}>오재현</Box>
      </Box>
    </Box>
  );
};

export default OutputData;
