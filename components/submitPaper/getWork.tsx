import { NextPage } from 'next';
import { Box, Typography, Input, TextField } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

const GetWork: NextPage = (props) => {
    const [projectName, setProjectName] = useState<string>('');
    const [coworkers, setCoworkers] = useState<string>('');
    const [tags, setTags] = useState<string>('');
    const [imgpath, setImgpath] = useState<string>('');
    const [, setImg] = useState<File | undefined>(undefined);
    const [filepath, setFilepath] = useState<string>('');
    const [filey, setFile] = useState<File | undefined>(undefined);

    const [fileContent, setFileContent] = useState<string | ArrayBuffer | null>(
        ''
    );

    const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null && event.target.files.length > 0) {
            setImg(event.target.files[0]);
            setImgpath(URL.createObjectURL(event.target.files[0]));
        } else {
            setImg(undefined);
            setImgpath('');
        }
    };

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        if (event.target.files !== null && event.target.files.length > 0) {
            setFile(event.target.files[0]);
            setFilepath(URL.createObjectURL(event.target.files[0]));
            const reader = new FileReader();
            reader.onload = async (event) => {
                if (event.target) setFileContent(event.target.result);
            };
            reader.readAsText(event.target.files[0]);
        } else {
            setFile(undefined);
            setFilepath('');
        }
    };

    const submitAll = () => {
        console.log('Content = ', fileContent);
        console.log('projectName = ', projectName);
        console.log('coworkers = ', coworkers);
        console.log('tags = ', tags);
        if (
            projectName.length > 0 &&
            coworkers.length > 0 &&
            tags.length > 0 &&
            (fileContent as string).length > 0
        ) {
            console.log('sending...');
            const formData = new FormData();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            formData.append("file", filey);
            try {
                axios({
                    method: "post",
                    url: "http://localhost:4000/index_file",
                    data: formData,
                    headers: {"Content-Type": "multipart/form-data"},
                });
            } catch (e) {
                console.log(e);
            }
            const data = {
                category: 'Nature', title : projectName, author : 'Jean-Michel'
            }
            try {
                axios({
                    method: "post",
                    url: `http://localhost:4000/create_nodes?category=${data.category}&title=${data.title}&author=${data.author}`,
                });
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '100%',
            }}
            {...props}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '45%' }}
            >
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    Submit your work here :
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '2rem',
                    }}
                >
                    <label htmlFor="contained-button-img">
                        <Input
                            inputProps={{ accept: 'image/*' }}
                            id="contained-button-img"
                            onChange={handleImageUpload}
                            type="file"
                            style={{ display: 'None' }}
                        />
                        <Button
                            variant="contained"
                            component="span"
                            sx={{
                                color: 'primary.main',
                                backgroundColor: 'secondary.main',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: 'secondary.dark',
                                },
                            }}
                        >
                            Upload img
                        </Button>
                    </label>
                    <Typography
                        variant="body1"
                        sx={{ marginLeft: '2rem', paddingTop: '0.3rem' }}
                    >
                        Upload an image for your project
                    </Typography>
                </Box>

                <Typography variant="body1" sx={{ marginTop: '2rem' }}>
                    Name your project
                </Typography>
                <TextField
                    sx={{
                        border: 'solid',
                        borderColor: 'secondary.main',
                        borderRadius: '0.5rem',
                    }}
                    onChange={(event) => {
                        setProjectName(event.target.value);
                    }}
                    placeholder="Name your project here..."
                />

                <Typography variant="body1" sx={{ marginTop: '2rem' }}>
                    Name your coworkers
                </Typography>
                <TextField
                    sx={{
                        border: 'solid',
                        borderColor: 'secondary.main',
                        borderRadius: '0.5rem',
                    }}
                    onChange={(event) => {
                        setCoworkers(event.target.value);
                    }}
                    placeholder="Name your coworker here..."
                />

                <Typography variant="body1" sx={{ marginTop: '2rem' }}>
                    Put the tags of your project (with a # before and space
                    between each)
                </Typography>
                <TextField
                    sx={{
                        border: 'solid',
                        borderColor: 'secondary.main',
                        borderRadius: '0.5rem',
                    }}
                    onChange={(event) => {
                        setTags(event.target.value);
                    }}
                    placeholder="Put the tags of your project here..."
                />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: '2rem',
                    }}
                >
                    <label htmlFor="contained-button-file">
                        <Input
                            inputProps={{ accept: 'file/*' }}
                            id="contained-button-file"
                            onChange={handleFileUpload}
                            type="file"
                            style={{ display: 'None' }}
                        />
                        <Button
                            variant="contained"
                            component="span"
                            sx={{
                                color: 'primary.main',
                                bgcolor: 'secondary.main',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: 'secondary.dark',
                                },
                            }}
                        >
                            Upload file
                        </Button>
                    </label>
                    <Typography
                        variant="body1"
                        sx={{ marginLeft: '2rem', paddingTop: '0.3rem' }}
                    >
                        Upload your project (PDF, ...)
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: '3rem',
                    }}
                >
                    <label htmlFor="">
                        <Button
                            component="span"
                            onClick={submitAll}
                            sx={{
                                color: 'primary.main',
                                backgroundColor: 'secondary.main',
                                '&:hover': {
                                    color: 'primary.main',
                                    bgcolor: 'secondary.dark',
                                },
                            }}
                        >
                            SUBMIT ALL
                        </Button>
                    </label>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '45%',
                    padding: '1rem',
                    border: 'solid',
                    borderRadius: '0.3rem',
                    borderColor: 'primary.dark',
                }}
            >
                <Typography variant="h5" sx={{ textAlign: 'center' }}>
                    Preview your work here :
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: '2rem',
                    }}
                >
                    <Box
                        sx={{
                            minWidth: '20%',
                            maxWidth: '20%',
                            height: 'auto',
                            marginRight: '1rem',
                        }}
                    >
                        {imgpath !== '' ? (
                            <Image
                                alt="preview"
                                src={imgpath}
                                width={500}
                                height={500}
                            />
                        ) : null}
                    </Box>
                    <Typography
                        variant="h6"
                        sx={{
                            maxWidth: '80%',
                            maxHeight: '10rem',
                            wordWrap: 'break-word',
                            overflow: 'auto',
                        }}
                    >
                        {' '}
                        {projectName}{' '}
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'secondary.main',
                            marginTop: '1rem',
                            maxWidth: '100%',
                            wordWrap: 'break-word',
                            overflow: 'auto',
                            maxHeight: '3.5rem',
                        }}
                    >
                        {' '}
                        {coworkers}{' '}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: 'secondary.main',
                            marginBottom: '1rem',
                            maxWidth: '100%',
                            wordWrap: 'break-word',
                            overflow: 'auto',
                            maxHeight: '2rem',
                        }}
                    >
                        {' '}
                        {tags}{' '}
                    </Typography>
                    <iframe
                        width="100%"
                        height="500rem"
                        src={filepath}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default GetWork;
