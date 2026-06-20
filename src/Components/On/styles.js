import styled from "styled-components";

export const ContainerMain = styled.main`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 13rem;
    padding-bottom: 3rem;
    background-color: ${({ theme }) => theme.colors.gray[800]};
`;

export const ContainerInfo = styled.div`
    padding: 2rem;
    width: 50rem;

    p{
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: 2rem;
    }
`;

export const Grid = styled.div`
    padding: 0.5rem;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.primary[100]};
    width: 15rem;
    border-radius: 2rem;
    color: ${({ theme }) => theme.colors.primary[800]};
    border: 0.1rem solid ${({ theme }) => theme.colors.primary[800]};
    margin-bottom: 2rem;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 3rem;
    margin-bottom: 3rem;

    span{
        color: ${({ theme }) => theme.colors.primary[600]};
    }
`;

export const ContainerButton = styled.div`
    margin-top: 2rem;
    display: flex;
    gap: 3rem;
    padding: 2rem 0;
`;

export const ContainerImg = styled.div``;

export const Image = styled.img`
    width: 30rem;
    height: auto;
    transition: transform 0.4s ease, filter 0.4s ease;

    &:hover{
        transform: scale(1.03) translateY(-4px);
        filter: brightness(1.05);
    }
`;