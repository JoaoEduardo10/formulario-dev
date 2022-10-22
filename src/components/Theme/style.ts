import styled from 'styled-components';

export const Conteiner  = styled.div`
    background-color: #02044a;
    color: #fff;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: 0 auto;
    max-width: 980px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

`;

export const Steps = styled.div`
    flex: 1;
    display: flex;
    padding: 20px;

    @media (max-width: 701px) {
        flex-direction: column;
    }

`;

export const Sidebar = styled.nav`
    width: 250px;
    border-right: 1px solid #16195c;

    @media (max-width: 701px) {
        display: flex;
        border-bottom: 1px solid #16195c;
        border-right: none;
        width: 100%;
        justify-content: center;
        
    }
`;

export const Page = styled.section`
    flex: 1;
    padding-left: 40px;
    padding-top: 40px;

    @media (max-width: 701px) {
        padding: 0;
    }
    
`;