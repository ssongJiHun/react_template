import { Box, Snackbar,  Alert, IconButton, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

// onClose onbtnClick open props
const ErrorSnackBar = (props) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={props.open}
            onClose={props.onClose}
            autoHideDuration={60000}
            sx={{ width: "100%", height: 48, margin: "10px" }}
        >
            <Alert onClose={props.onClose} severity="error" sx={{ width: "100%" }} variant="filled"
                action={
                    <Box>
                        <Button color="inherit" size="small" onClick={props.onbtnClick} >
                            {props.btn}
                        </Button>
                        {/* <IconButton size="small" color="component" onClick={props.onClose}>
                            <CloseIcon color="ffffff" />
                        </IconButton> */}
                    </Box>
                }>
                {props.message}
            </Alert>
        </Snackbar >
    );
}

export default ErrorSnackBar;

