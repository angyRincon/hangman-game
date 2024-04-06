'use client'
import styled from '@emotion/styled'

export const HomeCardContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: minmax(100px, 400px);
    background-color: ${({ theme }) => theme.primary.main};
    place-items: center;
    min-height: 370px;
    border-radius: 20px;
    gap: 20px;
    padding: 20px 0 40px 0;
    box-shadow: ${({theme}) => theme.cardShadow};
`

export const HomeCardFooter = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`