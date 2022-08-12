import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Popper from '@mui/material/Popper';
import { useState } from 'react';
import Paper from '@mui/material/Paper'
import LogoutIcon from '@mui/icons-material/Logout';

const UserInfoCard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    // 대표이미지
    const stringAvatar = (name) => {
        return {
            sx: {
                bgcolor: 'primary.main',
                width: '32px',
                height: '32px',
                fontSize: '14px'
            },
            children: `${name.split('.')[0][0]}${name.split('.')[1][0]}`,
        };
    }

    const handleClick = () => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    return (
        <Box>
            <Box component='div' sx={{
                width: 210,
                height: 70,
                mx : 20,
                my : 30,
                backgroundColor: 'basis.main',
                borderRadius: '8px',
            }}>

                <Box sx={{ px: 16, py: 19, display: 'flex' }} >
                    <Avatar {...stringAvatar('Leo.moon')} />

                    <Box sx={{ ml: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flexGrow: 1 }}>
                        <Box sx={{ fontWeight: 'bold', fontSize: '14px' }}> Leo.moon </Box>
                        <Box sx={{ fontSize: '12px' }}> 영업팀 </Box>
                    </Box>

                    <Box sx={{ borderRadius: '4px', backgroundColor: 'basis.dark', }}>
                        <IconButton onClick={handleClick()} aria-label="settings">
                            <KeyboardArrowDownIcon color="primary" fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>

            </Box>
            <Popper open={open} anchorEl={anchorEl} placement={'bottom-end'} sx={{ zIndex: 9999 }}>
                <Paper elevation={3} sx={{pl : 13.6}}>
                    <Button color="logout" sx={{ width: '178px', justifyContent: "flex-start", fontSize: '13px', fontWeight: 'bold' }} startIcon={<LogoutIcon />} >
                        로그아웃
                    </Button>
                </Paper>

            </Popper>
        </Box >


    );
}


export default UserInfoCard;
