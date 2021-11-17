import React, {useState} from 'react'
import Header from '../components/Header'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Stack, TextField, TextareaAutosize, Button, Alert, Snackbar } from '@mui/material'

const postButtonStyle = {
    minWidth: '300px'
}

export default function Add() {
    const date = Date.now()
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [number, setNumber] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [emptyError, setEmptyError] = useState(false)

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
    };

    const resetErrors = () => {
        setEmptyError(!emptyError);
    }

    const handleErrors = () => {
        if (title === "" || body === ""){
            setEmptyError(true)
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
            <Container maxWidth="lg">
                <Header/>
                <Container maxWidth="md">
                    <TextField id="standard-basic" label="Blog Number" variant="standard" onChange={(e) => setNumber(e.target.value)}/>
                    <Stack spacing={4}>
                        <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)}/>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={25}
                            placeholder="Body"
                            style={{ width: '100%' }}
                            onChange={(e) => setBody(e.target.value)}
                        />
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
            </Container>
        </ThemeProvider>
    )
}
