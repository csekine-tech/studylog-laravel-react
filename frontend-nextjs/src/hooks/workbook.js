import axios from '@/lib/axios'
import { useRouter } from 'next/router'

export const useWorkbook = ({} = {}) => {
    const router = useRouter()

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    const getWorkbookList = async ({ setWorkbookList }) => {
        await csrf()
        axios
            .get('/api/workbooklist')
            .then(res => {
                setWorkbookList(res.data.workbookList)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }
    const getWorkbookSubjectRelations = async ({
        setWorkbookSubjectRelations,
    }) => {
        await csrf()
        axios
            .get('/api/workbook_subject')
            .then(res => {
                setWorkbookSubjectRelations(res.data.workbook_subject_relations)
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const storeWorkbook = async workbook => {
        await csrf()
        axios
            .post('/api/workbook/store', workbook)
            .then(res => {
                res.data
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    const destroyWorkbook = async id => {
        await csrf()
        axios
            .post(`/api/workbook/destroy/${id}`)
            .then(res => {
                res.data
            })
            .catch(error => {
                if (error.response.status !== 422) throw error

                setErrors(Object.values(error.response.data.errors).flat())
            })
    }

    return {
        getWorkbookList,
        getWorkbookSubjectRelations,
        storeWorkbook,
        destroyWorkbook,
    }
}
