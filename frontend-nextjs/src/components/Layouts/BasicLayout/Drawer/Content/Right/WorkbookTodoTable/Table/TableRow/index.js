import { useState } from 'react'
import { useRouter } from 'next/router'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import DatePicker from '@/components/ui/DatePicker'
import RatingStars from '@/components/ui/RatingStars'
import { Button } from '@mui/material'

const MyTableRow = ({
    q,
    finished,
    plannedAt,
    plannedTodoId,
    doneRate,
    doneAt,
    dateChangeHandler,
    rateChangeHandler,
}) => {
    const [dateState, setDateState] = useState(plannedAt)
    const [planRateState, setPlanRateState] = useState(0)
    const [plannedAtState, setPlannedAtState] = useState(plannedAt)
    const [doneAtState, setDoneAtState] = useState(doneAt)
    const [doneRateState, setDoneRateState] = useState(doneRate)
    const router = useRouter()

    const handleEditBtnClick = id => {
        router.push(`/todo/${id}`)
    }

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
            <TableCell align="center">
                {finished && '完了'}
                {!finished && (
                    <DatePicker
                        value={plannedAtState}
                        onChange={dateValue => {
                            setDateState(dateValue)
                            dateChangeHandler(
                                planRateState,
                                plannedTodoId,
                                dateValue,
                            )
                        }}
                    />
                )}
            </TableCell>
            <TableCell align="center">
                {!finished && (
                    <RatingStars
                        rate={planRateState}
                        onChange={rate => {
                            setPlanRateState(rate)
                            rateChangeHandler(rate, plannedTodoId, plannedAt)
                        }}
                    />
                )}
            </TableCell>
            <TableCell align="center">{doneAtState}</TableCell>
            <TableCell align="center">
                <RatingStars
                    rate={doneRateState}
                    edit={false}
                    color2="#999999"
                    color1="#dddddd"
                />
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
export default MyTableRow
