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
    box-shadow: ${({theme}) => `rgba(0, 0, 0, 0.16) 0px 5px 15px`};
    background-color: ${({ theme }) => theme.primary.main};
`