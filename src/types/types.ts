import { ReactNode } from "react"

import { FormActions } from "../contexts/formContext"

export type StateProps = {
    currentStep: number,
    name: string,
    level: number,
    email: string,
    github: string
}

export type Action = { type: FormActions, payload: any }

export type ContextProps = {
    state: StateProps,
    dispatch: (actions: Action) => void
}

export type AppContextProps = {
    children: ReactNode
}