import styled from "styled-components";

export const ContainerStack = styled.div`
    background-color: ${({ theme }) => theme.colors.gray[900]};
    padding: 4rem;
`;

export const GridText = styled.div``;

export const SubTitle = styled.h2`
    color: ${({ theme }) => theme.colors.primary[600]};
    font-size: 2rem;
    margin-bottom: 1rem;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 0.7rem;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.gray[200]};
    font-weight: 600;
    font-size: 1.5rem;
    margin-bottom: 3rem;
`;

export const GridStack = styled.div`
    padding: 1.5rem;
`;