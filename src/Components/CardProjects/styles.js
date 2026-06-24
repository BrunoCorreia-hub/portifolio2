import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 3rem 0;
    background-color: ${({ theme }) => theme.colors.background.primary};
    gap: 3rem;
`;

export const CardProject = styled.div`
    border-radius: 2rem;
    border: 0.1rem solid ${({ theme }) => theme.colors.gray[600]};
    background-color: ${({ theme }) => theme.colors.gray[900]};
`;

export const CardImage = styled.div`

    img{
        width: 100%;
        border-top-right-radius: 2rem;
        border-top-left-radius: 2rem;
    }
`;

export const CardInfo = styled.div`
    padding: 1rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
`;

export const CardTecnologies = styled.div`
    display: flex;
    gap: 0.7rem;
    flex-wrap: wrap;
    span{
        border: 0.1rem solid ${({ theme }) => theme.colors.gray[600]};
        padding: 0.5rem 0.9rem;
        border-radius: 2rem;
        text-align: center;
        color: ${({ theme }) => theme.colors.text.primary};
        background-color: ${({ theme }) => theme.colors.background.primary};
        white-space: nowrap;
    }
`;

export const CardText = styled.div`
    margin-top: 1rem;
    h1{
        color: ${({ theme }) => theme.colors.text.primary};
    }
    p{
        margin-top: 0.5rem;
        color: ${({ theme }) => theme.colors.gray[400]};
        font-size: 1.5rem;
    }
`;

export const CardGit = styled.div`
    padding: 1.5rem 0;
    display: flex;
    gap: 1.5rem;

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary[600]};
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: 7rem;

        &:hover{
            color: ${({ theme }) => theme.colors.primary[800]};
        }
    }
`;