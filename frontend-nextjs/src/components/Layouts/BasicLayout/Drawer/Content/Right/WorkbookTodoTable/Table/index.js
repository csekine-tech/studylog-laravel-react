import * as React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import { useTodo } from '@/hooks/todo'
import Loading from '@/components/ui/Loading'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import dateFormat from '@/../functions/date-format'
import MyTableRow from './TableRow'

const BasicTable = () => {
    const [todoListFilteredWorkbook, setTodoListFilteredWorkbook] = useState([])
    const { getTodoListFilteredWorkbook, updateTodo } = useTodo()
    const [filtering, setFiltering] = useState(false)
    const router = useRouter()
    const id = Number(router.query.id)
    const [loading, setLoading] = useState(true)

    const rateChangeHandler = (rate, todo_id, plannedAt) => {
        updateTodo(
            {
                rate: rate,
                planned_at: dateFormat(plannedAt),
                done_at: dateFormat(new Date()),
            },
            todo_id,
        )
        getTodoListFilteredWorkbook({ setTodoListFilteredWorkbook })
    }

    useEffect(() => {
        getTodoListFilteredWorkbook({ setTodoListFilteredWorkbook })
    }, [])
    useEffect(() => {
        todoListFilteredWorkbook.length !== 0 && setLoading(false)
    }, [todoListFilteredWorkbook])

    const showFilteringDataHandler = () => {
        setFiltering(true)
    }
    const showAllDataHandler = () => {
        setFiltering(false)
    }
    const dateChangeHandler = (rate, todo_id, plannedAt) => {
        const doneAt =
            rate !== null && rate !== 0 ? dateFormat(new Date()) : null
        updateTodo(
            {
                rate: rate,
                planned_at: dateFormat(plannedAt),
                done_at: doneAt,
            },
            todo_id,
        )
        getTodoListFilteredWorkbook({ setTodoListFilteredWorkbook })
    }

    let renderData
    todoListFilteredWorkbook.forEach(workbook => {
        if (workbook.id === id) {
            renderData = workbook
        }
    })
    const tableInnerContent = renderData ? (
        renderData.questions.map(q => {
            let plannedAt = null,
                doneAt = null,
                doneRate = null,
                finished = false,
                plannedTodoId = null
            if (
                q.todos.length >= 1 &&
                q.todos[0].done_at !== null &&
                q.todos[0].rate === 4
            ) {
                finished = true
                plannedAt = null
                doneAt = q.todos[0].done_at
                doneRate = q.todos[0].rate
            } else if (q.todos.length === 1 && q.todos[0].planned_at === null) {
                plannedTodoId = q.todos[0].id
            } else if (q.todos.length > 1 && q.todos[0].planned_at === null) {
                doneAt = q.todos[1].done_at
                doneRate = q.todos[1].rate
                plannedTodoId = q.todos[0].id
            } else if (q.todos.length === 1 && q.todos[0].planned_at !== null) {
                plannedAt = q.todos[0].planned_at
                plannedTodoId = q.todos[0].id
            } else if (q.todos.length > 1 && q.todos[0].planned_at !== null) {
                plannedAt = q.todos[0].planned_at
                doneAt = q.todos[1].done_at
                doneRate = q.todos[1].rate
                plannedTodoId = q.todos[0].id
            } else {
            }

            if (finished === true && filtering === true) {
            } else {
                return (
                    <MyTableRow
                        key={q.id}
                        q={q}
                        finished={finished}
                        plannedAt={plannedAt}
                        plannedTodoId={plannedTodoId}
                        doneRate={doneRate}
                        doneAt={doneAt}
                        rateChangeHandler={rateChangeHandler}
                        dateChangeHandler={dateChangeHandler}
                    />
                )
            }
        })
    ) : (
        <TableRow>
            <TableCell align="center">コンテンツがありません</TableCell>
        </TableRow>
    )

    return (
        <>
            {loading && <Loading size="full" />}
            {!loading && (
                <>
                    <Typography variant="h4" component="div">
                        {renderData.name}
                    </Typography>
                    <Box sx={{ my: 2 }}>
                        <Button onClick={showAllDataHandler}>全て表示</Button>
                        <Button onClick={showFilteringDataHandler}>
                            未完了のみ表示
                        </Button>
                        <TableContainer component={Paper}>
                            <Table
                                sx={{ minWidth: 650 }}
                                aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">
                                            問題番号
                                        </TableCell>
                                        <TableCell align="center">
                                            次に解く予定日
                                        </TableCell>
                                        <TableCell align="center">
                                            評価
                                        </TableCell>
                                        <TableCell align="center">
                                            最後に解いた日
                                        </TableCell>
                                        <TableCell align="center">
                                            評価
                                        </TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>{tableInnerContent}</TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </>
            )}
        </>
    )
}

export default BasicTable
