import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box'
import AppBar from '../components/AppBar'
import TitleVersionSwitch from '../components/Versionning/TitleVersionSwitch'
import ModificationDescription from '../components/Versionning/ModificationDescription'
import ArticleDiff from '../components/Versionning/ArticleDiff'

const Versionning: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

                <Box sx={{paddingTop:'4rem', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                    <AppBar />
                    <TitleVersionSwitch />
                    <ModificationDescription />
                    <ArticleDiff />
                </Box>
        </div>
    )
}

export default Versionning