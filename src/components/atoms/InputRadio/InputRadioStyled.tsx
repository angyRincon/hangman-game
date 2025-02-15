'use client'
import { getFontFamily } from '@/app/GlobalStyles'
import { FontFamilyType } from '@/types/settings'
import styled from '@emotion/styled'

export const InputRadioSpan = styled.span`
    position: absolute;
    top: 5px;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: ${({theme}) => theme.colors.gray[300]};
    border-radius: 50%;

    &:after {
        content: "";
        position: absolute;
        display: none;
        top: 4px;
        left: 4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.gray[50]};
}
`
export const InputRadioItem = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;

    &:checked ~ ${InputRadioSpan} {
        background-color: ${({ theme }) => theme.secondary.main};
        &:after {
            display: block;
        }
    }
`

export const InputRadioLabel = styled.label<{ $labelStyle: FontFamilyType | undefined }>`
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 18px;
    font-family: ${({ $labelStyle }) => $labelStyle ? getFontFamily($labelStyle) : 'inherit'};
    font-weight: 500;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${({ theme }) => theme.primary.contrastText};

    &:hover {
        ${InputRadioItem} ~ ${InputRadioSpan} {
            background-color: ${({ theme }) => theme.colors.gray[300]};
        }
    }
`