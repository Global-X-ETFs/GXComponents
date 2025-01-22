import * as tailwindAnimate from "tailwindcss-animate";
import * as tailwindcssTypography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

const sharedConfig: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.tsx",
    "./dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FF5400",
        "orange-hover": "#CC4300",
        teal: "#1a444b",
        darkteal: "#04242B",
        darkblue: "#03242B",
        marine: "#002F37",
        sea: "#8EB1B2",
        granite: "#606060",
        earth: "#3D3935",
        graysilver: "#919191",
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
      borderWidth: {
        '3': "3px",
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
        lx: "17px",
        xl: "18px",
        "2xl": "20px",
        "3xl": "24px",
        "3.5xl": "26px",
        "4xl": "28px",
        "5xl": "32px",
        "6xl": "36px",
        "7xl": "38px",
        "8xl": "45px",
        "9xl": "52px",
        "10xl": "72px",
        "11xl": "80px",
      },
      width: {
        2.25: "0.55rem",
        17.5: "4.375rem",
      },
      maxWidth: {
        1268: "1268px",
      },
      padding: {
        3.75: "0.9375rem",
        7.5: "1.875rem",
      },
      screens: {
        xs: "0px",
        sm: "576px",
        md: "769px",
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
        "fruit-machine": {
          "0%": { transform: "translateY(-62.5%)" },
          "22.5%": { transform: "translateY(-62.5%)" },
          "25%": { transform: "translateY(-50%)" },
          "47.5%": { transform: "translateY(-50%)" },
          "50%": { transform: "translateY(-37.5%)" },
          "72.5%": { transform: "translateY(-37.5%)" },
          "75%": { transform: "translateY(-25%)" },
          "97.5%": { transform: "translateY(-25%)" },
          "100%": { transform: "translateY(-12.5%)" },
        },
        "fruit-machine-scale": {
          "0%": { transform: "scale(0.4)" },
          "22%": { transform: "scale(0.4)" },
          "25%": { transform: "scale(1)" },
          "47%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.4)" },
          "72%": { transform: "scale(0.4)" },
          "75%": { transform: "scale(1)" },
          "97%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.4)" },
        },
        "arrow-jump-down": {
          "0%": { transform: "translateY() rotate(45deg)" },
          "50%": { transform: "translateY(4px) rotate(45deg)" },
          "100%": { transform: "translateY(0) rotate(45deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fruit-machine": "fruit-machine 16s linear infinite",
        "fruit-machine-scale": "fruit-machine-scale 16s linear infinite",
        "arrow-jump-down": "arrow-jump-down 1.5s infinite",
      },
    },
    fontFamily: {
      sans: ["Brown", "sans-serif"],
      serif: ["Brown", "serif"],
      mono: ["GeistMono", "monospace"],
      proxima: ["ProximaNova", "sans-serif"],
      proximatight: ["ProximaNova-Condensed", "sans-serif"],
      ui: ["Geist", "sans-serif"],
    },
  },
  plugins: [tailwindAnimate, tailwindcssTypography],
};

export default sharedConfig;
