import type { Metadata } from "next";

import { CTA, CTATwo } from "@/components/cta";
import { Faqs, FaqsTwo } from "@/components/faqs";
import SecondaryFeaturesTwo, {
	FeaturesOne,
	FeaturesTwo,
	SecondaryFeatures,
} from "@/components/features";
import { HeroOne, HeroTwo } from "@/components/hero";
import { LogoClouds } from "@/components/logo-clouds";
import { Pricing, PricingTwo } from "@/components/pricing";
import { Testimonials, TestimonialsTwo } from "@/components/testimonials";
import ToggleSectionWrapper, {
	RemoveSectionWrapper,
} from "@/components/toggle-section-wrapper";
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
			<ToggleSectionWrapper
				sectionName="Hero"
				sectionOne={<HeroOne />}
				sectionTwo={<HeroTwo />}
			/>
			<RemoveSectionWrapper showSection sectionName="Logo Clouds">
				<LogoClouds />
			</RemoveSectionWrapper>
			<ToggleSectionWrapper
				sectionName="Features"
				sectionOne={<FeaturesOne />}
				sectionTwo={<FeaturesTwo />}
			/>
			<ToggleSectionWrapper
				sectionName="Secondary Features"
				sectionOne={<SecondaryFeatures />}
				sectionTwo={<SecondaryFeaturesTwo />}
			/>
			<ToggleSectionWrapper
				sectionName="CTA"
				sectionOne={<CTA />}
				sectionTwo={<CTATwo />}
			/>
			<ToggleSectionWrapper
				sectionName="Testimonials"
				sectionOne={<Testimonials />}
				sectionTwo={<TestimonialsTwo />}
			/>
			<ToggleSectionWrapper
				sectionName="Pricing"
				sectionOne={<Pricing />}
				sectionTwo={<PricingTwo />}
			/>
			<ToggleSectionWrapper
				sectionName="Faqs"
				sectionOne={<Faqs />}
				sectionTwo={<FaqsTwo />}
			/>
		</main>
	);
}
