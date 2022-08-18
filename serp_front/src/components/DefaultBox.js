import { Box } from "@mui/material";

const DefaultBox = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
        height: "414px",
        width: "100%",
        minWidth: "708px",
        fontWeight: 400,
        fontSize: "15px",
        color: "#919294",
        mr: "20px",
      }}
    >
      업체를 선택해주세요.
    </Box>
  );
};

export default DefaultBox;
