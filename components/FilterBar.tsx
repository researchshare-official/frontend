import { NextPage } from 'next';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginTop: -10,
  border: '3px solid #7447D5',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[400], 0.15),
  '&:hover': {
      backgroundColor: alpha(theme.palette.grey[400], 0.25),
  },
  marginLeft: 0,

  width: '100%',
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
      padding: theme.spacing(0, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
          width: '30ch',
          '&:focus': {
              width: '40ch',
          },
      },
  },
}));


/*
TODO: Take a json and display all categories from this json
*/
const FilterBar: NextPage = () => {
  return(
    <div className="FlexboxContainer">
      <div className="FilterBar">
        <h4 className="Label">Filters</h4>
        <div className="Input">
          <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search for filter…"
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
      </div>
      <h4 className="Label">Date</h4>
      <div className="Input">
        <Slider defaultValue={1950} aria-label="Default" valueLabelDisplay="auto" min={1990} max={2021} color="secondary"/>
      </div>
      <h4 className="Label">Category</h4>
      <div className="Input">
        <FormGroup>
          <FormControlLabel control={<Checkbox color="secondary"/>} label="Astronomy"/>
          <FormControlLabel control={<Checkbox color="secondary"/>} label="Physics"/>
          <FormControlLabel control={<Checkbox color="secondary"/>} label="Sociology"/>
        </FormGroup>
      </div>
      <h4 className="Label">Price</h4>
      <div className="Input">
        <FormGroup>
          <FormControlLabel control={<Checkbox color="secondary"/>} label="Free"/>
          <FormControlLabel control={<Checkbox color="secondary"/>} label="Paid"/>
        </FormGroup>
      </div>
      </div>
      <style jsx>{`
        .FilterBar {
          background-color: rgba(237, 237, 237, 0.6);
          font-size: 22px;
        }
        .Input {
          margin-top: -10px;
          padding-left: 30px;
          padding-right: 30px;
        }
        .Label {
          padding-left: 10px;
        }
      `}</style>
    </div>
  );
}

export default FilterBar;