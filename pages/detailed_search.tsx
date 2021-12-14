import type { NextPage } from 'next'
import { List, Box, ListItem, Divider, Typography, Tabs, Tab, ListItemIcon, ListItemText } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppBar from '../components/AppBar'

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
            <Box sx={{ display: 'flex', height: '7vh', justifyContent: 'left'}}>
                <Typography variant="h5" sx={{marginTop:'2rem', alignSelf: 'left'}}> Personal informations </Typography>
            </Box>
        </div>
    )
}

export default Detailed_search