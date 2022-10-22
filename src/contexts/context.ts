import { ContextProps } from '../types/types'
import { createContext } from 'react'

export const Context = createContext<ContextProps | undefined>(undefined)