import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Typography, Box, Avatar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "../../Paper";

const CompanyListTable = (props) => {
  const { companys, setSelectedCompany, onEditClick } = props;
  return (
    companys.length == 0 ? (
      <Paper sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: 400,
        fontSize: "15px",
        color: "#919294",
        height: '100%'
      }}>
        등록된 업체가 업습니다.
      </Paper>
    ) : (


      <Paper
        sx={{
          mr: "10px",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        <Table>
          <TableBody>
            {companys.map((row, i) => (
              <TableRow key={i}>
                <TableCell scope="row" sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "basis.dark"
                  }
                }}
                  onClick={() => { setSelectedCompany(row.idx) }} >
                  <Box sx={{ display: "flex" }}>

                    <Box>
                      <Avatar variant="rounded" sx={{ mr: "10px" }} />
                    </Box>

                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "13px",
                          color: "#3855B3",
                          mb: 0.5,
                        }}
                      >
                        {row.company_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: "12px",
                          color: "rgba(24, 24, 25, 0.42)",
                        }}
                      >
                        등록일 {row.createdAt}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", }}>
                      <IconButton sx={{ padding: "0px" }} onClick={(e) => { e.preventDefault(); onEditClick(row.idx) }}>
                        <EditIcon sx={{ color: "#919294" }} />
                      </IconButton>

                    </Box>

                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  );
};

export default CompanyListTable;