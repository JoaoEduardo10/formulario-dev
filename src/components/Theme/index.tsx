import * as S from './style'
import { AppContextProps } from '../../types/types'

import { Header } from '../Header'
import { SideBarItem } from '../SideBarItem'

import { useForm } from '../../contexts/formContext'

export const Theme = ({ children }: AppContextProps) => {

    const { state } = useForm()

    return (
        <S.Conteiner>
            <S.Area>
                <Header />
                <S.Steps>
                    <S.Sidebar>
                        <SideBarItem 
                            title='Pessoal'
                            description='Se indentifique'
                            icon='profile'
                            path ='/'
                            active={state.currentStep === 1}
                        />

                        <SideBarItem 
                            title='Proficional'
                            description='Seu nivel'
                            icon='book'
                            path ='/step2'
                            active={state.currentStep === 2}
                        />

                        <SideBarItem 
                            title='Contatos'
                            description='Como te achar'
                            icon='mail'
                            path ='/step3'
                            active={state.currentStep === 3}
                        />
                    </S.Sidebar>
                    <S.Page>
                        {children}
                    </S.Page>
                </S.Steps>
            </S.Area>
        </S.Conteiner>
    )
}