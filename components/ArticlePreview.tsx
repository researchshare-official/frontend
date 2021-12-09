import Image from 'next/image'
import { styled, alpha } from '@mui/material/styles';
import { useRouter } from 'next/router'
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box'
import { NextPage } from 'next';
import { ArrowUpward, Comment } from '@mui/icons-material';

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

const ArticlePreview: NextPage<ArticlePreviewProps> = (props) => {
    const router = useRouter();

    return (
        <Box sx={{ backgroundColor: 'transparent', display: 'flex' }}>
            <Box>
                <Image src={`/${props.image}`} width={200} height={200} />
                <Box
                    sx={{
                        backgroundColor: 'transparent',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                    {props.tags.map(tag => (
                        <p>{tag}</p>
                    ))}
                </Box>
            </Box>
            <Box>
                <p>{props.title}</p>
                <Box sx={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column' }}>
                    {props.authors.map(author => (
                        <p>{author}</p>
                    ))}
                </Box>
                <p>{props.text}</p>
                <Box sx={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'end' }}>
                    <Box sx={{ backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                        {props.likes} <ArrowUpward sx={{marginLeft: 0.5}}/>
                    </Box>
                    <Box sx={{ backgroundColor: 'transparent', marginLeft: 2, display: 'flex', alignItems: 'center' }}>
                        {props.comments} <Comment sx={{marginLeft: 0.5}} />
                    </Box>
                </Box>
            </Box>
            <Box>
                <p>{props.date}</p>
            </Box>
        </Box>
    )
}

export default ArticlePreview;

export type {
    ArticlePreviewProps
}