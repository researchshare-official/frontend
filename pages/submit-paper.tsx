import type { NextPage } from 'next';
import Head from 'next/head';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar';
import GetWork from '../components/submitPaper/getWork';

const SubmitPaper: NextPage = () => {
    return (
        <div>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <AppBar />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    marginTop: '2rem',
                    width: '100%',
                }}
            >
                <GetWork />
            </Box>
        </div>
    );
};

export default SubmitPaper;
