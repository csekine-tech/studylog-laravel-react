import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
// import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { TextField } from '@mui/material'
import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Checkbox from '@mui/material/Checkbox'
import Loading from '@/components/ui/Loading'

const Login = () => {
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/todo',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    useEffect(() => {
        if (errors.length !== 0) {
            setLoading(false)
        }
    }, [errors])

    const submitForm = async event => {
        event.preventDefault()
        setLoading(true)
        login({ email, password, setErrors, setStatus })
    }
    const submitHandler = () => {}

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            {/* <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" /> */}
                        </a>
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Eメール"
                                value={email}
                                type="email"
                                onChange={event => setEmail(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="パスワード"
                                value={password}
                                type="password"
                                onChange={event =>
                                    setPassword(event.target.value)
                                }
                            />
                        </Grid>

                        <Grid item xs={12} sx={{ marginLeft: '10px' }}>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="ログイン情報を記憶する"
                            />
                            {/* </div> */}
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Button
                                fullWidth
                                variant="contained"
                                size="large"
                                type="submit">
                                {loading ? (
                                    <Loading color="white" />
                                ) : (
                                    'ログイン'
                                )}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
