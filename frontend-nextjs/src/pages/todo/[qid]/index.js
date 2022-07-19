import { useRouter } from 'next/router'
import BasicLayout from "@/components/Layouts/BasicLayout"
import Content from '@/components/Layouts/BasicLayout/Drawer/Content'


const TodoDetail = () => {
    const router = useRouter()
    const qid = Number(router.query.qid)
    return <BasicLayout><Content /></BasicLayout>
}


export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    qid: '1',
                },
            },
            {
                params: {
                    qid: '101',
                },
            },
            {
                params: {
                    qid: '102',
                },
            },
            {
                params: {
                    qid: '103',
                },
            },
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const id = context.params.qid

    return {
        props: {},
    }
}


export default TodoDetail
