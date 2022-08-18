import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Typography, Box, Grid, Avatar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const createData = (company, date) => {
  return { company, date };
};

const rows = [
  createData("주식회사 소더코드", "2022.08.11"),
  createData("수질검사 소더코드", "2022.08.12"),
  createData("에피소드 소더코드", "2022.08.13"),
  createData("에피소드 소더코드", "2022.08.13"),
  createData("에피소드 소더코드", "2022.08.13"),
];

const CompanyListTable = (props) => {
  const resultData = props.data;

  return (
    <TableContainer
      component={Box}
      sx={{
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
        height: "708px",
        width: "100%",
        minWidth: "440px",
        overflow: "auto",
        mr: "10px",
      }}
    >
      <Table>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell
                component="th"
                sx={{
                  display: "flex",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
                scope="row"
                onClick={() => {
                  alert(i);
                }}
              >
                <Box sx={{ display: "flex" }}>
                  <Avatar variant="rounded" sx={{ mr: "10px" }} />
                  <Box
                    sx={{
                      whiteSpace: "nowrap",
                      flexGrow: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontSize: "13px",
                        color: "#3855B3",
                        mb: 0.5,
                      }}
                    >
                      {row.company}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "12px",
                        color: "rgba(24, 24, 25, 0.42)",
                      }}
                    >
                      등록일 {row.date}
                    </Typography>
                  </Box>
                  <EditIcon sx={{ color: "#919294" }} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CompanyListTable;
