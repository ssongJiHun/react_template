import { Box, Grid, Button } from "@mui/material";

import { styled } from "@mui/system";
import CompanyChoice from "./CompanyChoice";

const QuantityBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
  border: "1px solid #E6E7E9",
  borderRadius: "4px",
  width: "100%",
  height: "32px",
  marginBottom: "5px",
  justifyContent: "center",
  padding: "1px",
  margin: "3px",
});

const ProductBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "4px",
  border: "1px solid white",
  borderRadius: "4px",
  width: "100%",
  height: "14px",
  marginBottom: "5px",
  justifyContent: "center",
  fontSize: "14px",
});

const TotalProductTable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItens: "center",
        justifyContent: "center",
        padding: "15px",
        width: "100%",
        height: "auto",
        background: "#FFFFFF",
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
      }}
    >
      <Grid container rowSpacing={0}>
        <Grid item xs={12}>
          <Box
            fullwidth
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mb: "10px",
              mt: "5px"
            }}
          >
            <CompanyChoice />
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
            }}
          >
            <ProductBox sx={{ borderRight: "1px solid #E6E7E9" }}>
              EP.4
            </ProductBox>
            <ProductBox sx={{ borderRight: "1px solid #E6E7E9" }}>
              pH
            </ProductBox>
            <ProductBox sx={{ borderRight: "1px solid #E6E7E9" }}>
              DO
            </ProductBox>
            <ProductBox sx={{ borderRight: "1px solid #E6E7E9" }}>
              염도
            </ProductBox>
            <ProductBox sx={{ borderRight: "1px solid #E6E7E9" }}>
              탁도
            </ProductBox>
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
          >
            <hr color="#E6E7E9" width="100%" margin="8px" />
          </Box>
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
              flexDirection: "row",
              justifyContent: "center",
              padding: "11px 16px",
              gap: "4px",
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
