import { Grid, Avatar, Typography, Box, TextField } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

const CompanyDataTop = () => {
  const [value, setValue] = useState(new Date());

  return (
    <Box
      sx={{
        margin: "20px",
        display: "flex",
        color: "#919294",
        fontWeight: 600,
        fontSize: "12px",
        lineHeight: "140%",
        justifyContent: "space-between",
      }}
      fullwidth
    >
      <Avatar sx={{ height: "64px", width: "64px" }} variant="rounded" />
      <Box>
        <Typography sx={{ mb: "7px", fontSize: "12px", fontWeight: 600 }}>
          업체 등록일
        </Typography>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            container="inline"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}
        <form noValidate>
          <TextField
            variant="standard"
            id="date"
            type="date"
            defaultValue="2022-08-12"
          />
        </form>
      </Box>
    </Box>
  );
};

export default CompanyDataTop;
