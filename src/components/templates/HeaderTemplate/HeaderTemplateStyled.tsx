'use client'
import device from '@/helpers/devices'
import styled from '@emotion/styled'

export const HeaderTemplateContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 30px 60px;
    
    @media ${device.tablet} {
        width: 100%;
        position: relative;
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

export const HeaderRightItems = styled(HeaderSides)`
    text-align: right;
`