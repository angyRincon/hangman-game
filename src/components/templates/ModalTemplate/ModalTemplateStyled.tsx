'use client'
import styled from "@emotion/styled";

export const ModalTemplateBackdrop = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 10, 72, 0.358)
    
`

export const ModalTemplateContainer = styled.div`
    position: absolute;
    background: rgb(18, 26, 255);
    top: 150px;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto;
    width: 500px;
    padding: 20px;
    border-radius: 5px;
    z-index: 9;
    
`

export const ModalTemplateContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
`

export const ModalTemplateTitle = styled.h1`
    font-size: 40px;
    color: #FFF;
`