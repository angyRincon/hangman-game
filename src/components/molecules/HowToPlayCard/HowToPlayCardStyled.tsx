import styled from '@emotion/styled'

export const HowToPlayCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 4px;
    gap: 20px;

    ${({ theme }) => ({
        boxShadow: theme.cardShadow,
        background: theme.primary.main,
    })}
`

export const HowToPlayCardPosition = styled.h1`
    color: ${({ theme }) => theme.secondary.main};
    font-size: 50px;
    text-align: center;
    font-weight: 700;
`

export const HowToPlayCardTitle = styled.h2`
    color: ${({ theme }) => theme.primary.contrastText};
    font-size: 30px;
    text-align: center;
    font-weight: 600;
    
`

export const HowToPlayCardContent = styled.p`
    flex: 2;
    color: ${({ theme }) => theme.primary.contrastText};
    line-height: 30px;
    letter-spacing: 1px;
    font-size: 16px;
    text-align: center;
    
`