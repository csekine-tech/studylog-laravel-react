import Card from './Card'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
// import { todoList } from '@/data/todo/todo'
import { useIsRightOpenContext } from '@/store/isrightopen-context'
import { useTodo } from '@/hooks/todo'
import Loading from '@/components/ui/Loading'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

const TodoCollection = () => {
    const router = useRouter()
    const qid = Number(router.query.qid)
    const { rightContent, setRightContent } = useIsRightOpenContext()

    const [todoList, setTodoList] = useState([])
    const { getTodoList } = useTodo()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTodoList({ setTodoList })
        console.log(todoList)
    }, [])
    useEffect(() => {
        console.log(todoList)
        todoList.length !== 0 && setLoading(false)
    }, [todoList])

    let doneList = []
    let planList = []
    let title = ''
    todoList.length !== 0 &&
        todoList.forEach(todos => {
            if (todos.id === qid) {
                title = todos.workbook_name + '    ' + todos.number
                todos.todos.map(todo => {
                    if (todo.done_at) {
                        doneList.push(todo)
                    } else {
                        planList.push(todo)
                    }
                })
            }
        })

    let count = doneList.length + planList.length + 1
    const planCards = planList.map(plan => {
        count = count - 1
        return (
            <Card
                key={count}
                date={plan.planned_at}
                rate=""
                count={count}
                type="plan"
            />
        )
    })
    const doneCards = doneList.map(done => {
        count = count - 1
        return (
            <Card
                key={count}
                date={done.done_at}
                rate={done.rate}
                count={count}
                type="done"
            />
        )
    })

    return (
        <>
            {loading && <Loading size="full" />}
            {!loading && (
                <>
                    <Typography variant="h4" component="div">
                        {title}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                        <Grid container spacing={3}>
                            {planCards}
                            {doneCards}
                        </Grid>
                    </Box>
                </>
            )}
        </>
    )
}
export default TodoCollection
