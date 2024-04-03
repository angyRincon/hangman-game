"use client"
import styled from "@emotion/styled"

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const PageBox = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: minmax(100px, 400px);
    background-color: ${({ theme }) => theme.colors.gray[400]};
    place-items: center;
    min-height: 370px;
    border-radius: 20px;
    gap: 20px;
    padding: 20px 0 40px 0;
`

export const PageBottomActions = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`