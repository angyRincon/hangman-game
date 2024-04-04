'use client'
import styled from '@emotion/styled'
import { ButtonVariantType } from './Button'
import { Theme } from '@emotion/react'

export const buttonVariantStyle = (theme: Theme, variant: ButtonVariantType) => {
    if (variant === 'primary') {
        return {
            color: theme.primary.main,
            background: theme.primary.contrastText,
            '&:hover': {
                color: theme.primary.contrastText,
                background: theme.colors.gray[800],
            }
        }
    }
    if (variant === 'secondary') {
        return {
            background: theme.secondary.main,
            color: theme.secondary.contrastText,
            '&:hover': {
                color: theme.secondary.contrastText,
                background: theme.colors.purple[400],
            }
        }
    }
}

export const ButtonContainer = styled.button<{ $variant: ButtonVariantType }>`
    border: none;
    height: 45px;
    min-width: 100px;
    font-size: 18px;
    padding: 0 20px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: background .3s;

    ${({ theme, $variant }) => buttonVariantStyle(theme, $variant)}
`