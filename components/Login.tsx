import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import {
    Dialog,
    DialogContent,
    Typography,
    Box,
    DialogProps,
} from '@mui/material/';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import styles from '../styles/Auth.module.scss';

interface LoginRegisterProps {
    register: RegisterProps;
    login: LoginProps;
}

interface RegisterProps {
    registerIsOpen: boolean;
    setRegisterIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface LoginProps {
    setLoginIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Login: FunctionComponent<DialogProps & LoginRegisterProps> = (props) => {
    return (
        <Dialog
            BackdropProps={{
                className: styles.backDrop,
            }}
            PaperProps={{
                style: { borderRadius: '10px' },
            }}
            {...props}
        >
            <DialogContent style={{ width: '30rem', backgroundColor: 'white' }}>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'secondary.main',
                        marginBottom: '12px',
                        fontWeight: 'bold',
                    }}
                >
                    Login
                </Typography>
                <TextField
                    id="login"
                    variant="outlined"
                    focused
                    sx={{ marginBottom: '30px', width: '26.5rem' }}
                    InputProps={{
                        className: styles.notchedOutline,
                    }}
                    className={styles.backgroundForm}
                />
                <Typography
                    variant="body1"
                    sx={{
                        color: 'secondary.main',
                        marginBottom: '12px',
                        fontWeight: 'bold',
                    }}
                >
                    Password
                </Typography>
                <TextField
                    id="password"
                    variant="outlined"
                    focused
                    type="password"
                    sx={{ width: '26.5rem' }}
                    InputProps={{
                        className: styles.notchedOutline,
                    }}
                    className={styles.backgroundForm}
                />
                <Typography
                    variant="caption"
                    sx={{
                        color: 'secondary.main',
                        textDecoration: 'underline',
                        marginBottom: '30px',
                        marginTop: '17px',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                        marginRight: '0.8rem',
                    }}
                >
                    Forgot password
                </Typography>
                <Box
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: '10px',

                            width: '10rem',
                            marginBottom: '30px',
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
                        Login
                    </Button>
                </Box>
                <Divider variant="middle" sx={{ marginBottom: '30px' }} />
                <Box
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                    }}
                >
                    <Button
                        onClick={() => {
                            props.login.setLoginIsOpen(false);
                            props.register.setRegisterIsOpen(true);
                        }}
                        variant="contained"
                        sx={{
                            borderRadius: '10px',
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
                        Create an account
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default Login;
