import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        background: string;
        primary: {
            main: string,
            contrastText: string
        }
        secondary: {
            main: string,
            contrastText: string
        }
        colors: {
            gray: {
                '50': string,
                '100': string,
                '200': string,
                '300': string,
                '400': string,
                '500': string,
                '600': string,
                '700': string,
                '800': string,
                '900': string,
                '950': string,
            },
            purple: {
                '50': string,
                '100': string,
                '200': string,
                '300': string,
                '400': string,
                '500': string,
                '600': string,
                '700': string,
                '800': string,
                '900': string,
                '950': string,
            }
        }
    }
}