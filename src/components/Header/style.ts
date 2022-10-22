import styled from 'styled-components';

export const Header  = styled.header`
    padding: 25px 0;
    border-bottom: 1px solid #16195c;

    h1{
        font-size: 28px;

        @media (max-width: 701px) {
        text-align: center;
        font: 1rem;
        padding: 10px;
        
    }
    }

    p{
        font-size: 14px;
        color: #b8b8d4;

        @media (max-width: 701px) {
        text-align: center;
        font: .7rem;
        padding: 10px;
        
    }
    }
`;