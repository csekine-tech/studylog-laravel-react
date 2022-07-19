import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import Link from 'next/link'

function Nav() {
    const router = useRouter()
    const path = router.pathname
    const { user } = useAuth({ middleware: 'guest' })
    const pushLoginHandler = () => {
        router.push('/login')
    }
    const pushRegisterHandler = () => {
        router.push('/register')
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
                    <Link href="/">
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}>
                            Study Log
                        </Typography>
                    </Link>
                    {!user && path !== '/login' && (
                        <Button color="inherit" onClick={pushLoginHandler}>
                            Login
                        </Button>
                    )}
                    {!user && path !== '/register' && (
                        <Button color="inherit" onClick={pushRegisterHandler}>
                            Register
                        </Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Nav
