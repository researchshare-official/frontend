import { NextPage } from 'next';
import { Box } from '@mui/system';
import { Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

const ModificationDescription: NextPage = () => {
    return (
        <Box sx={{marginTop:'3rem'}}>
            <Typography sx={{}}>
                Climate change - Impacts on African agriculture
            </Typography>
        </Box>
    )
};

export default ModificationDescription;