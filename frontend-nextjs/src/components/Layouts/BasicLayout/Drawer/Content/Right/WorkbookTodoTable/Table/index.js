import * as React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import { todoListFilteredWorkbook } from '@/data/todo/todo'
import RatingStars from '@/components/ui/RatingStars'
import { useIsRightOpenContext } from '@/store/isrightopen-context'

const BasicTable = () => {
    const [filtering, setFiltering] = useState(false)
    const router = useRouter()
    const id = Number(router.query.id)

    // const { isRightOpen, setIsRightOpen } = useIsRightOpenContext()
    // const { rightContent, setRightContent } = useIsRightOpenContext()
    // const { rightContentData, setRightContentData } = useIsRightOpenContext()
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
        if (workbook.workbook_id === id) {
            renderData = workbook
        }
    })
    const tableInnerContent = renderData ? (
        renderData.questions.map(q => {
            let plannedAt, doneAt, rate, finished
            if (q.todos.length === 1 && q.todos[0].done_at === '') {
                //未着手の場合
                doneAt = ''
                plannedAt = q.todos[0].planned_at
                rate = 0
            } else if (q.todos.length === 1 && q.todos[0].done_at !== '') {
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
                doneAt = q.todos[0].done_at
                rate = q.todos[0].rate
                plannedAt = q.todos[1].planned_at
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
                            {q.name}
                        </TableCell>
                        <TableCell align="center">{doneAt}</TableCell>
                        <TableCell align="center">
                            <RatingStars rate={rate} edit={false} />
                        </TableCell>
                        <TableCell align="center">{plannedAt}</TableCell>
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
            <Button onClick={showAllDataHandler}>全て表示</Button>
            <Button onClick={showFilteringDataHandler}>未完了のみ表示</Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">問題番号</TableCell>
                            <TableCell align="center">最後に解いた日</TableCell>
                            <TableCell align="center">評価</TableCell>
                            <TableCell align="center">次に解く予定日</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{tableInnerContent}</TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default BasicTable
