import React, {useState} from 'react'
import Header from '../components/Header'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Stack, TextField, TextareaAutosize, Button, Alert, Snackbar } from '@mui/material'

const postButtonStyle = {
    minWidth: '300px'
}

export default function Add() {
    const date = Date.now()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState([{text: ""}])
    const [number, setNumber] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [emptyError, setEmptyError] = useState(false)
    const [deleteError, setDeleteError] = useState(false)

    const position = {
        vertical: "top",
        horizontal: "center"
    }
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setEmptyError(false);
        setDeleteError(false);
    };

    const resetErrors = () => {
        setEmptyError(!emptyError);
    }

    const handleErrors = () => {
        if (title === "" || body === ""){
            setEmptyError(true)
        }
    }

    const handleChange = (index, e) => {
        let bodyValues = body;
        bodyValues[index][e.target.text] = e.target.value
        setBody({bodyValues});
    }

    const addParagraphs = () => {
        setBody([...body, {text: ""}])
    }
    
    const removeParagraph = () => {
        let bodyValues = [...body];
        if (bodyValues.length > 1){
            bodyValues.splice(bodyValues.length - 1, 1);
            setBody(bodyValues);
        }
        else {
            setDeleteError(true)
        }
    }

    const handlePost = (e) => {
        e.preventDefault()
        resetErrors()
        const post = {
            user: username,
            password: password,
            title: title,
            date: date,
            body: body
        }
        console.log(post)
        handleClick()
    }

    return (
        <ThemeProvider theme={DchungTheme}>
            <Container maxWidth="lg" sx={{marginBottom: "5%"}}>
                <Header/>
                <Container maxWidth="md">
                    <TextField id="standard-basic" label="Blog Number" variant="standard" onChange={(e) => setNumber(e.target.value)}/>
                    <Stack spacing={4}>
                        <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)}/>
                        {
                            body.map((element, index) => (
                                <TextareaAutosize
                                    key={index}
                                    aria-label="minimum height"
                                    minRows={10}
                                    placeholder="Paragraph"
                                    style={{ width: '100%' }}
                                    onChange={e => handleChange(index, e)}
                                />
                            ))
                        }
                        
                        <Stack direction="row" justifyContent="center">
                            <Button onClick={()=> addParagraphs()} color="success"><AddIcon/></Button>
                            <Button onClick={() => removeParagraph()} color="error"><DeleteIcon/></Button>
                        </Stack>

                        <Stack direction='row' spacing={10} justifyContent="space-between">
                            <TextField id="outlined-basic" label="Username" variant="outlined" onChange={(e) => setUsername(e.target.value)}/>
                            <TextField label="Password" type="password" onChange={(e) => setPassword(e.target.password)}/>
                            <Button variant="outlined" onClick={handlePost} sx={postButtonStyle}>Post</Button>
                        </Stack>
                    </Stack>
                </Container>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={position}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        Post was created!
                    </Alert>
                </Snackbar>
                <Snackbar open={emptyError} autoHideDuration={6000} onClose={handleClose} anchorOrigin={position}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Looks like there was an error try again!
                    </Alert>
                </Snackbar>
                <Snackbar open={deleteError} autoHideDuration={6000} onClose={handleClose} anchorOrigin={position}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Can't delete all paragraphs!
                    </Alert>
                </Snackbar>
            </Container>
        </ThemeProvider>
    )
}
