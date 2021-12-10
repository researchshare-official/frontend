import type { NextPage } from 'next'
import styles from '../styles/About.module.css'
import Box from '@mui/material/Box'
import {Button} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import AppBar from "../components/AppBar";
import Typography from '@mui/material/Typography';
import React, {Component} from "react";
import TextField from '@mui/material/TextField'
import TextareaAutosize from '@mui/material/TextareaAutosize'

import NewspaperIcon from '@mui/icons-material/Newspaper';
import GroupsIcon from '@mui/icons-material/Groups';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import SendIcon from '@mui/icons-material/Send';

const cards = [
    {component: NewspaperIcon, name: "Publication", content: "Partagez vos articles, choisissez comment vous voulez les partager."},
    {component: GroupsIcon, name: "Mise en relation", content: "Interactivité entre les acteurs du monde de la recherche."},
    {component: ReceiptLongIcon, name: "Relecture Anonyme", content: "Relecture en ligne, anonyme jusqu'à publication, pour garantir l'objectivité des avis de celle-ci."},
    {component: FindInPageIcon, name: "Consultations", content: "Consulter des papiers de recherches gratuites ou payantes."}
]

const About: NextPage = () => {
    return (
        <main className={styles.main}>
            <Box component="div" className={styles.aboutHeroContainer}>
                <Box component="p" className={styles.aboutHeroTitle}>ResearchShare - Knowledge for everyone</Box>
                <Box component="p" className={styles.aboutHeroDescription}>Une plateforme web de recherche scientifique, dédiée aux chercheurs, avec une volonté d’apporter plus d'interactivité entre acteurs du monde de la recherche.</Box>
                <Button className={styles.aboutHeroButton} variant="contained">Explore</Button>
                <Box component="img" className={styles.aboutHeroImage} src="images/hero/Screenshot_20211207_151305.png" alt="ResearchShare - Screen"/>
            </Box>
            <Box component="div" className={styles.aboutCardsContainer}>
                <Box component="p" className={styles.aboutCardsListTitle}>Ce que nous proposons</Box>
                <Box component="div" className={styles.aboutCardsList}>
                    {cards.map((cardy, index) => {
                      return (
                          <Card key={index} className={styles.aboutCardsItems}>
                              {React.createElement(cardy.component, {sx: { fontSize: "2.5rem", margin: "1rem" }})}
                              <CardHeader
                                  title={cardy.name}
                              />
                              <CardContent>
                                  {cardy.content}
                              </CardContent>
                          </Card>
                      )
                    })
                    }
                </Box>
            </Box>
            <Box component="div" className={styles.aboutContactContainer}>
                <Box component="p" className={styles.aboutContactTitle}>Contactez nous</Box>
                <Box component="div" className={styles.aboutContactFormStyling}>
                    <Box component="form" action="https://formspree.io/f/xayvyyda" method="POST" className={styles.aboutContactFormContainer}>
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
                            style={{ width: "16rem" }}
                        />
                        <Button type="submit" variant="contained" className={styles.aboutHeroButton} endIcon={<SendIcon />}>
                            Envoyer
                        </Button>
                    </Box>
                </Box>
            </Box>
        </main>
    )
}

export default About
