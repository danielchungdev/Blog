import React, {useEffect} from 'react'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Typography, Stack } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function Post(props) {

    let { id } = useParams()
    const { post } = props;

    useEffect(() => {
        //TODO GET DATA WITH POST ID
    }, [])

    return (
        <ThemeProvider theme={DchungTheme}>
            <Container maxWidth="lg">
                <Stack direction="row" justifyContent="space-between" marginBottom={5}>
                    <Typography>Post: {post.number}</Typography>
                    <Typography>ID: {post.id}</Typography>
                </Stack>
                <Typography >Title:</Typography>
                <Typography variant='h2'>{post.title}</Typography>
                <Typography >Date:</Typography>
                <Typography variant='h6' marginBottom={5}>{post.date}</Typography>
                <Typography >Body:</Typography>
                <Typography variant='h6'>{post.body}</Typography>
            </Container>
        </ThemeProvider>
    )
}
