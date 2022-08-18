import { Box, Grid, Button, Divider } from "@mui/material";

const QuantityBox = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #E6E7E9",
  borderRadius: "4px",
  width: "100%",
  height: "32px",
  justifyContent: "center",
  padding: "1px",
  margin: "3px",
  fontWeight: 400,
  fontSize: "13px",
  color: "#919294",
};

const StockBox = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #839DF0",
  borderRadius: "4px",
  width: "100%",
  height: "16px",
  background: "#EFF3FF",
  padding: "1px",
  margin: "3px",
  fontWeight: 400,
  fontSize: "12px",
  color: "#839DF0",
};

const ProductBox = {
  display: "flex",
  alignItems: "center",
  border: "1px solid white",
  width: "100%",
  height: "14px",
  marginBottom: "5px",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 600,
};

const CompanyBox = {
  width: "50%",
  display: "flex",
  alignItems: "center",
  border: "1px solid #E6E7E9",
  borderRadius: "4px",
  background: "#F8F8Fa",
  fontSize: "13px",
  fontWeight: 600,
  color: "#3855B3",
  height: "18px",
  padding: "7px 12px 7px 12px",
};

const CompanyOrderTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItens: "center",
        justifyContent: "center",
        padding: "15px",
        width: "100%",
        minwidth: "423.5px",
        height: "auto",
        minheight: "179px",
        background: "#FFFFFF",
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
      }}
    >
      <Grid container rowSpacing={0}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItens: "center",
              justifyContent: "space-between",
              mb: "5px",
            }}
          >
            <Box sx={{ ...CompanyBox, mr: "3px" }}>AD수산</Box>
            <Box sx={CompanyBox}>홍길동</Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            fullwidth
            sx={{
              float: "left",
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              mt: "8px",
              mb: "8px",
            }}
          >
            <Box sx={{ ...ProductBox, borderRight: "1px solid #E6E7E9" }}>
              EP.4
            </Box>
            <Box sx={{ ...ProductBox, borderRight: "1px solid #E6E7E9" }}>
              pH
            </Box>
            <Box sx={{ ...ProductBox, borderRight: "1px solid #E6E7E9" }}>
              DO
            </Box>
            <Box sx={{ ...ProductBox, borderRight: "1px solid #E6E7E9" }}>
              염도
            </Box>
            <Box sx={{ ...ProductBox, borderRight: "1px solid #E6E7E9" }}>
              탁도
            </Box>
            <Box sx={ProductBox}>암모니아</Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            fullwidth
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Box sx={StockBox}>100</Box>
            <Box sx={StockBox}>80</Box>
            <Box sx={StockBox}>60</Box>
            <Box sx={StockBox}>100</Box>
            <Box sx={StockBox}>40</Box>
            <Box sx={StockBox}>100</Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Divider sx={{ mx: "2.5px" }} />
          <Box
            fullwidth
            sx={{
              float: "left",
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Box sx={QuantityBox}>0</Box>
            <Box sx={QuantityBox}>0</Box>
            <Box sx={QuantityBox}>0</Box>
            <Box sx={QuantityBox}>0</Box>
            <Box sx={QuantityBox}>0</Box>
            <Box sx={QuantityBox}>0</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "11px 16px",
              gap: "4px",
              width: "65px",
              height: "32px",
              background: "#B91C1C",
              borderRadius: "4px",
              alignItems: "center",
              marginTop: "5px",
              mr: "3px",
            }}
            variant="contained"
          >
            발주
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyOrderTable;
