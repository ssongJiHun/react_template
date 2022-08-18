import { Box, Grid, Button, Divider } from "@mui/material";

import { styled } from "@mui/system";
import CompanyChoice from "./CompanyChoice";

const QuantityBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  border: "1px solid #E6E7E9",
  borderRadius: "4px",
  width: "100%",
  height: "28px",
  marginBottom: "5px",
  justifyContent: "center",
  padding: "1px",
  margin: "3px",
});

const ProductBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  border: "1px solid white",
  borderRadius: "4px",
  width: "100%",
  height: "14px",
  marginBottom: "5px",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 600,
  borderRight: "1px solid #E6E7E9",
});

const TotalProductTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItens: "center",
        justifyContent: "center",
        width: "100%",
        background: "#FFFFFF",
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
      }}
    >
      <Grid container rowSpacing={0} sx={{ margin: "15px" }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mb: "10px",
              mt: "5px",
            }}
          >
            <CompanyChoice />
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
            <ProductBox>EP.4</ProductBox>
            <ProductBox>pH</ProductBox>
            <ProductBox>DO</ProductBox>
            <ProductBox>염도</ProductBox>
            <ProductBox>탁도</ProductBox>
            <ProductBox>암모니아</ProductBox>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            fullwidth
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pl: "3px",
              pr: "3px",
            }}
          ></Box>
          <Divider sx={{ my: "5px" }} />
          <Box
            fullwidth
            sx={{
              float: "left",
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <QuantityBox>0</QuantityBox>
            <QuantityBox>0</QuantityBox>
            <QuantityBox>0</QuantityBox>
            <QuantityBox>0</QuantityBox>
            <QuantityBox>0</QuantityBox>
            <QuantityBox>0</QuantityBox>
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
              marginTop: "5px",
              mr: "3px",
            }}
            variant="contained"
          >
            구매
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TotalProductTable;
