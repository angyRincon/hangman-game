'use client'
import styled from "@emotion/styled";
import { PageContainer } from "@/app/PageStyled";

export const LoadingContainer = styled(PageContainer)``

export const LoadingLabel = styled.p`
    font-weight: 700;
    font-size: 40px;
    color: ${({theme}) => theme.primary.contrastText}
`