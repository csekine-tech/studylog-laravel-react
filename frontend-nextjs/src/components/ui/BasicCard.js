import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
)

const BasicCard = ({ children, mode }) => {
    const style =
        mode === 'available'
            ? { backgroundColor: '#ffffff' }
            : { backgroundColor: '#f5f5f5', color: '#999999' }
    return (
        <Card sx={{ minWidth: 275 }} elevation={5} style={style}>
            <CardContent>{children}</CardContent>
        </Card>
    )
}
export default BasicCard
