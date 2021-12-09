import { NextPage } from 'next';
import Image from 'next/image';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CommentIcon from '@mui/icons-material/Comment';

const OnePublication: NextPage = (props) => {
    return (
        <Box sx={{ display: 'flex', flexGrow: 1 }} {...props}>
            <Box>
                <Image src="/profile-picture.png" height={120} width={120} alt="Profile Picture" />
                <Typography> #cosmology </Typography>
                <Typography> #psychogenese </Typography>
            </Box>
            <Box m={2}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}> Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living. </Typography>
                <Typography variant="subtitle1"> Adina Cazalens, Alexandre Monnier, Maugan Verdier, Lorenzo Carrascosa </Typography>
                <Typography> Pingouin ([pɛ̃.ɡwɛ̃]) est un nom vernaculaire porté en français par deux espèces d’oiseaux de la famille des Alcidés, dont la seule espèce encore vivante est le Petit Pingouin. Ces espèces vivent dans l’hémisphère nord, cherchant leur nourriture dans les eaux maritimes et océaniques froides. On peut rencontrer le Petit Pingouin de l&apos;Arctique jusqu’en Méditerranée occidentale et sur les côtes atlantiques du Maroc en passant, par exemple, par la Bretagne. Ce dernier vole, alors que le Grand Pingouin, espèce éteinte en 18441, ne le pouvait pas. Dans le langage courant, le mot « pingouin » désigne souvent des manchots de manière abusive, notamment dans la culture populaire. </Typography>
                <Box sx={{ pt:'1%', display: 'flex', justifyContent: 'flex-end' }}>
                    <Typography>1500</Typography>
                    <ArrowDropUpIcon/>
                    <Typography>200</Typography>
                    <CommentIcon/>
                </Box>
            </Box>
            <Typography>06-07-2021</Typography>
        </Box>
    );
};

export default OnePublication;