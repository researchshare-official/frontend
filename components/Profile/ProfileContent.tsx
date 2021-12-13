import { NextPage } from 'next';
import { List, Box, ListItem, Divider, Typography, Tabs, Tab, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import SortIcon from '@mui/icons-material/Sort';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OnePublication from './OnePublication';
import { SyntheticEvent, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';

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
        style={{ paddingLeft:'4%', overflow: 'auto', width:'100%' }}
      >
        {value === index && (
          <Box sx={{ width:'100%' }}>
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

const ProfileContent: NextPage = (props) => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (_: SyntheticEvent<Element, Event>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', px: '5%', width:'100%' }} {...props}>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '2%' }}>
                <Image src="/profile-picture.png" height={120} width={120} alt="Profile image" />
                <Typography sx={{ color: '#7447D5', fontSize: '20px' }}>Adina Cazalens</Typography> 
                <Typography>Researcher in cosmology</Typography> 
                <Typography>Centre Epitech</Typography>
            </Box>
            <Tabs textColor="secondary" indicatorColor="secondary" variant="fullWidth" value={value} onChange={handleChange} sx={{minHeight: '72px'}} aria-label="icon label tabs example">
                <Tab icon={<InfoIcon />} label="PUBLICATIONS" {...a11yProps(0)} />
                { true ? <Tab icon={<StarIcon />} label="FAVORITE" {...a11yProps(1)} /> : null }
                <Tab icon={<PersonIcon />} label="ABOUT" {...a11yProps(2)} />
                {/* <Tab icon={<AccessTimeIcon />} label="LAST POSTS" {...a11yProps(3)} /> */}
            </Tabs>
            <TabPanel value={value} index={0}>
                <Box sx={{ display: 'flex', fontFamily: 'Arial', marginTop: '3%', marginBottom:'2rem' }}>
                    <Typography sx={{ pr: '2%', fontSize: '22px' }}>Insight</Typography>
                    <SortIcon sx={{ pr: '1%', }} fontSize="large"/>
                    <Typography sx={{ fontSize: '22px' }}>Sort by</Typography>
                </Box>
                <List>
                    {[1, 2, 3, 4, 5].map(x => (
                        <ListItem key={`publication-${x}`} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <OnePublication infos={ {'tags': ['astrology', 'pingouin'], 'title': "Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living.", 'author': "Adrien Michaud, Adina Cazalens, Alexandre Monnier, Maugan Verdier, Lorenzo Carrascosa", 'content': "Pingouin ([pɛ̃.ɡwɛ̃]) est un nom vernaculaire porté en français par deux espèces d’oiseaux de la famille des Alcidés, dont la seule espèce encore vivante est le Petit Pingouin. Ces espèces vivent dans l’hémisphère nord, cherchant leur nourriture dans les eaux maritimes et océaniques froides. On peut rencontrer le Petit Pingouin de l&apos;Arctique jusqu’en Méditerranée occidentale et sur les côtes atlantiques du Maroc en passant, par exemple, par la Bretagne. Ce dernier vole, alors que le Grand Pingouin, espèce éteinte en 18441, ne le pouvait pas. Dans le langage courant, le mot « pingouin » désigne souvent des manchots de manière abusive, notamment dans la culture populaire."} }/>
                            <Divider sx={{ width: '80%', marginTop: '3%', marginBottom: '3%' }}/>
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ display: 'flex', fontFamily: 'Arial', marginTop: '3%', marginBottom:'2rem' }}>
                    <Typography sx={{ pr: '2%', fontSize: '22px' }}>Insight</Typography>
                    <SortIcon sx={{ pr: '1%', }} fontSize="large"/>
                    <Typography sx={{ fontSize: '22px' }}>Sort by</Typography>
                </Box>
                <List>
                    {[1, 2, 3, 4, 5].map(x => (
                        <ListItem key={`publication-${x}`} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <OnePublication infos={ {'tags': ['cosmology', 'tortue'], 'title': "."} }/>
                            <Divider sx={{ width: '80%', marginTop: '3%', marginBottom: '3%' }}/>
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant="h4"> Summary </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', flexGrow: 1, whiteSpace: 'nowrap'}}>
                    <Typography variant="h4"> Summary </Typography>
                    <Typography variant="h4"> Summary </Typography>
                    <Typography variant="h4"> Summary </Typography>
                    <Typography variant="h4"> Summary </Typography>
                    
                </Box>
            </TabPanel>
            {/* <TabPanel value={value} index={3}>
                <List>
                    {[1, 2, 3, 4, 5].map(x => (
                        <ListItem key={`publication-${x}`} sx={{ display: 'flex', flexDirection: 'column' }}>
                            <OnePublication infos={ {'tags': ['lapin', 'latin', 'chasse'],  'title': "qjsdk sjk sdjk j jk js jkssdj jksd jd jksdjks djk sjk djksdj j sjkdjks jks djk j j j j jkd sjk jsjdsjkd jks djk sjkd jks djkds djk sj dj sjdjs dsdjsdjskdjs d skjd ks jkd sdjk sdjkddjksjjd.", 'author': "Encore d'autre mecs", 'content': "Le mot lapin (/lapε̃/) est un terme très général qui désigne en français certains animaux lagomorphes à longues oreilles, que l'on différencie des lièvres par une silhouette moins élancée et par les petits qui naissent aveugles et nus, cachés dans un nid creusé au sol. Ces animaux ne correspondent donc pas à un niveau précis de classification scientifique. « Lapin » est en fait un nom vernaculaire ambigu, désignant une partie seulement des différentes espèces de mammifères classées dans la famille des Léporidés, une famille qui regroupe à la fois les lièvres et les lapins. Longtemps classés dans l'ordre des rongeurs, ils sont maintenant regroupés dans un ordre à part : les Lagomorphes. En employant le terme « lapin », on fait toutefois référence le plus souvent au lapin domestique issu du Lapin de garenne (Oryctolagus cuniculus), l'espèce sauvage d'origine européenne qui s'est répandue un peu partout, puisqu'elle est à la base des multiples races de lapins élevées à présent dans le monde entier, y compris des lapins nains. Cependant, les lapins ne se limitent pas à cette seule espèce européenne : il existe en effet plus d'une vingtaine d'espèces de lapins sauvages dans le monde, réparties dans neuf genres biologiques, mais dont plusieurs sont menacées d'extinction et protégées au xxie siècle. Le lapin est un gibier traditionnel, classé en cuisine avec les volailles et il est un mets apprécié dans de nombreux pays . C'est aussi un animal très présent dans de nombreux domaines culturels. L'« animal aux longues oreilles » est évoqué dans l'art et la littérature tout autant que dans la culture populaire, la mythologie et la symbolique de plusieurs continents. De nombreux personnages célèbres de fiction sont des lapins, notamment dans l'univers enfantin. Le mot « lapin » est par ailleurs utilisé aussi bien comme patronyme que comme marque commerciale.."} }/>
                            <Divider sx={{ width: '80%', marginTop: '3%', marginBottom: '3%' }}/>
                        </ListItem>
                    ))}
                </List>
            </TabPanel> */}
        </Box>
    );
};

export default ProfileContent;