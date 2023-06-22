/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: [
    "./index.html",
     "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "accent": "#ff5400",
                "accent-hover": "#cc4300",
                "gxgray": "#d2d3d1",
                "white-hover": "#f4f4f4",
                "marine": "#03242b"
            },
            boxShadow: {
                'card': "0 6px 9px 0 rgba(41,52,56,.17)"
            },
            fontSize: {
                'xs': '11px',
                'sm': '12px',
                'md': '13px',
                'lg': '16px',
            },
            width: {
                2.25: '0.55rem',
            },
            padding: {
                7.5: '1.875rem',
            },
            screens: {
                xs: '0px',
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px'
            },
            
        },
        fontFamily: {
            'sans': ['Brown', 'sans-serif'],
            'serif': ['Brown', 'serif'],
            'mono': ['Brown', 'monospace'],
            'proxima': ['Metorpolis', 'sans-serif'], // Proxima Nova Font Family - TODO change to proxima nova
        }
    },
    plugins: [],
};
