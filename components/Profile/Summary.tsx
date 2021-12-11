import { NextPage } from 'next';
import { Box, Divider, List, ListItem, ListItemText, Typography, ListItemIcon, useTheme } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import CommentIcon from '@mui/icons-material/Comment';

const Summary: NextPage = (props) => {

    return (
        <Box sx={(theme) => ({ bgcolor: theme.palette.grey[300], px: '2%', pt: '2%' })} {...props}>
            <Typography variant="h4"> Summary </Typography>
            <Divider sx={{ width: '80%', marginTop: '7%' }}/>
            <List sx={{ whiteSpace: 'nowrap' }}>
                <ListItem>
                    <ListItemIcon>
                        <VisibilityIcon/>
                    </ListItemIcon>
                    <ListItemText primary="200 Views"></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarIcon/>
                    </ListItemIcon>
                    <ListItemText primary="8 Reviews"></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <CommentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="14 Commentaires"></ListItemText>
                </ListItem>
            </List>
        </Box>
    );
};

export default Summary;