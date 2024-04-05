'use client'
import styled from '@emotion/styled'

export const SettingsCardHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray[700]}`};
    `

export const SettingsCardTitleContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SettingsCardTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: ${({ theme }) => theme.primary.contrastText};
`