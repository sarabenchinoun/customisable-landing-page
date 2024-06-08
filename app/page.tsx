import type { Metadata } from "next";

import { CTA } from "@/components/cta";
import { CTATwo } from "@/components/cta-two";
import { Faqs } from "@/components/faqs";
import { FaqsTwo } from "@/components/faqs-two";
import { FeaturesOne } from "@/components/features";
import { FeaturesTwo } from "@/components/features-two";
import { HeroOne } from "@/components/hero";
import { HeroTwo } from "@/components/hero-two";
import { LogoClouds } from "@/components/logo-clouds";
import { Pricing } from "@/components/pricing";
import { PricingTwo } from "@/components/pricing-two";
import { SecondaryFeatures } from "@/components/secondary-features";
import { SecondaryFeaturesTwo } from "@/components/secondary-features-two";
import { Testimonials } from "@/components/testimonials";
import { TestimonialsTwo } from "@/components/testimonials-two";
import { appConfig } from "@/lib/config";

export const metadata: Metadata = {
	title: `Home | ${appConfig.name}`,
	description: appConfig.description,
	openGraph: {
		url: appConfig.url,
		title: `Home | ${appConfig.name}`,
		description: appConfig.description,
		siteName: appConfig.name,
	},
	twitter: {
		title: `Home | ${appConfig.name}`,
	},
};

export default function Home() {
	return (
		<main>
			<HeroOne />
			<HeroTwo />
			<LogoClouds />
			<FeaturesOne />
			<FeaturesTwo />
			<SecondaryFeatures />
			<SecondaryFeaturesTwo />
			<CTA />
			<CTATwo />
			<Testimonials />
			<TestimonialsTwo />
			<Pricing />
			<PricingTwo />
			<Faqs />
			<FaqsTwo />
		</main>
	);
}
