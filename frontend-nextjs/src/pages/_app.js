// import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'
import BasicLayout from '@/components/Layouts/BasicLayout'

const App = ({ Component, pageProps }) => {
    const { user } = useAuth({})
    return (
        <>
            <Head>
                <title>Study Log</title>
            </Head>

            {!user && <GuestLayout>TOPページ（ゲストレイアウト）</GuestLayout>}

            {user && (
                <BasicLayout>
                    <Component {...pageProps} />
                </BasicLayout>
            )}
        </>
    )
}

export default App
