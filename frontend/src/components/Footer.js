import React, { useState } from 'react'
import { Grid, Link, ThemeProvider, Typography, Stack, TextField, Button, Divider, Box, Snackbar, Alert } from '@mui/material'
import { DchungTheme } from '../assets/DchungTheme'


export default function Footer() {

    const [mail, setMail] = useState("")
    const [emailError, setEmailError] = useState(false)
    const [emailSuccess, setEmailSuccess] = useState(false)

    const position = {
        vertical: "top",
        horizontal: "center"
    }

    const handleSubmit = () => {
        if (mail !== ""){
            setEmailSuccess(true)
        }
        else{
            setEmailError(true)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setEmailError(false)
        setEmailSuccess(false)
    };

    const signedUpAlert = (
        <Snackbar open={emailSuccess} autoHideDuration={6000} onClose={handleClose} anchorOrigin={position}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                You've signed up for my newsletter!
            </Alert>
        </Snackbar>
    )

    const emailErrorAlert = (
        <Snackbar open={emailError} autoHideDuration={6000} onClose={handleClose} anchorOrigin={position}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                This is an invalid email!
            </Alert>
        </Snackbar>
    )

    return (
        <ThemeProvider theme={DchungTheme}>
            <Divider/>
            <Grid container columns={{xs: 12, sm: 12, md: 24, lg: 24}} justifyContent="space-around" spacing={2} marginBottom={5} marginTop={3}>
                <Grid item xs={11} md={6} lg={6} justifyContent="center">
                    <Typography variant='h6'>Daniel Chung</Typography>
                    <Typography>Software Engineer & Fullstack Engineer</Typography>
                </Grid>
                <Grid item xs={11} md={6} lg={4} justifyContent="center"> 
                    <Typography variant='h6'>Connect with me!</Typography>
                    <Stack>
                        <Link href="/" underline="hover" color="inherit"><Typography>Linkedin</Typography></Link>
                        <Link href="/" underline="hover" color="inherit"><Typography>Github</Typography></Link>
                        <Link href="/" underline="hover" color="inherit"><Typography>Email</Typography></Link>
                    </Stack>

                </Grid>
                <Grid item xs={11} md={6} lg={6} >
                    <Typography variant='h6'>Sign up for my newsletter</Typography>
                    <TextField variant="standard" label="Email" type="email" sx={{width: '100%', marginBottom: '2%'}} onChange={e=>setMail(e.target.value)}/>
                    <Box sx={{ display: 'flex', justifyContent: "center"}}>
                        <Button onClick={handleSubmit} variant="outlined">Sign up</Button>
                    </Box>
                </Grid>
            </Grid>
            {signedUpAlert}
            {emailErrorAlert}
        </ThemeProvider>
    )
}
