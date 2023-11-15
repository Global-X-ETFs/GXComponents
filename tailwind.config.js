import tailwindAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  important: true, // Only while we are migrating to Tailwind
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@global-x-etfs/gxcomponents/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF5400",
        "orange-hover": "#CC4300",
        darkblue: "#03242B",
        marine: "#002F37",
        sea: "#8EB1B2",
        granite: "#606060",
        earth: "#3D3935",
        neutral: {
          100: "#727272",
          200: "#8E8E8E",
          300: "#A9A9A8",
          400: "#BCBEBC",
          500: "#D2D3D1",
          600: "#E5E6E5",
          700: "#F4F4F4",
        },
      },
      boxShadow: {
        card: "0 6px 9px 0 rgba(41,52,56,.17)",
      },
      fontSize: {
        xs: "11px",
        sm: "12px",
        ms: "13px",
        md: "14px",
        ml: "15px",
        lg: "16px",
        xl: "18px",
        "2xl": "20px",
        "3xl": "24px",
        "4xl": "28px",
        "5xl": "32px",
        "6xl": "36px",
      },
      width: {
        2.25: "0.55rem",
        17.5: "4.375rem",
      },
      padding: {
        3.75: "0.9375rem",
        7.5: "1.875rem",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      sans: ["Brown", "sans-serif"],
      serif: ["Brown", "serif"],
      mono: ["GeistMono", "monospace"],
      proxima: ["ProximaNova", "sans-serif"],
      ui: ["Geist", "sans-serif"],
    },
  },
  corePlugins: {
    preflight: false, // Tailwind pre ships border-box (which is a good thing) but it conflicts with our global css in other projects
  },
  plugins: [tailwindAnimate],
};
