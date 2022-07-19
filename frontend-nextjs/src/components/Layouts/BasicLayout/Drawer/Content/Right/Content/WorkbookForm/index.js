import { useState, forwardRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Grid } from '@mui/material'
import SelectSubject from './SelectSubject'
// import TextField from './TextField'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useRef } from 'react'
import Button from '@mui/material/Button'
import { workbookInfo, workbookList } from '@/data/workbook/workbooks'
import { useIsRightOpenContext } from '@/store/isrightopen-context'
import { subjectList } from '@/data/subject/subject'

const WorkbookForm = () => {
    let rightContentData, rightContent

    const router = useRouter()
    const path = router.pathname
    const id = Number(router.query.id)
    rightContent = path === '/library/[id]/edit' ? id : null
    workbookList.forEach(workbook => {
        if (workbook.workbook_id === id) {
            rightContentData = workbook
        }
    })

    const [subjectInputState, setSubjectInputState] = useState(
        rightContent ? rightContentData.subject : '',
    )
    const [workbookNameInputState, setWorkbookNameInputState] = useState(
        rightContent ? rightContentData.workbook_name : '',
    )
    const [sectionInputState, setSectionInputState] = useState(
        rightContent ? rightContentData.section : '',
    )
    const [workbookStructureState, setWorkbookStructureState] = useState(
        rightContent ? rightContentData.structure : '',
    )
    const subjectInputRef = useRef()
    const workbookNameInputRef = useRef()
    const sectionInputRef = useRef()
    const questionCountInputRef = useRef()

    useEffect(() => {
        setSubjectInputState(rightContent ? rightContentData.subject : '')
        setWorkbookNameInputState(
            rightContent ? rightContentData.workbook_name : '',
        )
        setSectionInputState(rightContent ? rightContentData.section : '')
        setWorkbookStructureState(
            rightContent ? rightContentData.structure : '',
        )
    }, [rightContent])

    const subjectInputChangeHandler = e => {
        e.preventDefault()
        setSubjectInputState(e.target.value)
    }
    const workbookNameInputChangeHandler = e => {
        e.preventDefault()
        setWorkbookNameInputState(e.target.value)
    }
    const sectionInputChangeHandler = e => {
        e.preventDefault()
        setSubjectInputState(e.target.value)
    }
    const submitHandler = () => {}

    const workbookSectionCount = rightContent
        ? rightContentData.structure.length
        : 0
    const filledContent = (
        <>
            {workbookSectionCount !== 0 &&
                rightContentData.structure.map(group => {
                    return (
                        <Grid item xs={12} key={group.section}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select2-label">
                                            章
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select2-label"
                                            id="demo-simple-select2"
                                            // ref={sectionInputRef}
                                            label="章"
                                            value={group.section}
                                            onChange={
                                                sectionInputChangeHandler
                                            }>
                                            <MenuItem
                                                value={group.section}
                                                // key={group.section}
                                            >
                                                {group.section}
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-basic"
                                        label="問題数"
                                        variant="outlined"
                                        value={group.count}
                                        // ref={questionCountInputRef}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
        </>
    )
    const unfilledContent = (
        <>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select2-label">章</InputLabel>
                    <Select
                        labelId="demo-simple-select2-label"
                        id="demo-simple-select2"
                        // ref={sectionInputRef}
                        label="章"
                        onChange={sectionInputChangeHandler}>
                        <MenuItem value={0} key={0}>
                            なし
                        </MenuItem>
                        <MenuItem value={1} key={1}>
                            1
                        </MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="outlined-basic"
                    label="問題数"
                    variant="outlined"
                    // ref={questionCountInputRef}
                    // value={}
                    // onChange={}
                />
            </Grid>
        </>
    )

    return (
        <>
            <form onSubmit={submitHandler}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                科目
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // ref={subjectInputRef}
                                label="科目"
                                value={subjectInputState}
                                onChange={subjectInputChangeHandler}>
                                {subjectList.map(subject => {
                                    return (
                                        <MenuItem value={subject} key={subject}>
                                            {subject}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="outlined-basic"
                            label="教材名"
                            value={workbookNameInputState}
                            onChange={workbookNameInputChangeHandler}
                            variant="outlined"
                            // ref={workbookNameInputRef}
                        />
                    </Grid>
                    {rightContent !== null && filledContent}
                    {rightContent === null && unfilledContent}
                    <Grid item xs={12}>
                        <Button variant="contained" size="large">
                            登録
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
export default WorkbookForm
