import {
    Dialog,
    DialogContent,
    Typography,
    Box,
    DialogProps,
    SelectChangeEvent,
} from '@mui/material/';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Divider, Select, MenuItem } from '@mui/material';
import styles from '../styles/Auth.module.scss';
import { Tabs, Tab } from '@mui/material/';
import { useState, SyntheticEvent, FunctionComponent } from 'react';
import { AUTHregister } from '../pages/api/auth';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Register: FunctionComponent<DialogProps> = (props) => {
    const [value, setValue] = useState<number>(0);
    const [age, setAge] = useState<string>('');
    const [number, setValueNumber] = useState<number>(0);
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const handleChangeNumber = (event: SyntheticEvent, newValue: number) => {
        setValueNumber(newValue);
    };
    return (
        <Dialog
            BackdropProps={{
                className: styles.backdrop,
            }}
            PaperProps={{
                style: { borderRadius: '10px' },
            }}
            {...props}
        >
            <DialogContent style={{ width: '30rem', backgroundColor: 'white' }}>
                <Typography
                    variant="h4"
                    sx={{
                        color: '#000',
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                        marginBottom: '12px',
                        fontWeight: 'bold',
                    }}
                >
                    Register
                </Typography>
                <Divider variant="middle" sx={{ marginBottom: '30px' }} />
                <Tabs
                    textColor="inherit"
                    indicatorColor="secondary"
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    sx={{ textTransform: 'none', color: 'black' }}
                >
                    <Tab label="Member" {...a11yProps(0)} />
                    <Tab label="Organization" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'secondary.main',
                            marginBottom: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        You are...
                    </Typography>
                    <Select
                        value={age}
                        label="MemberType"
                        onChange={handleChangeSelect}
                        className={styles.selectForm}
                        sx={{ marginBottom: '12px' }}
                    >
                        <MenuItem sx={{ color: 'white' }} value={'Scientist'}>
                            A scientist
                        </MenuItem>
                        <MenuItem sx={{ color: 'white' }} value={'Student'}>
                            A student
                        </MenuItem>
                        <MenuItem sx={{ color: 'white' }} value={'Reviewer'}>
                            Other...
                        </MenuItem>
                    </Select>
                    {age == 'Scientist' && (
                        <Box sx={{ marginBottom: '12px' }}>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'secondary.main',
                                    marginBottom: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Your organization UMR
                            </Typography>
                            <TextField
                                variant="outlined"
                                focused
                                sx={{ width: '24rem' }}
                                InputProps={{
                                    className: styles.notchedOutline,
                                }}
                                className={styles.backgroundForm}
                            />
                        </Box>
                    )}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: '12px',
                        }}
                    >
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'secondary.main',
                                    marginBottom: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Firstname
                            </Typography>
                            <TextField
                                variant="outlined"
                                focused
                                sx={{ width: '10rem' }}
                                InputProps={{
                                    className: styles.notchedOutline,
                                }}
                                className={styles.backgroundForm}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'secondary.main',
                                    marginBottom: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Lastname
                            </Typography>
                            <TextField
                                variant="outlined"
                                focused
                                sx={{ width: '10rem' }}
                                InputProps={{
                                    className: styles.notchedOutline,
                                }}
                                className={styles.backgroundForm}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                        </Box>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'secondary.main',
                            marginBottom: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        Name
                    </Typography>
                    <TextField
                        variant="outlined"
                        focused
                        sx={{ width: '24rem', marginBottom: '12px' }}
                        InputProps={{
                            className: styles.notchedOutline,
                        }}
                        className={styles.backgroundForm}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'secondary.main',
                            marginBottom: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        Email
                    </Typography>
                    <TextField
                        variant="outlined"
                        focused
                        sx={{ width: '24rem', marginBottom: '12px' }}
                        InputProps={{
                            className: styles.notchedOutline,
                        }}
                        className={styles.backgroundForm}
                        onChange={(e) => setEmail(e.target.value)}
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
                        type="password"
                        variant="outlined"
                        focused
                        sx={{ width: '24rem', marginBottom: '12px' }}
                        InputProps={{
                            className: styles.notchedOutline,
                        }}
                        className={styles.backgroundForm}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'secondary.main',
                            marginBottom: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        Confirm password
                    </Typography>
                    <TextField
                        type="password"
                        variant="outlined"
                        focused
                        sx={{ width: '24rem', marginBottom: '12px' }}
                        InputProps={{
                            className: styles.notchedOutline,
                        }}
                        className={styles.backgroundForm}
                        onChange={(e) => setConfirmedPassword(e.target.value)}
                    />
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
                                marginTop: '30px',
                                borderRadius: '10px',
                                width: '10rem',
                                backgroundColor: 'secondary.main',
                                color: 'white',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: 'secondary.dark',
                                },
                            }}
                            onClick={() => {AUTHregister(name, email, password, confirmedPassword, firstname, lastname)}}
                        >
                            Register
                        </Button>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: '12px',
                        }}
                    >
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'secondary.main',
                                    marginBottom: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Firstname
                            </Typography>
                            <TextField
                                variant="outlined"
                                focused
                                sx={{ width: '10rem' }}
                                InputProps={{
                                    className: styles.notchedOutline,
                                }}
                                className={styles.backgroundForm}
                            />
                        </Box>
                        <Box>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'secondary.main',
                                    marginBottom: '12px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Lastname
                            </Typography>
                            <TextField
                                variant="outlined"
                                focused
                                sx={{ width: '10rem' }}
                                InputProps={{
                                    className: styles.notchedOutline,
                                }}
                                className={styles.backgroundForm}
                            />
                        </Box>
                    </Box>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'secondary.main',
                            marginBottom: '12px',
                            fontWeight: 'bold',
                        }}
                    >
                        Name
                    </Typography>
                    <TextField
                        variant="outlined"
                        focused
                        sx={{ width: '24rem', marginBottom: '12px' }}
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
                        Email
                    </Typography>
                    <TextField
                        variant="outlined"
                        focused
                        sx={{ width: '24rem', marginBottom: '12px' }}
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
                        type="password"
                        variant="outlined"
                        focused
                        sx={{ width: '24rem', marginBottom: '12px' }}
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
                        Confirm password
                    </Typography>
                    <TextField
                        type="password"
                        variant="outlined"
                        focused
                        sx={{ width: '24rem', marginBottom: '12px' }}
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
                        Register with
                    </Typography>
                    <Tabs
                        textColor="inherit"
                        indicatorColor="secondary"
                        variant="fullWidth"
                        value={number}
                        onChange={handleChangeNumber}
                        sx={{ textTransform: 'none', color: 'black' }}
                    >
                        <Tab label="UMR" {...a11yProps(0)} />
                        <Tab label="SIREN" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={number} index={0}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'secondary.main',
                                marginBottom: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            Organization UMR
                        </Typography>
                        <TextField
                            variant="outlined"
                            focused
                            sx={{ width: '21rem', marginBottom: '12px' }}
                            InputProps={{
                                className: styles.notchedOutline,
                            }}
                            className={styles.backgroundForm}
                        />
                    </TabPanel>
                    <TabPanel value={number} index={1}>
                        <Typography
                            variant="body1"
                            sx={{
                                color: 'secondary.main',
                                marginBottom: '12px',
                                fontWeight: 'bold',
                            }}
                        >
                            Organization SIREN
                        </Typography>
                        <TextField
                            variant="outlined"
                            focused
                            sx={{ width: '21rem' }}
                            InputProps={{
                                className: styles.notchedOutline,
                            }}
                            className={styles.backgroundForm}
                        />
                    </TabPanel>

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
                                marginTop: '12px',
                                borderRadius: '10px',
                                width: '10rem',
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
                            Register
                        </Button>
                    </Box>
                </TabPanel>

                {/* <TextField id="login" variant="outlined" focused sx={{marginBottom: '30px', width: '26.5rem'}}
                InputProps={{
                    classes: {
                    notchedOutline: classes.notchedOutline
                    }
                }}
                className={styles.backgroundForm}
            />
            <Typography variant="body1" sx={{color: '#7447D5', marginBottom: '12px', fontWeight: 'bold'}}>Password</Typography>
            <TextField id="password" variant="outlined" focused type="password" sx={{width: '26.5rem'}}
            InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
            className={styles.backgroundForm}
            />
            <Typography variant="caption" sx={{color: '#7447D5', textDecoration: 'underline', marginBottom: '30px', marginTop: '17px', display: 'flex', flexDirection: 'row-reverse', marginRight: '0.8rem'}}>Forgot password</Typography>
            <Box sx={{alignItems: 'center', justifyContent: 'center', display:'flex'}}>
                <Button variant="contained" sx={{borderRadius: '10px', width: '10rem', marginBottom: '30px', backgroundColor: '#7447D5', color: 'white', textTransform: 'none', fontWeight: 'bold', '&:hover': { color: "primary.main", bgcolor: 'secondary.dark' }}}>Login</Button>
            </Box>
            <Divider variant="middle" sx={{marginBottom: '30px'}}/>
            <Box sx={{alignItems: 'center', justifyContent: 'center', display:'flex'}}>
                <Button variant="contained" sx={{borderRadius: '10px', backgroundColor: '#7447D5', color: 'white', textTransform: 'none', fontWeight: 'bold', '&:hover': { color: "primary.main", bgcolor: 'secondary.dark' }}}>Create an account</Button>
            </Box> */}
            </DialogContent>
        </Dialog>
    );
};

export default Register;
