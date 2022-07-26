import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Nav from './BasicLayout/Nav'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100">
            <Nav />

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            <main>{children}</main>
        </div>
    )
}

export default AppLayout
