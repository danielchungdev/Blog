import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Typography } from '@mui/material'

export default function Home() {
    return (
        <ThemeProvider theme={DchungTheme}>
            <Typography>Hello from home!</Typography>
        </ThemeProvider>
    )
}
