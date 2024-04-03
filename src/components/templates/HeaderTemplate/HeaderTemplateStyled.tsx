'use client'
import styled from '@emotion/styled'

export const HeaderTemplateContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
`

const HeaderSides = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const HeaderTitle = styled.h1`
    color: #FFF;
    font-size: 30px;
`

export const HeaderLeftItems = styled(HeaderSides)``

export const HeaderRightItems = styled(HeaderSides)``