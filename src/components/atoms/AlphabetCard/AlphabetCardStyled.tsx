import styled from '@emotion/styled'

export const AlphabetCardButton = styled.button`
    background-color: #e8f1ff;
    color: #131b9c;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: none;
    font-weight: 600;
    font-size: 20px;
    transition: .5s;
    
    &:hover:not(:disabled) {
        cursor: pointer;
        background-color: #e1ebff;
    }

    &:disabled{
        opacity: 0.5;
        cursor: auto;
    }
`