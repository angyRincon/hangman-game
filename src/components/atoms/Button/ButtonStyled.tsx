'use client'
import styled from '@emotion/styled'
import { ButtonVariantType } from './Button'
import { Theme, css } from '@emotion/react'
import { SvgWrapper } from '@/components/Icons/IconStyled'

export const buttonVariantStyle = (theme: Theme, variant: ButtonVariantType) => {
    if (variant === 'primary') {
        return css`
            background: ${theme.colors.gray[600]};
            color: ${theme.colors.gray[50]};
            &:hover {
                background: ${theme.colors.gray[50]};
                color: ${theme.colors.gray[600]};
                ${SvgWrapper} {
                    fill: ${theme.primary.main};
                }
        }`
    }
    if (variant === 'secondary') {
        return css`
            background: ${theme.secondary.main};
            color: ${theme.secondary.contrastText};
            &:hover {
                background: ${theme.secondary.contrastText};
                color: ${theme.secondary.main};
                ${SvgWrapper} {
                   fill: ${theme.secondary.main};
                }
            }
        `
    }
}

export const ButtonContainer = styled.button<{ $variant: ButtonVariantType }>`
    border: none;
    height: 45px;
    min-width: 100px;
    font-size: 18px;
    font-weight:500;
    padding: 0 20px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: background .3s;
    box-shadow: ${({ theme }) => theme.buttonShadow};
    ${({ theme, $variant }) => buttonVariantStyle(theme, $variant)}
`