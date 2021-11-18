import React, {useEffect, useState} from 'react'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Typography, Stack, LinearProgress } from '@mui/material'
import { useParams } from 'react-router-dom'

export default function Post(props) {

    let { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        console.log("hello from useeffect")
        //TODO GET DATA WITH POST ID
        fetch('http://localhost:4000/getpost/' + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setPost(data)
        })
    }, [])

    return (
        <ThemeProvider theme={DchungTheme}>
            {post === null ? <LinearProgress/> : 
                <Container maxWidth="lg">
                    <Stack direction="row" justifyContent="space-between" marginBottom={20}>
                        <Typography>POST: {post.number}</Typography>
                        <Typography>ID: {post.id}</Typography>
                    </Stack>
                    <Typography >TITLE:</Typography>
                    <Typography variant='h4'>{post.title}</Typography>
                    <Typography >DATE:</Typography>
                    <Typography variant='h6' marginBottom={5}>{post.date}</Typography>
                    <Typography >BODY:</Typography>
                    {
                        post.body.map((element, index) => (
                            <Typography variant='h6' key={index}>{post.body[index].text}</Typography>
                        ))
                    }
                </Container>
            }
        </ThemeProvider>
    )
}
