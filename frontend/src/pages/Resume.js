import React from 'react'
import { Container, Typography, Stack, IconButton, Link, Box} from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Resume() {


    return (
        <ThemeProvider theme={DchungTheme}>
            <Container maxWidth="lg">
                <Typography variant="h3" color="primary">Daniel Chung</Typography>
                <Typography>Fullstack Developer / Software Engineer</Typography>
                <Stack direction="row" spacing={2}>
                    <IconButton >
                        <Link href="https://www.linkedin.com/in/danielchungg/" target="_blank" >
                            <LinkedInIcon/>
                        </Link>
                    </IconButton>
                    <IconButton>
                        <Link href="mailto:dec8768@rit.edu">
                            <EmailIcon/>
                        </Link>
                    </IconButton>
                    <IconButton>
                        <Link href="https://github.com/pikachungg" target="_blank">
                            <GitHubIcon/>
                        </Link>
                    </IconButton>
                </Stack>
                <Typography variant="h5" color="primary">Work experience:</Typography>
            </Container>
        </ThemeProvider>
    )
}
