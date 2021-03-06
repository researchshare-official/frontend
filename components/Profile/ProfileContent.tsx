import { NextPage } from 'next';
import {
    List,
    Box,
    ListItem,
    Divider,
    Typography,
    Tabs,
    Tab,
} from '@mui/material';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import SortIcon from '@mui/icons-material/Sort';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OnePublication from './OnePublication';
import { SyntheticEvent, useState } from 'react';

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
            style={{
                paddingLeft: '4%',
                paddingRight: '6%',
                overflow: 'auto',
                width: '100%',
            }}
        >
            {value === index && (
                <Box sx={{ width: '100%' }}>
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

    const handleChange = (
        _: SyntheticEvent<Element, Event>,
        newValue: number
    ) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                px: '5%',
                width: '100%',
            }}
            {...props}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    flexDirection: 'row',
                    marginTop: '2%',
                    marginBottom: '2%',
                }}
            >
                <Image
                    src="/profile-picture.png"
                    height={120}
                    width={120}
                    alt="Profile image"
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'left',
                        flexDirection: 'column',
                        marginTop: '2%',
                        marginLeft: '0.5rem',
                    }}
                >
                    <Typography sx={{ color: '#7447D5', fontSize: '20px' }}>
                        Adina Cazalens
                    </Typography>
                    <Typography>Researcher in cosmology</Typography>
                    <Typography>Centre Epitech</Typography>
                </Box>
            </Box>
            <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                sx={{ minHeight: '72px' }}
                aria-label="icon label tabs example"
            >
                <Tab
                    icon={<PersonIcon />}
                    label="ABOUT"
                    {...a11yProps(0)}
                    sx={{
                        borderBottom: '2px solid',
                        borderColor: 'primary.dark',
                    }}
                />
                <Tab
                    icon={<InfoIcon />}
                    label="PUBLICATIONS"
                    {...a11yProps(1)}
                    sx={{
                        borderBottom: '2px solid',
                        borderColor: 'primary.dark',
                    }}
                />
                {true ? (
                    <Tab
                        icon={<StarIcon />}
                        label="FAVORITE"
                        {...a11yProps(2)}
                        sx={{
                            borderBottom: '2px solid',
                            borderColor: 'primary.dark',
                        }}
                    />
                ) : null}
                <Tab
                    icon={<AccessTimeIcon />}
                    label="SUBMIT PAPER"
                    {...a11yProps(3)}
                    sx={{
                        borderBottom: '2px solid',
                        borderColor: 'primary.dark',
                    }}
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                <Typography variant="h5" sx={{ marginTop: '2rem' }}>
                    {' '}
                    Summary{' '}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: '1rem',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography> Reputation score </Typography>
                        <Typography variant="h4"> 3042 </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography> Publications </Typography>
                        <Typography variant="h4"> 5 </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography> Review </Typography>
                        <Typography variant="h4"> 1393 </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography> Quotation </Typography>
                        <Typography variant="h4"> 13 </Typography>
                    </Box>
                </Box>
                <Typography variant="h5" sx={{ marginTop: '2rem' }}>
                    {' '}
                    Personal informations{' '}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '1rem',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                        >
                            {' '}
                            birthday :{' '}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ marginLeft: '0.5rem' }}
                        >
                            {' '}
                            1 april 2000
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                        >
                            {' '}
                            Description :{' '}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ marginLeft: '0.5rem' }}
                        >
                            {' '}
                            Les ressources de la mer voisine qui venaient en
                            aide ?? la charit?? publique, les lev??es de marais et
                            quelques prairies banales o?? les plus g??n??s menaient
                            pacager leurs vaches, un climat tr??s-doux qui
                            rendait les hivers supportables, tout cela faisait
                            que les ann??es passaient sans trop de d??tresse, et
                            que personne ne se plaignait du sort qui l???avait
                            fait na??tre ?? Villeneuve. (Eug??ne Fromentin,
                            Dominique&apos;&apos;, L. Hachette et Cie, 1863,
                            r????dition Gr??nd, page 27){' '}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}
                        >
                            {' '}
                            Other :{' '}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ marginLeft: '0.5rem' }}
                        >
                            {' '}
                            ...{' '}
                        </Typography>
                    </Box>
                </Box>
                <Typography variant="h5" sx={{ marginTop: '2rem' }}>
                    {' '}
                    Area of expertise{' '}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '1rem',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{ color: 'secondary.main', marginRight: '1rem' }}
                    >
                        {' '}
                        #astrology{' '}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'secondary.main', marginRight: '1rem' }}
                    >
                        {' '}
                        #pingouin{' '}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'secondary.main', marginRight: '1rem' }}
                    >
                        {' '}
                        #animals{' '}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'secondary.main', marginRight: '1rem' }}
                    >
                        {' '}
                        #space{' '}
                    </Typography>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box
                    sx={{
                        display: 'flex',
                        fontFamily: 'Arial',
                        marginTop: '3%',
                        marginBottom: '2rem',
                    }}
                >
                    <Typography sx={{ pr: '2%', fontSize: '22px' }}>
                        Insight
                    </Typography>
                    <SortIcon sx={{ pr: '1%' }} fontSize="large" />
                    <Typography sx={{ fontSize: '22px' }}>Sort by</Typography>
                </Box>
                <List>
                    {[1, 2, 3, 4, 5].map((x) => (
                        <ListItem
                            key={`publication-${x}`}
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <OnePublication
                                infos={{
                                    tags: ['astrology', 'pingouin'],
                                    title: 'Night of the Day of the Dawn of the Son of the Bride of the Return of the Revenge of the Terror of the Attack of the Evil, Mutant, Alien, Flesh Eating, Hellbound, Zombified Living.',
                                    author: 'Adrien Michaud, Adina Cazalens, Alexandre Monnier, Maugan Verdier, Lorenzo Carrascosa',
                                    content:
                                        'Pingouin ([p????.??w????]) est un nom vernaculaire port?? en fran??ais par deux esp??ces d???oiseaux de la famille des Alcid??s, dont la seule esp??ce encore vivante est le Petit Pingouin. Ces esp??ces vivent dans l???h??misph??re nord, cherchant leur nourriture dans les eaux maritimes et oc??aniques froides. On peut rencontrer le Petit Pingouin de l&apos;Arctique jusqu???en M??diterran??e occidentale et sur les c??tes atlantiques du Maroc en passant, par exemple, par la Bretagne. Ce dernier vole, alors que le Grand Pingouin, esp??ce ??teinte en 18441, ne le pouvait pas. Dans le langage courant, le mot ?? pingouin ?? d??signe souvent des manchots de mani??re abusive, notamment dans la culture populaire.',
                                }}
                            />
                            <Divider
                                sx={{
                                    width: '80%',
                                    marginTop: '3%',
                                    marginBottom: '3%',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Box
                    sx={{
                        display: 'flex',
                        fontFamily: 'Arial',
                        marginTop: '3%',
                        marginBottom: '2rem',
                    }}
                >
                    <Typography sx={{ pr: '2%', fontSize: '22px' }}>
                        Insight
                    </Typography>
                    <SortIcon sx={{ pr: '1%' }} fontSize="large" />
                    <Typography sx={{ fontSize: '22px' }}>Sort by</Typography>
                </Box>
                <List>
                    {[1, 2, 3, 4, 5].map((x) => (
                        <ListItem
                            key={`publication-${x}`}
                            sx={{ display: 'flex', flexDirection: 'column' }}
                        >
                            <OnePublication
                                infos={{
                                    tags: ['cosmology', 'tortue'],
                                    title: 'qjsdk sjk sdjk j jk js jkssdj jksd jd jksdjks djk sjk djksdj j sjkdjks jks djk j j j j jkd sjk jsjdsjkd jks djk sjkd jks djkds djk sj dj sjdjs dsdjsdjskdjs d skjd ks jkd sdjk sdjkddjksjjd.',
                                    author: "Encore d'autre mecs",
                                    content:
                                        "Le mot lapin (/lap????/) est un terme tr??s g??n??ral qui d??signe en fran??ais certains animaux lagomorphes ?? longues oreilles, que l'on diff??rencie des li??vres par une silhouette moins ??lanc??e et par les petits qui naissent aveugles et nus, cach??s dans un nid creus?? au sol. Ces animaux ne correspondent donc pas ?? un niveau pr??cis de classification scientifique. ?? Lapin ?? est en fait un nom vernaculaire ambigu, d??signant une partie seulement des diff??rentes esp??ces de mammif??res class??es dans la famille des L??porid??s, une famille qui regroupe ?? la fois les li??vres et les lapins. Longtemps class??s dans l'ordre des rongeurs, ils sont maintenant regroup??s dans un ordre ?? part : les Lagomorphes. En employant le terme ?? lapin ??, on fait toutefois r??f??rence le plus souvent au lapin domestique issu du Lapin de garenne (Oryctolagus cuniculus), l'esp??ce sauvage d'origine europ??enne qui s'est r??pandue un peu partout, puisqu'elle est ?? la base des multiples races de lapins ??lev??es ?? pr??sent dans le monde entier, y compris des lapins nains. Cependant, les lapins ne se limitent pas ?? cette seule esp??ce europ??enne : il existe en effet plus d'une vingtaine d'esp??ces de lapins sauvages dans le monde, r??parties dans neuf genres biologiques, mais dont plusieurs sont menac??es d'extinction et prot??g??es au xxie si??cle. Le lapin est un gibier traditionnel, class?? en cuisine avec les volailles et il est un mets appr??ci?? dans de nombreux pays . C'est aussi un animal tr??s pr??sent dans de nombreux domaines culturels. L'?? animal aux longues oreilles ?? est ??voqu?? dans l'art et la litt??rature tout autant que dans la culture populaire, la mythologie et la symbolique de plusieurs continents. De nombreux personnages c??l??bres de fiction sont des lapins, notamment dans l'univers enfantin. Le mot ?? lapin ?? est par ailleurs utilis?? aussi bien comme patronyme que comme marque commerciale..",
                                }}
                            />
                            <Divider
                                sx={{
                                    width: '80%',
                                    marginTop: '3%',
                                    marginBottom: '3%',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '3%',
                    }}
                >
                    <Typography>None</Typography>
                </Box>
            </TabPanel>
        </Box>
    );
};

export default ProfileContent;
