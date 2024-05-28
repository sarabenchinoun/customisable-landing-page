import { Container } from "@/components/container";
import { faqsSection } from "@/lib/config";
import { TopBackground } from "./background";

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
					<h2
						id="faq-title"
						className="font-heading text-3xl text-gray-900 tracking-tight sm:text-4xl"
					>
						{faqsSection.title}
					</h2>
					<p className="mt-4 text-gray-700 text-lg tracking-tight">
						{faqsSection.description}
					</p>
				</div>
				<ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
					{faqsSection.faqs.map((column, columnIndex) => (
						<li key={`${columnIndex * 1}`}>
							<ul className="flex flex-col gap-y-8">
								{column.map((faq, faqIndex) => (
									<li key={`${faqIndex * 1}`}>
										<h3 className="font-heading text-gray-900 text-lg leading-7">
											{faq.question}
										</h3>
										<p className="mt-4 text-gray-700 text-sm">{faq.answer}</p>
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
