import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar';
import Summary from '../components/Profile_labo/Summary';
import ProfileContent from '../components/Profile_labo/ProfileContent';

const Profile: NextPage = () => {
    return (
        <div>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <Box
                    sx={{
                        display: 'flex',
                        height: '7vh',
                        justifyContent: 'center',
                    }}
                >
                    <AppBar />
                </Box>
                <Box sx={{ display: 'flex', height: '93vh', width: '100%' }}>
                    <ProfileContent />
                </Box>
            </main>
        </div>
    );
};

export default Profile;
