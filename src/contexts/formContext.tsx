import {  useContext, useReducer } from "react";
import { Action, AppContextProps, StateProps } from "../types/types"
import { Context } from "./context";

import { initialData } from "./data"

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

const reducer = (state: StateProps, action: Action) => {
    switch (action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLevel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setGithub:
            return {...state, github: action.payload}
        default:
    }
    return {...state}
}

export const AppContext = ({ children }: AppContextProps) => {
    const [state, dispatch] = useReducer(reducer, initialData)
    const value = { state, dispatch }


    return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useForm = () => {
    const context = useContext(Context)
    if(context === undefined){
        throw new Error(`useForm precisa ser usado dentro do AppContext`)
    }

    return context;
}