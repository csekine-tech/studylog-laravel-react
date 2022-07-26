import { useRouter } from 'next/router'
import { useState, useEffect, useCallback } from 'react'
import NestedList from './NestedList'
import List from '@mui/material/List'
import { useIsRightOpenContext } from '@/store/isrightopen-context'
import { Button } from '@mui/material'
import { useTodo } from '@/hooks/todo'
import { useWorkbook } from '@/hooks/workbook'

const Lists = () => {
    const router = useRouter()

    const [todoDateRelations, setTodoDateRelations] = useState([])
    const { getTodoDateRelations } = useTodo()
    const [workbookSubjectRelations, setWorkbookSubjectRelations] = useState([])
    const { getWorkbookSubjectRelations } = useWorkbook()

    const handleFormOpen = () => {
        router.push('/library/add')
    }
    const path = useRouter().pathname
    const parentPath = path.split('/')[1]
    let lists

    useEffect(() => {
        let isMounted = true
        if (parentPath === 'library') {
            getWorkbookSubjectRelations({ setWorkbookSubjectRelations })
        } else if (parentPath === 'todo') {
            getTodoDateRelations({ setTodoDateRelations })
        }
        return () => {
            isMounted = false
        }
    }, [])

    if (parentPath === 'library') {
        lists = workbookSubjectRelations
    } else if (parentPath === 'todo') {
        lists = todoDateRelations
    }

    const listItems = Object.keys(lists).map(key => {
        return <NestedList key={key} title={key} contents={lists[key]} />
    })
    return (
        <>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader">
                {listItems}
            </List>
            <Button onClick={handleFormOpen}>+</Button>
        </>
    )
}
export default Lists
