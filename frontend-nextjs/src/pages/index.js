import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'
import BasicLayout from '@/components/Layouts/BasicLayout'


export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })


    return (
        <>
            <Head>
                <title>Study Log</title>
            </Head>
            {!user && <GuestLayout>TOPページ（ゲストレイアウト）</GuestLayout>}
            {user && (
                <BasicLayout>
                    <p>top</p>
                </BasicLayout>
            )}
        </>
    )
}
