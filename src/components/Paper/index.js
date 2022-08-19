import { Box } from "@mui/material";

const Paper = (props) => {
  return (
    <Box
      sx={{
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
        height: props.height,
        maxHeight : 707,
        background: "#FFFFFF",
        width: "100%",
        minWidth : 440,
        overflow : 'auto',
        ...props.sx
      }}
    >
      {props.children}
    </Box>
  );
};

export default Paper;