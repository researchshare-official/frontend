import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box'
import AppBar from '../components/AppBar'
import ArticlePreview from '../components/ArticlePreview'
import { default as articles } from '../mocking/articles.json'
import FilterBar from '../components/FilterBar'

const Home: NextPage = () => {
    return (
        <div>
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
                    <Box sx={(theme) => ({
                        backgroundColor: theme.palette.grey[100],
                        flex: 1
                    })}>
                        <FilterBar />
                    </Box>
                    <Box sx={(theme) => ({
                        flex: 3,
                        backgroundColor: theme.palette.common.white,
                        padding: '50px 75px'
                    })}>
                        {articles.articles.map(article => (
                            <ArticlePreview
                                id={article.id}
                                title={article.title}
                                text={article.text}
                                image={article.image}
                                authors={article.authors}
                                tags={article.tags}
                                date={article.date}
                                sponsored={article.sponsored}
                                likes={article.likes}
                                comments={article.comments}
                                key={article.id}
                            />
                        ))}
                    </Box>
                    <Box sx={(theme) => ({
                        flex: 1,
                        backgroundColor: theme.palette.grey[100],
                    })}>
                    </Box>
                </div>

            </main>
        </div>
    )
}

export default Home
