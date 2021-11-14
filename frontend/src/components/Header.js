import { Typography, Box } from '@mui/material'
import React from 'react'

const outerContainer = {
    margin: '5% 0%'
}


export default function Header() {
    return (
        <Box sx={outerContainer}>
            <Typography variant='h5'>An RIT Tech Student Blog</Typography>
            <Box>
                <Typography variant='h6'>My name is Daniel Chung and currently I'm a Cloud Engineer intern @ Mindex and a 5th Year web & Mobile Computing major @ RIT. Here I'll document my journey as a fullstack web developer. </Typography>
            </Box>
        </Box>
    )
}
