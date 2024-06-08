import type { StaticImageData } from "next/image";

// hero
import hero2 from "@/assets/hero/hero2.jpg";

// logoClouds
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
import screenshotVatReturns from "@/assets/screenshots/vat-returns.png";
import { Icons, type LucideIcon } from "@/components/icons";

// Change the Logo component or uncomment the image in components/header.tsx and add it to the public folder

// Change the font in the layout

export const appConfig = {
	name: "HoneyCup Labs",
	title: "HoneyCup Labs | Software Engineering Company",
	description:
		"HoneyCup Labs is a pioneering software engineering company dedicated to empowering startups and businesses, with a special focus on serving the Muslim community, through innovative web solutions. Our expert team specializes in bespoke web development, custom web applications, and full-stack solutions tailored to meet the unique needs of each client. With a commitment to quality, efficiency, and cutting-edge technology, we strive to elevate your online presence and drive success in the digital world. Partner with HoneyCup Labs for transformative digital solutions that propel your business forward in the Muslim market and beyond.",
	url: "https://honeycuplabs.com/",
};

export const navigation = [
	{ href: "#features", label: "Features" },
	{ href: "#testimonials", label: "Testimonials" },
	{ href: "#pricing", label: "Pricing" },
];

export const ctaAction = {
	href: "mailto:info@honeycuplabs.com",
	label: "Get in touch",
};

export const footer = {
	companyName: "TaxPal",
	social: [
		{
			href: "#",
			icon: Icons.Instagram,
			label: "Instagram",
		},
		{
			href: "#",
			icon: Icons.Facebook,
			label: "Facebook",
		},
	],
};

export const iconTheme = {
	strokeWidth: 1.2,
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
		icon: Icons.Play,
	},
	image: hero2,
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
	],
};

interface DetailedFeaturesSectionProps {
	title: string;
	description: string;
	image: StaticImageData;
	features: {
		name: string;
		summary: string;
		description: string;
		image: StaticImageData;
		icon: LucideIcon;
	}[];
}
export const detailedFeaturesSection: DetailedFeaturesSectionProps = {
	title: "Simplify everyday business tasks.",
	description:
		"Because you`d probably be a little confused if we suggested you complicate your everyday business tasks instead.",
	image: screenshotProfitLoss,
	features: [
		{
			name: "Reporting",
			summary:
				"Stay on top of things with always up-to-date reporting features.",
			description:
				"We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
			image: screenshotProfitLoss,
			icon: Icons.Map,
		},
		{
			name: "Inventory",
			summary:
				"Never lose track of what’s in stock with accurate inventory tracking.",
			description:
				"We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
			image: screenshotInventory,
			icon: Icons.ParkingMeter,
		},
		{
			name: "Contacts",
			summary:
				"Organize all of your contacts, service providers, and invoices in one place.",
			description:
				"This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
			image: screenshotContacts,
			icon: Icons.Users,
		},
	],
};

export const ctaSection = {
	title: "Get started today",
	description:
		"It`s time to take control of your books. Buy our software so you can feel like you`re doing something productive.",
	ctaAction,
};

export const testimonialsSection = {
	title: "Loved by businesses worldwide.",
	description:
		"Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.",
	testimonials: [
		[
			{
				content:
					"TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
				author: {
					name: "Sheryl Berge",
					role: "CEO at Lynch LLC",
				},
			},
			// other testimonials
		],
		[
			{
				content:
					"The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
				author: {
					name: "Leland Kiehn",
					role: "Founder of Kiehn and Sons",
				},
			},
			// other testimonials
		],
		[
			{
				content:
					"I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
				author: {
					name: "Peter Renolds",
					role: "Founder of West Inc",
				},
			},
			// other testimonials
		],
	],
};

export const pricingSection = {
	title: {
		preHighlighted: "",
		highlighted: "Simple pricing,",
		postHighlighted: "for everyone.",
	},
	description:
		"It doesn’t matter what size your business is, our software won’t work well for you.",
	plan: {
		name: "Lifetime membership",
		catchLine: "Pay once, use forever.",
		price: "$349",
		description: "Perfect for small businesses that are looking to grow.",
		href: ctaAction.href,
		includedFeatures: [
			"Private forum access",
			"Member resources",
			"Entry to annual conference",
			"Official member t-shirt",
		],
	},
	plans: [
		{
			featured: false,
			name: "Starter",
			price: "$9",
			description:
				"Good for anyone who is self-employed and just getting started.",
			href: ctaAction.href,
			features: [
				"Send 10 quotes and invoices",
				"Connect up to 2 bank accounts",
				"Track up to 15 expenses per month",
				"Manual payroll support",
				"Export up to 3 reports",
			],
		},
		{
			featured: true,
			name: "Small business",
			price: "$15",
			description: "Perfect for small businesses that are looking to grow.",
			features: [
				"Send 50 quotes and invoices",
				"Connect up to 10 bank accounts",
				"Track up to 50 expenses per month",
				"Manual payroll support",
				"Export up to 10 reports",
			],
			href: ctaAction.href,
		},
		{
			featured: false,
			name: "Enterprise",
			price: "$29",
			description: "Great for larger businesses that are looking to scale.",
			features: [
				"Send unlimited quotes and invoices",
				"Connect unlimited bank accounts",
				"Track unlimited expenses",
				"Manual payroll support",
				"Export unlimited reports",
			],
			href: ctaAction.href,
		},
	],
};

export const faqsSection = {
	title: "Frequently asked questions",
	description:
		"If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.",
	faqs: [
		{
			question: "Does TaxPal handle VAT?",
			answer:
				"Well no, but if you move your company offshore you can probably ignore it.",
		},
		{
			question: "Can I pay for my subscription via purchase order?",
			answer: "Absolutely, we are happy to take your money in all forms.",
		},
		{
			question: "How do I apply for a job at TaxPal?",
			answer:
				"We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk.",
		},

		{
			question: "What was that testimonial about tax fraud all about?",
			answer:
				"TaxPal is just a software application, ultimately your books are your responsibility.",
		},
		{
			question:
				"TaxPal sounds horrible but why do I still feel compelled to purchase?",
			answer:
				"This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions.",
		},
		{
			question:
				"I found other companies called TaxPal, are you sure you can use this name?",
			answer:
				"Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.",
		},

		{
			question: "How do you generate reports?",
			answer:
				"You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
		},
		{
			question: "Can we expect more inventory features?",
			answer: "In life it’s really better to never expect anything at all.",
		},
		{
			question: "I lost my password, how do I get into my account?",
			answer:
				"Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
		},
	],
};
