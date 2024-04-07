'use client'
import styled from '@emotion/styled'
import { PageContainer } from '../PageStyled'
import device from '@/helpers/devices'

export const CategoriesPageContainer = styled(PageContainer)`
    @media ${device.tablet} {
        height: unset;
    }
`

export const CategoriesPageContent = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 300px));
    gap: 20px;
    padding: 0 10px;
    
    @media ${device.tablet} {
        grid-template-columns: repeat(2, minmax(100px, 300px));
        padding: 30px 10px 0 10px;
    }
    
    @media ${device.phone} {
        grid-template-columns: repeat(2, minmax(100px, 300px));
    }
`