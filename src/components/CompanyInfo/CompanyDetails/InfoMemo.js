import { Button, Typography, Box } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import OutlinedInput from "@mui/material/OutlinedInput";

import axios from "../../../utils/axios";
import { useMutation, useQueryClient } from 'react-query';
import {useRef, useEffect  } from 'react'

const InfoMemo = (props) => {
  const data = props.data;
  // data = data.memos.reverse();

  const textRef = useRef();
  const memoDiv = useRef();

  const queryClient = useQueryClient();
  const mutation = useMutation(data => {
    return axios.post('/companys/memo/append', data);
  }, {
    onSuccess:  async() => { 
      textRef.current.value = '';
      await queryClient.invalidateQueries(['companys']);
    }
  });

  useEffect(()=> {
    memoDiv.current.scrollTo(0, memoDiv.current.scrollHeight);
  })

  return (
    <Box fullwidth>
      <Box
        ref = {memoDiv}
        sx={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "170px",
          mx: "20px",
          maxHeight: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        {
          data.memos.map((value, i)=>(
            <Box key={i} sx={{
              background: "#F8F8FA", width: "92%",
              padding: "16px",
              borderRadius: "8px",
              mb: "5px",
            }} >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "24px",
                color: "#919294",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {value.createdAt.split(' ')[0]}
              <DeleteOutlineIcon />
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "24px",
                color: "#000000",
              }}
            >
              {value.content}
            </Typography>
          </Box>
          ))
        }
      </Box>


      <Box
        sx={{
          marginTop: "31px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <OutlinedInput
          rows={4}
          sx={{
            height: "120px",
            fontSize: "13px",
            fontHeight: "24px",
            fontWeight: "400px",
            justifyContent: "flex-start",
            display: "flex",
          }}
          placeholder="업체 이슈를 메모해주세요."
          fullWidth
          multiline
          inputRef={textRef} 
        />
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          marginBottom: "20px",
          marginRight: "20px",
          float: "right",
        }}
      >
        <Button
          sx={{
            background: "#3855B3",
            fontWeight: 600,
            color: "#FFFFFF",
            width: "78px",
            height: "37px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "row",
            fontSize: "13px",
            lineHeight: "140%",
            padding: "9.5px",
            
          }}
          variant="contained"
          
          onClick={()=>{
            if(textRef.current.value)
              mutation.mutate({ content: textRef.current.value,  company_idx : data.idx})

          }}
        >
          메모등록
        </Button>
      </Box>
    </Box>
  );
};

export default InfoMemo;