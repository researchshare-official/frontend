import { Typography, Button, Box } from '@mui/material';

const IncludeFilter = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: 1 / 1 }}>
            <Typography
                variant="h5"
                sx={{ marginTop: '2rem', marginLeft: '8%' }}
            >
                {' '}
                Include{' '}
            </Typography>
            <Box>
                <Button
                    variant="contained"
                    sx={{
                        width: '8rem',
                        marginLeft: '8%',
                        color: 'primary.main',
                        bgcolor: 'secondary.main',
                        '&:hover': {
                            color: 'primary.main',
                            bgcolor: 'secondary.dark',
                        },
                    }}
                >
                    <Typography sx={{ textTransform: 'capitalize' }}>
                        Certificate
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ marginTop: '3%' }}>
                <Button
                    variant="contained"
                    sx={{
                        width: '8rem',
                        marginLeft: '8%',
                        color: 'secondary.main',
                        bgcolor: 'white',
                        '&:hover': {
                            color: 'primary.main',
                            bgcolor: 'secondary.dark',
                        },
                    }}
                >
                    <Typography sx={{ textTransform: 'capitalize' }}>
                        Quotation
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default IncludeFilter;
