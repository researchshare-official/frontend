import { useRouter } from 'next/router'
import { NextPage } from 'next';
import { Typography, Divider, Button, Box } from '@mui/material';

type ArticleProps = {
    id: number
    title: string,
    text: string,
    image: string,
    authors: Array<string>,
    tags: Array<string>,
    date: string,
    sponsored: boolean,
    likes: number,
    comments: number,
}

const getText = (text: string) => {
    const length = 150;
    if (text.length > length) {
        const subText = text.substring(0, length) + '...'
        return (
            <Box>
                <Box sx={{ fontSize: '18px', fontFamily: 'Arial' }}>{subText}
                    <Button size='small' variant='text'>
                        <Typography sx={{ color: 'secondary.main', fontSize: '12px', fontFamily: 'Arial', textDecorationLine: 'underline', textTransform: 'lowercase' }}>Read more</Typography>
                    </Button>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box>
                <Box sx={{ fontSize: '18px', fontFamily: 'Abhaya Libre' }}>{text}</Box>
            </Box>
        )
    }
}

const HotArticlePreview: NextPage<ArticleProps> = (props) => {
    const router = useRouter();

    return (
        <Box>
            <Box>
                <Box
                    sx={{
                        fontSize: '22px',
                        fontFamily: 'Abhaya Libre ExtraBold',
                        fontWeight: '800'
                    }}
                >{props.title}</Box>
                <Box sx={{ marginY: '10px' }}>
                    {getText(props.text)}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                    <Box sx={(theme) => ({ fontSize: '12px', color: theme.palette.grey[700], fontWeight: '500' })}>{props.date}</Box>
                </Box>
            </Box>
            <Divider variant='middle' sx={{ marginY: '10px' }} />
        </Box>
    )
}

export default HotArticlePreview;
