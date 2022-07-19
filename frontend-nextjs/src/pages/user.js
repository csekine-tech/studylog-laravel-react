import AuthValidationErrors from '@/components/AuthValidationErrors'
import Container from '@/components/ui/Container'
import BasicLayout from '@/components/Layouts/BasicLayout'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { TextField } from '@mui/material'
import Loading from '@/components/ui/Loading'

const User = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const { user } = useAuth({ middleware: 'auth' })
    const { update } = useAuth({
        middleware: 'auth',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    useEffect(() => {
        setLoading(user ? false : true)
        setName(user ? user.name : '')
        setEmail(user ? user.email : '')
    }, [user])

    const submitForm = async event => {
        event.preventDefault()

        update({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }
    return (
        <>
            <BasicLayout>
                <Container>
                    <Typography variant="h4" component="div">
                        ユーザー情報
                    </Typography>
                    {loading ? (
                        <Loading size="full"/>
                    ) : (
                        <Box sx={{ my: 3 }}>
                            <AuthValidationErrors
                                className="mb-4"
                                errors={errors}
                            />
                            <form onSubmit={submitForm}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="お名前"
                                            value={name}
                                            type="text"
                                            onChange={event =>
                                                setName(event.target.value)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="Eメール"
                                            value={email}
                                            type="email"
                                            // disabled
                                            onChange={event =>
                                                setEmail(event.target.value)
                                            }
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
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            required
                                            label="パスワード（再入力）"
                                            value={passwordConfirmation}
                                            type="password"
                                            onChange={event =>
                                                setPasswordConfirmation(
                                                    event.target.value,
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            size="large"
                                            type="submit">
                                            変更する
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Box>
                    )}
                </Container>
            </BasicLayout>
        </>
    )
}
export default User
