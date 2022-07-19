import * as React from 'react'
import { useRouter } from 'next/router'
import { useState, useContext } from 'react'
import isRightOpenContext, {
    useIsRightOpenContext,
} from '@/store/isrightopen-context'
import ListSubheader from '@mui/material/ListSubheader'
import { Button } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import { ContentCutSharp } from '@mui/icons-material'
import { workbookList } from '@/data/workbook/workbooks'
import { todoList, todoListFilteredWorkbook } from '@/data/todo/todo'
import { Box } from '@mui/material'

const NestedList = ({ title, contents }) => {
    const router = useRouter()
    const path = router.pathname
    const parentPath = path.split('/')[1]

    const [open, setOpen] = React.useState(true)
    const { isRightOpen, setIsRightOpen } = useIsRightOpenContext()
    const { rightContent, setRightContent } = useIsRightOpenContext()
    const { rightContentData, setRightContentData } = useIsRightOpenContext()

    const handleClick = () => {
        setOpen(!open)
    }
    const handleEditBtnClick = id => {
        setIsRightOpen(true)
        setRightContent(id)
        if (parentPath === 'library' && router.query) {
            router.push(`/library/${id}/edit`)
        }
        if (parentPath === 'library') {
            workbookList.forEach(workbook => {
                if (workbook.workbook_id === id) {
                    setRightContentData(workbook)
                }
            })
        }
    }
    const handleItemClick = id => {
        if (parentPath === 'library') {
            // setIsRightOpen(true)
            // setRightContent(id)
            todoListFilteredWorkbook.forEach(workbook => {
                if (workbook.workbook_id === id) {
                    // setRightContentData(workbook)
                    router.push(`/library/${id}`)
                }
            })
        }
        if (parentPath === 'todo') {
            // setIsRightOpen(true)
            // setRightContent(id)
            todoList.forEach(todos => {
                if (todos.q_id === id) {
                    // setRightContentData(todos.todos)
                    router.push(`/todo/${id}`)

                }
            })
        }
    }
    const workbookListRender = (
        <List component="div" disablePadding>
            {contents.map(content => {
                return (
                    <Box
                        key={content.id}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            p: 0,
                            m: 1,
                        }}>
                        <ListItemButton
                            xs={8}
                            onClick={() => {
                                handleItemClick(content.id)
                            }}>
                            <ListItemText primary={content.name} />
                        </ListItemButton>
                        <Button
                            xs={4}
                            sx={{ m: 1 }}
                            variant="contained"
                            onClick={() => {
                                handleEditBtnClick(content.id)
                            }}>
                            編集
                        </Button>
                    </Box>
                )
            })}
        </List>
    )
    const todoListRender = (
        <List component="div" disablePadding>
            {contents.map(content => {
                return (
                    <ListItemButton
                        sx={{ pl: 4 }}
                        key={content.id}
                        onClick={() => {
                            handleItemClick(content.id)
                        }}>
                        <ListItemText
                            primary={content.workbook_name + ' ' + content.name}
                        />
                    </ListItemButton>
                )
            })}
        </List>
    )

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {parentPath === 'library' && workbookListRender}
                {parentPath === 'todo' && todoListRender}
            </Collapse>
        </>
    )
}
export default NestedList
