import useSWR from 'swr'
import axios from '@/lib/axios'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from './auth'

export const useSubject = ({} = {}) => {
    const router = useRouter()

    // const { data, error, mutate } = useSWR('/api/subjects', () =>
    //     axios
    //         .get('/api/subjects')
    //         .then(res => {
    //             res.data
    //         })
    //         .catch(error => {
    //             if (error.response.status !== 409) throw error

    //         }),
    // )

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    // const register = async ({ setErrors, ...props }) => {
    //     await csrf()

    //     setErrors([])

    //     axios
    //         .post('/register', props)
    //         .then(() => mutate())
    //         .catch(error => {
    //             if (error.response.status !== 422) throw error

    //             setErrors(Object.values(error.response.data.errors).flat())
    //         })
    // }
    const getSubjectList = async ({ setSubjectList }) => {
        await csrf()
        // setErrors([])
        axios
            .get('/api/subjects')
            .then(res => {
                const subjects = res.data.subjects
                let subjectList = []
                Object.keys(subjects).forEach(key => {
                    subjectList.push(subjects[key].name)
                })
                setSubjectList(subjectList)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }
    return {
        getSubjectList,
    }
}
