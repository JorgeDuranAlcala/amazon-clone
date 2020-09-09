import React from 'react'
import { createContext, useContext, useReducer } from "react";

export const ContextState = createContext()


export const StateProvider = ({children, initialState, reducer}) => {
    return (
        <ContextState.Provider value={useReducer(reducer, initialState)} >
            {children}
        </ContextState.Provider>
    )
}

export const useStateValue = () => useContext(ContextState)