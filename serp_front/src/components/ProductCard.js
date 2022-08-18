import { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  ClickAwayListener,
  MenuList,
  Grow,
  MenuItem
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

const ProductCard = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

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
        margin:"5px"
      }}
    >
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <CircleIcon
              sx={{
                color: "#3855B3",
                width: "8px",
                height: "8px"
              }}
            />
            <Typography
              sx={{
                display: "flex",
                color: "#919294",
                fontWeight: 500,
                fontSize: "13px",
                lineHeight: "140%",
                alignItems: "center"
              }}
            >
              EP.4
              <IconButton
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                sx={{
                  padding: "0px",
                  margin: "0px",
                  color: "rgba(24, 24, 25, 0.9)"
                }}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom"
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem onClick={handleClose}>EP.1</MenuItem>
                          <MenuItem onClick={handleClose}>EP.2</MenuItem>
                          <MenuItem onClick={handleClose}>EP.3</MenuItem>
                          <MenuItem onClick={handleClose}>EP.4</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
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
              marginRight: "23px"
            }}
          >
            0
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCard;
