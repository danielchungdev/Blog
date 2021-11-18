import React, {useEffect, useState} from 'react'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Typography, Stack, LinearProgress, Breadcrumbs, Link } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'

export default function Post(props) {

    let { id } = useParams()
    
    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch('https://pikachunggapi.herokuapp.com/getpost/' + id, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
        })
        .then(res => { 
            if (res.status === 200){
                return res.json()
            }
        })
        .then(data => {
            if (data === undefined){
                navigate("/notfound")
            }
            else{
                setPost(data)
            }
        })
    }, [])

    const navigate = useNavigate()

    return (
        <ThemeProvider theme={DchungTheme}>
            {post === null ? <LinearProgress/> : 
                <Container maxWidth="lg">
                    <Stack direction="row" justifyContent="space-between" marginBottom={15}>
                        <Breadcrumbs>
                            <Link underline="hover" color="inherit" href="/"><Typography>HOME</Typography></Link>
                            <Typography color="primary">POST: {post.number}</Typography>
                        </Breadcrumbs>
                        <Typography>ID: {post.id}</Typography>
                    </Stack>
                    <Typography >TITLE:</Typography>
                    <Typography variant='h4'>{post.title}</Typography>
                    <Typography >DATE:</Typography>
                    <Typography variant='h6' marginBottom={5}>{post.date}</Typography>
                    <Typography >BODY:</Typography>
                    {
                        post.body.map((element, index) => (
                            <Typography variant='h6' key={index} marginBottom={5}>{post.body[index].text}</Typography>
                        ))
                    }
                </Container>
            }
        </ThemeProvider>
    )
}
