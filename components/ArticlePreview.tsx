import Image from 'next/image';
import { NextPage } from 'next';
import { ArrowUpward, Comment, ExpandCircleDown } from '@mui/icons-material';
import { Typography, Divider, IconButton, Button, Box } from '@mui/material';
import { NextRouter, useRouter } from 'next/router';

type ArticlePreviewProps = {
    id: number;
    title: string;
    text: string;
    image: string;
    authors: Array<string>;
    tags: Array<string>;
    date: string;
    sponsored: boolean;
    likes: number;
    comments: number;
};

const getText = (text: string, router: NextRouter) => {
    const length = 400;
    if (text.length > length) {
        const subText = text.substring(0, length) + '...';
        return (
            <Box>
                <Box
                    sx={{
                        fontSize: '20px',
                        lineHeight: '24px',
                        fontFamily: 'Arial',
                    }}
                >
                    {subText}
                    <Button
                        size="small"
                        variant="text"
                        onClick={() => router.push('/see-article')}
                    >
                        <Typography
                            sx={{
                                color: 'secondary.main',
                                fontSize: '20px',
                                fontFamily: 'Arial',
                                textDecorationLine: 'underline',
                                textTransform: 'lowercase',
                            }}
                        >
                            Read more
                        </Typography>
                    </Button>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box>
                <Box
                    sx={{
                        fontSize: '20px',
                        lineHeight: '24px',
                        fontFamily: 'Arial',
                    }}
                >
                    {text}
                </Box>
            </Box>
        );
    }
};

const getAuthors = (authors: Array<string>) => {
    let authorNames = '';
    authors.forEach((author, index) => {
        if (index === 0) {
            authorNames += author;
        } else {
            authorNames += ', ' + author;
        }
    });
    return (
        <Box
            sx={{ fontSize: '16px', color: 'secondary.main', marginY: '10px' }}
        >
            {authorNames}
        </Box>
    );
};

const getDateOrSponsored = (date: string, sponsored: boolean) => {
    if (sponsored) {
        return (
            <Box
                sx={(theme) => ({
                    fontSize: '18px',
                    color: theme.palette.grey[700],
                    fontWeight: '500',
                })}
            >
                Sponsored
            </Box>
        );
    } else {
        return (
            <Box
                sx={(theme) => ({
                    fontSize: '18px',
                    color: theme.palette.grey[700],
                    fontWeight: '500',
                })}
            >
                {date}
            </Box>
        );
    }
};

const ArticlePreview: NextPage<ArticlePreviewProps> = (props) => {
    const router = useRouter();
    return (
        <Box>
            <Box sx={{ display: 'flex' }}>
                <Box sx={{ marginRight: '15px' }}>
                    <Image
                        src={`/${props.image}`}
                        layout="fixed"
                        width={124}
                        height={124}
                        alt="article picture"
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {props.tags.map((tag) => (
                            <Box
                                sx={{
                                    fontSize: '14px',
                                    color: 'secondary.main',
                                }}
                                key={tag}
                            >
                                {tag}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={{
                                fontSize: '26px',
                                fontFamily: 'Abhaya Libre ExtraBold',
                                fontWeight: '800',
                                lineHeight: '31px',
                            }}
                        >
                            {props.title}
                        </Box>
                        {getDateOrSponsored(props.date, props.sponsored)}
                    </Box>
                    {getAuthors(props.authors)}
                    {getText(props.text, router)}
                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {props.likes}
                            <IconButton>
                                <ExpandCircleDown
                                    sx={{
                                        marginLeft: 0.5,
                                        transform: 'scaleY(-1)',
                                    }}
                                />
                            </IconButton>
                        </Box>
                        <Box
                            sx={{
                                marginLeft: 2,
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {props.comments}
                            <IconButton>
                                <Comment sx={{ marginLeft: 0.5 }} />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Divider variant="middle" sx={{ marginY: '30px' }} />
        </Box>
    );
};

export default ArticlePreview;
