import styled from '@emotion/styled'

export const HowToPlayContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const HowToPlayContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 350px));
    height: 350px;
    gap: 20px;
`