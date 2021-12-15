import type { NextPage } from 'next'
import { Box, Typography, TextField } from '@mui/material'
import Head from 'next/head'
import AppBar from '../components/AppBar'
import SideBar from '../components/detailed_search/SideBar'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Detailed_search: NextPage = () => {
    const [value, setValue] = useState();

    function truc() {
        console.log(value);
    }
    function machin(event) {
        console.log(event.target.value);
        setValue(event.target.value);
    }

    return (
        <div>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{ display: 'flex', height: '7vh', justifyContent: 'center'}}>
                <AppBar />
            </Box>
            <Box sx={{ display: 'flex' , flexDirection:'row' , height: '100vh'}}>
                <SideBar />
                <Box sx={{marginLeft: '55%'}}>
                    <Typography variant="h5" sx={{marginTop:'2rem', alignSelf: 'right'}}> Climate Change->Impact->Agriculture </Typography>
                    <TextField onChange={machin}
                        label="With normal TextField"
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={truc}>
                                    <SearchIcon />
                                </IconButton>
                            )
                        }}
                        />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', height: '100vh'}}>
            </Box>
        </div>
    )
}

export default Detailed_search