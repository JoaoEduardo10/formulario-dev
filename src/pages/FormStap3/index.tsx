import * as S from './style'
import { Theme } from '../../components/Theme'
import { useNavigate, Link } from 'react-router-dom'

import { useForm, FormActions } from '../../contexts/formContext'
import { useEffect } from 'react'


export const FormStap3 = () => {
    const navegate = useNavigate()
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name == ""){
            navegate('/')
        } else {
            dispatch({ type: FormActions.setCurrentStep, payload: 3 })
        }
    }, [])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: FormActions.setEmail, payload: e.target.value })
    }

    const handleGitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: FormActions.setGithub, payload: e.target.value })
    }

    const handleNextStep = () => {
        if(state.email === "" || state.github === ""){
            alert('Preencha todos os campos')
            return;
        }
        
        window.location.reload()
    }

    return (
        <Theme>
            <S.Conteiner>
                <p>Passo 3/3</p>
                <h1>Legal {state.name} onde te achamos?</h1>
                <p>Preencha com o seus dados de contato.</p>

                <hr />

                <label>
                    Qual o seu email?
                    <input 
                        type="email"  
                        autoFocus
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual o seu email?
                    <input 
                        type={'url'}  
                        value={state.github}
                        onChange={handleGitChange}
                    />
                </label>

                <Link className='backButton' to={'/step2'}>Voltar</Link>
                <button onClick={handleNextStep}>Finalizar cadastro</button>
            </S.Conteiner>
        </Theme>
        
    )
}