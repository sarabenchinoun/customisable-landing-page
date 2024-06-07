import {} from "@/components/background";
import { CTA } from "@/components/cta";
import { Faqs } from "@/components/faqs";
import { FeaturesOne, FeaturesTwo } from "@/components/features";
import { HeroOne, HeroTwo } from "@/components/hero";
import { LogoClouds } from "@/components/logo-clouds";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import ToggleSectionWrapper, {
	RemoveSectionWrapper,
} from "@/components/toggle-section-wrapper";
import type { Metadata } from "next";

export const runtime = "edge";

export const metadata: Metadata = {
	title: "HoneyCup Labs | Home",
	description:
		"HoneyCup Labs is a pioneering software engineering company dedicated to empowering startups and businesses, with a special focus on serving the Muslim community, through innovative web solutions. Our expert team specializes in bespoke web development, custom web applications, and full-stack solutions tailored to meet the unique needs of each client. With a commitment to quality, efficiency, and cutting-edge technology, we strive to elevate your online presence and drive success in the digital world. Partner with HoneyCup Labs for transformative digital solutions that propel your business forward in the Muslim market and beyond.",
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

			<FeaturesOne />
			<FeaturesTwo />
			<CTA />
			<Testimonials />
			<Pricing />
			<Faqs />
		</main>
	);
}
