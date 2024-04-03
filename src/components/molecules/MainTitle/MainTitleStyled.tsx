'use client'
import styled from '@emotion/styled'

export const MainTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: -100px;
`

export const ManinText = styled.h1`
    color: ${({theme}) => theme.colors.gray[900]};
    font-size: 50px;
    margin-top: -15px;
    font-weight: 700;
`

export const SmallText = styled.p`
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 700;
    color: ${({theme}) => theme.colors.gray[900]};
    margin-left: 30px;
    `

export const SmallBottomText = styled(SmallText)`
    text-align: right;
    margin-top: -10px;
    margin-right: 30px;
    margin-left: unset;
`