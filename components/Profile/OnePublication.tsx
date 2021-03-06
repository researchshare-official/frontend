import { NextPage } from 'next';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CommentIcon from '@mui/icons-material/Comment';
import { Publications } from '../../types/OnePublication';

const OnePublication: NextPage<Publications> = (props) => {
    return (
        <Box
            sx={{ display: 'flex', flexGrow: 1, marginLeft: '-5%' }}
            {...props}
        >
            <Box
                sx={{
                    color: 'secondary.main',
                    marginTop: '0.5%',
                    minWidth: '100px',
                }}
            >
                <Image
                    src="/profile-picture.png"
                    height={120}
                    width={120}
                    alt="Profile Picture"
                />
                {props.infos.tags.map((x) => (
                    <Typography key={`tag${x}`} sx={{ marginLeft: '10px' }}>
                        {' '}
                        #{x}{' '}
                    </Typography>
                ))}
            </Box>
            <Box m={0} sx={{ marginLeft: '2%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {' '}
                    {props.infos.title}{' '}
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ color: 'secondary.main', marginTop: '1%' }}
                >
                    {' '}
                    {props.infos.author}{' '}
                </Typography>
                <Typography sx={{ marginTop: '1%' }}>
                    {' '}
                    {props.infos.content}{' '}
                </Typography>
                <Box
                    sx={{
                        pt: '1%',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Typography>1500</Typography>
                    <ArrowDropUpIcon />
                    <Typography>200</Typography>
                    <CommentIcon />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    whiteSpace: 'nowrap',
                    marginLeft: '1%',
                }}
            >
                <Typography sx={{ marginTop: '3%' }}>06-07-2021</Typography>
                {true ? (
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Button
                            variant="contained"
                            sx={{
                                marginTop: '2rem',
                                marginBottom: '2rem',
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
                                Edit
                            </Typography>
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{
                                width: '8rem',
                                color: 'primary.main',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: 'palette.error.main',
                                },
                            }}
                        >
                            <Typography sx={{ textTransform: 'capitalize' }}>
                                Remove
                            </Typography>
                        </Button>
                    </Box>
                ) : null}
            </Box>
        </Box>
    );
};

export default OnePublication;
