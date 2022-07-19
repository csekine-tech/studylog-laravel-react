import React, { useState, createContext, useContext } from 'react'

const isRightOpenContext = createContext({
    isRightOpen: '',
    setIsRightOpen: () => {},
    rightContent: '',
    setRightContent: () => {},
    rightContentData: {},
    setRightContentData: () => {},
})

const IsRightOpenProvider = ({ children }) => {
    const [isRightOpen, setIsRightOpen] = useState(false)
    const [rightContent, setRightContent] = useState(null)
    const [rightContentData, setRightContentData] = useState(null)

    return (
        <isRightOpenContext.Provider
            value={{
                isRightOpen,
                setIsRightOpen,
                rightContent,
                setRightContent,
                rightContentData,
                setRightContentData,
            }}>
            {children}
        </isRightOpenContext.Provider>
    )
}

const useIsRightOpenContext = () => useContext(isRightOpenContext)

export { IsRightOpenProvider, useIsRightOpenContext }
