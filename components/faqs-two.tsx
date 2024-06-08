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
