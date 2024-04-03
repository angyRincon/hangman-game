import styled from '@emotion/styled'

export const LetterCardItem = styled.div<{$isActive: boolean}>`
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 80px;
    font-size: 25px;
    font-weight: 600;
    background-color: ${({$isActive}) => $isActive ? '#000000' : '#5f5f5f83'};
    color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    margin: 0 5px;
`