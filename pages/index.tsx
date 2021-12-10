import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box'
import AppBar from '../components/AppBar'
import Summary from '../components/Profile/Summary'
import ProfileContent from '../components/Profile/ProfileContent'

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    <AppBar />
                </Box>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    <Summary/>
                    <ProfileContent/>
                </Box>

            </main>
        </div>
    )
}

export default Home
