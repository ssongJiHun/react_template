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
        width: "100%",
        height: "100%",
        fontWeight: 400,
        fontSize: "15px",
        color: "#919294",
        background: "#FFFFFF",
      }}
    >
      업체를 선택해주세요.
    </Box>
  );
};

export default DefaultBox;
