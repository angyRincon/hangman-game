'use client'
import styled from '@emotion/styled'
import Image from 'next/image'

export const BackgroundStyle = styled(Image)`
    position: fixed;
    width: 100%;
    height: auto;
    z-index: -1;
`

export const MountainsImage = styled(BackgroundStyle)`
    top: 20px;
    opacity: 0.1;
`

export const TreesImage = styled(BackgroundStyle)`
    position: fixed;
    bottom: -10px;
    opacity: 0.5;
`

export const BirdsImage = styled(BackgroundStyle)`
    position: fixed;
    width: 30%;
    top: 0;
    opacity: 0.2;
`