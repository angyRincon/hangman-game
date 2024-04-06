'use client'
import { SvgWrapper } from '@/components/Icons/IconStyled'
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
    box-shadow: ${({theme}) => theme.buttonShadow};
    margin-top: 10px;
    margin-bottom: 20px;
    transition: background .3s, scale .2s;
    &:hover {
        transform: scale(1.02);
        background-color: ${({theme}) => theme.secondary.contrastText};
        ${SvgWrapper} {
            fill: ${({theme}) => theme.secondary.main}
        }
    }
`