import { Typography, Box } from '@mui/material'
import React from 'react'

const outerContainer = {
    margin: '5% 0%'
}


export default function Header() {
    return (
        <Box sx={outerContainer}>
            <Typography variant='h5'>Daniel Chung Tech Blog</Typography>
            <Box>
                <Typography variant='h6'>I'm currently an Cloud Engineer intern @ Mindex and a 5th Year web & Mobile Computing major @ RIT. Here I'll document my journey as a fullstack web developer. </Typography>
            </Box>
        </Box>
    )
}
