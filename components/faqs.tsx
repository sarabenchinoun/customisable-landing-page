"use client";

import { Container } from "@/components/container";
import { faqsSection } from "@/lib/config";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { TopBackground } from "./background";
import { Heading } from "./heading";
import { Icons } from "./icons";
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

export function FaqsTwo() {
	return (
		<div
			id="faq"
			className="relative overflow-hidden bg-gray-50 py-24 sm:py-32"
		>
			<TopBackground />

			<Container className="relative">
				<div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
					<Heading as="h2" align="left">
						{faqsSection.title}
					</Heading>
					<dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
						{faqsSection.faqs.map((faq) => (
							<Disclosure as="div" key={faq.question} className="pt-6">
								{({ open }) => (
									<>
										<dt>
											<DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900">
												<span className="font-semibold text-base leading-7">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<Icons.Minus
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<Icons.Plus
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</DisclosureButton>
										</dt>
										<DisclosurePanel as="dd" className="mt-2 pr-12">
											<p className="text-base text-gray-600 leading-7">
												{faq.answer}
											</p>
										</DisclosurePanel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</Container>
		</div>
	);
}
