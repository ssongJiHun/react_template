import { Button, Typography, Box, IconButton } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import OutlinedInput from "@mui/material/OutlinedInput";

const MemoData = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "8px",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          height: "170px",
          mx: "20px",
          maxHeight: "100%",
          overflowX: "hidden",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: 0,
          },
        }}
      >
        <Box
          sx={{
            background: "#F8F8FA",
            width: "92%",
            padding: "16px",
            borderRadius: "8px",
            mb: "5px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "24px",
              color: "#919294",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            2022.08.02
            <DeleteOutlineIcon />
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "24px",
              color: "#000000",
            }}
          >
            한국 수자원공사 기관 소개로 100대 발주 진행
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#F8F8FA",
            width: "92%",
            padding: "16px",
            borderRadius: "8px",
            mb: "5px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "24px",
              color: "#919294",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            2022.08.02
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "24px",
              color: "#000000",
            }}
          >
            한국 수자원공사 기관 소개로 100대 발주 진행
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#F8F8FA",
            width: "92%",
            padding: "16px",
            borderRadius: "8px",
            mb: "5px",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "24px",
              color: "#919294",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            2022.08.02
            <DeleteOutlineIcon />
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "12px",
              lineHeight: "24px",
              color: "#000000",
            }}
          >
            한국 수자원공사 기관 소개로 100대 발주 진행
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "31px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <OutlinedInput
          rows={4}
          sx={{
            height: "120px",
            fontSize: "13px",
            fontHeight: "24px",
            fontWeight: "400px",
            justifyContent: "flex-start",
            display: "flex",
          }}
          placeholder="업체 이슈를 메모해주세요."
          fullWidth
          multiline
        />
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          marginBottom: "20px",
          marginRight: "20px",
          float: "right",
        }}
      >
        <Button
          sx={{
            background: "#3855B3",
            fontWeight: 600,
            color: "#FFFFFF",
            width: "78px",
            height: "37px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "row",
            fontSize: "13px",
            lineHeight: "140%",
            padding: "9.5px",
          }}
          variant="contained"
        >
          메모등록
        </Button>
      </Box>
    </Box>
  );
};

export default MemoData;
