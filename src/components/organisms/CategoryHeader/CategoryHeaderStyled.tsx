'use client'
import { SvgWrapper } from '@/components/Icons/IconStyled';
import { HeaderLeftItems, HeaderRightItems } from '@/components/templates/HeaderTemplate/HeaderTemplateStyled';
import device from '@/helpers/devices';
import styled from '@emotion/styled';

export const CategoryHeaderContainer = styled.div`
    @media ${device.tablet} {
        ${HeaderLeftItems} {
            gap: 5px;
        }

        ${HeaderRightItems} {
            gap: 5px;
            text-align: right;
        }
    }

`

export const LifePointsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;

    @media ${device.tablet} {
        gap: 2px;

    ${SvgWrapper} {
        width: 24px ;
        height: 24px;
    }
}
`

export const LifePointsValue = styled.span`
    color:${({ theme }) => theme.primary.contrastText};
    font-weight: 600;
    font-size: 20px;
    
    @media ${device.tablet} {
        font-size: 16px;
    }
`