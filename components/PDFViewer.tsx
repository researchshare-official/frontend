import { NextPage } from 'next';
import { Box } from '@mui/material/';
import Commentaries from '../components/Commentaries';
import {default as article } from '../mocking/article.json';

const PDFViewer: NextPage = () => {
    return (
        <Box>
            <Box sx={{marginTop: '0.375rem', display:'flex', flexDirection: 'row'}}>
                <Box sx={{flexDirection: 'column', marginRight: '2.5rem', backgroundColor: 'white'}}>
                    <Box sx={{width: '62.4rem', height: '1.563rem', backgroundColor: 'secondary.main', display: 'flex'}}/>
                    <iframe
                        width="1000rem"
                        height="800rem"
                        src={article.Link[0]}/>
                    <Box sx={{marginBottom: '1.5625rem'}}/>
                    <Commentaries />
                </Box>
            </Box>
        </Box>
    )
};

export default PDFViewer;