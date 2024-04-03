'use client'
import styled from '@emotion/styled'

export const LifeBarContainer = styled.div`
    background-color: white;
    padding: 5px; 
    border-radius: 40px;
    width: 300px;
    border-radius: 8px;
`

export const LifeBarItem = styled.div<{ $value: number }>`
    background-color: #000000;;
    border-radius: 4px;
    height: 10px;
    width: ${({ $value }) =>`calc(100% - ${$value}%)`};

`