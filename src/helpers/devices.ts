export const size = {
    desktopXL: 1240,
    desktop: 900,
    tablet: 767,
    phone: 479,
}

const device = {
    desktopXL: `(max-width: ${size.desktopXL}px) `,
    desktop: `(max-width:${size.desktop}px)`,
    tablet: `(max-width:${size.tablet}px)`,
    phone: `(max-width:${size.phone}px)`,
}

export default device