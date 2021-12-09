import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box'
import AppBar from '../components/AppBar'
import FilterBar from '../components/FilterBar'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar />
                </Box>
                <FilterBar />

            </main>
        </div>
    )
}

export default Home
