import { useRouter } from 'next/router'
import BasicLayout from '@/components/Layouts/BasicLayout'
import Content from '@/components/Layouts/BasicLayout/Drawer/Content'

const LibraryDetail = () => {
    const router = useRouter()
    const { id } = router.query
    return (
        <>
            <BasicLayout><Content /></BasicLayout>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    id: '5',
                },
            },
            {
                params: {
                    id: '3',
                },
            },
            {
                params: {
                    id: '4',
                },
            },
            {
                params: {
                    id: '2',
                },
            },
        ],
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const id = context.params.id

    return {
        props: {},
    }
}

export default LibraryDetail
