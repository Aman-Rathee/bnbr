import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import type { Config } from "tailwindcss";
import svgToDataUri from "mini-svg-data-uri";



const config: Config = {
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
};
export default config;