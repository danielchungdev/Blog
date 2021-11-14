import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import PostCards from '../components/PostCards'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Grid, Pagination, Typography } from '@mui/material'
import Data from '../assets/test.json'

const paginationStyles = {
    display:"flex",
    justifyContent: "center",
    marginBottom: "2.5%"
}

export default function Home() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        setAllPosts(Data)
        pagination(1)
        setLoading(false)
    }, [loading])

    const pagination = (page) => {
        let lastPost = 9 * page
        let firstPost = lastPost - 9
        setPosts(allPosts.slice(firstPost, lastPost))
    }

    const nothingToSeeHere = (
        <Grid>
            <Typography>Oops nothing to see here :(</Typography>
        </Grid>
    )

    const postsFlex =(
        <Grid container spacing={{lg:6, md: 4, xs:2}} columns={{lg:12, md: 9, xs: 4}}>
            {posts.map((item, index) => (
                <PostCards data={item} key={index}/>
            ))}
        </Grid> 
        )

    return (
        <ThemeProvider theme={DchungTheme}>
            <Container maxWidth="lg" wrap="wrap" minHeight="lg">
               <Header/>
                <Container maxWidth="lg" sx={paginationStyles}>
                    <Pagination count={10} variant="outlined" defaultPage={1} color="primary" onChange={(event, value) => pagination(value)}/>
                </Container>
                {loading ? <Typography>Loading...</Typography> : postsFlex}
                {posts.length < 1 ? nothingToSeeHere : null}
            </Container>
        </ThemeProvider>
    )
}
