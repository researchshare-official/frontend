import type { NextPage } from 'next';
import { Box, TextField, IconButton } from '@mui/material';
import Head from 'next/head';
import AppBar from '../components/AppBar';
import SideBar from '../components/DetailedSearch/SideBar';
import SearchIcon from '@mui/icons-material/Search';
import styles from '../styles/Home.module.css';
import {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import DetailedSearchResults from '../components/DetailedSearch/detailed-search-results'
import { useRouter } from 'next/router';

const DetailedSearch: NextPage = () => {
    const { query } = useRouter();
    const [search, setSearch] = useState<string>('');
    const [results, setResults] = useState<string>('');

    useEffect(() => {
        setSearch(query.search as string | undefined ?? '')
    }, [query.search]);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    function submitSearch() {
        console.log(search);
        try {
            axios({
                method: "get",
                url: "http://localhost:4000/search?text=" + search,
                // headers: {"Content-Type": "multipart/form-data"},
            }).then(e => {
                if (e.data.body) {
                    const rslt = JSON.stringify(e.data.body.hits.hits)
                    if (rslt) {
                        setResults(rslt)
                    }
                }
                // setResults(e);
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
                <link rel="shortcut icon" href="/favicon.ico" />
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
