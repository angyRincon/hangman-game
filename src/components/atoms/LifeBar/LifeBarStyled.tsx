'use client'
import device from '@/helpers/devices'
import styled from '@emotion/styled'

export const LifeBarContainer = styled.div`
    background-color: white;
    padding: 5px 7px; 
    border-radius: 40px;
    width: 300px;
    border-radius: 8px;

    @media ${device.tablet} {
        width: 200px;
        padding: 3px 5px; 
    }
    
    @media ${device.phone} {
        width: 130px;
        padding: 3px 5px; 
    }
`

export const LifeBarItem = styled.div<{ $value: number }>`
    background-color: ${({theme}) => theme.primary.main};
    border-radius: 4px;
    height: 10px;
    width: ${({ $value }) =>`calc(100% - ${$value}%)`};

`