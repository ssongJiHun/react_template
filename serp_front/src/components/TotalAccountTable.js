import * as React from "react";
import {
  DataGrid,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  gridPageCountSelector,
} from "@mui/x-data-grid";
import { Box, Pagination } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
  {
    field: "classification",
    headerName: "분류",
    width: 100,
    renderHeader: (params) => <Box>{"분류"}</Box>,
  },
  {
    field: "company",
    headerName: "업체명",
    width: 206,
    renderHeader: (params) => <Box>{"업체명"}</Box>,
  },
  {
    field: "phone",
    headerName: "연락처",
    width: 266,
    renderHeader: () => (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <EditIcon sx={{ mr: "29px", color: "white" }} />
        {"전화번호"}
      </Box>
    ),
    renderCell: (params) => {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <EditIcon sx={{ mr: "29px", color: "#919294" }} />
          {params.value}
        </Box>
      );
    },
  },
  {
    field: "memo",
    headerName: "메모",
    width: 600,
    renderHeader: (params) => <Box>{"메모"}</Box>,
  },
];

const rows = [
  {
    id: 1,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 2,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 3,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 4,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 5,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 6,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 7,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 8,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 9,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 10,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
  {
    id: 11,
    classification: "출고처",
    company: "팀랩스",
    phone: "0102939302",
    memo: "메모",
  },
];

const CustomPagination = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <Box>
      <Pagination
        shape="rounded"
        page={page + 1}
        count={pageCount}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    </Box>
  );
};

const TotalAccountTable = () => {
  return (
    <Box
      sx={{
        height: "auto",
        width: "100%",
      }}
    >
      <DataGrid
        sx={{
          border: "1px solid #E6E7E9",
          borderRadius: "10px",
          "& .MuiDataGrid-iconSeparator": {
            visibility: "hidden",
          },
          "& .MuiDataGrid-columnHeadersInner": {
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "140%",
          },
          "& .MuiDataGrid-row": {
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "140%",
          },
        }}
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={10}
        getCellClassName={() => {
          return "super-app-theme--contents";
        }}
        checkboxSelection
        disableColumnMenu
        components={{
          Pagination: CustomPagination,
        }}
        // hideFooterSelectedRowCount
      />
    </Box>
  );
};

export default TotalAccountTable;
