import * as S from './style'

type Props = {
    title: string,
    description: string,
    icon: string
    selectd: boolean
    onclick: () => void
}

export const SelecOption = ({ description, icon, title, selectd, onclick }: Props) => {
    return (
        <S.Conteiner selectd={selectd} role={'button'} onClick={onclick}>
            <S.Icon>{icon}</S.Icon>
            <S.Info>
                <S.Title>
                    {title}
                </S.Title>
                <S.Description>
                    {description}
                </S.Description>
            </S.Info>
        </S.Conteiner>
    )
}