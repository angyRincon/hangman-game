'use client'
import styled from '@emotion/styled'

export const SettingsPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const SettingsPageContent = styled.div`
    display: grid;
    grid-template-columns: 500px;
    padding: 20px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.primary.main}
`

export const SettingsCardHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 10px 0;
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.gray[700]}`};
`

export const SettingsCardTitle = styled.h1`
    width: 100%;
    text-align: center;
    font-size: 28px;
    color: ${({ theme }) => theme.primary.contrastText};
`

export const SettingsCardContent = styled.div`
    padding: 20px 30px;
`