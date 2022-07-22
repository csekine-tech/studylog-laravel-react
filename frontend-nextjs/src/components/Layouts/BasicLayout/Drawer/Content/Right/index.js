import Typography from '@mui/material/Typography'
import TodoCollection from './TodoCollection'
import { useRouter } from 'next/router'
import WorkbookForm from './Content/WorkbookForm'
import { Box } from '@mui/system'
import { useState, useContext, useEffect } from 'react'
import isRightOpenContext, {
    useIsRightOpenContext,
} from '@/store/isrightopen-context'
import TextFieldComponent from '@/components/Field'
import { todoList } from '@/data/todo/todo'
import WorkbookTodoTable from './WorkbookTodoTable'
import { workbookList } from '@/data/workbook/workbooks'
import Loading from '@/components/ui/Loading'

const Right = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const path = router.pathname
    const id = router.query.id ? Number(router.query.id) : ''
    const qid = router.query.qid ? Number(router.query.qid) : ''
    const { isRightOpen, setIsRightOpen } = useIsRightOpenContext()
    const { rightContent, setRightContent } = useIsRightOpenContext()

    let todoCollectiontitle, workbookTodoTabletitle

    if (path === '/todo/[qid]') {
        todoList.forEach(todos => {
            if (todos.q_id === qid) {
                todoCollectiontitle = todos.workbook_name + ' ' + todos.q_name
            }
        })
    }

    if (path === '/library/[id]/edit' && id !== '') {
        workbookList.forEach(workbook => {
            if (workbook.workbook_id === id) {
                workbookTodoTabletitle = workbook.workbook_name
            }
        })
    }
    if (path === '/library/[id]') {
        workbookList.forEach(workbook => {
            if (workbook.workbook_id === id) {
                workbookTodoTabletitle = workbook.workbook_name
            }
        })
    }
    useEffect(() => {
        setLoading(false)
    }, [todoList, workbookList])

    const todoCollectionRender = (
        <>
            {/* <Typography variant="h4" component="div">
                {todoCollectiontitle}
            </Typography>
            <Box sx={{ my: 2 }}> */}
                {loading ? <Loading size="full" /> : <TodoCollection />}
            {/* </Box> */}
        </>
    )
    const workbookFormRender = (
        <>
            <Typography variant="h4" component="div">
                教材
            </Typography>
            <Box sx={{ my: 2 }}>
                {loading ? (
                    <Loading size="full" />
                ) : (
                    <WorkbookForm workbookId={id} />
                )}
            </Box>
        </>
    )
    const workbookTodoTableRender = (
        <>
            {/* <Typography variant="h4" component="div">
                {workbookTodoTabletitle}
            </Typography>
            <Box sx={{ my: 2 }}> */}
                {loading ? <Loading size="full" /> : <WorkbookTodoTable />}
            {/* </Box> */}
        </>
    )
    const addWorkbookFormRender = (
        <>
            <Typography variant="h4" component="div">
                教材
            </Typography>
            <Box sx={{ my: 2 }}>
                {loading ? (
                    <Loading size="full" />
                ) : (
                    <WorkbookForm workbookId={null} />
                )}
            </Box>
        </>
    )

    return (
        <Box sx={{ m: 3 }}>
            {path === '/library/[id]/edit' && workbookFormRender}
            {path === '/library/add' && addWorkbookFormRender}
            {path === '/todo/[qid]' && todoCollectionRender}
            {path === '/library/[id]' && workbookTodoTableRender}
        </Box>
    )
}
export default Right
