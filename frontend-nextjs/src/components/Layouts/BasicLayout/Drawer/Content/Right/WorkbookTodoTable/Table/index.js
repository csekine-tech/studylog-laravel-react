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
// import { todoListFilteredWorkbook } from '@/data/todo/todo'
import RatingStars from '@/components/ui/RatingStars'
import { useIsRightOpenContext } from '@/store/isrightopen-context'
import { useTodo } from '@/hooks/todo'
import Loading from '@/components/ui/Loading'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'

const BasicTable = () => {
    const [todoListFilteredWorkbook, setTodoListFilteredWorkbook] = useState([])
    const { getTodoListFilteredWorkbook } = useTodo()
    const [filtering, setFiltering] = useState(false)
    const router = useRouter()
    const id = Number(router.query.id)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTodoListFilteredWorkbook({ setTodoListFilteredWorkbook })
    }, [])
    useEffect(() => {
        todoListFilteredWorkbook.length !== 0 && setLoading(false)
    }, [todoListFilteredWorkbook])

    const handleEditBtnClick = id => {
        router.push(`/todo/${id}`)
    }
    const showFilteringDataHandler = () => {
        setFiltering(true)
    }
    const showAllDataHandler = () => {
        setFiltering(false)
    }

    let renderData
    todoListFilteredWorkbook.forEach(workbook => {
        if (workbook.id === id) {
            renderData = workbook
        }
    })
    const tableInnerContent = renderData ? (
        renderData.questions.map(q => {
            let plannedAt, doneAt, rate, finished
            if (q.todos.length === 1 && q.todos[0].done_at === null) {
                //未着手の場合
                doneAt = ''
                plannedAt = q.todos[0].planned_at
                rate = 0
            } else if (q.todos.length === 1 && q.todos[0].done_at !== null) {
                //着手済みで次が計画されていない場合
                doneAt = q.todos[0].done_at
                rate = q.todos[0].rate
                plannedAt = '完了済'
                if (q.todos[0].rate === 4) {
                    //満点評価の場合
                    finished = true
                } else {
                    //次回が必要な場合
                }
            } else {
                //着手済みで次が計画されている場合
                let todoLength = q.todos.length
                if (todoLength >= 2) {
                    doneAt = q.todos[todoLength - 2].done_at
                    rate = q.todos[todoLength - 2].rate
                    plannedAt = q.todos[todoLength - 1].planned_at
                } else {
                    doneAt = null
                    rate = null
                    plannedAt = null
                }
            }
            if (finished === true && filtering === true) {
            } else {
                return (
                    <TableRow
                        key={q.id}
                        sx={{
                            '&:last-child td, &:last-child th': {
                                border: 0,
                            },
                        }}>
                        <TableCell align="center" component="th" scope="row">
                            {q.number}
                        </TableCell>
                        <TableCell align="center">{doneAt}</TableCell>
                        <TableCell align="center">
                            <RatingStars rate={rate} edit={false} />
                        </TableCell>
                        <TableCell align="center">{plannedAt}</TableCell>
                        <TableCell align="center">
                            <RatingStars />
                        </TableCell>
                        <TableCell>
                            <Button
                                xs={4}
                                variant="contained"
                                onClick={() => {
                                    handleEditBtnClick(q.id)
                                }}>
                                編集
                            </Button>
                        </TableCell>
                    </TableRow>
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
                                            最後に解いた日
                                        </TableCell>
                                        <TableCell align="center">
                                            評価
                                        </TableCell>
                                        <TableCell align="center">
                                            次に解く予定日
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
