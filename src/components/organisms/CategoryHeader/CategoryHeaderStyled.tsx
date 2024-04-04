'use client'
import styled from '@emotion/styled';

export const LifePointsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const LifePointsValue = styled.span`
    color:${({theme}) => theme.primary.contrastText};
    font-weight: 600;
    font-size: 20px;
`