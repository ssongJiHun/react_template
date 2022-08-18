import {
  styled,
  Box,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  tableCellClasses,
} from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: "12px",
    fontWeight: 600,
    padding: "11.5px 5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "12px",
    padding: "11.5px 5px",
  },
}));

function createData(idx, model, IMEI, USIM, ProductState) {
  return { idx, model, IMEI, USIM, ProductState };
}

const rows = [
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
  createData(1, "EP.4", 901283812323, 600321, "발주완료"),
];

const StockManagementTable = () => {
  return (
    <Box
      sx={{
        width: "100px",
        height: "593px",
      }}
    >
      <Box
        sx={{
          border: "1px solid #E6E7E9",
          borderRadius: "10px",
          height: "100%",
          width: "100%",
          minWidth: "425px",
          overflow: "auto",
        }}
      >
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "44px" }}>순번</StyledTableCell>
              <StyledTableCell>모델</StyledTableCell>
              <StyledTableCell>IMEI</StyledTableCell>
              <StyledTableCell>USIM</StyledTableCell>
              <StyledTableCell>제품상태</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.idx}
                </StyledTableCell>
                <StyledTableCell>{row.model}</StyledTableCell>
                <StyledTableCell>{row.IMEI}</StyledTableCell>
                <StyledTableCell>{row.USIM}</StyledTableCell>
                <StyledTableCell sx={{ color: "#B91C1C", fontWeight: 600 }}>
                  {row.ProductState}
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default StockManagementTable;
