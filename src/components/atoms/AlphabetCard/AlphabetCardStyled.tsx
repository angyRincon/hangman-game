import device from '@/helpers/devices'
import styled from '@emotion/styled'

export const AlphabetCardButton = styled.button`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: none;
    font-weight: 700;
    font-size: 20px;
    transition: .5s;
    box-shadow: ${({ theme }) => theme.buttonShadow};
    
    ${({ theme }) => ({
        background: theme.primary.main,
        color: theme.primary.contrastText
    })}
    
    &:hover:not(:disabled) {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.gray[400]};
    }

    &:disabled{
        opacity: 0.6;
        cursor: auto;
    }

    @media ${device.tablet} {
        font-size: 18px;
        height: 50px;
    }

    @media ${device.phone} {
        font-size: 16px;
        height: 40px;
    }
`