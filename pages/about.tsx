import type { NextPage } from 'next';
import styles from '../styles/About.module.css';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import React from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GroupsIcon from '@mui/icons-material/Groups';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SendIcon from '@mui/icons-material/Send';
import AppBar from "../components/AppBar";

const cards = [
    {
        component: NewspaperIcon,
        name: 'Publication',
        content:
            'Share your articles, choose how you share them',
    },
    {
        component: GroupsIcon,
        name: 'Relations',
        content: 'Interactivity between the actors of the research world.',
    },
    {
        component: ReceiptLongIcon,
        name: 'Proofreading Anonymous',
        content:
            "Online proofreading, anonymous until publication, to guarantee the objectivity of its opinions.",
    },
    {
        component: FindInPageIcon,
        name: 'Consultation',
        content: 'Consult free or paid research papers.',
    },
];

const About: NextPage = () => {
    return (
        <main className={styles.main}>
            <AppBar />
            <Box component="div">
                <Box component="div" className={styles.aboutHeroContainer}>
                    <Box component="p" className={styles.aboutHeroTitle}>
                        ResearchShare - Knowledge for everyone
                    </Box>
                    <Box component="p" className={styles.aboutHeroDescription}>
                        A web-based scientific research platform,
                        dedicated to researchers, with a will to bring more
                        interactivity between actors of the research world.
                    </Box>
                    <Button className={styles.aboutHeroButton} variant="contained">
                        Explore
                    </Button>
                    <Box
                        component="img"
                        className={styles.aboutHeroImage}
                        src="images/hero/Screenshot_20211207_151305.png"
                        alt="ResearchShare - Screen"
                    />
                </Box>
                <Box component="div" className={styles.aboutCardsContainer}>
                    <Box component="p" className={styles.aboutCardsListTitle}>
                        What we offer
                    </Box>
                    <Box component="div" className={styles.aboutCardsList}>
                        {cards.map((cardy, index) => {
                            return (
                                <Card
                                    sx={{backgroundColor: '#ffffff'}}
                                    key={index}
                                    className={styles.aboutCardsItems}
                                >
                                    {React.createElement(cardy.component, {
                                        sx: { fontSize: '2.5rem', margin: '1rem' },
                                    })}
                                    <CardHeader title={cardy.name} />
                                    <CardContent>{cardy.content}</CardContent>
                                </Card>
                            );
                        })}
                    </Box>
                </Box>
                <Box component="div" className={styles.aboutContactContainer}>
                    <Box component="p" className={styles.aboutContactTitle}>
                        Contact us
                    </Box>
                    <Box component="div" className={styles.aboutContactFormStyling}>
                        <Box
                            component="form"
                            action="https://formspree.io/f/xayvyyda"
                            method="POST"
                            className={styles.aboutContactFormContainer}
                        >
                            <TextField
                                className={styles.aboutContactFormItems}
                                required
                                name="name"
                                id="name"
                                label="Full Name"
                                variant="filled"
                            />
                            <TextField
                                className={styles.aboutContactFormItems}
                                required
                                name="_replyto"
                                id="_replyto"
                                label="Email"
                                variant="filled"
                            />
                            <TextareaAutosize
                                className={styles.aboutContactFormTextArea}
                                aria-label="minimum height"
                                required
                                name="message"
                                id="message"
                                minRows={3}
                                placeholder="Message*"
                                style={{ width: '16rem' }}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                className={styles.aboutHeroButton}
                                endIcon={<SendIcon />}
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </main>
    );
};

export default About;
