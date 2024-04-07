'use client'
import { SvgWrapper } from "@/components/Icons/IconStyled";
import device from "@/helpers/devices";
import styled from "@emotion/styled";

export const ModalTemplateBackdrop = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.526);
`

export const ModalTemplateContainer = styled.div`
    position: absolute;
    background: ${({theme}) => theme.primary.main};
    top: 150px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    max-width: 500px;
    padding: 20px;
    border-radius: 5px;
    z-index: 9;

    @media ${device.tablet} {
        margin: 0 30px;
    }
    
`

export const ModalTemplateContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
`

export const ModalTemplateTitle = styled.h1`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 40px;
    color: ${({theme}) => theme.primary.contrastText};
    white-space: nowrap;

    ${SvgWrapper} {
        margin-top: 2px;
    }
`