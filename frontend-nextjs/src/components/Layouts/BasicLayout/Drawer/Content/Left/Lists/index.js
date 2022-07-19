import { useRouter } from 'next/router'
import NestedList from './NestedList'
import List from '@mui/material/List'
import { useIsRightOpenContext } from '@/store/isrightopen-context'
import { Button } from '@mui/material'
import {
    workbookList,
    workbook_subject_relations,
} from '@/data/workbook/workbooks'
import { date_todo_relations } from '@/data/todo/todo'

const Lists = () => {
    const router = useRouter()

    const { isRightOpen, setIsRightOpen } = useIsRightOpenContext()
    const { rightContent, setRightContent } = useIsRightOpenContext()
    const { rightContentData, setRightContentData } = useIsRightOpenContext()

    const handleFormOpen = () => {
        // setIsRightOpen(true)
        // setRightContent(null)
        // setRightContentData(null)
        router.push('/library/add')
    }
    const path = useRouter().pathname
    const parentPath = path.split('/')[1]
    let lists
    if (parentPath === 'library') {
        lists = workbook_subject_relations
    } else if (parentPath === 'todo') {
        lists = date_todo_relations
    }
    const listItems = lists.map(list => {
        return (
            <NestedList
                key={list.parent}
                title={list.parent}
                contents={list.children}
            />
        )
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
                aria-labelledby="nested-list-subheader"
                // subheader={
                //     <ListSubheader component="div" id="nested-list-subheader">
                //         科目
                //     </ListSubheader>
                // }
            >
                {listItems}
            </List>
            <Button onClick={handleFormOpen}>+</Button>
        </>
    )
}
export default Lists
