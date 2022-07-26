import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Left from './Left'
import Right from './Right'
import { IsRightOpenProvider } from '@/store/isrightopen-context'


export default function Content() {
    return (
        <IsRightOpenProvider>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Left />
                    </Grid>
                    <Grid item xs={9}>
                        <Right />
                    </Grid>
                </Grid>
            </Box>
        </IsRightOpenProvider>
    )
}
