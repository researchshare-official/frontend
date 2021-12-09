import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import Image from 'next/image';
import styles from '../../styles/ProfileContent.module.css';

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
}));

const ProfileContent: NextPage = () => {
    const router = useRouter();

    return (
        <BoxProfile>
            <Image src="/ProfileImg.PNG" height={120} width={120} className={ styles.ImgProfile } alt="ResearchShare logo" />
            <InfoBox>
                <span style={{ margin: 'auto' }}> Adina Cazalens </span>
                <span style={{ margin: 'auto' }}> Researcher in cosmology </span>
                <span style={{ margin: 'auto' }}> Centre Epitech </span>
            </InfoBox>
            <Filters>
                <Button variant="contained"> Publications </Button>
                <Button variant="contained"> About </Button>
                <Button variant="contained"> Last posts </Button>
            </Filters>
        </BoxProfile>
    );
};

export default ProfileContent;