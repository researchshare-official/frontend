import Image from 'next/image';
import { styled, alpha } from '@mui/material/styles';
import MUIAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import Login from './Login';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import {useState, useContext, FunctionComponent, useEffect} from 'react';
import Register from './Register';
import userContext from '../utils/store';
import { AUTHlogout } from '../pages/api/auth';
import { ManageSearch } from '@mui/icons-material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[400], 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.grey[400], 0.25),
    },
    marginLeft: 0,
    width: '100%',
    border: 'solid',
    borderColor: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '25ch',
            '&:focus': {
                width: '40ch',
            },
        },
    },
}));

const AppBar: FunctionComponent = (props) => {
    const router = useRouter();
    const { query } = router;
    const [loginIsOpen, setLoginIsOpen] = useState<boolean>(false);
    const [registerIsOpen, setRegisterIsOpen] = useState<boolean>(false);
    const [search, setSearch] = useState<string>('');
    const { user, setUser } = useContext(userContext);

    useEffect(() => {
        setSearch(query.search as string | undefined ?? '')
    }, [query.search]);

    return (
        <MUIAppBar position="static" sx={{ width: '100vw' }} {...props}>
            <Toolbar disableGutters={true} sx={{ px: '20%' }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="back home"
                    sx={{ mr: 2 }}
                    onClick={() => router.push('/')}
                >
                    <Image
                        src="/sublogo.svg"
                        height={42}
                        width={42}
                        alt="ResearchShare logo"
                    />
                </IconButton>
                <Divider orientation="vertical" flexItem={true} />
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        onKeyPress={async (ev) => {
                            if (ev.key === 'Enter') {
                                await router.push({
                                    pathname: '/detailed-search',
                                    query: { search }
                                });
                                ev.preventDefault();
                            }
                        }}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search…"
                        value={search}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>

                <Box sx={{ flexGrow: 1 }} />

                {user !== undefined && user !== null ? (
                    <>
                        <Button
                            onClick={() => {
                                AUTHlogout();
                                setUser(null);
                                router.push('/');
                            }}
                            variant="contained"
                            sx={{
                                width: '8rem',
                                color: 'primary.main',
                                bgcolor: 'secondary.main',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: 'secondary.dark',
                                },
                            }}
                        >
                            <Typography sx={{ textTransform: 'capitalize' }}>
                                Logout
                            </Typography>
                        </Button>
                        <IconButton onClick={() => router.push('/profile')}>
                            <AccountCircleIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => router.push('/submit-paper')}
                        >
                            <NoteAddIcon />
                        </IconButton>
                        <IconButton onClick={() => router.push('/about')}>
                            <InfoIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => router.push('/detailed-search')}
                        >
                            <ManageSearch />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <Button
                            onClick={() => setLoginIsOpen(true)}
                            variant="contained"
                            sx={{
                                width: '8rem',
                                color: 'primary.main',
                                bgcolor: 'secondary.main',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: 'secondary.dark',
                                },
                            }}
                        >
                            <Typography sx={{ textTransform: 'capitalize' }}>
                                Login
                            </Typography>
                        </Button>
                        <IconButton onClick={() => router.push('/about')}>
                            <InfoIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => router.push('/detailed-search')}
                        >
                            <ManageSearch />
                        </IconButton>
                    </>
                )}
            </Toolbar>
            <Login
                open={loginIsOpen}
                register={{ registerIsOpen, setRegisterIsOpen }}
                login={{ setLoginIsOpen }}
                onClose={() => setLoginIsOpen(false)}
            />
            <Register
                open={registerIsOpen}
                register={{ registerIsOpen, setRegisterIsOpen }}
                onClose={() => setRegisterIsOpen(false)}
            />
        </MUIAppBar>
    );
};

export default AppBar;
