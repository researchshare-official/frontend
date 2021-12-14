import Image from 'next/image'
import { styled, alpha, useTheme } from '@mui/material/styles';
import MUIAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { NextPage } from 'next';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const WhatAreYouLookingFor : NextPage = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: 1/1}}>
            <Typography variant="h5" sx={{marginTop:'2rem', marginLeft:'8%',}}> What are you looking for </Typography>
            <Button variant="contained"
            sx={{ width: '8rem', alignSelf: 'center', color: "primary.main", bgcolor: "secondary.main", 
            '&:hover': { color: "primary.main", bgcolor: 'secondary.dark' }}}>
                <Typography sx={{ textTransform: 'capitalize' }}>Articles</Typography>
            </Button>
            <Button variant="contained"
            sx={{ width: '8rem', alignSelf: 'center', color: "secondary.main", bgcolor: "white", 
            '&:hover': { color: "primary.main", bgcolor: 'secondary.dark', marginTop:'140px' }}}>
                <Typography sx={{ textTransform: 'capitalize' }}>Authors</Typography>
            </Button>
    </Box>
    )
};

export default WhatAreYouLookingFor;