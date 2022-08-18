import SensorCard from "./SensorCard";
import ProductCard from "./ProductCard";

import { Box } from "@mui/material";

const SensorCardList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
      }}
    >
      <ProductCard style={{ margin: "5px" }} />
      <SensorCard />
      <SensorCard />
      <SensorCard />
      <SensorCard />
      <SensorCard />
    </Box>
  );
};

export default SensorCardList;
