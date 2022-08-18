import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, FormGroup, TextField, Box } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Autocomplete } from "@mui/material";

const SearchField = () => {
  const [value, setValue] = useState(null);

  return (
    <Box sx={{ mr: "10px" }}>
      <FormGroup row>
        <Autocomplete
          value={value}
          sx={{
            width: "264px",
            "& .MuiInputBase-input": {
              height: "20px",
              fontSize: "13px",
              fontWeight: 400,
            },
            "& .MuiOutlinedInput-root": {
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            },
          }}
          size="small"
          onChange={(event, newValue) => {
            if (typeof newValue === "string") {
              setValue({
                title: newValue,
              });
            } else if (newValue && newValue.inputValue) {
              // Create a new value from the user input
              setValue({
                title: newValue.inputValue,
              });
            } else {
              setValue(newValue);
            }
          }}
          clearIcon={
            <CancelRoundedIcon
              sx={{
                width: "15px",
                height: "15px",
                color: "rgba(24, 24, 25, 0.42)",
                padding: "0px",
              }}
            />
          }
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          options={top100Films}
          getOptionLabel={(option) => {
            if (typeof option === "string") {
              return option;
            }
            if (option.inputValue) {
              return option.inputValue;
            }
            return option.title;
          }}
          renderOption={(props, option) => <li {...props}>{option.title}</li>}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{
                width: 264,
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <SearchIcon
                    sx={{
                      width: "13.5px",
                      height: "13.5px",
                      color: "rgba(24, 24, 25, 0.42)",
                    }}
                  />
                ),
              }}
              placeholder="업체명, 연락처 등 검색"
              InputLabelProps={{ shrink: false }}
            />
          )}
        />
        <Button
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            background: "#FAFAFA",
            border: "1px solid #C4C4C4",
            color: "#97979B",
            fontWeight: 600,
            fontSize: "13px",
            width: "72px",
            height: "37px",
            "&:hover": { backgroundColor: "rgba(56, 85, 179, 0.08)" },
          }}
          variant="contained"
          disableElevation
        >
          검색
        </Button>
      </FormGroup>
    </Box>
  );
};

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

export default SearchField;
