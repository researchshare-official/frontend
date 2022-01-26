import type { NextPage } from 'next';
import { Box, TextField, IconButton } from '@mui/material';
import Head from 'next/head';
import AppBar from '../components/AppBar';
import SideBar from '../components/DetailedSearch/SideBar';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Home.module.css';
import { ChangeEvent, useState } from 'react';
import axios from "axios";
import DetailedSearchResults from '../components/DetailedSearch/detailed-search-results'

const DetailedSearch: NextPage = () => {
    const [searchy, setSearch] = useState<string>('');
    const [results, setResults] = useState<string>('');

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    function submitSearch() {
        console.log(searchy);
        try {
            axios({
                method: "get",
                url: "http://localhost:4000/search?text=" + searchy,
                // headers: {"Content-Type": "multipart/form-data"},
            }).then(e => {
                // setResults(e);
                setResults(JSON.stringify(e.data.body.hits.hits))
                // console.log(e.data.body.hits.hits);
            });
        } catch (e) {
            console.log(e);
        }
        try {
            axios({
                method: "get",
                url: "http://localhost:4000/get_relations",
            }).then(e => {
                console.log(e);
            });
        } catch (e) {
            console.log(e);
        }
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
                                    <IconButton onClick={submitSearch}>
                                        <SearchIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {/*<DetailedSearchResults {...results}/>*/}
                        <DetailedSearchResults results={results}/>
                    </Box>
                </Box>
            </main>
        </div>
    );
};

export default DetailedSearch;
