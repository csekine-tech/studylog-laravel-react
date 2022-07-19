import React from 'react'
import { isRightOpenProvider } from '@/store/isrightopen-context'

const IsRightOpenLayout = ({ children }) => {
    return <isRightOpenProvider>{children}</isRightOpenProvider>
}

export default IsRightOpenLayout
