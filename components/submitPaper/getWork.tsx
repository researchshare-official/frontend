import { NextPage } from 'next';
import { Box, Typography, Input, TextField } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import Button from '@mui/material/Button';



const GetWork: NextPage = (props) => {

    const [value1, setValue1] = useState<string>("");
    const [value2, setValue2] = useState<string>("");
    const [value3, setValue3] = useState<string>("");
    const [imgpath, setImgpath] = useState<string>("");
    const [img, setImg] = useState<File | undefined>();
    const [filepath, setFilepath] = useState<string>("");
    const [file, setFile] = useState<File | undefined>();

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null && event.target.files.length > 0) {
            setImg(event.target.files[0]);
            setImgpath(URL.createObjectURL(event.target.files[0]));
        } else {
            setImg(undefined);
            setImgpath("");
        }
    }

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null && event.target.files.length > 0) {
            setFile(event.target.files[0]);
            setFilepath(URL.createObjectURL(event.target.files[0]));
        } else {
            setFile(undefined);
            setFilepath("");
        }
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '45%' }}>
                <Typography variant='h5' sx={{ textAlign: 'center' }} >Submit your work here :</Typography>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                    <label htmlFor="contained-button-img">
                        <Input inputProps={{ accept: "image/*" }} id="contained-button-img" onChange={handleImageUpload} type="file" style={{ display: 'None' }} />
                        <Button variant="contained" component="span" sx={{ color: 'primary.main', backgroundColor: 'secondary.main' }}>
                            Upload img
                        </Button>
                    </label>
                    <Typography variant='body1' sx={{ marginLeft: '2rem', paddingTop: '0.3rem' }}  >Upload an image for your project</Typography>
                </Box>

                <Typography variant='body1' sx={{ marginTop: '2rem' }}  >Name your project</Typography>
                <TextField sx={{ border: 'solid', borderColor: 'secondary.main', borderRadius: '0.5rem' }} onChange={
                    event => {
                        const { value } = event.target;
                        setValue1(value);
                    }} placeholder='Name your project here...'></TextField>

                <Typography variant='body1' sx={{ marginTop: '2rem' }}  >Name your coworkers</Typography>
                <TextField sx={{ border: 'solid', borderColor: 'secondary.main', borderRadius: '0.5rem' }} onChange={
                    event => {
                        const { value } = event.target;
                        setValue2(value);
                    }} placeholder='Name your coworker here...'></TextField>

                <Typography variant='body1' sx={{ marginTop: '2rem' }}  >Put the tags of your project (with a "#" before and space between each)</Typography>
                <TextField sx={{ border: 'solid', borderColor: 'secondary.main', borderRadius: '0.5rem' }} onChange={
                    event => {
                        const { value } = event.target;
                        setValue3(value);
                    }} placeholder='Put the tags of your project here...'></TextField>

                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '2rem' }}>
                    <label htmlFor="contained-button-file">
                        <Input inputProps={{ accept: "file/*" }} id="contained-button-file" onChange={handleFileUpload} type="file" style={{ display: 'None' }} />
                        <Button variant="contained" component="span" sx={{ color: 'primary.main', backgroundColor: 'secondary.main' }}>
                            Upload file
                        </Button>
                    </label>
                    <Typography variant='body1' sx={{ marginLeft: '2rem', paddingTop: '0.3rem' }}  >Upload your project (PDF, ...)</Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center', marginTop: '3rem' }}>
                    <label htmlFor="">
                        <Button component="span" sx={{ color: 'primary.main', backgroundColor: 'secondary.main' }}>
                            SUBMIT ALL
                        </Button>
                    </label>
                </Box>

            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', width: '45%', padding:'1rem', border:'solid', borderRadius:'0.3rem', borderColor:'primary.dark' }}>
                <Typography variant='h5' sx={{ textAlign: 'center' }} >Preview your work here :</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', width: '100%', marginTop:'2rem' }}>
                    <Box sx={{ minWidth: '20%', maxWidth: '20%', height:'auto', marginRight:'1rem' }}>
                        {imgpath !== "" ? <Image src={imgpath} width={500} height={500}></Image> : null}
                    </Box>
                    <Typography variant='h6' sx={{maxWidth:'80%', maxHeight:'10rem', wordWrap:'break-word', overflow:'auto'}}  > {value1} </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    <Typography variant='body1' sx={{color:'secondary.main', marginTop:'1rem', maxWidth:'100%', wordWrap:'break-word', overflow:'auto', maxHeight:'3.5rem'}}  > {value2} </Typography>
                    <Typography variant='body1' sx={{color:'secondary.main', marginBottom:'1rem', maxWidth:'100%', wordWrap:'break-word', overflow:'auto', maxHeight:'2rem'}}  > {value3} </Typography>
                    <iframe
                        width="100%"
                        height="500rem"
                        src={filepath}></iframe>
                </Box>
            </Box>
        </Box>
    );
};

export default GetWork;