import { Box } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const StockQuantity = () => {
  return (
    <Box sx={{ width: "100%", margin: "3px" }}>
      <Box>
        <Box
          sx={{
            border: "1px solid #3855B3",
            borderRadius: "4px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            color: "#919294",
            background: "#EFF3FF",
            margin: "2px"
          }}
        >
          <Box
            sx={{
              width: "75%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ml: "17px"
            }}
          >
            1
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddCircleIcon
              sx={{ color: "#3855B3", width: "16px", height: "16px" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            height: "16px",
            width: "40%",
            border: "1px solid #919294",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: "12px",
            color: "#919294",
            px: "18.71px",
            py: "4px",
            margin: "2px"
          }}
        >
          수정
        </Box>
        <Box
          sx={{
            height: "16px",
            width: "40%",
            border: "1px solid #3855B3",
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
            fontSize: "12px",
            color: "#3855B3",
            px: "18.71px",
            py: "4px",
            margin: "2px",
          }}
        >
          고정
        </Box>
      </Box>
    </Box>
  );
};

export default StockQuantity;
