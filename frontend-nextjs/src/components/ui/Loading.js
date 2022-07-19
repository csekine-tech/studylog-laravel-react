import React from 'react'
import ReactLoading from 'react-loading'
import { Box } from '@mui/material'

const Loading = ({ size, color = '#777777' }) => {
    const styles =
        size === 'full'
            ? {
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '80vh',
              }
            : { margin: '10px' }
    return (
        <Box style={styles}>
            <ReactLoading type={'spin'} color={color} height={20} width={20} />
        </Box>
    )
}

export default Loading
