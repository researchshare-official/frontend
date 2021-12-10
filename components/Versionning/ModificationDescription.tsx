import { NextPage } from 'next';
import { Box } from '@mui/system';
import { Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Image from 'next/image'

const ModificationDescription: NextPage = () => {
    return (
        <Box sx={{marginTop:'3rem', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Box sx={{maxWidth:'20%', display:'flex', flexDirection:'column'}}>
                <Box sx={{}}>
                    <Image src='/interstellar_black_hole.jpg'height={100} width={160} alt='black hole' />
                </Box>
                <Typography sx={{color: 'secondary.main'}}>
                    Adina Cazalens, Alexandre Monnier, Maugan Verdier, Lorenzo Carrascosa
                </Typography>
            </Box>

            <Box sx={{display:'flex', flexDirection:'column', minWidth:'40%'}}>
                <Typography sx={{fontSize:"1.5rem"}}>
                    Update - 5
                </Typography>
                <Typography sx={{}}>
                    date + other infos
                </Typography>
            </Box>

            <Box sx={{}}>
                <Typography sx={{}}>
                    Climate change - Impacts on African agriculture
                </Typography>
            </Box>
        </Box>
    )
};

export default ModificationDescription;