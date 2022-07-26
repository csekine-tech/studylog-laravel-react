import { useRouter } from 'next/router'
import Content from '@/components/Layouts/BasicLayout/Drawer/Content'

const TodoDetail = () => {
    const router = useRouter()
    const qid = Number(router.query.qid)
    return <Content />
}

export default TodoDetail
