import { useState, forwardRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useRef } from 'react'
import Button from '@mui/material/Button'
// import { workbookInfo, workbookList } from '@/data/workbook/workbooks'
import { useSubject } from '@/hooks/subject'
import Loading from '@/components/ui/Loading'
import { useWorkbook } from '@/hooks/workbook'

const WorkbookForm = () => {
    let rightContentData, rightContent

    const [workbookList, setWorkbookList] = useState([])
    const { getWorkbookList, storeWorkbook, destroyWorkbook } = useWorkbook()
    const [filtering, setFiltering] = useState(false)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const path = router.pathname
    const id = Number(router.query.id)
    rightContent = path === '/library/[id]/edit' ? id : null


    const [subjectList, setSubjectList] = useState([])
    const { getSubjectList } = useSubject()

    useEffect(() => {
        getSubjectList({ setSubjectList })
        getWorkbookList({ setWorkbookList })
    }, [])

    useEffect(() => {
        if (id) {
            subjectList.length !== 0 && workbookList.length !== 0
                ? setLoading(false)
                : ''
        } else {
            subjectList.length !== 0 ? setLoading(false) : ''
        }

        workbookList.length !== 0 &&
            workbookList.forEach(workbook => {
                if (workbook.id === id) {
                    rightContentData = workbook
                }
            })
        setSubjectInputState(
            rightContentData ? rightContentData.subject_name : '',
        )
        setWorkbookNameInputState(rightContentData ? rightContentData.name : '')
        setWorkbookCountInputState(
            rightContentData ? rightContentData.count : '',
        )
    }, [subjectList, workbookList])

    const [subjectInputState, setSubjectInputState] = useState(
        rightContentData ? rightContentData.subject_name : '',
    )
    const [workbookNameInputState, setWorkbookNameInputState] = useState(
        rightContentData ? rightContentData.name : '',
    )
    const [workbookCountInputState, setWorkbookCountInputState] = useState(
        rightContentData ? rightContentData.count : '',
    )

    const subjectInputChangeHandler = e => {
        e.preventDefault()
        setSubjectInputState(e.target.value)
    }
    const workbookNameInputChangeHandler = e => {
        e.preventDefault()
        setWorkbookNameInputState(e.target.value)
    }
    const workbookCountInputChangeHandler = e => {
        e.preventDefault()
        setWorkbookCountInputState(e.target.value)
    }

    const submitHandler = async e => {
        e.preventDefault()
        storeWorkbook({
            name: workbookNameInputState,
            count: workbookCountInputState,
            subject_name: subjectInputState,
        })
        getWorkbookList({ setWorkbookList })
    }

    const workbookDestroyHandler = async e => {
        alert('関連するTodoも削除されます。本当に削除してよろしいですか？')
        destroyWorkbook(id)
        router.push('/library')
        getWorkbookList({ setWorkbookList })
    }

    const filledContent = (
        <>
            {
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-basic"
                                label="問題数"
                                variant="outlined"
                                value={
                                    rightContentData
                                        ? rightContentData.count
                                        : ''
                                }
                            />
                        </Grid>
                    </Grid>
                </Grid>
            }
        </>
    )
    const unfilledContent = (
        <>
            <Grid item xs={12}>
                <TextField id="count" label="問題数" variant="outlined" />
            </Grid>
        </>
    )

    return (
        <>
            {loading ? (
                <Loading size="full" />
            ) : (
                <form onSubmit={submitHandler}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <FormControl fullWidth>
                                <InputLabel id="subject-label">科目</InputLabel>
                                <Select
                                    labelId="subject-label"
                                    id="subject"
                                    // ref={subjectInputRef}
                                    label="科目"
                                    value={subjectInputState}
                                    onChange={subjectInputChangeHandler}>
                                    {subjectList.map(subject => {
                                        return (
                                            <MenuItem
                                                value={subject}
                                                key={subject}>
                                                {subject}
                                            </MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="workbook_name"
                                label="教材名"
                                value={workbookNameInputState}
                                onChange={workbookNameInputChangeHandler}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="count"
                                        label="問題数"
                                        variant="outlined"
                                        value={workbookCountInputState}
                                        onChange={
                                            workbookCountInputChangeHandler
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                size="large"
                                type="submit">
                                登録
                            </Button>
                            <Button
                                variant="contained"
                                size="large"
                                onClick={workbookDestroyHandler}>
                                削除
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        </>
    )
}
export default WorkbookForm
