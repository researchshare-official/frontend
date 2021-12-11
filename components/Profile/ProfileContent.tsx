import { NextPage } from 'next';
import { List, Box, ListItem, Divider, Typography, Tabs, Tab } from '@mui/material';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import SortIcon from '@mui/icons-material/Sort';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OnePublication from './OnePublication';
import { SyntheticEvent, useState } from 'react';

const ProfileContent: NextPage = (props) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (_: SyntheticEvent<Element, Event>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', px: '5%' }} {...props}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '2%' }}>
                <Image src="/profile-picture.png" height={120} width={120} alt="Profile image" />
                <Typography sx={{ color: '#7447D5', fontSize: '20px' }}>Adina Cazalens</Typography> 
                <Typography>Researcher in cosmology</Typography> 
                <Typography>Centre Epitech</Typography>
            </Box>
            <Tabs variant="fullWidth" value={value} onChange={handleChange} sx={{minHeight: '72px'}} aria-label="icon label tabs example">
                <Tab icon={<InfoIcon />} label="PUBLICATIONS" />
                { true ? <Tab icon={<StarIcon />} label="FAVORITE" /> : null }
                <Tab icon={<PersonIcon />} label="ABOUT" />
                <Tab icon={<AccessTimeIcon />} label="LAST POSTS" />
            </Tabs>
            <Box sx={{ display: 'flex', fontFamily: 'Arial', marginTop: '3%', }}>
                <Typography sx={{ pr: '2%', fontSize: '22px' }}>Insight</Typography>
                <SortIcon sx={{ pr: '1%', }} fontSize="large"/>
                <Typography sx={{ fontSize: '22px' }}>Sort by</Typography>
            </Box>
            <List sx={{ overflow: 'auto', marginTop: '1%' }}>
                {[1, 2, 3, 4, 5].map(x => (
                    <ListItem key={`publication-${x}`} sx={{ display: 'flex', flexDirection: 'column' }}>
                        <OnePublication/>
                        <Divider sx={{ width: '80%', marginTop: '3%', marginBottom: '3%' }}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ProfileContent;