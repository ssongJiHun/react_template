import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Button, FormGroup, TextField, Box } from "@mui/material";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import { Autocomplete, createFilterOptions } from "@mui/material";
import {matchSorter} from 'match-sorter'

const SearchField = (props) => {
  const {companys, setViewData} = props; // 원본 전체 데이터

  const [inputValue, setInputValue] = useState('');
  const tableKeys = ['company_name', 'represent', 'corporate_number', 'description', 'director', 'position', 'email', 'phone_number', 'address']
  const filterOptions = (options, { inputValue }) =>  matchSorter(options, inputValue, {keys: tableKeys});

  const defaultProps = {
    options: inputValue !== '' ? companys : [],
    getOptionLabel: (option) => option.company_name,
    filterOptions : filterOptions,
    autoHighlight : true,
    clearOnBlur : true,
    freeSolo : true,
  };
  
  return (
    <Box sx={{ mr: "10px" }}>
      <FormGroup row>
        <Autocomplete
          {...defaultProps}
          sx={{
            backgroundColor: '#fff',
            "& .MuiInputBase-input": {
              fontSize: 13,
              fontWeight: 400,
              width: 264,
              height: 0,
            },
            "& .MuiOutlinedInput-root": {
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
              width: 264,
              height: 37,
            },
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
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          renderInput={(params) =>
            <TextField {...params} placeholder={props.placeholder}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <SearchIcon sx={{ width: "13.5px", height: "13.5px", color: "rgba(24, 24, 25, 0.42)" }} />
                ),
              }}
            />}
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
          onClick={() => { setViewData(matchSorter(companys, inputValue, {keys: tableKeys})) }}
          variant="contained"
          disableElevation
        >
          검색
        </Button>
      </FormGroup>
    </Box>
  );
};



export default SearchField;