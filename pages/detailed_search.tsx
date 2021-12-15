import type { NextPage } from 'next'
import { List, Box, ListItem, Divider, Typography, Tabs, Tab, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppBar from '../components/AppBar'
import SideBar from '../components/detailed_search/SideBar'

const Detailed_search: NextPage = () => {
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
            <Box sx={{ display: 'flex', height: '100vh'}}>
                <SideBar />
                <Box sx={{marginLeft: '55%'}}>
                <Typography variant="h5" sx={{marginTop:'2rem', alignSelf: 'right'}}> Climate Change->Impact->Agriculture </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Detailed_search