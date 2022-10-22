import styled from 'styled-components';

export const Conteiner  = styled.div`
    margin: 30px 0;
    cursor: pointer;


    a{
        display: flex;
        align-items: center;
        text-decoration: none;

        @media (max-width: 701px) {
        display: flex;
        flex-direction: column;
        width: 30vw;
        align-items: center;
    }

    @media (max-width: 701px) {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
    }

    

}

`;

export const Info  = styled.section`
    flex: 1;
    margin-right: 20px;
`;

export const Title  = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #fff;
`;

export const Description  = styled.div`
    text-align: right;
    font-size: 13px;
    color: #b8b8d4;
`;


export const IconArea  = styled.div<{ active: boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.active? '#25cd89': '#494a7c'};
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        color: #fff;
        width: 24px;
        height: 24px;
    }
`;

export const Point  = styled.div<{ active: boolean }>`
    width: 13px;
    height: 13px;
    border: 3px solid #494a7c;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.active? '#25cd89': "#02044a"};

    @media (max-width: 701px) {
        display: none;
    }
`;