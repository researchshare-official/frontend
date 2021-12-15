import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const WhatAreYouLookingFor = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: 1/1}}>
            <Typography variant="h5" sx={{marginTop:'2rem', marginLeft:'8%',}}> What are you looking for </Typography>
            <Box>
            <Button variant="contained"
            sx={{ width: '8rem', marginLeft:'8%', color: "primary.main", bgcolor: "secondary.main", 
            '&:hover': { color: "primary.main", bgcolor: 'secondary.dark'}}}>
                <Typography sx={{ textTransform: 'capitalize' }}>Articles</Typography>
            </Button>
            </Box>
            <Box sx={{marginTop: '3%'}}>
            <Button variant="contained"
            sx={{ width: '8rem', marginLeft:'8%', color: "secondary.main", bgcolor: "white", 
            '&:hover': { color: "primary.main", bgcolor: 'secondary.dark'}}}>
                <Typography sx={{ textTransform: 'capitalize' }}>Authors</Typography>
            </Button>
            </Box>
    </Box>
    )
};

export default WhatAreYouLookingFor;