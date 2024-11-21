import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";


const { default: flattenColorPalette, } = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/registry/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/scripts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // border: 'rgb(var(--border-color))',
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        'border-spin': {
          '0%': {
            left: '0%',
            top: '0%',
            transform: 'translate(-50%, -50%)'
          },
          '38%': {
            left: '100%',
            top: '0%',
            transform: 'translate(-50%, -50%)'
          },
          '50%': {
            left: '100%',
            top: '100%',
            transform: 'translate(-50%, -50%)'
          },
          '88%': {
            left: '0%',
            top: '100%',
            transform: 'translate(-50%, -50%)'
          },
          '100%': {
            left: '0%',
            top: '0%',
            transform: 'translate(-50%, -50%)'
          }
        },
      },
      animation: {
        'border-spin': 'border-spin 5s linear infinite'
      }
    }
  },
  plugins: [
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="${value}"><path d="M31.5 0L31.5 32M32 31.5L0 31.5" /></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg width="18" height="18" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="5" cy="5" r="5" fill="${value}"/></svg>`
            )}")`,
          }),
          "bg-wave": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg width='70' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'><path d='M 0 10 Q 25 0, 50 10 Q 75 20, 100 10' fill='none' stroke='${value}' stroke-width='1'/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    }
  ],
  darkMode: 'selector',
};
export default config;
