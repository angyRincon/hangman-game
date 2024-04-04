'use client'
import styled from '@emotion/styled'

export const HeaderTemplateContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 60px;
`

const HeaderSides = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const HeaderTitle = styled.h1`
    color: ${({ theme }) => theme.primary.contrastText};
    font-size: 35px;
`

export const HeaderLeftItems = styled(HeaderSides)``

export const HeaderRightItems = styled(HeaderSides)``