import { useRef, useState } from "react";
import { Box, Button, TextField, Typography, Avatar } from "@mui/material";
import Add from "@mui/icons-material/Add";

import SuccessSnackBar from "src/components/Snackbar/SuccessSnackBar";
import ErrorSnackBar from "src/components/Snackbar/ErrorSnackBar";

import axios from "../../../utils/axios";
import { useMutation, useQueryClient } from 'react-query';


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
    backgroundColor: '#fff'
};

const CompanyModal = (props) => {
    const data = props.data;

    const showSuccessMsg= (val) =>{
        // 성공 스넥바 알림
        setSuccessMessage(val);
        setSuccessSnackBar(true);
        props.setModalOpen(false);
    }
    const queryClient = useQueryClient();
    const appendMutation = useMutation(val => {
        return axios.post('/companys/append', val);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("companys");
            showSuccessMsg('추가 완료!');
        }
    });

    const updateMutation = useMutation(val => {
        return axios.post('/companys/update', val);
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("companys");
            showSuccessMsg('업데이트 완료!');
        }
    });

    const destroyMutation = useMutation(val => {
        return axios.get('/companys/destroy', { params: val });
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("companys");
            showSuccessMsg('삭제 완료!')
        }
    });

    const textRef = useRef([]);
    const [errorSnackBar, setErrorSnackBar] = useState(false);
    const [successSnackBar, setSuccessSnackBar] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const defaultValues = [
        {
            name: "업체명",
            placeholder: "업체명을 입력해주세요",
            value: data.company_name,
        },
        {
            name: "대표자명",
            placeholder: "대표자명을 입력해주세요",
            value: data.represent,
        },
        {
            name: "사업자 등록번호",
            placeholder: "'-'없이 사업자 등록번호를 입력해주세요",
            value: data.corporate_number,
        },
        {
            name: "종목",
            placeholder: "사업장 종목을 입력해주세요",
            value: data.description,
        },
        {
            name: "담당자명",
            placeholder: "'-'없이 사업자 등록번호를 입력해주세요",
            value: data.director,
        },
        {
            name: "담당자 직함",
            placeholder: "사업장 종목을 입력해주세요",
            value: data.position,
        },
        {
            name: "연락처",
            placeholder: "'-'없이 연락처를 입력해주세요",
            value: data.phone_number,
        },
        {
            name: "이메일",
            placeholder: "이메일을 입력해주세요",
            value: data.email,
        },
        {
            name: "사업장 소재지",
            placeholder: "사업장 소재지를 입력해주세요",
            value: data.address,
        },
    ];

    const getContent = () => {
        const result = [];
        for (let i = 0; i < defaultValues.length - 1; i += 2) {
            result.push(
                <Box
                    key={i}
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%",
                        mb: "16px",
                    }}               >
                    <Box>
                        <Typography sx={CompanyText}>{defaultValues[i].name}</Typography>
                        <TextField
                            inputProps={{
                                style: TextFieldStyle,
                            }}
                            placeholder={defaultValues[i].placeholder}
                            defaultValue={data ? defaultValues[i].value : ''}
                            inputRef={(el) => (textRef.current[i] = el)} />
                    </Box>

                    <Box>
                        <Typography sx={CompanyText}>{defaultValues[i + 1].name}</Typography>
                        <TextField
                            inputProps={{
                                style: TextFieldStyle,
                            }}
                            placeholder={defaultValues[i + 1].placeholder}
                            defaultValue={data ? defaultValues[i + 1].value : ''}
                            inputRef={(el) => (textRef.current[i + 1] = el)} />
                    </Box>
                </Box>
            );
        }
        return result;
    };

    const showRefContent = () => {
        // 추가 및 업데이트 data 있으면 업데이트 없으면 추가
        // 추가 = insert , 수정 = update
        const rows = {
            company_name: textRef.current[0].value,
            represent: textRef.current[1].value,
            corporate_number: textRef.current[2].value,
            description: textRef.current[3].value,
            position: textRef.current[4].value,
            director: textRef.current[5].value,
            phone_number: textRef.current[6].value,
            email: textRef.current[7].value,
            address: textRef.current[8].value,
        };

        let allowNull = false;
        for(let key in rows)
            if(rows[key] === '') allowNull = true;

        if(allowNull)
            return;

        if(data) // update
            updateMutation.mutate({ info : {idx : data.idx, ...rows} })
        else // append
            appendMutation.mutate({info : {...rows, "company_type": "발주처"}})

    };

    const onDelete = () => {
        setErrorSnackBar(false);
        // 삭제 기능
        destroyMutation.mutate({ idx: data.idx })
    }

    return (
        <Box>

            <ErrorSnackBar
                message={'업체는 삭제하면 복구가 불가능합니다. 삭제하시겠습니까?'}
                btn={'삭제'}
                open={errorSnackBar}
                onClose={() => { setErrorSnackBar(false) }}
                onbtnClick={() => { onDelete() }} />

            <SuccessSnackBar
                message={successMessage}
                open={successSnackBar}
                onClose={() => { setSuccessSnackBar(false) }} />


            <Box sx={{
                display: "flex",
                alignItems: "center",
                height: "71px",
                ml: "20px",
                fontWeight: 600,
                fontSize: "18px",
            }}
            >
                {!data ? "업체등록" : "업체정보 수정"}
            </Box>
            <Box sx={{
                flexDirection: "column", justifyContent: "center", height: "505px", background: "#F8F8FA", borderTop: "1px solid #E6E7E9", borderBottom: "1px solid #E6E7E9", padding: "10px",
            }}
            >
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "72px",
                }}
                >
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                        ml: "15px",
                    }}                    >
                        <Avatar sx={{ border: "1.5px dashed #E6E7E9", background: "#FFFFFF" }}                        >
                            <Add sx={{ color: "#3855B3" }} />
                        </Avatar>
                    </Box>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: "4px",
                            padding: "7px 12px",
                            fontWeight: 600,
                            fontSize: "13px",
                            width: "96px",
                            height: "32px",
                            mx: "16px",
                        }}
                    >
                        이미지 등록
                    </Button>
                    <Button
                        sx={{
                            width: "48px",
                            borderRadius: "4px",
                            padding: "0px 0px",
                            fontWeight: 600,
                            fontSize: "13px",
                            color: "#000000",
                            height: "32px",
                            border: "1px solid #E6E7E9",
                            "& .MuiBox-root": {
                                width: "48px",
                            },
                        }}
                    >
                        삭제
                    </Button>

                </Box>

                {
                    getContent()
                }

                <Box sx={{ px: "13px" }}>
                    <Typography sx={CompanyText}>{defaultValues[8].name}</Typography>
                    <TextField
                        inputProps={{
                            style: {
                                padding: "11px",
                                fontSize: "13px",
                                fontWeight: 500,
                                width: "100%",
                                backgroundColor: '#fff'
                            },
                        }}
                        placeholder={defaultValues[8].placeholder}
                        inputRef={(el) => (textRef.current[8] = el)}
                        defaultValue={data ? defaultValues[8].value : ''}
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
                    {data && (
                        <Button
                            sx={{
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
                            onClick={() => { setErrorSnackBar(true) }}
                        >
                            삭제
                        </Button>
                    )}
                </Box>
                <Box sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}                >
                    <Button sx={{ borderRadius: "4px", padding: "11px 12px", fontWeight: 500, fontSize: "14px", color: "#000000", width: "67px", height: "40px", border: "1px solid #E6E7E9", }}
                        onClick={() => { props.setModalOpen(false) }}
                    >
                        취소
                    </Button>
                    <Button variant="contained" sx={{
                        borderRadius: "4px", padding: "11px 12px", fontWeight: 500, fontSize: "14px", color: "#FFFFFF", width: "67px", height: "40px", mx: "16px",
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
