import { useRouter } from 'next/router'
import { useState } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import { Box } from '@mui/material'
import { Button } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'

const WorkbookListItem = ({id,name}) => {
    const router = useRouter()
    const path = router.pathname

    const handleEditBtnClick = id => {
        if (router.query) {
            router.push(`/library/${id}/edit`)
        }
    }

    const handleItemClick = id => {
        router.push(`/library/${id}`)
    }

    return (
        <Box
            key={id}
            sx={{
                display: 'flex',
                flexDirection: 'row',
                p: 0,
                m: 1,
            }}>
            <ListItemButton
                xs={8}
                onClick={() => {
                    handleItemClick(id)
                }}>
                <ListItemText primary={name} />
            </ListItemButton>
            <Button
                xs={4}
                sx={{ m: 1 }}
                variant="contained"
                onClick={() => {
                    handleEditBtnClick(id)
                }}>
                編集
            </Button>
        </Box>
    )
}

export default WorkbookListItem
