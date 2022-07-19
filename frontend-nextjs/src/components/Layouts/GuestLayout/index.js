import Nav from '@/components/Layouts/BasicLayout/Nav'
import { styled } from '@mui/material/styles'
import SimpleContainer from '../../ui/Container'
import { Box } from '@mui/system'

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Nav />
            <div>
                <Box component="main" sx={{ p: 3 }}>
                    <SimpleContainer>
                        {children}</SimpleContainer>
                </Box>
            </div>
        </div>
    )
}


export default GuestLayout
