import { useRouter } from 'next/router'
import BasicLayout from "@/components/Layouts/BasicLayout"
import Content from '@/components/Layouts/BasicLayout/Drawer/Content'


const TodoDetail = () => {
    const router = useRouter()
    const qid = Number(router.query.qid)
    return <BasicLayout><Content /></BasicLayout>
}

export default TodoDetail
