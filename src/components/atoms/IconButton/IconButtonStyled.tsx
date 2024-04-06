'use client'
import styled from '@emotion/styled'
import { IconButtonSize } from './IconButton'
import { buttonVariantStyle } from '../Button/ButtonStyled'
import { ButtonVariantType } from '../Button/Button'
import { SvgWrapper } from '@/components/Icons/IconStyled'

export const IconButtonContainer = styled.button<{ $size: IconButtonSize, $variant: ButtonVariantType }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.gray[600]};
    transition: transform 0.1s;
    outline: none;

    ${({ theme, $variant }) => buttonVariantStyle(theme, $variant)}

    ${({ $size }) => {
        if ($size === 'small') {
            return {
                width: '35px',
                height: '35px'
            }
        }

        if ($size === 'medium') {
            return {
                width: '50px',
                height: '50px'
            }
        }
    }}
    
    &:hover {
        transform: scale(1.03)
    }
`