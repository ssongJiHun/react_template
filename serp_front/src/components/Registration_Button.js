import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Registration_Button = () => {
  return (
    <Button
      sx={{
        background: "#3855B3",
        fontWeight: 600,
        color: "#FFFFFF",
        width: "94px",
        height: "37px",
        padding: "9.5px 0px",
        fontSize: "12px",
        "& .MuiButton-startIcon" : {
          margin: "0px"
        }
      }}
      variant="contained"
      startIcon={<AddIcon/>}
    >
      업체등록
    </Button>
  );
};

export default Registration_Button;
