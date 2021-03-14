import React from 'react'
import { createContext, useContext, useReducer } from "react";
import { ThemeProvider, createMuiTheme } from '@material-ui/core'

export const ContextState = createContext()

const theme = createMuiTheme({
    
})

export const StateProvider = ({children, initialState, reducer}) => {
    return (
        <ContextState.Provider value={useReducer(reducer, initialState)} >
            <ThemeProvider theme={theme} >
                {children}
            </ThemeProvider>
        </ContextState.Provider>
    )
}

export const useStateValue = () => useContext(ContextState)