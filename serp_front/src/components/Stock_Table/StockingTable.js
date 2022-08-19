import CompanyChoice from "../CompanyChoice";
import { Box, Grid, Divider, Button } from "@mui/material";
import StockQuantity from "./StockQuantity";
import ProductInfoInput from "./ProductInfoInput";

const ProductBox = {
  display: "flex",
  alignItems: "center",
  border: "1px solid white",
  width: "100%",
  height: "14px",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 600,
};

const StockingTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItens: "center",
        justifyContent: "center",
        width: "100%",
        minWidth: "860px",
        height: "auto",
        background: "#FFFFFF",
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
      }}
    >
      <Grid container rowSpacing={0} sx={{ margin: "15px" }}>
        <Grid item xs={12}>
          <CompanyChoice sx={{ mb: "5px" }} />
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
          <Divider sx={{ mx: "2.5px" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <StockQuantity />
            <StockQuantity />
            <StockQuantity />
            <StockQuantity />
            <StockQuantity />
            <StockQuantity />
          </Box>
          <Divider sx={{ mx: "2.5px" }} />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Box sx={{ width: "100%", margin: "5px" }}>
              <ProductInfoInput />
              <ProductInfoInput />
            </Box>
            <Box sx={{ width: "100%", margin: "5px" }}>
              <ProductInfoInput />
            </Box>
            <Box sx={{ width: "100%", margin: "5px" }}>
              <ProductInfoInput />
            </Box>
            <Box sx={{ width: "100%", margin: "5px" }}>
              <ProductInfoInput />
            </Box>
            <Box sx={{ width: "100%", margin: "5px" }}></Box>
            <Box sx={{ width: "100%", margin: "5px" }}></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "11px 16px",
              width: "65px",
              height: "32px",
              background: "#3855B3",
              borderRadius: "4px",
              alignItems: "center",
              mt: "5px",
              mr: "3px",
              fontWeight: 600,
              fontSize: "13px",
            }}
            variant="contained"
          >
            입고
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StockingTable;
