'use client'
import device from '@/helpers/devices'
import styled from '@emotion/styled'

export const HeaderTemplateContainer = styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 60px;
    
    @media ${device.tablet} {
        width: 100vw;
        position: absolute;
        left: 0;
        padding: 30px 20px;
    }
`

export const HeaderSides = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const HeaderTitle = styled.h1`
    color: ${({ theme }) => theme.primary.contrastText};
    font-size: 35px;
    @media ${device.phone} {
        font-size: 30px;
    }
`

export const HeaderLeftItems = styled(HeaderSides)``

export const HeaderRightItems = styled(HeaderSides)``