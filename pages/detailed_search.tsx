import type { NextPage } from 'next'
import { Box, Typography, TextField, IconButton } from '@mui/material'
import Head from 'next/head'
import AppBar from '../components/AppBar'
import SideBar from '../components/DetailedSearch/SideBar'
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Detailed_search: NextPage = () => {
    const [value, setValue] = useState();

    function handleSearch() {
        console.log(value);
    }
    function handleChange(event : any) {
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
                <Box sx={{marginLeft: '5%', marginTop: '2%'}}>
                    <TextField onChange={handleChange}
                        label="With normal TextField"
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={handleSearch}>
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