'use client'
import { BackgroundStyle } from '@/components/organisms/Background/BackgroundStyled'
import styled from '@emotion/styled'

export const CategoriesPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const CategoriesPageContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 20px;
`

export const CategoriesBackground = styled(BackgroundStyle)`
    top: -100px;
    opacity: 0.3;
`