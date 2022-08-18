import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { Typography, Box, Button } from "@mui/material";

const createData = (company, date) => {
  return { company, date };
};

const rows = [
  createData("주식회사 소더코드", "2022.08.11"),
  createData("수질검사 소더코드", "2022.08.12"),
  createData("에피소드 소더코드", "2022.08.13"),
];

const InOutHistory = () => {
  return (
    <TableContainer
      component={Box}
      sx={{
        border: "1px solid #E6E7E9",
        borderRadius: "10px",
        height: "100%",
        width: "100%",
      }}
    >
      <Table>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.company}>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "#919294",
                        fontWeight: 600,
                        fontSize: "13px",
                        lineHeight: "140%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "20px",
                          border: "1px solid #891C1C",
                          borderRadius: "4px",
                          fontWeight: 600,
                          fontSize: "11px",
                          color: "#B91C1C",
                          mr: "5px",
                        }}
                      >
                        발주
                      </Box>
                      {row.date}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontSize: "12px",
                        color: "rgba(24, 24, 25, 0.42)",
                        mt: "11px",
                      }}
                    >
                      EP.4(1) pH(1) DO(0) 염도(2) 탁도(2) 암모니아(2)
                    </Typography>
                  </Box>
                  <Box>
                    <Button
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "7px 8.5px 7px 8.5px",
                        width: "65px",
                        height: "32px",
                        background: "black",
                        borderRadius: "4px",
                        fontWeight: 600,
                        fontSize: "11px",
                        color: "#FFFFFF",
                        "&:hover": {
                          backgroundColor: "black",
                        },
                      }}
                    > 
                      발주취소
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InOutHistory;
