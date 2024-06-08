import type { Metadata } from "next";

import { DemoLayout } from "@/components/demo-layout";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import {
	elegantBody,
	elegantHeading,
	modernBody,
	modernHeading,
	playfullBody,
	playfullHeading,
} from "@/lib/fonts";
import { cn } from "@/lib/utils";

import "./globals.css";

export const metadata: Metadata = {
	title: {
		default: "HoneyCup Labs",
		template: "%s | HoneyCup Labs",
	},
	description:
		"HoneyCup Labs is a pioneering software engineering company dedicated to empowering startups and businesses, with a special focus on serving the Muslim community, through innovative web solutions. Our expert team specializes in bespoke web development, custom web applications, and full-stack solutions tailored to meet the unique needs of each client. With a commitment to quality, efficiency, and cutting-edge technology, we strive to elevate your online presence and drive success in the digital world. Partner with HoneyCup Labs for transformative digital solutions that propel your business forward in the Muslim market and beyond.",

	metadataBase: new URL("https://honeycuplabs.com/"),
	keywords: [
		"HoneyCup Labs",
		"Software Engineering",
		"Web Development",
		"Muslim Market",
		"Digital Solutions",
		"Full-Stack Solutions",
		"Custom Web Applications",
		"Bespoke Web Development",
		"Innovative Web Solutions",
		"Quality Web Development",
		"Efficient Web Development",
		"Cutting-Edge Technology",
		"Online Presence",
		"Digital Success",
		"Transformative Digital Solutions",
		"Empowering Startups",
		"Empowering Businesses",
		"Expert Team",
		"Quality",
		"Efficiency",
		"Cutting-Edge",
		"Technology",
		"Elevate",
		"Drive Success",
		"Muslim Community",
		"Business Forward",
	],

	authors: [{ name: "Sara Benchinoun", url: "https://sarabenchinoun.com/" }],
	openGraph: {
		title: "HoneyCup Labs",
		description:
			"HoneyCup Labs is a pioneering software engineering company dedicated to empowering startups and businesses, with a special focus on serving the Muslim community, through innovative web solutions. Our expert team specializes in bespoke web development, custom web applications, and full-stack solutions tailored to meet the unique needs of each client. With a commitment to quality, efficiency, and cutting-edge technology, we strive to elevate your online presence and drive success in the digital world. Partner with HoneyCup Labs for transformative digital solutions that propel your business forward in the Muslim market and beyond.",
		type: "website",
		url: "https://honeycuplabs.com/",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full scroll-smooth bg-white antialiased",
				elegantHeading.variable,
				elegantBody.variable,
				modernHeading.variable,
				modernBody.variable,
				playfullHeading.variable,
				playfullBody.variable,
			)}
		>
			<body className="flex h-full flex-col font-body">
				<DemoLayout>
					<Header />
					{children}
					<Footer />
				</DemoLayout>
			</body>
		</html>
	);
}
