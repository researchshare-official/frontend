import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CommentIcon from '@mui/icons-material/Comment';

const BoxPublication = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
}));

const ImageTags = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

const BoxText = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

const Date = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}));

const Title = styled('div')(({ theme }) => ({
    fontFamily: 'Abhaya Libre ExtraBold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '26px',
    lineHeight: '31px',
    color: '#000000',
    marginLeft: '15px',
}));

const Author = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#7447D5',
    marginLeft: '15px',
    marginTop: '15px',
}));

const Content = styled('div')(({ theme }) => ({
    fontFamily: 'Abhaya Libre',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#000000',
    marginLeft: '15px',
    marginTop: '15px',
}));

const Tag = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '200',
    fontSize: '16px',
    lineHeight: '19px',
    color: '#7447D5',
}));

const DateText = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#636363',
    whiteSpace: 'nowrap',
}));

const LikeComments = styled('div')(({ theme }) => ({
    marginLeft: '70%',
}));

const NbLikes = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#636363',
    whiteSpace: 'nowrap',
}));

const NbComments = styled('div')(({ theme }) => ({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '21px',
    color: '#636363',
    whiteSpace: 'nowrap',
}));

const OnePublication: NextPage = () => {
    const router = useRouter();

    return (
        <BoxPublication>
            <ImageTags>
                <Image src="/ProfileImg.PNG" height={120} width={120} alt="ResearchShare logo" />
                <Tag> #cosmology </Tag>
                <Tag> #psychogenese </Tag>
            </ImageTags>
            <BoxText>
                <Title> Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living. </Title>
                <Author> Adina Cazalens, Alexandre Monnier, Maugan Verdier, Lorenzo Carrascosa </Author>
                <Content> Pingouin ([pɛ̃.ɡwɛ̃]) est un nom vernaculaire porté en français par deux espèces d’oiseaux de la famille des Alcidés, dont la seule espèce encore vivante est le Petit Pingouin. Ces espèces vivent dans l’hémisphère nord, cherchant leur nourriture dans les eaux maritimes et océaniques froides. On peut rencontrer le Petit Pingouin de l'Arctique jusqu’en Méditerranée occidentale et sur les côtes atlantiques du Maroc en passant, par exemple, par la Bretagne. Ce dernier vole, alors que le Grand Pingouin, espèce éteinte en 18441, ne le pouvait pas. Dans le langage courant, le mot « pingouin » désigne souvent des manchots de manière abusive, notamment dans la culture populaire. </Content>
                <LikeComments>
                    <IconButton>
                        <NbLikes> 1500 </NbLikes>
                        <ArrowDropUpIcon/>
                    </IconButton>
                    <IconButton>
                        <NbComments> 200 </NbComments>
                        <CommentIcon/>
                    </IconButton>
                </LikeComments>
            </BoxText>
            <Date>
                <DateText> 06-07-2021 </DateText>
            </Date>
        </BoxPublication>
    );
};

export default OnePublication;