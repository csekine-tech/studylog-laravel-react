import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'


export default function BasicTextFields({ label }) {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <TextField
                    id="outlined-basic"
                    label={label}
                    variant="outlined"
                />
            </FormControl>
        </Box>
    )
}
