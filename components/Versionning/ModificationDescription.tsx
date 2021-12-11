import { NextPage } from 'next';
import { Box } from '@mui/system';
import { Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Image from 'next/image'

const ModificationDescription: NextPage = () => {
    return (
        <Box sx={{marginTop:'3rem', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Box sx={{minWidth:'10%', maxWidth:'10%', display:'flex', flexDirection:'column'}}>
                <Box sx={{}}>
                    <Image src='/interstellar_black_hole.jpg'height={100} width={160} alt='black hole' />
                </Box>
                {/* <Box sx={{maxHeight:'5.5rem', overflow:'auto'}}> */}
                    <Typography sx={{color:'secondary.main'}}>
                        Adina Cazalens
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        Alexandre Monnier
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        Maugan Verdier
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        Lorenzo Carrascosa
                    </Typography>
                {/* </Box> */}
            </Box>

            <Box sx={{display:'flex', flexDirection:'column', minWidth:'40%', maxWidth:'70%'}}>
                <Typography sx={{fontSize:"1.5rem"}}>
                    Update - 5
                </Typography>
                <Typography sx={{marginTop:'1rem', maxHeight:'10.5rem', overflow:'auto'}}>
                    Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus semper eget duis at. Laoreet sit amet cursus sit amet dictum. Urna nec tincidunt praesent semper feugiat nibh. Diam quis enim lobortis scelerisque fermentum. Mattis enim ut tellus elementum sagittis. Nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Nisl nisi scelerisque eu ultrices vitae. Scelerisque purus semper eget duis at tellus at. Diam vel quam elementum pulvinar. Sit amet risus nullam eget felis. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Tempor commodo ullamcorper a lacus. Arcu ac tortor dignissim convallis aenean et.
                    Imperdiet massa tincidunt nunc pulvinar sapien. Vestibulum sed arcu non odio euismod lacinia. Pretium lectus quam id leo in vitae turpis massa. Ullamcorper eget nulla facilisi etiam dignissim diam. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Vitae turpis massa sed elementum tempus egestas.    
                </Typography>
            </Box>

            <Box sx={{minWidth:'15%', maxWidth:'15%', display:'flex', flexDirection:'column'}}>
                <Typography sx={{fontSize:"1.2rem"}}>
                    23th September 2022
                </Typography>
                <Box sx={{marginTop:'2rem', maxHeight:'10.5rem', overflow:'auto'}}>
                    <Typography sx={{color:'secondary.main'}}>
                        #climatechange
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #biodiversity
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #Africa
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #Agriculture
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #Agriculture
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #Agriculture
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #Agriculture
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #Agriculture
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #Agriculture
                    </Typography>
                    <Typography sx={{color:'secondary.main'}}>
                        #Agriculture
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
};

export default ModificationDescription;