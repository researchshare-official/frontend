import Image from 'next/image'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import { NextPage } from 'next';
import { ArrowUpward, Comment } from '@mui/icons-material';
import Button from '@mui/material/Button';
import { Typography, Divider } from '@mui/material';

type ArticlePreviewProps = {
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
    const length = 400
    if (text.length > length) {
        const subText = text.substring(0, length) + '...'
        return (
            <Box>
                <Box sx={{ fontSize: '20px', lineHeight: '24px', fontFamily: 'Arial' }}>{subText}
                    <Button size='small' variant='text'>
                        <Typography sx={{ color: '#7447D5', fontSize: '20px', fontFamily: 'Abhaya Libre', textDecorationLine: 'underline', textTransform: 'lowercase' }}>Read more</Typography>
                    </Button>
                </Box>
            </Box>
        )
    } else {
        return (
            <Box>
                <Box sx={{ fontSize: '20px', lineHeight: '24px', fontFamily: 'Abhaya Libre' }}>{text}</Box>
            </Box>
        )
    }
}

const getAuthors = (authors: Array<string>) => {
    let authorNames = ''
    authors.forEach((author, index) => {
        if (index === 0) {
            authorNames += author
        } else {
            authorNames += ', ' + author
        }
    })
    return <Box sx={{ fontSize: '16px', color: '#7447D5', marginY: '10px' }}>{authorNames}</Box>
}

const getDateOrSponsored = (date: string, sponsored: boolean) => {
    if (sponsored) {
        return <Box sx={{ fontSize: '18px', color: '#636363', fontWeight: '500' }}>Sponsored</Box>
    } else {
        return <Box sx={{ fontSize: '18px', color: '#636363', fontWeight: '500' }}>{date}</Box>
    }
}

const ArticlePreview: NextPage<ArticlePreviewProps> = (props) => {
    const router = useRouter();

    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ marginRight: '15px' }}>
                    <Image src={`/${props.image}`} layout='fixed' width={124} height={124} />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {props.tags.map(tag => (
                            <Box sx={{ fontSize: '14px', color: '#7447D5' }}>{tag}</Box>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box
                            sx={{
                                fontSize: '26px',
                                fontFamily: 'Abhaya Libre ExtraBold',
                                fontWeight: '800', lineHeight: '31px'
                            }}
                        >{props.title}</Box>
                        {getDateOrSponsored(props.date, props.sponsored)}
                    </Box>
                    {getAuthors(props.authors)}
                    {getText(props.text)}
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {props.likes} <ArrowUpward sx={{ marginLeft: 0.5 }} />
                        </Box>
                        <Box sx={{ marginLeft: 2, display: 'flex', alignItems: 'center' }}>
                            {props.comments} <Comment sx={{ marginLeft: 0.5 }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider variant='middle' sx={{ marginY: '30px' }} />
        </Box>
    )
}

export default ArticlePreview;