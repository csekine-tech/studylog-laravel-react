import Head from 'next/head'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import GuestLayout from '@/components/Layouts/GuestLayout'
import BasicLayout from '@/components/Layouts/BasicLayout'
// import { useWorkbook } from '@/hooks/workbook'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    // const [workbookList, setWorkbookList] = useState([])
    // const { getWorkbookList } = useWorkbook()
    // getWorkbookList({setWorkbookList});


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
