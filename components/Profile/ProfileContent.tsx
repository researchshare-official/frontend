import { NextPage } from 'next';
import { List, Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Tabs, Tab } from '@mui/material';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import SortIcon from '@mui/icons-material/Sort';
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
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Image src="/profile-picture.png" height={120} width={120} alt="Profile image" />
                <Typography>Adina Cazalens</Typography> 
                <Typography>Researcher in cosmology</Typography> 
                <Typography>Centre Epitech</Typography>
            </Box>
            <Tabs textColor="secondary" indicatorColor="secondary" variant="fullWidth" value={value} onChange={handleChange} sx={{minHeight: '72px'}} aria-label="icon label tabs example">
                <Tab icon={<InfoIcon />} label="PUBLICATIONS" />
                <Tab icon={<PersonIcon />} label="ABOUT" />
                <Tab icon={<AccessTimeIcon />} label="LAST POSTS" />
            </Tabs>
            <Box sx={{ display: 'flex' }}>
                <Typography sx={{ pr: '1%' }}>Insight</Typography>
                <SortIcon sx={{ pr: '1%' }}/>
                <Typography>Sort by</Typography>
            </Box>
            <List sx={{ overflow: 'auto' }}>
                {[1, 2, 3, 4, 5].map(x => (
                    <ListItem key={`publication-${x}`}>
                        <OnePublication/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default ProfileContent;