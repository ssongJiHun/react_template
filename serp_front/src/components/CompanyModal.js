import { Box, Button, TextField, Typography } from "@mui/material";
import avatarNull from "../assets/img_avatar_null.png";

// sx={{
//   display: "flex",
//   justifyContent: "space-evenly",
//   width: "100%",
// }}

const CompanyText = {
  fontWeight: 600,
  fontSize: "13px",
  mb: "10px",
};

const TextFieldStyle = {
  padding: "11px",
  fontSize: "13px",
  fontWeight: 500,
  width: "238px",
};

const CompanyModal = () => {
  return (
    <Box
      sx={{
        width: "580px",
        height: "669px",
        borderRadius: "8px",
        border: "1px solid #121212",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "71px",
          ml: "20px",
          fontWeight: 600,
          fontSize: "18px",
        }}
      >
        업체등록
      </Box>
      <Box
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          height: "505px",
          background: "#F8F8FA",
          borderTop: "1px solid #E6E7E9",
          borderBottom: "1px solid #E6E7E9",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "72px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              ml: "15px",
            }}
          >
            <img src={avatarNull} alt="error" width="100%" height="100%" />
          </Box>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#3855B3",
              borderRadius: "4px",
              padding: "11px 12px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#FFFFFF",
              width: "100px",
              height: "40px",
              mx: "16px",
            }}
          >
            이미지 등록
          </Button>
          <Button
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              padding: "11px 12px",
              fontWeight: 500,
              fontSize: "14px",
              color: "#000000",
              width: "67px",
              height: "40px",
              border: "1px solid #E6E7E9",
            }}
          >
            취소
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            mb: "16px",
          }}
        >
          <Box>
            <Typography sx={CompanyText}>업체명</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder="업체명을 입력해주세요"
            />
          </Box>
          <Box>
            <Typography sx={CompanyText}>대표자명</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder="대표자명을 입력해주세요"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            mb: "16px",
          }}
        >
          <Box>
            <Typography sx={CompanyText}>사업자 등록번호</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder="'-'없이 사업자 등록번호를 입력해주세요"
            />
          </Box>
          <Box>
            <Typography sx={CompanyText}>종목</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder="사업장 종목을 입력해주세요"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            mb: "16px",
          }}
        >
          <Box>
            <Typography sx={CompanyText}>담당자명</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder="담당자의 성함을 입력해주세요"
            />
          </Box>
          <Box>
            <Typography sx={CompanyText}>담당자 직함</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder="담당자님의 직함을 입력해주세요"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            mb: "16px",
          }}
        >
          <Box>
            <Typography sx={CompanyText}>연락처</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder="연락처를 입력해주세요"
            />
          </Box>
          <Box>
            <Typography sx={CompanyText}>이메일</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder="이메일을 입력해주세요"
            />
          </Box>
        </Box>
        <Box sx={{ px: "13px" }}>
          <Typography sx={CompanyText}>사업장 소재지</Typography>
          <TextField
            inputProps={{
              style: TextFieldStyle,
            }}
            placeholder="사업장 소재지를 입력해주세요"
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          ></TextField>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "72px",
        }}
      >
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            padding: "11px 12px",
            fontWeight: 500,
            fontSize: "14px",
            color: "#000000",
            width: "67px",
            height: "40px",
            border: "1px solid #E6E7E9",
          }}
        >
          취소
        </Button>
        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#3855B3",
            borderRadius: "4px",
            padding: "11px 12px",
            fontWeight: 500,
            fontSize: "14px",
            color: "#FFFFFF",
            width: "67px",
            height: "40px",
            mx: "16px",
          }}
        >
          확인
        </Button>
      </Box>
    </Box>
  );
};

export default CompanyModal;
