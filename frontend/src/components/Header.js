import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import '../assets/App.css'

const outerContainer = {
    margin: '5% 0%'
}

export default function Header() {
    return (
        <Box sx={outerContainer}>
            <Link to="/" className='header--title'><Typography variant='h5'>Daniel Chung's Archive</Typography></Link>
            <Box>
                <Typography>Currently I'm a 5th Year Web & Mobile Computing major @ RIT specializing on web technologies. Here I'll document my journey as a fullstack web developer. </Typography>
            </Box>
        </Box>
    )
}