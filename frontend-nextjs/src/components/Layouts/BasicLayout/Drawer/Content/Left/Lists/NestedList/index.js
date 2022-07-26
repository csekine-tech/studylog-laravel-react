import * as React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import TodoListItem from './TodoListItem'
import WorkbookListItem from './WorkbookListItem'

const NestedList = ({ title, contents }) => {
    const router = useRouter()
    const path = router.pathname
    const parentPath = path.split('/')[1]

    const [open, setOpen] = useState(true)

    const handleClick = id => {
        setOpen(!open)
    }

    let renderData
    if (parentPath === 'library') {
        renderData = (
            <List component="div" disablePadding>
                {contents.map(content => {
                    return (
                        <WorkbookListItem
                            key={content.id}
                            id={content.id}
                            name={content.name}
                        />
                    )
                })}
            </List>
        )
    }
    if (parentPath === 'todo') {
        renderData = (
            <List component="div" disablePadding>
                {contents.map(content => {

                    return (
                        <TodoListItem
                            key={content.id}
                            id={content.id}
                            workbook_name={content.workbook_name}
                            question_id={content.question_id}
                            question_number={content.question.number}
                            done_at={content.done_at}
                        />
                    )
                })}
            </List>
        )
    }

    return (
        <>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {renderData}
            </Collapse>
        </>
    )
}
export default NestedList
