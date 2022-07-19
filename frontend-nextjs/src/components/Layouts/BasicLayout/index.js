import Drawer from './Drawer'
import { useAuth } from '@/hooks/auth'
import { useRouter } from 'next/router'
import Content from '@/components/Layouts/BasicLayout/Drawer/Content'
import { styled, useTheme } from '@mui/material/styles'

import Nav from './Nav'

const BasicLayout = ({ children }) => {

    const router = useRouter()
    const { logout } = useAuth()
    const { user } = useAuth({ middleware: 'auth' })
    return (
        <>
                <Drawer>
                    {/* <Content /> */}
                    {children}
                </Drawer>
        </>
    )
}

export default BasicLayout
