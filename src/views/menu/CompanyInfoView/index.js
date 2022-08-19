import React from 'react';
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from "react";

import Header from 'src/components/Header';
import SearchField from 'src/components/SearchField'
import CompanyTable from 'src/components/CompanyInfo/CompanyTable';
import CompanyDetails from 'src/components/CompanyInfo/CompanyDetails';

import axios from "../../../utils/axios";
import { useQuery } from 'react-query';

const CompanyInfoView = () => {
  const [companyIdx, setCompanyIdx] = useState(-1);
  const [viewData, setViewData] = useState([]);

  const query = useQuery(['companys'], async () => {
    const { data } = await axios.post('/companys/info', { company_type: '발주처' });
    return data.data
  });


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
                <SearchField placeholder='업체명, 연락처 등 검색' companys={query.data} setViewData={setViewData}/>
              </Box>

              <Typography
                sx={{ fontWeight: 600, fontSize: "12px", mt: "19px", mb: "10px" }} >
                총 업체({query.data.length})
              </Typography>
              <Box sx={{ display: "flex", height: '100%' }} >
                <CompanyTable companys={viewData} setCompanyIdx={setCompanyIdx} />
                <CompanyDetails companyIdx={companyIdx} />
              </Box>
            </Box>
          )
      }
    </>

  );
}

export default CompanyInfoView;
