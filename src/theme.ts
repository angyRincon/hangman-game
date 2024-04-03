import { Theme } from "@emotion/react"

export const lightTheme: Theme = {
    background: '#d7e3ee',
    primary: {
        main: '#D7E3EE',
        contrastText: '#292E3D'
    },
    secondary: {
        main: '#c770ff',
        contrastText: '#460566'
    },
    colors: {
        gray: {
            '50': '#f3f7fa',
            '100': '#e9f0f6',
            '200': '#d7e3ee',
            '300': '#bed0e3',
            '400': '#a4b6d5',
            '500': '#8d9fc7',
            '600': '#6c7cb2',
            '700': '#63709f',
            '800': '#525c81',
            '900': '#464e69',
            '950': '#292e3d',
        },
        purple: {
            '50': '#fbf5ff',
            '100': '#f6e7ff',
            '200': '#eed4ff',
            '300': '#e0b2ff',
            '400': '#c770ff',
            '500': '#ba51fb',
            '600': '#a82eef',
            '700': '#921ed2',
            '800': '#7a1eab',
            '900': '#64198a',
            '950': '#460566',
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
        contrastText: ''
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