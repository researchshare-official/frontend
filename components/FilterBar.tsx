import { NextPage } from 'next';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { default as filters } from '../jsonFiles/filterCategory.json';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    marginTop: '0.625rem',
    border: '3px solid #7447D5',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.grey[400], 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.grey[400], 0.25),
    },
    marginLeft: 0,

    width: '100%',
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
        padding: theme.spacing(0, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
    },
}));

const FilterBar: NextPage = () => {
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: 'rgba(237, 237, 237, 0.6)',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        paddingLeft: '0.625rem',
                        fontWeight: 1000,
                        fontSize: '22px',
                    }}
                >
                    Filters
                </Typography>
                <Box
                    sx={{
                        marginTop: '0.625rem',
                        marginBottom: '1.25rem',
                        paddingLeft: '1.875rem',
                        paddingRight: '1.875rem',
                    }}
                >
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            sx={{
                                marginTop: '0.625rem',
                            }}
                            placeholder="Search for filter…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>
                <Typography
                    variant="h4"
                    sx={{
                        paddingLeft: '0.625rem',
                        fontWeight: 1000,
                        fontSize: '22px',
                    }}
                >
                    Date
                </Typography>
                <Box
                    sx={{
                        marginTop: '0.625rem',
                        marginBottom: '1.25rem',
                        paddingLeft: '1.875rem',
                        paddingRight: '1.875rem',
                    }}
                >
                    <Slider
                        defaultValue={1990}
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        min={1990}
                        max={2021}
                        color="secondary"
                    />
                </Box>
                <Typography
                    variant="h4"
                    sx={{
                        paddingLeft: '0.625rem',
                        fontWeight: 1000,
                        fontSize: '22px',
                    }}
                >
                    Category
                </Typography>
                <Box
                    sx={{
                        marginTop: '0.625rem',
                        marginBottom: '1.25rem',
                        paddingLeft: '1.875rem',
                        paddingRight: '1.875rem',
                    }}
                >
                    <FormGroup
                        sx={{
                            overflowY: 'scroll',
                            // TODO: fix Checkbox Animation cut on the left.
                            height: '10rem',
                            flexWrap: 'nowrap',
                        }}
                    >
                        {filters.category.map((name) => (
                            <FormControlLabel
                                control={<Checkbox color="secondary" />}
                                label={name}
                                key={name}
                            />
                        ))}
                    </FormGroup>
                </Box>
                <Typography
                    variant="h4"
                    sx={{
                        paddingLeft: '0.625rem',
                        fontWeight: 1000,
                        fontSize: '22px',
                    }}
                >
                    Price
                </Typography>
                <Box
                    sx={{
                        marginTop: '0.625rem',
                        marginBottom: '1.25rem',
                        paddingLeft: '1.875rem',
                        paddingRight: '1.875rem',
                    }}
                >
                    <FormGroup>
                        {filters.price.map((name) => (
                            <FormControlLabel
                                control={<Checkbox color="secondary" />}
                                label={name}
                                key={name}
                            />
                        ))}
                    </FormGroup>
                </Box>
            </Box>
        </Box>
    );
};

export default FilterBar;
