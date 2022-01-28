import {Box, Button} from '@mui/material';
import styles from '../../styles/DetailedSearchResults.module.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import axios from "axios";

interface DetailedSearchResultsProps {
    results: string
}

export interface Labo {
    _index:  string;
    _type:   string;
    _id:     string;
    _score:  number;
    _source: Source;
}

export interface Source {
    fileName:   string;
    data:       string;
    attachment: Attachment;
}

export interface Attachment {
    content_type:   string;
    language:       string;
    content:        string;
    content_length: number;
}



// const DetailedSearchResults: NextPage = ({results}) => {
const DetailedSearchResults: React.FC<DetailedSearchResultsProps> = ({results}) => {
    const [resultsy, setResultsy] = useState<Labo[]>();
    useEffect(() => {
        if (!results)
            return;
        setResultsy(JSON.parse(results))
    } ,[results])
    // console.log("yolo");
    // console.log(resultsy);
    if (!resultsy) {
        return (
            <main className={styles.detailedAllComponents}>
                <Box component="p">
                    No results found
                </Box>
            </main>
        )
    }

    function getArticleFromName(articleName : string) {
        axios({
            method: "get",
            url: "http://localhost:4000/rawArticle?articleName=" + articleName,
        }).then(response => {
            const byteCharacters = atob(response.data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const file = new Blob([byteArray], { type: 'application/pdf;base64' });
            const fileURL = URL.createObjectURL(file);
            window.open(fileURL);
        });
        return false
    }

    return (
        <main className={styles.detailedAllComponents}>
            {
                Object.values(resultsy).map((tosearch, index) => {
                    return (
                        <Card key={index} sx={{ minWidth: 345, backgroundColor: '#ffffff', margin: '1rem' }}>
                            <CardHeader
                                title={tosearch._source.fileName}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {tosearch._source.attachment.content.substring(0, 500) + ' ...'}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Button
                                    onClick={() => {getArticleFromName(tosearch._source.fileName)}}
                                    variant="contained"
                                    sx={{
                                        width: '8rem',
                                        color: 'primary.main',
                                        bgcolor: 'secondary.main',
                                        '&:hover': {
                                            color: 'primary.main',
                                            bgcolor: 'secondary.dark',
                                        },
                                    }}
                                >
                                    <Typography sx={{ textTransform: 'capitalize' }}>
                                        Learn More
                                    </Typography>
                                </Button>
                            </CardActions>
                        </Card>
                    )
                })
            }
        </main>
    );
};

export default DetailedSearchResults;