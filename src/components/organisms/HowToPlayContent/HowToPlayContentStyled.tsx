import { PageContainer } from '@/app/PageStyled'
import device from '@/helpers/devices'
import styled from '@emotion/styled'

export const HowToPlayContentWrapper = styled(PageContainer)`
     @media ${device.tablet} {
        height: unset;
    }
`

export const HowToPlayContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 400px));
    height: 350px;
    gap: 20px;
    
    @media ${device.tablet} {
        grid-template-columns: repeat(2, minmax(100px, 350px));
        height: 100%;
    }

    @media ${device.tablet} {
        grid-template-columns: minmax(100px, 350px);
    }
`