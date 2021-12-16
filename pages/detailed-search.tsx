import type { NextPage } from 'next';
import { Box, TextField, IconButton } from '@mui/material';
import Head from 'next/head';
import AppBar from '../components/AppBar';
import SideBar from '../components/DetailedSearch/SideBar';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Home.module.css';
import { ChangeEvent, useState } from 'react';

const DetailedSearch: NextPage = () => {
    const [, setSearch] = useState<string>('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>ResearchShare</title>
                <meta name="description" content="..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main_unflex}>
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
                        flexDirection: 'row',
                    }}
                >
                    <SideBar />
                    <Box sx={{ marginLeft: '5%', marginTop: '2%' }}>
                        <TextField
                            onChange={handleChange}
                            label="With normal TextField"
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                    </Box>
                </Box>
            </main>
        </div>
    );
};

export default DetailedSearch;
