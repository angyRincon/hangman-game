'use client'
import device from '@/helpers/devices'
import styled from '@emotion/styled'

export const AlphabetListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(9, minmax(0, 60px));
    padding: 0 0 20px 0;
    width: 100%;
    gap: 20px;
    place-content: center;

    @media ${device.tablet} {
        grid-template-columns: repeat(9, minmax(38px, 60px));
        gap: 15px;
    }

    @media ${device.phone} {
        grid-template-columns: repeat(5, minmax(10px, 60px));
        gap: 10px;
    }
`