import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { DchungTheme } from '../assets/DchungTheme'
import { Typography } from '@mui/material'

export default function Add() {
    return (
        <ThemeProvider theme={DchungTheme}>
            <Typography>Hello from add!</Typography>
        </ThemeProvider>
    )
}
