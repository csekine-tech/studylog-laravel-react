import Divider from '@mui/material/Divider'
import Lists from './Lists'
import { useRouter } from 'next/router'

const Left = () => {

    const router = useRouter()
    const path = router.pathname
    const parentPath = path.split('/')[1]

    return (
        <>
            {(parentPath === 'todo' || parentPath === 'library') && (
                <>
                    <Lists />
                    <Divider />
                </>
            )}
        </>
    )
}
export default Left
