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
import WhatAreYouLookingFor from './WhatAreYouLookingFor';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[400], 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.grey[400], 0.25),
    },
    marginLeft: 0,
    width: '100%',
    border: 'solid',
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));

const SideBar: NextPage = (props) => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', width: 1/4}}>
            <WhatAreYouLookingFor></WhatAreYouLookingFor>
            <Box sx={{ display: 'flex-end', flexDirection: 'row-reverse', marginLeft: 'auto'}}>
                <Divider variant="fullWidth" orientation='vertical' sx={{marginTop:'2rem', alignSelf: 'right'}}/>
            </Box>
        </Box>
    )
};

export default SideBar;