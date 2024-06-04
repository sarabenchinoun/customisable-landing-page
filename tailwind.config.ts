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
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
					950: "#030712",
				},
			},
			fontFamily: {
				heading: "var(--font-heading)",
				body: "var(--font-body)",
			},
			// borderRadius: {
			// 	1: "4px",
			// 	2: "6px",
			// 	3: "8px",
			// 	4: "12px",
			// 	5: "16px",
			// 	6: "8px",
			// },
			borderRadius: {
				button: "var(--button-radius)",
				icon: "var(--icon-radius)",
				link: "var(--link-radius)",
				"card-sm": "var(--card-sm-radius)",
				"card-md": "var(--card-md-radius)",
				"card-lg": "var(--card-lg-radius)",
				image: "var(--image-radius)",
			},
		},
	},
	plugins: [headlessuiPlugin],
};
export default config;
