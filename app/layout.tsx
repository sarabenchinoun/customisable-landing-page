import type { Metadata } from "next";

import { DemoLayout } from "@/components/demo-layout";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { appConfig } from "@/lib/config";
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
		template: `%s | ${appConfig.title}`,
		default: appConfig.title,
	},
	metadataBase: new URL(appConfig.url),
	applicationName: appConfig.name,
	openGraph: {
		title: {
			default: appConfig.title,
			template: `%s | ${appConfig.name}`,
		},
		url: appConfig.url,
		siteName: appConfig.name,
	},
	twitter: {
		card: "summary_large_image",
		title: {
			default: appConfig.title,
			template: `%s | ${appConfig.name}`,
		},
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
