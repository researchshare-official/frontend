import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar';

const Neo4j: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <AppBar />
                </Box>
                <Box sx={{ display: 'flex', width: '100%' }}>
                    MA BITE
                </Box>
            </main>
        </div>
    );
};

export default Neo4j;