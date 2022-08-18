import { Box } from "@mui/material";

const Paper = (props) => {
  return (
    <div
      style={{
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
        height: props.height,
        width: "100%",
        minWidth: props.minWidth
      }}
    >
      {props.children}
    </div>
  );
};

export default Paper;
