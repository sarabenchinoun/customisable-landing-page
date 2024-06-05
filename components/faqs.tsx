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
			className="relative overflow-hidden bg-gray-50 py-20 sm:py-32"
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
				<ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
					{faqsSection.faqs.map((column, columnIndex) => (
						<li key={`${columnIndex * 1}`}>
							<ul className="flex flex-col gap-y-8">
								{column.map((faq, faqIndex) => (
									<li key={`${faqIndex * 1}`}>
										<Heading as="h3" size="4" align="left">
											{faq.question}
										</Heading>
										<Text size="2" className="mt-4">
											{faq.answer}
										</Text>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
