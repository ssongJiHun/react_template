import { useRef, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import avatarNull from "../assets/img_avatar_null.png";

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

const CompanyModal = (Data) => {
  const textRef = useRef([]);
  const [Delete, setDelete] = useState(false);

  const data = [
    {
      name: "업체명",
      placeholder: "업체명을 입력해주세요",
      defaultValue: Data.data.company,
    },
    {
      name: "대표자명",
      placeholder: "대표자명을 입력해주세요",
      defaultValue: Data.data.representative,
    },
    {
      name: "사업자 등록번호",
      placeholder: "'-'없이 사업자 등록번호를 입력해주세요",
      defaultValue: Data.data.registerNum,
    },
    {
      name: "종목",
      placeholder: "사업장 종목을 입력해주세요",
      defaultValue: Data.data.BusinessType,
    },
    {
      name: "담당자명",
      placeholder: "'-'없이 사업자 등록번호를 입력해주세요",
      defaultValue: Data.data.DirectorName,
    },
    {
      name: "담당자 직함",
      placeholder: "사업장 종목을 입력해주세요",
      defaultValue: Data.data.DirectorPosition,
    },
    {
      name: "연락처",
      placeholder: "'-'없이 연락처를 입력해주세요",
      defaultValue: Data.data.phoneNum,
    },
    {
      name: "이메일",
      placeholder: "이메일을 입력해주세요",
      defaultValue: Data.data.email,
    },
    {
      name: "사업장 소재지",
      placeholder: "사업장 소재지를 입력해주세요",
      defaultValue: Data.data.address,
    },
  ];

  const getContent = () => {
    const result = [];
    for (let i = 0; i < data.length - 1; i += 2) {
      result.push(
        <Box
          key={i}
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            mb: "16px",
          }}
        >
          <Box>
            <Typography sx={CompanyText}>{data[i].name}</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder={data[i].placeholder}
              defaultValue={data[i].defaultValue}
              inputRef={(el) => (textRef.current[i] = el)}
            />
          </Box>

          <Box>
            <Typography sx={CompanyText}>{data[i + 1].name}</Typography>
            <TextField
              inputProps={{
                style: TextFieldStyle,
              }}
              placeholder={data[i + 1].placeholder}
              defaultValue={data[i + 1].defaultValue}
              inputRef={(el) => (textRef.current[i + 1] = el)}
            />
          </Box>
        </Box>
      );
    }
    return result;
  };

  const showRefContent = () => {
    const rows = {
      company: textRef.current[0].value,
      representative: textRef.current[1].value,
      registerNum: textRef.current[2].value,
      BusinessType: textRef.current[3].value,
      DirectorPosition: textRef.current[4].value,
      DirectorName: textRef.current[5].value,
      phoneNum: textRef.current[6].value,
      email: textRef.current[7].value,
      address: textRef.current[8].value,
    };
  };

  const DeleteContent = () => {
    setDelete(true);
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setDelete(false);
  };

  const DeleteData = () => {
    const rows = {};
  };

  return (
    <Box
      sx={{
        width: "580px",
        height: "669px",
        borderRadius: "8px",
        border: "1px solid #121212",
      }}
    >
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={Delete}
        autoHideDuration={60000}
        onClose={handleClose}
        sx={{ width: "auto", height: "32px", margin: "10px" }}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          업체는 삭제하면 복구가 불가능합니다. 삭제하시겠습니까?
          <Button
            sx={{
              fontWeight: 500,
              fontSize: "13px",
              color: "#FFFFFF",
            }}
            onClick={DeleteData}
          >
            삭제
          </Button>
        </Alert>
      </Snackbar>
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
        {Data.data.company === "" ? "업체등록" : "업체정보 수정"}
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
        {getContent()}
        <Box sx={{ px: "13px" }}>
          <Typography sx={CompanyText}>사업장 소재지</Typography>
          <TextField
            inputProps={{
              style: {
                padding: "11px",
                fontSize: "13px",
                fontWeight: 500,
                width: "100%",
              },
            }}
            placeholder="사업장 소재지를 입력해주세요"
            inputRef={(el) => (textRef.current[8] = el)}
            defaultValue={data[8].defaultValue}
            sx={{ width: "100%" }}
          ></TextField>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "72px",
        }}
      >
        <Box>
          {!(Data.data.company === "") && (
            <Button
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                padding: "11px 12px",
                fontWeight: 500,
                fontSize: "14px",
                color: "#DC2626",
                width: "67px",
                height: "40px",
                border: "1px solid #DC2626",
                ml: "16px",
              }}
              onClick={DeleteContent}
            >
              삭제
            </Button>
          )}
        </Box>
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
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
            onClick={showRefContent}
          >
            확인
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyModal;
