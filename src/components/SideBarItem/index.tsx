import * as S from './style'

import { Link } from "react-router-dom"
import  ProfileIcon  from "../../svgs/profile.svg"
import  BookIcon  from "../../svgs/book.svg"
import  MailIcon  from "../../svgs/mail.svg"

type Props = {
    title: string,
    description: string,
    icon: string,
    path: string,
    active: boolean
}

export const SideBarItem = ({ description, icon, path, title, active }: Props) => { 

    return (
        <S.Conteiner role={'button'}>
            <Link to={path}>
                <S.Info>
                    <S.Title>{title}</S.Title>
                    <S.Description>{description}</S.Description>
                </S.Info>
                <S.IconArea active={active}>
                    {icon === 'profile' && 
                        <img src={ProfileIcon} alt={icon} />
                    }
                    {icon === 'book' && 
                        <img src={BookIcon} alt={icon} />
                    }
                    {icon === 'mail' && 
                        <img src={MailIcon} alt={icon} />
                    }
                </S.IconArea>
                <S.Point active={active}></S.Point>
            </Link>
        </S.Conteiner>
    )
}