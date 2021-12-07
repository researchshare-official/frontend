import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box'
import AppBar from '../components/AppBar'

const Login: NextPage = () => {
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

        </main>
    </div>
  )
}

export default Login