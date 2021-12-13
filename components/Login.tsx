import { NextPage } from 'next';
import {Dialog, DialogContent, Theme, Typography, Box} from '@mui/material/';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';

const useStyles = makeStyles((theme: Theme) => ({
    backDrop: {
      backdropFilter: "blur(0.1rem)",
      backgroundColor:'rgba(0,0,30,0.4)'
    },
    notchedOutline: {
        border: "1px solid #636363 !important"
    },
    backgroundForm: {
        backgroundColor: "#EEE9FA"
    }
}));

const Login: NextPage = () => {
    const classes = useStyles();
    return (
        <Dialog
        open={true}
        BackdropProps={{
            classes: {
            root: classes.backDrop,
            },
        }}
        PaperProps={{
            style: { borderRadius: '10px' }
          }}
        onClose={() => {}}
        >
        <DialogContent style={{ width: '30rem', backgroundColor: 'white'}}>
            <Typography variant="body1" sx={{color: '#7447D5', marginBottom: '12px', fontWeight: 'bold'}}>Login</Typography>
            <TextField id="login" variant="outlined" focused sx={{marginBottom: '30px', width: '26.5rem'}}
            InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            className={classes.backgroundForm}
            />
            <Typography variant="body1" sx={{color: '#7447D5', marginBottom: '12px', fontWeight: 'bold'}}>Password</Typography>
            <TextField id="password" variant="outlined" focused type="password" sx={{width: '26.5rem'}}
            InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            className={classes.backgroundForm}
            />
            <Typography variant="caption" sx={{color: '#7447D5', textDecoration: 'underline', marginBottom: '30px', marginTop: '17px', display: 'flex', flexDirection: 'row-reverse', marginRight: '0.8rem'}}>Forgot password</Typography>
            <Box sx={{alignItems: 'center', justifyContent: 'center', display:'flex'}}>
                <Button variant="contained" sx={{borderRadius: '10px', width: '10rem', marginBottom: '30px', backgroundColor: '#7447D5', color: 'white', textTransform: 'none', fontWeight: 'bold', '&:hover': { color: "primary.main", bgcolor: 'secondary.dark' }}}>Login</Button>
            </Box>
            <Divider variant="middle" sx={{marginBottom: '30px'}}/>
            <Box sx={{alignItems: 'center', justifyContent: 'center', display:'flex'}}>
                <Button variant="contained" sx={{borderRadius: '10px', backgroundColor: '#7447D5', color: 'white', textTransform: 'none', fontWeight: 'bold', '&:hover': { color: "primary.main", bgcolor: 'secondary.dark' }}}>Create an account</Button>
            </Box>
        </DialogContent>
        </Dialog>
    );
};

export default Login;