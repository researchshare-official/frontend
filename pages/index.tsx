import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box'
import AppBar from '../components/AppBar'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Box>
                    <AppBar />
                </Box>
                <div className={styles.body}>
                    <Box sx={{
                        backgroundColor: '#F4F4F4',
                        flex: 1
                    }}>
                    </Box>
                    <Box sx={{
                        flex: 3,
                        backgroundColor: '#ffffff'
                    }}>
                    </Box>
                    <Box sx={{
                        flex: 1,
                        backgroundColor: '#F4F4F4'
                    }}>
                    </Box>
                </div>

            </main>
        </div>
    )
}

export default Home
