import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
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
