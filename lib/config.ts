import logoLaravel from "@/assets/logos/laravel.svg";
import logoMirage from "@/assets/logos/mirage.svg";
import logoStatamic from "@/assets/logos/statamic.svg";
import logoStaticKit from "@/assets/logos/statickit.svg";
import logoTransistor from "@/assets/logos/transistor.svg";
import logoTuple from "@/assets/logos/tuple.svg";

// features
import screenshotContacts from "@/assets/screenshots/contacts.png";
import screenshotExpenses from "@/assets/screenshots/expenses.png";
import screenshotInventory from "@/assets/screenshots/inventory.png";
import screenshotPayroll from "@/assets/screenshots/payroll.png";
import screenshotProfitLoss from "@/assets/screenshots/profit-loss.png";
import screenshotReporting from "@/assets/screenshots/reporting.png";
import screenshotVatReturns from "@/assets/screenshots/vat-returns.png";
import type { IconProps } from "@/components/icon";
import type { StaticImageData } from "next/image";

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

export const featuresSection = {
	title: "Everything you need to run your books.",
	description:
		"Well everything you need if you aren`t that picky about minor details like tax compliance.",
	features: [
		{
			title: "Payroll",
			description:
				"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
			image: screenshotPayroll,
		},
		{
			title: "Claim expenses",
			description:
				"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
			image: screenshotExpenses,
		},
		{
			title: "VAT handling",
			description:
				"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
			image: screenshotVatReturns,
		},
		{
			title: "Reporting",
			description:
				"Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
			image: screenshotReporting,
		},
	],
};

interface DetailedFeaturesSectionProps {
	title: string;
	description: string;
	features: {
		name: string;
		summary: string;
		description: string;
		image: StaticImageData;
		icon: IconProps["name"];
	}[];
}
export const detailedFeaturesSection: DetailedFeaturesSectionProps = {
	title: "Simplify everyday business tasks.",
	description:
		"Because you`d probably be a little confused if we suggested you complicate your everyday business tasks instead.",
	features: [
		{
			name: "Reporting",
			summary:
				"Stay on top of things with always up-to-date reporting features.",
			description:
				"We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
			image: screenshotProfitLoss,
			icon: "play",
		},
		{
			name: "Inventory",
			summary:
				"Never lose track of what’s in stock with accurate inventory tracking.",
			description:
				"We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
			image: screenshotInventory,
			icon: "box",
		},
		{
			name: "Contacts",
			summary:
				"Organize all of your contacts, service providers, and invoices in one place.",
			description:
				"This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
			image: screenshotContacts,
			icon: "users",
		},
	],
};
