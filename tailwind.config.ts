import type { Config } from "tailwindcss";

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
  plugins: [],
};
export default config;
