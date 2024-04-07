import { Theme } from "@emotion/react"

export const lightTheme: Theme = {
    buttonShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    cardShadow: 'rgba(0, 0, 0, 0.16) 0px 5px 15px',
    background: '#cae3ed',
    primary: {
        main: '#e7f2f7',
        contrastText: '#0b2728'
    },
    secondary: {
        main: '#af70c2',
        contrastText: '#fbf8fc'
    },
    colors: {
        gray: {
            '50': '#f4f8fb',
            '100': '#e7f2f7',
            '200': '#cae3ed',
            '300': '#84c2d7',
            '400': '#65b3cb',
            '500': '#419ab6',
            '600': '#307c99',
            '700': '#28647c',
            '800': '#245568',
            '900': '#234857',
            '950': '#172e3a',
        },
        purple: {
            '50': '#fbf8fc',
            '100': '#f6eef9',
            '200': '#efe0f4',
            '300': '#e2c7eb',
            '400': '#cfa2de',
            '500': '#ba7ece',
            '600': '#af70c2',
            '700': '#904da3',
            '800': '#784386',
            '900': '#62376c',
            '950': '#431f4c',
        },
        yellow: {
            '100': "#fdff6d"
        }
    }
}

export const darkTheme: Theme = {
    buttonShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    cardShadow: 'rgba(0, 0, 0, 0.16) 0px 5px 15px',
    background: '#111112',
    primary: {
        main: '#3b3b3e',
        contrastText: '#f5f5f6'
    },
    secondary: {
        main: '#c065d2',
        contrastText: '#FFF'
    },
    colors: {
        gray: {
            '50': '#f5f5f6',
            '100': '#e6e6e7',
            '200': '#cfd0d2',
            '300': '#adaeb3',
            '400': '#84858c',
            '500': '#696a71',
            '600': '#5a5b60',
            '700': '#4d4d51',
            '800': '#434347',
            '900': '#3b3b3e',
            '950': '#111112',
        },
        purple: {
            '50': '#fcf6fd',
            '100': '#f7ecfb',
            '200': '#efd8f6',
            '300': '#e4b9ee',
            '400': '#d58fe3',
            '500': '#c065d2',
            '600': '#a444b5',
            '700': '#8a3695',
            '800': '#722e7a',
            '900': '#602a65',
            '950': '#3c1141',
        },
        yellow: {
            '100': "#fdff6d"
        }

    }
}