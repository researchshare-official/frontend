import { NextPage } from 'next';
import { Box, Typography } from '@mui/material/';

const InformationBar: NextPage = () => {
    return (
        <Box>
            <Box sx={{marginTop: '0.375rem', display:'flex', flexDirection: 'row'}}>
                <Box sx={{flexDirection: 'column', marginRight: '2.5rem', backgroundColor: 'white'}}>
                    <Box sx={{width: '25rem', height: '1.5625rem', backgroundColor: 'secondary.main', display: 'flex'}}></Box>
                    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h5" sx={{color: 'black', fontWeight: 'bold', marginBottom: '2.25rem'}}>Information</Typography>
                        <Typography variant="h6" sx={{color: 'black', marginBottom: '0.4375rem'}}>Authors:</Typography>
                    </Box>
                    <Box sx={{marginLeft: '1.875rem', marginBottom: '1.5625rem'}}>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Adina Cazalens</Typography>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Alexandre Monnier</Typography>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Maugan Verdier</Typography>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Lorenzo Carrascosa</Typography>
                    </Box>
                    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h6" sx={{color: 'black', marginBottom: '0.4375rem'}}>Dates:</Typography>
                    </Box>
                    <Box sx={{marginLeft: '1.875rem', marginBottom: '1.5625rem'}}>
                        <Typography variant="body2" sx={{color: 'black'}}>Some</Typography>
                        <Typography variant="body2" sx={{color: 'black'}}>Other</Typography>
                        <Typography variant="body2" sx={{color: 'black'}}>Infos...</Typography>
                    </Box>
                    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h6" sx={{color: 'black', marginBottom: '0.4375rem'}}>Tags:</Typography>
                    </Box>
                    <Box sx={{marginLeft: '1.875rem', marginBottom: '1.5625rem'}}>
                        <Typography variant="body2" sx={{color: 'black'}}>Some</Typography>
                        <Typography variant="body2" sx={{color: 'black'}}>Other</Typography>
                        <Typography variant="body2" sx={{color: 'black'}}>Tags...</Typography>
                    </Box>
                    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h6" sx={{color: 'black', marginBottom: '0.4375rem'}}>Other articles:</Typography>
                    </Box>
                    <Box sx={{marginLeft: '1.875rem', marginBottom: '1.5625rem'}}>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Some</Typography>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Other</Typography>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Links...</Typography>
                    </Box>
                    <Box sx={{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                        <Typography variant="h6" sx={{color: 'black', marginBottom: '0.4375rem'}}>Reviewed by:</Typography>
                    </Box>
                    <Box sx={{marginLeft: '1.875rem', marginBottom: '1.5625rem'}}>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Some</Typography>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Other</Typography>
                        <Typography variant="body2" sx={{color: 'secondary.main', textDecoration: 'underline'}}>Reviewer...</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
};

export default InformationBar;