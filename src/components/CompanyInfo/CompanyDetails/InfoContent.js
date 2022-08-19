import { Box } from "@mui/material";

const InfoContent = (props) => {
  const data = props.data;
  const rows = [
    { name: "업체명",  data: data.company_name },
    { name: "대표자명", data: data.represent },
    { name: "사업자 등록번호", data: data.corporate_number },
    { name: "종목", data: data.description },
    { name: "담당자명", data: data.director },
    { name: "담당자 직함", data: data.position },
    { name: "연락처", data: data.phone_number },
    { name: "이메일", data: data.email },
    { name: "사업장 소재지", data: data.address }
  ]

  const style = { fontWeight: 600, color: "#3855B3" }
  return (
    <Box
      sx={{
        color: "#919294",
        fontWeight: 400,
        fontSize: "12px",
        lineHeight: "140%",
        height: "210px"
      }}
      fullwidth
    >
      {
        rows.map((value, i) => (
          <Box key={i} sx={{ display: "flex", mb: "5px", ml: "20px", }}>
            <Box sx={{width: "150px",}}>{value.name}</Box>
            <Box sx={ i === 0 ? {width: "100%", ...style} : { width: "100%" }}>{value.data}</Box>
          </Box>
        ))
      }


    </Box>
  );
};

export default InfoContent;