import styled from '@emotion/styled'
import Link from 'next/link'

export const TabContainer = styled.li<{ $isActive: boolean }>`
    list-style: none;
    padding: 10px 0;
    position: relative;

    ${({ theme, $isActive }) => $isActive && ({
        '&:after': {
            content: "''",
            position: 'absolute',
            bottom: '-1px',
            left: 0,
            borderRadius: '4px',
            height: '3px',
            width: '100%',
            backgroundColor: theme.secondary.main
        }
    })}
`

export const TabLabel = styled(Link)`
    color: ${({ theme }) => theme.primary.contrastText};
    font-weight: 500;
`