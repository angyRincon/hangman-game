import styled from '@emotion/styled'

export const AlphabetCardButton = styled.button`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: none;
    font-weight: 700;
    font-size: 20px;
    transition: .5s;

    ${({theme}) => ({
        background: theme.primary.main,
        color: theme.primary.contrastText
    })}
    
    &:hover:not(:disabled) {
        cursor: pointer;
        background-color: #e1ebff;
    }

    &:disabled{
        opacity: 0.5;
        cursor: auto;
    }
`