import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Divider } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarIcon from '@mui/icons-material/Star';
import CommentIcon from '@mui/icons-material/Comment';
import { styled, alpha } from '@mui/material/styles';

const SummaryContainer = styled('div')(({ theme }) => ({
    background: '#EDEDED',
    position: 'absolute',
    left: '0',
    height: '91.5%',
    width: '20%',
}));

const BoxIconsTexts = styled('div')(({ theme }) => ({
    margin: '20px 0 0 20px',
}));

const Line = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
}));

const Title = styled('div')(({ theme }) => ({
    margin: '20px 0 20px 20px',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '22px',
    lineHeight: '26px',
    color: '#000000',
}));

const Text = styled('div')(({ theme }) => ({
    margin: '0 0 0 20px',
    fontFamily: 'Arial',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '17px',
    lineHeight: '26px',
    color: '#000000',
}));

const Summary: NextPage = () => {
    const router = useRouter();

    return (
        <SummaryContainer>
            <Title> Summary </Title>
            <Divider style={{ width: '80%', margin: 'auto' }}/>
            <BoxIconsTexts>
                <Line>
                    <VisibilityIcon/>
                    <Text> 200 Views </Text>
                </Line>
                <Line>
                    <StarIcon/>
                    <Text> 8 Reviews </Text>
                </Line>
                <Line>
                    <CommentIcon/>
                    <Text> 14 Commentaires </Text>
                </Line>
            </BoxIconsTexts>
        </SummaryContainer>
    );
};

export default Summary;