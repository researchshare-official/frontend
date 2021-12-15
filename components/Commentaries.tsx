import { NextPage } from 'next';
import { Box, Typography, Avatar } from '@mui/material/';
import {ArrowCircleUp, ArrowUpward, Comment} from '@mui/icons-material/'


const Commentaries: NextPage = () => {
    return (
        <Box>
            <Box sx={{display: 'flex', justifyContent: 'space-between', marginBottom: '1.5625rem', flexDirection: 'row'}}>
                <Typography variant="body1" sx={{color: 'black'}}>Comments (3)</Typography>
                <Box sx={{display: 'flex'}}>
                    <Typography variant="body1" sx={{color: 'black'}}>1500</Typography>
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
            <Box sx={{marginBottom: '0.75rem'}}>
                <Typography variant="body2" display="block" width="62.5rem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec fringilla nulla, id efficitur turpis. Donec sed erat euismod, auctor libero in, mollis risus. Pellentesque feugiat sem quis tortor convallis venenatis. Sed et auctor dui. Sed eu consequat libero. Aenean sit amet convallis nunc, eu feugiat ante. Praesent placerat posuere dolor, nec egestas ex convallis ullamcorper. Phasellus ultricies lectus sem.</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
                <Typography variant="body2" sx={{color:'secondary.main'}}>0</Typography>
                <ArrowUpward sx={{marginRight: '2rem'}}/>
                <Typography variant="body2" sx={{color:'secondary.main'}}>0</Typography>
                <Comment />
            </Box>
        </Box>
    )
};

export default Commentaries;