import styled from "styled-components";

export const ContainerButton = styled.button`
    padding: 0.5rem 2rem;
    background-color: transparent;
    border: 0.1rem solid ${({ theme }) => theme.colors.text.secondary};
    border-radius: 0.7rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: bold;
    font-size: 1.3rem;
    transition: 0.5s ease;

    &:hover{
        transform: scale(1.05);
    }
`;