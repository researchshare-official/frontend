import { NextPage } from 'next';
import { List, Box, ListItem, Divider, Typography, Tabs, Tab, ListItemIcon, ListItemText, Input, TextField } from '@mui/material';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import SortIcon from '@mui/icons-material/Sort';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { SyntheticEvent, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';

const GetWork: NextPage = (props) => {

    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    const [value3, setValue3] = useState<string>("");

    function a(v : any) {
        console.log(v);
    }

    return(
        <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', width:'100%'}}>
        <Box sx={{display:'flex', flexDirection:'column', width:'45%'}}>
            <Typography variant='h5' sx={{textAlign:'center'}} >Submit your work here :</Typography>
            <TextField onChange={
                event => { const { value } = event.target;
                setValue1(value); } } placeholder='test'>test</TextField>
            <TextField onChange={
                event => { const { value } = event.target;
                setValue2(value); } } placeholder='test'>test</TextField>
            <TextField onChange={
                event => { const { value } = event.target;
                setValue3(value); } } placeholder='test'>test</TextField>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', width:'45%'}}>
            <Typography variant='h5' sx={{textAlign:'center'}} >Preview your work here :</Typography>
            <Typography variant='body1' sx={{}}  > { value1 } </Typography>
        </Box>
        </Box>
    );
};

export default GetWork;