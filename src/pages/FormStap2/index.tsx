import * as S from './style'
import { Theme } from '../../components/Theme'
import { useNavigate } from 'react-router-dom'

import { useForm, FormActions } from '../../contexts/formContext'
import { useEffect, useState } from 'react'
import { SelecOption } from '../../components/SelectOption'
import { Link } from 'react-router-dom'


export const FormStap2 = () => {
    const navegate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name ===""){
            navegate('/')
        } else {
            dispatch({ type: FormActions.setCurrentStep, payload: 2 })
        }
    }, [])

    const handleNextStep = () => {
        if(state.name){
            navegate('/step3')
        } else {
            alert('Adicione seu nome!')
        }
    }

    const setLevel = (level: number) => {
        dispatch({ type: FormActions.setLevel, payload: level })
    }

    return (
        <Theme>
            <S.Conteiner>
                <p>Passo 2/3</p>
                <h1>Olá {state.name}, o que melhor descreve voçê?</h1>
                <p>Escolha a melhor opção que condiz com seu estado atual, profissionalmente.</p>

                <hr />

                <SelecOption 
                    title='Sou iniciante'
                    description = 'Comecei a programar ha menos de 2 anos'
                    icon="🥳"
                    selectd={state.level == 0}
                    onclick = {() => setLevel(0)}
                />

                <SelecOption 
                    title='Sou programador'
                    description = 'Já programo ha dois anos ou mais'
                    icon="😎"
                    selectd={state.level == 1}
                    onclick = {() => setLevel(1)}
                />
                <Link className='backButton' to={'/'}>Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </S.Conteiner>
        </Theme>
        
    )
}