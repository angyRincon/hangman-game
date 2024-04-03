'use client'
import styled from '@emotion/styled'

type SvgIconSize = 'small' | 'medium' | 'large'

export interface SvgIconProps {
    size?: SvgIconSize
}

export const iconSize = (size: SvgIconSize = 'medium') => {
    switch (size) {
        case "small": return '16px'
        case "medium": return '24px'
        case "large": return '36px'
        default: return '18px'
    }
}

export const SvgWrapper = styled.svg``