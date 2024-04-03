'use client'
import styled from '@emotion/styled'
import Link from 'next/link'

export const CategoryItemContainer = styled(Link)`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    transition: background-color 0.5s;
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 600;
    color: #fff;

    &:hover {
        
    }
`