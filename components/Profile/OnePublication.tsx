import { NextPage } from 'next';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CommentIcon from '@mui/icons-material/Comment';

const OnePublication: NextPage = (props) => {
    return (
        <Box sx={{ display: 'flex', flexGrow: 1, marginLeft: '-5%' }} {...props}>
            <Box sx={{ color: 'secondary.main', marginTop: '0.5%', minWidth: '100px' }}>
                <Image src="/profile-picture.png" height={120} width={120} alt="Profile Picture" />
                { props.infos.tags.map(x => (
                    <Typography sx={{ marginLeft: '10px' }}> {x} </Typography>
                )) }
            </Box>
            <Box m={0} sx={{ marginLeft: '2%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}> { props.infos.title } </Typography>
                <Typography variant="subtitle1" sx={{ color: '#7447D5', marginTop: '1%' }}> { props.infos.author } </Typography>
                <Typography sx={{ marginTop: '1%' }}> { props.infos.content } </Typography>
                <Box sx={{ pt:'1%', display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography>1500</Typography>
                    <ArrowDropUpIcon/>
                    <Typography>200</Typography>
                    <CommentIcon/>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', whiteSpace: 'nowrap', marginLeft: '1%' }}>
                <Typography sx={{ marginTop: '3%' }}>06-07-2021</Typography>
                { true ?
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Button variant="contained" sx={{ marginTop: '100%' }}>Edit</Button>
                        <Button variant="contained" sx={{ bgcolor: '#D60000', marginTop: '25%' }}>Remove</Button>
                    </Box>
                    : null
                }
            </Box>
        </Box>
    );
};

export default OnePublication;