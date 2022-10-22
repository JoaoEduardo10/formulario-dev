import * as S from './style'
import { Theme } from '../../components/Theme'
import { useNavigate } from 'react-router-dom'

import { useForm, FormActions } from '../../contexts/formContext'
import { useEffect } from 'react'


export const FormStap1 = () => {
    const navegate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({ type: FormActions.setCurrentStep, payload: 1 })
    }, [])

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: FormActions.setName, payload: e.target.value })
    }

    const handleNextStep = () => {
        if(state.name){
            navegate('/step2')
        } else {
            alert('Adicione seu nome!')
        }

        

    }

    return (
        <Theme>
            <S.Conteiner>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha o campo a baixo com seu nome Completo.</p>

                <hr />

                <label>
                    Seu nome completo
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </S.Conteiner>
        </Theme>
        
    )
}