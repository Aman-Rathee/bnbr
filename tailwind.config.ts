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
        border: 'rgb(var(--border-color))',
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
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    }
  ],
};
export default config;
