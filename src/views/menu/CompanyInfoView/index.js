import React from 'react';
import { useState } from "react";

import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';

import Header from 'src/components/Header';
import SearchField from 'src/components/SearchField'
import CompanyTable from 'src/components/CompanyInfo/CompanyTable';
import CompanyDetails from 'src/components/CompanyInfo/CompanyDetails';
import CompanyModal from 'src/components/CompanyInfo/CompanyModal';


import axios from "../../../utils/axios";
import { useQuery } from 'react-query';
import { matchSorter } from 'match-sorter'


const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  width: "580px",
  height: "669px",
  borderRadius: "8px",
  backgroundColor: "#fff",
};

const CompanyInfoView = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(-1);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState();


  const tableKeys = ['company_name', 'represent', 'corporate_number', 'description', 'director', 'position', 'email', 'phone_number', 'address']


  const query = useQuery(['companys'], async () => {
    const { data } = await axios.post('/companys/info', { company_type: '발주처' });
    return data.data
  });


  const onAppendCompany=(statue)=>{
    setModalData(false); // insert_modal
    setModalOpen(true); // 모달 창 띄우기
  }

  const onEditClick = (idx) => {
    setModalData(query.data.find(element => {return element.idx === idx})) // update_modal
    setModalOpen(true); // 모달 창 띄우기
    setSelectedCompany(idx);
  }

  // 보여질 데이터 정렬
  const getCompanys = () => {
    return matchSorter(query.data, searchValue, { keys: tableKeys });
  }

  // 테이블 클릭 시 옆에 보여질 디테일 정보
  const getCompanyDetails=()=>{
    if(selectedCompany < 0)
      return null;

    return query.data.find(element => {return element.idx === selectedCompany})
  }


  return (
    <>
      <Header>
        업체정보
      </Header>

      {
        query.isLoading ? (<div> Loading </div>) :
          (
            <Box sx={{ height: "100%" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SearchField placeholder='업체명, 연락처 등 검색'  setSearchValue={setSearchValue}/>
                <Button variant="contained" 
                sx={{
                  fontWeight: 600, width: "94px", height: "37px", padding: "9.5px 0px", fontSize: "13px",
                  "& .MuiButton-startIcon": {
                    margin: "0px"
                  }
                }}
                startIcon={<AddIcon />}
                onClick={()=>{onAppendCompany()}}>
                  업체등록
                </Button>
              </Box>

              <Typography
                sx={{ fontWeight: 600, fontSize: "12px", mt: "19px", mb: "10px" }} >
                총 업체({getCompanys().length})
              </Typography>


              <Box sx={{ display: "flex", height: '100%' }} >
                <CompanyTable companys={getCompanys()} setSelectedCompany={setSelectedCompany} onEditClick={onEditClick} />
                <CompanyDetails detailsInfo={getCompanyDetails()} />
              </Box>

              {/* 모달 */}
              <Modal
                open={modalOpen}
                onClose={() => { setModalOpen(false) }}>
                <Box sx={modalStyle}>
                  <CompanyModal data={modalData} setModalOpen={setModalOpen} />
                </Box>
              </Modal>

            </Box>
          )
      }
    </>

  );
}

export default CompanyInfoView;
