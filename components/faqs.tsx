"use client";

import { Container } from "@/components/container";
import { faqsSection } from "@/lib/config";
import { TopBackground } from "./background";
import { Heading } from "./heading";
import { Text } from "./text";

export function Faqs() {
	return (
		<section
			id="faq"
			aria-labelledby="faq-title"
			className="relative overflow-hidden bg-gray-50 py-24 sm:py-32"
		>
			<TopBackground />
			<Container className="relative">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<Heading as="h2" align="left">
						{faqsSection.title}
					</Heading>
					<Text size="4" className="mt-4">
						{faqsSection.description}
					</Text>
				</div>
				<div className="mt-20">
					<dl className="space-y-16 sm:grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-10 sm:gap-x-6 sm:gap-y-16 sm:space-y-0">
						{faqsSection.faqs.map((faq) => (
							<div key={faq.question}>
								<Heading as="h3" size="5" align="left" weight="medium">
									{faq.question}
								</Heading>
								<Text className="mt-2" lowContrast>
									{faq.answer}
								</Text>
							</div>
						))}
					</dl>
				</div>
			</Container>
		</section>
	);
}
