import React from 'react'
import { ThemeProvider, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { DchungTheme } from '../assets/DchungTheme'

export default function NotFound() {
    return (
        <ThemeProvider theme={DchungTheme}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3}>
                    <Typography align='center'>404 not found :(</Typography>
                    <Typography align='center'><Link to="/">Go Back</Link></Typography>
                </Grid>   
            
            </Grid> 
        </ThemeProvider>
    )
}
