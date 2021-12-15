import { NextPage } from 'next';
import { List, Box, ListItem, Divider, Typography, Tabs, Tab, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import ShowChartIcon from '@mui/icons-material/ShowChart';
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
        style={{ paddingLeft:'4%', paddingRight:'6%', overflow: 'auto', width:'100%' }}
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
            <Box sx={{ display: 'flex', justifyContent: 'left', flexDirection: 'row', marginTop: '2%', marginBottom: '2%' }}>
                <Image src="/profile-picture-labo.png" height={120} width={120} alt="Profile image" />
                <Box sx={{ display: 'flex', alignItems: 'left', flexDirection: 'column', marginTop: '2%', marginLeft: '0.5rem' }}>
                    <Typography sx={{ color: '#7447D5', fontSize: '20px' }}>Epitech Research</Typography> 
                    <Typography>Research in cosmology</Typography> 
                </Box>
            </Box>
            <Tabs textColor="secondary" indicatorColor="secondary" variant="fullWidth" value={value} onChange={handleChange} sx={{minHeight: '72px'}} aria-label="icon label tabs example">
                <Tab icon={<PersonIcon />} label="ABOUT" {...a11yProps(0)} sx={{borderBottom:'2px solid', borderColor:'primary.dark'}} />
                <Tab icon={<InfoIcon />} label="PUBLICATIONS" {...a11yProps(1)} sx={{borderBottom:'2px solid', borderColor:'primary.dark'}}/>
                <Tab icon={<ShowChartIcon />} label="ACTIVITY" {...a11yProps(2)} sx={{borderBottom:'2px solid', borderColor:'primary.dark'}}/> 
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography variant="h5" sx={{marginTop:'2rem'}}> Summary </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginTop:'1rem'}}>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography> Reputation score </Typography>
                        <Typography variant="h4"> 3700 </Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography> Members </Typography>
                        <Typography variant="h4"> 42 </Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography> Publications </Typography>
                        <Typography variant="h4"> 13 </Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography> Reviews </Typography>
                        <Typography variant="h4"> 6 </Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <Typography> Publications </Typography>
                        <Typography variant="h4"> 23 </Typography>
                    </Box>
                </Box>
                <Typography variant="h5" sx={{marginTop:'2rem'}}> Personal informations </Typography>
                <Box sx={{display: 'flex', flexDirection: 'column', marginTop:'1rem'}}>
                    <Box sx={{display:'flex', flexDirection:'row'}}>
                        <Typography variant='body1' sx={{fontWeight:'bold', whiteSpace: 'nowrap'}} > Date of foundation : </Typography>
                        <Typography variant='body1' sx={{marginLeft:'0.5rem'}}> 1 april 1983 </Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row'}}>
                        <Typography variant='body1' sx={{fontWeight:'bold', whiteSpace: 'nowrap'}} > Description : </Typography>
                        <Typography variant='body1' sx={{marginLeft:'0.5rem'}}> Epitech&apos;s research lab </Typography>
                    </Box>
                    <Box sx={{display:'flex', flexDirection:'row'}}>
                        <Typography variant='body1' sx={{fontWeight:'bold', whiteSpace: 'nowrap'}} > Other : </Typography>
                        <Typography variant='body1' sx={{marginLeft:'0.5rem'}}> Viken is wonderful </Typography>
                    </Box>
                </Box>
                <Typography variant="h5" sx={{marginTop:'2rem'}}> Areas of expertise </Typography>
                <Box sx={{display: 'flex', flexDirection: 'row', marginTop:'1rem'}}>
                    <Typography variant='body1' sx={{color:'secondary.main', marginRight:'1rem'}}> #astrology </Typography>
                    <Typography variant='body1' sx={{color:'secondary.main', marginRight:'1rem'}}> #pengouin </Typography>
                    <Typography variant='body1' sx={{color:'secondary.main', marginRight:'1rem'}}> #animals </Typography>
                    <Typography variant='body1' sx={{color:'secondary.main', marginRight:'1rem'}}> #space </Typography>
                </Box>
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
                            <OnePublication infos={ {'tags': ['astrology', 'pingouin'], 'title': "Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living.", 'author': "Adrien Michaud, Adina Cazalens, Alexandre Monnier, Maugan Verdier, Lorenzo Carrascosa", 'content': "Pingouin ([pɛ̃.ɡwɛ̃]) est un nom vernaculaire porté en français par deux espèces d’oiseaux de la famille des Alcidés, dont la seule espèce encore vivante est le Petit Pingouin. Ces espèces vivent dans l’hémisphère nord, cherchant leur nourriture dans les eaux maritimes et océaniques froides. On peut rencontrer le Petit Pingouin de l&apos;Arctique jusqu’en Méditerranée occidentale et sur les côtes atlantiques du Maroc en passant, par exemple, par la Bretagne. Ce dernier vole, alors que le Grand Pingouin, espèce éteinte en 18441, ne le pouvait pas. Dans le langage courant, le mot « pingouin » désigne souvent des manchots de manière abusive, notamment dans la culture populaire."} }/>
                            <Divider sx={{ width: '80%', marginTop: '3%', marginBottom: '3%' }}/>
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginTop: '2%', marginBottom: '2%' }}>
                <Image src="/ActivityChart.png" height={499} width={1172} alt="Profile image" />
            </Box>
            </TabPanel>
        </Box>
    );
};

export default ProfileContent;