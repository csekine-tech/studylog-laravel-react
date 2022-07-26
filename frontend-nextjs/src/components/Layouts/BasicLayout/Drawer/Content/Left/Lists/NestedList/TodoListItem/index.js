import { useRouter } from 'next/router'
import { useState, useCallback, useEffect } from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import isPast from '@/../functions/date-compare'

const TodoListItem = ({
    id,
    workbook_name,
    question_id,
    question_number,
    done_at,
    planned_at,
}) => {
    const router = useRouter()

    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
        if (done_at !== null) {
            setIsDone(true)
        }
    }, [])

    const handleItemClick = id => {
        router.push(`/todo/${id}`)
    }
    const color = () => {
        if (isDone) {
            return 'gray'
        } else if (isPast(new Date(planned_at), new Date())) {
            return 'red'
        } else {
            return 'initial'
        }
    }
    return (
        <ListItemButton
            sx={{ pl: 4 }}
            key={id}
            onClick={() => {
                handleItemClick(question_id)
            }}>
            <ListItemText
                primary={workbook_name + ' ' + question_number}
                sx={{
                    textDecoration: isDone ? 'line-through' : 'none',
                    color: color,
                }}
            />
        </ListItemButton>
    )
}
export default TodoListItem
