'use client'
import device from '@/helpers/devices'
import styled from '@emotion/styled'
import Link from 'next/link'

export const CategoryItemContainer = styled(Link)`
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
    text-align: center;

    @media ${device.phone} {
        height: 150px;
        font-size:16px;
    }

    ${({theme}) => ({
        background: theme.primary.main,
        color: theme.primary.contrastText,
        '&:hover': {
            background: theme.secondary.main,
            color: theme.secondary.contrastText
        }
    })}

    
`