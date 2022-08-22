import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, FormGroup, Box, IconButton, Input } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const SearchField = (props) => {
  const [value, setValue] = useState("");

useEffect(()=>{
  props.setSearchValue(value)
}, [value])

  return (
    <Box sx={{ mr: "10px" }}>
      <FormGroup row>
        <Input
          sx={{
            width: "264px",
            height: "37px",
            p: "9px",
            display: "flex",
            alignItems: "center",
            border: "1px solid #E6E7E9",
            borderRadius: "4px",
            fontWeight: 400,
            fontSize: "13px",
            background: "#FFFFFF",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            "& .MuiInputBase-input": {
              height: "20px",
              fontSize: "13px",
              fontWeight: 400,
            },
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disableUnderline
          placeholder={props.placeholder}
          startAdornment={
            <SearchIcon
              sx={{
                width: "18.25px",
                height: "18.25px",
                margin: "3.5px",
                color: "rgba(24, 24, 25, 0.42)",
              }}
            />
          }
          endAdornment={
            value && (
              <IconButton onClick={() => setValue("")} sx={{ padding: "4px" }}>
                <CancelRoundedIcon
                  sx={{
                    width: "15px",
                    height: "15px",
                    color: "rgba(24, 24, 25, 0.42)",
                    padding: "0px",
                  }}
                />
              </IconButton>
            )
          }
        />
      </FormGroup>
    </Box>
  );
};

export default SearchField;
