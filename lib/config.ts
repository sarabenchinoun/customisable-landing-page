import logoLaravel from "@/assets/logos/laravel.svg";
import logoMirage from "@/assets/logos/mirage.svg";
import logoStatamic from "@/assets/logos/statamic.svg";
import logoStaticKit from "@/assets/logos/statickit.svg";
import logoTransistor from "@/assets/logos/transistor.svg";
import logoTuple from "@/assets/logos/tuple.svg";

const primaryColor = {
	50: "#fffbeb",
	100: "#fef3c7",
	200: "#fde68a",
	300: "#fcd34d",
	400: "#fbbf24",
	500: "#f59e0b",
	600: "#d97706",
	700: "#b45309",
	800: "#92400e",
	900: "#78350f",
	950: "#451a03",
};

export const backgroundColors = {
	primary: {
		light: primaryColor[700],
		dark: primaryColor[300],
	},
	secondary: {
		light: primaryColor[400],
		dark: primaryColor[200],
	},
};

export const logoColors = {
	darkText: primaryColor[950],
	lightText: primaryColor[600],
};

// Change the Logo component or uncomment the image in components/header.tsx and add it to the public folder

export const navigation = [
	{ href: "#features", label: "Features" },
	{ href: "#testimonials", label: "Testimonials" },
	{ href: "#pricing", label: "Pricing" },
];

export const ctaAction = {
	href: "mailto:info@honeycuplabs.com",
	label: "Get in touch",
};

export const hero = {
	title: {
		preHighlighted: "Accounting",
		highlighted: "made simple",
		postHighlighted: "for small businesses.",
	},
	description:
		"Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.",
	primaryButton: {
		label: "Get 6 months free",
		href: "/register",
	},
	secondaryButton: {
		visible: true,
		label: "Watch video",
		href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
		icon: "play",
	},
} as const;

export const logoClouds = {
	title: "Trusted by these six companies so far",
	companies: [
		[
			{ name: "Transistor", logo: logoTransistor },
			{ name: "Tuple", logo: logoTuple },
			{ name: "StaticKit", logo: logoStaticKit },
		],
		[
			{ name: "Mirage", logo: logoMirage },
			{ name: "Laravel", logo: logoLaravel },
			{ name: "Statamic", logo: logoStatamic },
		],
	],
};
