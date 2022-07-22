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
    const { getWorkbookList } = useWorkbook()
    const [filtering, setFiltering] = useState(false)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const path = router.pathname
    const id = Number(router.query.id)
    rightContent = path === '/library/[id]/edit' ? id : null

    useEffect(() => {}, [])

    const [subjectList, setSubjectList] = useState([])
    const { getSubjectList } = useSubject()

    useEffect(() => {
        getSubjectList({ setSubjectList })
        getWorkbookList({ setWorkbookList })

        console.log(workbookList)
    }, [])
    useEffect(() => {
        subjectList.length !== 0 && workbookList.length !== 0
            ? setLoading(false)
            : ''
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
    // const [sectionInputState, setSectionInputState] = useState(
    //     workbookList.section,
    // )

    // useEffect(() => {
    //     setSubjectInputState(rightContent ? rightContentData.subject_name : '')
    //     setWorkbookNameInputState(rightContent ? rightContentData.name : '')
    //     setSectionInputState(rightContent ? rightContentData.section : '')
    // }, [rightContent])

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
    // const sectionInputChangeHandler = e => {
    //     e.preventDefault()
    //     setSubjectInputState(e.target.value)
    // }
    const submitHandler = () => {}

    // const workbookSectionCount = rightContent
    //     ? rightContentData.structure.length
    //     : 0
    const filledContent = (
        <>
            {
                // rightContent && (
                // rightContentData.map(group => {
                //     return (
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {/* <Grid item xs={12}>
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
                                </Grid> */}
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
                                // ref={questionCountInputRef}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                // )
                //     )
                // })
            }
        </>
    )
    const unfilledContent = (
        <>
            {/* <Grid item xs={12}>
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
            </Grid> */}
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
            {loading ? (
                <Loading size="full" />
            ) : (
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
                                id="outlined-basic"
                                label="教材名"
                                value={workbookNameInputState}
                                onChange={workbookNameInputChangeHandler}
                                variant="outlined"
                                // ref={workbookNameInputRef}
                            />
                        </Grid>
                        {/* {rightContent !== null && filledContent} */}
                        {/* {rightContent === null && unfilledContent} */}
                        {/* {filledContent} */}
                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                {/* <Grid item xs={12}>
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
                                </Grid> */}
                                <Grid item xs={12}>
                                    <TextField
                                        id="outlined-basic"
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
                            <Button variant="contained" size="large">
                                登録
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        </>
    )
}
export default WorkbookForm
