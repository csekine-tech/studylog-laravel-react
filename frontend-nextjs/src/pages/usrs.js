import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import useSWR from 'swr'
import axios from '@/lib/axios'

const Users = () => {
    const { data: users, error } = useSWR('/api/users', () =>
        axios
            .get('/api/users')
            .then(res => res.data)
            .catch(error => {
                console.error(error)
            }),
    )

    if (error) return 'An error has occurred.'

    return (
        <AppLayout
            header={
                <h2
                    className="font-semibold text-xl text-gray-800 leading-tight">
                    Users
                </h2>
            }>
            <Head>
                <title>Laravel - Users</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <ul>
                                {users?.map(user => (
                                    <div key={user.id}>{user.name}</div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Users
