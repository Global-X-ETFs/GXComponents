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
            },
            boxShadow: {
                'card': "0 6px 9px 0 rgba(41,52,56,.17)"
            }
        },
        fontFamily: {
            'sans': ['Brown', 'sans-serif'],
            'serif': ['Brown', 'serif'],
            'mono': ['Brown', 'monospace'],
            'proxima': ['Metorpolis', 'sans-serif'], // Proxima Nova Font Family - TODO change to proxima nova
        },
    },
    plugins: [],
};
