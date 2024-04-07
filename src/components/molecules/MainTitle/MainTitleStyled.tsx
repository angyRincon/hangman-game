'use client'
import styled from '@emotion/styled'

export const MainTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: flex-start;
    padding: 0 30px;
`

export const ManinText = styled.h1`
    color: ${({theme}) => theme.primary.contrastText};
    font-size: 50px;
    margin-top: -10px;
    font-weight: 700;
`

export const SmallText = styled.p`
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 700;
    color: ${({theme}) => theme.primary.contrastText};
    margin-left: 30px;
`

export const SmallBottomText = styled(SmallText)`
    margin-left: 100px;
`