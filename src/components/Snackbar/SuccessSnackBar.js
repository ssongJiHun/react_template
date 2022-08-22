
import { Snackbar, Alert } from "@mui/material";

// open onClose message
const SuccessSnackBar = (props) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={props.open}
            onClose={props.onClose}
            autoHideDuration={2000}
            sx={{ width: "100%", height: 48, margin: "10px" }}        >
            <Alert severity="success" variant="filled" sx={{ background: "#66BB6A",  width: "100%" }}   >
                {props.message}
            </Alert>
        </Snackbar >
    );
}

export default SuccessSnackBar;

