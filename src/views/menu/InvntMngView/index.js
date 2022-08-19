import React from 'react';
import { Box } from '@mui/material'

import Tabs  from 'src/components/Tabs'
import Header from 'src/components/Header'


const InvntMngView = () => {
    const tabData = [
        { label : '입고' , panel : <div>입고 내용</div>},
        { label : '제품관리' , panel : <div>제품관리 내용</div>},
        { label : '센서관리' , panel : <div>센서관리 내용</div>},
    ]


    return (
        <Box>
            <Header>
                재고관리
            </Header>

            <Tabs tabData={tabData} />

        </Box>
    );
}

export default InvntMngView;
