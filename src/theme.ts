import { Theme } from "@emotion/react"

export const lightTheme: Theme = {
    background: '#f3f7fa',
    primary: {
        main: '#8b9ec9',
        contrastText: '#232a2e'
    },
    secondary: {
        main: '#9d40b9',
        contrastText: '#fbf5ff'
    },
    colors: {
        gray: {
            '50': '#f3f7fa',
            '100': '#e9f0f6',
            '200': '#d6e2ef',
            '300': '#becfe3',
            '400': '#a6b9d8',
            '500': '#8b9ec9',
            '600': '#7383b8',
            '700': '#616ea1',
            '800': '#505c83',
            '900': '#454e6a',
            '950': '#292e3d',
        },
        purple: {
            '50': '#fbf6fd',
            '100': '#f6ecfb',
            '200': '#edd7f7',
            '300': '#d8a2eb',
            '400': '#d08de5',
            '500': '#b960d5',
            '600': '#9d40b9',
            '700': '#843398',
            '800': '#6e2b7d',
            '900': '#5d2867',
            '950': '#3a0f43',
        }
    }
}

export const darkTheme: Theme = {
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
        }
    }
}