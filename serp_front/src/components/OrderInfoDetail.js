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

import CompanyChoice from "./CompanyChoice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F0F1F2",
    fontSize: "12px",
    fontWeight: 600,
    padding: "5.5px 5px 5.5px 5px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "12px",
    fontWeight: 400,
    padding: "6.5px 5px 6.5px 5px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(idx, model, IMEI, USIM) {
  return { idx, model, IMEI, USIM };
}

const rows = [
  createData(1, "EP.4", 901283812323, 600321),
  createData(2, "EP.4", 123212131133, 600938),
  createData(2, "EP.4", 123212131133, 600938),
  createData(2, "EP.4", 123212131133, 600938),
  createData(2, "EP.4", 123212131133, 600938),
  createData(2, "EP.4", 123212131133, 600938),
  createData(2, "EP.4", 123212131133, 600938),
];

const OrderInfoDetail = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "268px",
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
        overflow: "auto",
      }}
    >
      <Box sx={{ margin: "15px 15px 10px 15px" }}>
        <CompanyChoice />
      </Box>
      <Box sx={{ margin: "5px 15px 15px 15px" }}>
        <Table size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <StyledTableCell sx={{ width: "44px" }}>순번</StyledTableCell>
              <StyledTableCell>모델</StyledTableCell>
              <StyledTableCell>IMEI</StyledTableCell>
              <StyledTableCell>USIM</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name} sx={{ overflow: "auto" }}>
                <StyledTableCell component="th" scope="row">
                  {row.idx}
                </StyledTableCell>
                <StyledTableCell>{row.model}</StyledTableCell>
                <StyledTableCell>{row.IMEI}</StyledTableCell>
                <StyledTableCell>{row.USIM}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default OrderInfoDetail;
