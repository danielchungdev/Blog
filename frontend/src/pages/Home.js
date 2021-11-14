import React from 'react'
import Header from '../components/Header'
import PostCards from '../components/PostCards'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Grid} from '@mui/material'

export default function Home() {
    return (
        <ThemeProvider theme={DchungTheme}>
            <Container maxWidth="lg" sx={{backgroundColor: 'yellow'}} wrap="wrap">
                <Header/>
                <Grid container spacing={{lg:5, md: 4, xs:2}} columns={12}>
                    <PostCards/>
                    <PostCards/>
                    <PostCards/>
                    <PostCards/>
                    <PostCards/>
                    <PostCards/>
                    <PostCards/>
                    <PostCards/>
                    <PostCards/>
                    <PostCards/>
                </Grid>
            </Container>
        </ThemeProvider>
    )
}
