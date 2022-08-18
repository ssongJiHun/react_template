// import react from "react";
import { Box, Typography, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const SensorCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "43px",
        alignItems: "center",
        background: "#FFFFFF",
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
        justifyContent: "center",
        padding: "15px",
        margin: "5px",
      }}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CircleIcon
              sx={{
                color: "#60A5FA",
                width: "8px",
                height: "8px",
              }}
            />
            <Typography
              sx={{
                display: "flex",
                color: "#919294",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "140%",
                alignItems: "center",
              }}
            >
              EP.4
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              fontWeight: 500,
              fontSize: "16px",
              color: "rgba(24, 24, 24, 0.9)",
            }}
          >
            0
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SensorCard;
