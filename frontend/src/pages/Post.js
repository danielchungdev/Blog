import React, {useEffect, useState} from 'react'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Typography, Stack, LinearProgress, Breadcrumbs, Link } from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Post() {

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

        logVisitor()
    }, [])

    const logVisitor = () => {
        fetch('https://pikachunggapi.herokuapp.com/visit/' + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
        })
        .then(res => { 
            if (res.status === 200){
                console.log('success')
            }
        })
    }

    const navigate = useNavigate()

    return (
        <ThemeProvider theme={DchungTheme}>
            {post === null ? <LinearProgress/> : 
                <Container maxWidth="md">
                    <Stack direction="row" justifyContent="space-between" marginBottom={15}>
                        <Breadcrumbs>
                            <Link underline="hover" color="inherit" href="/"><Typography>HOME</Typography></Link>
                            <Typography color="primary">POST: {post.number}</Typography>
                        </Breadcrumbs>
                        <Typography>ID: {post.id.toString().slice(0, 8)}</Typography>
                    </Stack>
                    <Typography >TITLE:</Typography>
                    <Typography variant='h4'>{post.title}</Typography>
                    <Typography >DATE:</Typography>
                    <Typography variant='h6' marginBottom={5}>{post.date}</Typography>
                    {
                        post.body.map((element, index) => (
                            <Typography key={index} marginBottom={5}>{post.body[index].text}</Typography>
                        ))
                    }
                </Container>
            }
            {post === null ? null : <Footer/>}  
        </ThemeProvider>
    )
}
