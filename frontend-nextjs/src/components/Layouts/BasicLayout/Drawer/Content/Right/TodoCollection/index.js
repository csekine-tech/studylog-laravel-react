import Card from './Card'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import { todoList } from '@/data/todo/todo'
import { useIsRightOpenContext } from '@/store/isrightopen-context'

const TodoCollection = () => {
    const router = useRouter()
    const qid = Number(router.query.qid)
    const { rightContent, setRightContent } = useIsRightOpenContext()

    let doneList = []
    let planList = []

    todoList.forEach(todos => {
        if (todos.q_id === qid) {
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
            <Grid container spacing={3}>
                {planCards}
                {doneCards}
            </Grid>
        </>
    )
}
export default TodoCollection
