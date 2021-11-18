import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import PostCards from '../components/PostCards'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Grid, Pagination, Typography } from '@mui/material'
// import Data from '../assets/test.json' //test purposes

const paginationStyles = {
    display:"flex",
    justifyContent: "center",
    marginBottom: "2.5%"
}

export default function Home() {

    const postPerPage = 9
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [allPosts, setAllPosts] = useState([])
    const [totalPaginations, setTotalPaginations] = useState(0)
    const [shouldUpdate, setShouldUpdate] = useState(0)

    useEffect(() => {
        pagination(1)
        fetch('http://localhost:4000/getposts', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
        })
        .then(res => res.json())
        .then(data => {
            setAllPosts(data)
            setLoading(false)
        })
    }, [loading])

    const pagination = (page) => {
        let totalPaginations = allPosts.length
        let lastPost = postPerPage * page
        let firstPost = lastPost - postPerPage
        setPosts(allPosts.slice(firstPost, lastPost))
        setTotalPaginations(Math.ceil(totalPaginations / postPerPage))
    }

    const nothingToSeeHere = (
        <Grid>
            <Typography>Oops nothing to see here :(</Typography>
        </Grid>
    )

    const postsFlex =(
        <div>
            <Container maxWidth="lg" sx={paginationStyles}>
                <Pagination count={totalPaginations} variant="outlined" defaultPage={1} color="primary" onChange={(event, value) => pagination(value)}/>
            </Container>
            <Grid container spacing={{lg:6, md: 4, xs:2}} columns={{lg:12, md: 9, xs: 4}} marginBottom={ 5 } >
                {posts.map((item, index) => (
                    <PostCards data={item} key={index} index={index}/>
                ))}
            </Grid> 
        </div>
    )

    return (
        <ThemeProvider theme={DchungTheme}>
            <Container maxWidth="lg" wrap="wrap">
               <Header/>
                {loading ? <Typography>Loading...</Typography> : postsFlex}
                {posts.length < 1 ? nothingToSeeHere : null}
            </Container>
        </ThemeProvider>
    )
}