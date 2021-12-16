import { NextPage } from 'next';
import { Box, Typography, Avatar, Button, IconButton } from '@mui/material/';
import {ArrowCircleUp, ArrowUpward, Comment} from '@mui/icons-material/';
import {default as article } from '../jsonFiles/article.json';
import { useState, FunctionComponent} from 'react';

interface CommentaryProps {
    likes: number;
    liked: boolean;
}

const Commentary: FunctionComponent<CommentaryProps> = (props) => {
    const [like, setLike] = useState<number>(props.likes)
    const [alreadyLiked, setAlreadyLiked] = useState<boolean>(props.liked)

    const addLike = () => setLike(like + 1)
    const subLike = () => setLike(like - 1)
    const liked = () => setAlreadyLiked(true)
    const unliked = () => setAlreadyLiked(false)

    return (
        <Box>
            <IconButton color="secondary" onClick={() => {
                if (props.liked == true) {
                    subLike();
                    unliked();
                    alert('unliked');
                } else {
                    addLike();
                    props.liked = true;
                    liked();
                    alert('liked');
                }
            }}>
                <Typography variant="body2" sx={{color:'secondary.main', marginRight:'0.5rem'}}>{article.Upvote}</Typography>
                <ArrowUpward />
            </IconButton>
            <IconButton color="secondary" aria-label="upload picture">
                <Typography variant="body2" sx={{color:'secondary.main', marginRight:'0.5rem'}}>{article.Comments}</Typography>
                <Comment />
            </IconButton>
        </Box>
    )
}

const Commentaries = () => {
    return (
        <Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5625rem', flexDirection: 'row'}}>
                <Typography variant="body1" sx={{color: 'black'}}>Comments ({article.Comments})</Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography variant="body1" sx={{color: 'black'}}>{article.Upvote}</Typography>
                    <ArrowCircleUp />
                </Box>
            </Box>
            <Box sx={{display: 'flex', marginBottom: '0.75rem'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Box>
                        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-q3WWsLEVdDsXEddGHxpoE00Y2knvcEJ5pAmjsoUM2DFPFxfZO7_Y2GjBunSUmlbJds&usqp=CAU" sx={{ width: 56, height: 56 }}/>
                    </Box>
                    <Box>
                        <Typography variant="body1" sx={{color: 'secondary.main', marginLeft: '1rem'}}>Adina Cazalens</Typography>
                        <Typography variant="caption" sx={{color: 'black', marginLeft: '1rem'}}>Researcher in cosmology</Typography>
                        <Box>
                            <Typography variant="caption" sx={{color: 'black', marginLeft: '1rem'}}>Centre Epitech</Typography>
                            <Typography variant="body1" sx={{color: 'secondary.main', marginLeft: '1rem'}}>#cosmology #psychogenesis</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography variant="caption" sx={{color: 'black', marginLeft: '41rem'}}>07-12-2021</Typography>
                </Box>
            </Box>
            <Box sx={{marginBottom: '1.625rem'}}>
                <Typography variant="body2" display="block" width="62.5rem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec fringilla nulla, id efficitur turpis. Donec sed erat euismod, auctor libero in, mollis risus. Pellentesque feugiat sem quis tortor convallis venenatis. Sed et auctor dui. Sed eu consequat libero. Aenean sit amet convallis nunc, eu feugiat ante. Praesent placerat posuere dolor, nec egestas ex convallis ullamcorper. Phasellus ultricies lectus sem.</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                {/* <IconButton color="secondary" onClick={() => {

                }}>
                    <Typography variant="body2" sx={{color:'secondary.main', marginRight:'0.5rem'}}>{article.Upvote}</Typography>
                    <ArrowUpward />
                </IconButton>
                <IconButton color="secondary" aria-label="upload picture">
                    <Typography variant="body2" sx={{color:'secondary.main', marginRight:'0.5rem'}}>{article.Comments}</Typography>
                    <Comment />
                </IconButton> */}
                <Commentary likes={1} liked={false}></Commentary>
                <Button
                        variant="contained"
                        sx={{
                            borderRadius: '4px',
                            width: '10rem',
                            marginBottom: '30px',
                            marginLeft: '47rem',
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            '&:hover': {
                                color: 'primary.main',
                                bgcolor: 'secondary.dark',
                            },
                        }}
                    >
                        Reply
                    </Button>
            </Box>
        </Box>
    )
};

export default Commentaries;