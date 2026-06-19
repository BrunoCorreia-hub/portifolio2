import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    padding: 3rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray[50]};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 99;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const GridLinks = styled.div`
    display: flex;
    gap: 4rem;

    a{
        color: ${({ theme }) => theme.colors.gray[100]};
        font-size: 2rem;
        text-decoration: none;

        &:hover{
            color: ${({ theme }) => theme.colors.text.primary};
        }
    }
`;