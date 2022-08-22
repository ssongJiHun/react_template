import {  Avatar, Typography, Box, TextField } from "@mui/material";
import axios from "../../../utils/axios";
import { useMutation, useQueryClient } from 'react-query';


const InfoTitle = (props) => {
  const company = props.data;
  
  const queryClient = useQueryClient();
  const mutation = useMutation(data => {
    return axios.get('/companys/info/createdAt', { params: data });
  }, {
    onSuccess: () => { queryClient.invalidateQueries("companys"); }
  });

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
          <TextField
            variant="standard"
            id="date"
            type="date"
            value={company.createdAt}

            onChange={(e)=>{
              mutation.mutate({ idx : company.idx, createdAt : e.target.value }) 
            }}
          />
      </Box>
    </Box>
  );
};

export default InfoTitle;