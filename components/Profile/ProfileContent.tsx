import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import SortIcon from '@mui/icons-material/Sort';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from '../../styles/ProfileContent.module.css';
import OnePublication from './OnePublication';
import List from '@mui/material/List';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';

const BoxProfile = styled('div')(({ theme }) => ({
    border: 'solid',
    borderRadius: '8px',
    width: '70%',
    position: 'absolute',
    left: '25%',
    top: '15%',
}));

const InfoBox = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

const Filters = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: "30px",
    paddingBottom: '20px',
}));

const Insight = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '26px',
    color: '#000000',
    marginRight: '15px',
}));

const SortBy = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '22px',
    lineHeight: '26px',
    color: '#000000',
}));

const ProfileContent: NextPage = () => {
    const router = useRouter();

    return (
        <div>
        <BoxProfile>
            <Image src="/ProfileImg.PNG" height={120} width={120} className={ styles.ImgProfile } alt="Profile image" />
            <InfoBox>
                <span style={{ margin: 'auto' }}> Adina Cazalens </span>
                <span style={{ margin: 'auto' }}> Researcher in cosmology </span>
                <span style={{ margin: 'auto' }}> Centre Epitech </span>
            </InfoBox>
            <Filters>
                <Button variant="contained" style={{ marginLeft: "6%" }}>
                    <InfoIcon/>
                    <span> Publications </span>
                </Button>
                <Button variant="contained">
                    <PersonIcon/>
                    <span> About </span>
                </Button>
                <Button variant="contained" style={{ marginRight: "6%" }}>
                    <AccessTimeIcon/>
                    <span> Last posts </span>
                </Button>
            </Filters>
        </BoxProfile>
        <Box style={{ position: 'absolute', top: '55%', left: '25%', display: 'flex' }}>
            <Insight> Insight </Insight>
            <SortIcon/>
            <SortBy> Sort by </SortBy>
        </Box>

        <List style={{ position: 'absolute', top: '60%', left: '25%' }}
            sx={{
                width: '70%',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
            }}
            subheader={<li />}>
            {[1, 2, 3, 4, 5].map(x =>
                <Box>
                    <OnePublication/>
                    <Divider style={{ width: '60%', margin: 'auto', marginTop: '30px', marginBottom: '30px' }}/>
                </Box>
            )}
        </List>
        
        </div>
    );
};

export default ProfileContent;