import * as React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'

export default function DatePicker(props) {
    const [value, setValue] = React.useState(props.value)

    const handleChange = newValue => {
        setValue(newValue)
        props.onChange(newValue)
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    label="日付"
                    inputFormat="yyyy/MM/dd"
                    value={value}
                    onChange={handleChange}
                    renderInput={params => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    )
}
