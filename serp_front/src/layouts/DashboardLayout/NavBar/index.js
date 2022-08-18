/* eslint-disable no-use-before-define */
import React from 'react';
import { Drawer, Box, List, ListItemIcon, ListItemButton, ListItemText } from '@mui/material'
import Divider from '@mui/material/Divider';
import UserInfoCard from './UserInfoCard';

import CompanyInfoIcon from '@mui/icons-material/StoreOutlined';
import PurchaseMngIcon from '@mui/icons-material/LocalMallOutlined';
import InvntMngIcon from '@mui/icons-material/InboxOutlined';
import SalesMngIcon from '@mui/icons-material/ReceiptLongOutlined';

import { useParams , useNavigate} from 'react-router-dom';

const items = [
  {
    title: '업체정보',
    href: 'companyinfo',
    icon: <CompanyInfoIcon />
  },
  {
    title: '구매관리',
    href: 'purchasemng',
    icon: <PurchaseMngIcon />
  },
  {
    title: '재고관리',
    href: 'invntmng',
    icon: <InvntMngIcon />
  },
  {
    title: '영업관리',
    href: 'salesmng',
    icon: <SalesMngIcon />
  },
]

const NavBar = (props) => {
  const params = useParams();
  const navigate = useNavigate();

  const handleListItemClick = (value) => {
    console.log(value)
    navigate(`/memu/${value}`);
    
  };
  return (
    <Box>
      <Drawer
        sx={{
          width: 250, flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'content-box',
            border: 0,
          },
        }}
        variant="permanent"
        anchor="left">

        <List>
          <Box sx={{ pl: 20, py: 22, pr: 88.88 }}>
            <img src={process.env.PUBLIC_URL + '/nav_logo.png'} style={{ width: "100%" }} />
          </Box>
          <Divider />
          {/* 유저 정보 */}
          <UserInfoCard />
          {/* 아이템  */}
          {
            items.map((value, i) => (
              <ListItemButton 
              onClick={()=>{handleListItemClick(value.href)}}
              key={i} 
              sx={{
                 mx: 20, 
                 fontSize: '50px',
                 fontWeight: 'bold',
                 '&:hover': { borderRadius : '4px', backgroundColor: 'rgba(56, 85, 179, 0.08)'},
                }}
                selected={params.mode === value.href}>
                <ListItemIcon sx={{ 
                  minWidth : 16,
                  pr : 15,
                  color : params.mode === value.href && 'primary.main',
                  fontSize: '16px'}}>
                  {value.icon}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontWeight: 'bold', fontSize: '14px', color : params.mode === value.href && 'primary.main'}}
                  primary={value.title} />

              </ListItemButton>
            ))
          }

        </List>

      </Drawer>
    </Box>

  );
};

export default NavBar;
