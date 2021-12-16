import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import PostCards from '../components/PostCards'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Container, Grid, Pagination, CircularProgress } from '@mui/material'
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

    useEffect(() => {
        pagination(1)
        fetch('https://pikachunggapi.herokuapp.com/getposts', {
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

    const loadingContainer = (
        <Grid 
            container
            justifyContent="center"
            alignItems="center"
            sx={{width: "100%", height: "100%"}}
        >
            <CircularProgress />
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
            <Container maxWidth="md" wrap="wrap">
               <Header/>
                {loading ? loadingContainer : postsFlex}
            </Container>
        </ThemeProvider>
    )
}