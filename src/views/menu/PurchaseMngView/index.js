import React from 'react';
import { Box } from '@mui/material'

import Tabs  from 'src/components/Tabs'
import Header from 'src/components/Header'


const PurchaseMngView = () => {
    const tabData = [
        { label : '입고/출고' , panel : <div>입고 출고 내용</div>},
        { label : '거래처' , panel : <div>거래처 내용</div>},
    ]

    return (
        <Box>
            <Header>
                구매관리
            </Header>

            <Tabs tabData={tabData} />

        </Box>

    );
}

export default PurchaseMngView;
