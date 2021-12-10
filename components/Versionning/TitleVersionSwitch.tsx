import { NextPage } from 'next';
import { Box } from '@mui/system';
import { Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

// const Version = styled('div')(({ theme }) => ({
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//     },
// }));

const TitleVersionSwitch: NextPage = () => {

    const [version, setVersion] = useState('5');

    const handleChange = (event: SelectChangeEvent) => {
        setVersion(event.target.value as string);
    };

    return (
        <Box sx={{}}>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:'space-between', marginTop:"1rem", width:'80%', marginLeft:'10%'}}>
                <Typography sx={{fontSize:"2rem", display:"flex", justifyContent:'center'}}>
                    Climate change - Impacts on African agriculture 
                </Typography>
                <Typography sx={{minWidth:'12rem', display:"flex", justifyContent:'right', fontSize:"1.5rem", marginLeft:"2rem", marginTop:"0.38rem"}}>
                    versions 5
                </Typography>
            </Box>
            <Box sx={{ minWidth:"4rem", maxWidth:"7rem", marginLeft:'10%', marginTop:'1rem'}}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Version</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={version}
                    label="Version"
                    onChange={handleChange}
                    >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>40000</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
};

export default TitleVersionSwitch;