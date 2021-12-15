import { NextPage } from 'next';
import { Box } from '@mui/material/';
import InformationBar from '../components/InformationBar';
import PDFViewer from '../components/PDFViewer';

const SeeArticle: NextPage = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'row'}}>
            <InformationBar />
            <PDFViewer />
        </Box>
    )
};

export default SeeArticle;