import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const CategoriesFilter = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: 1 / 1 }}>
            <Typography
                variant="h5"
                sx={{ marginTop: '2rem', marginLeft: '8%' }}
            >
                {' '}
                Categories{' '}
            </Typography>
            <Box>
                <Button
                    variant="contained"
                    sx={{
                        width: '10rem',
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
                        2021-March
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ marginTop: '3%' }}>
                <Button
                    variant="contained"
                    sx={{
                        width: '10rem',
                        marginLeft: '16%',
                        color: 'secondary.main',
                        bgcolor: 'white',
                        '&:hover': {
                            color: 'primary.main',
                            bgcolor: 'secondary.dark',
                        },
                    }}
                >
                    <Typography sx={{ textTransform: 'capitalize' }}>
                        The impact...
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ marginTop: '3%' }}>
                <Button
                    variant="contained"
                    sx={{
                        width: '10rem',
                        marginLeft: '16%',
                        color: 'secondary.main',
                        bgcolor: 'white',
                        '&:hover': {
                            color: 'primary.main',
                            bgcolor: 'secondary.dark',
                        },
                    }}
                >
                    <Typography sx={{ textTransform: 'capitalize' }}>
                        Climate ch...
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ marginTop: '3%' }}>
                <Button
                    variant="contained"
                    sx={{
                        width: '10rem',
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
                        2021-November
                    </Typography>
                </Button>
            </Box>
            <Box sx={{ marginTop: '3%' }}>
                <Button
                    variant="contained"
                    sx={{
                        width: '10rem',
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
                        Other Dates
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};

export default CategoriesFilter;
