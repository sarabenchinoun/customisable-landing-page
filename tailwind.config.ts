import headlessuiPlugin from "@headlessui/tailwindcss";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					50: "var(--color-primary-50)",
					100: "var(--color-primary-100)",
					200: "var(--color-primary-200)",
					300: "var(--color-primary-300)",
					400: "var(--color-primary-400)",
					500: "var(--color-primary-500)",
					600: "var(--color-primary-600)",
					700: "var(--color-primary-700)",
					800: "var(--color-primary-800)",
					900: "var(--color-primary-900)",
					950: "var(--color-primary-950)",
				},
				gray: {
					50: "var(--color-gray-50)",
					100: "var(--color-gray-100)",
					200: "var(--color-gray-200)",
					300: "var(--color-gray-300)",
					400: "var(--color-gray-400)",
					500: "var(--color-gray-500)",
					600: "var(--color-gray-600)",
					700: "var(--color-gray-700)",
					800: "var(--color-gray-800)",
					900: "var(--color-gray-900)",
					950: "var(--color-gray-950)",
				},
			},
			fontFamily: {
				heading: "var(--font-heading)",
				body: "var(--font-body)",
			},
			borderRadius: {
				button: "var(--button-radius)",
				icon: "var(--icon-radius)",
				link: "var(--link-radius)",
				"card-sm": "var(--card-sm-radius)",
				"card-md": "var(--card-md-radius)",
				"card-lg": "var(--card-lg-radius)",
			},
		},
	},
	plugins: [headlessuiPlugin],
};
export default config;
