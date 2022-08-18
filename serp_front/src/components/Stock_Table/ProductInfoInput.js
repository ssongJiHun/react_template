import { Box, InputBase } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const ProductInfoInput = () => {
  return (
    <Box sx={{ width: "100%", mb: "5px"}}>
      <Box
        sx={{
          background: "#F0F1F2",
          borderRadius: "4px",
          padding: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "32px",
              background: "#FFFFFF",
              borderRadius: "4px",
              margin: "2.5px",
              fontSize: "10px",
              padding: "2px",
              fontWeight: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "10px", fontWeight: 600 }}
              placeholder="IMEI"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "32px",
              background: "#FFFFFF",
              borderRadius: "4px",
              margin: "2.5px",
              fontSize: "10px",
              padding: "2px",
              fontWeight: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "10px", fontWeight: 600 }}
              placeholder="USIM"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <RemoveCircleIcon sx={{ color: "#B91C1C" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductInfoInput;
