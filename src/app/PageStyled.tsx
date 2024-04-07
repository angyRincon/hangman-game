"use client"
import device from "@/helpers/devices"
import styled from "@emotion/styled"

export const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    @media ${device.tablet} {
        padding: 0 30px 30px 30px; 
    }
`