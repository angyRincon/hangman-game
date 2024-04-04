'use client'
import styled from '@emotion/styled'
import Link from 'next/link'

export const PlayButtonContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.secondary.main};
    transition: transform 0.1s;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    margin-top: 10px;
    margin-bottom: 20px;

    &:hover {
        transform: scale(1.02)
    }
`