import Image from "next/image";

import { Container } from "@/components/container";
import { detailedFeaturesSection } from "@/lib/config";

import { Heading } from "./heading";
import { Text } from "./text";

export function SecondaryFeaturesTwo() {
	return (
		<div
			id="secondary-features"
			className="overflow-hidden bg-white py-24 sm:py-32"
		>
			<Container className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start sm:gap-y-20">
				<div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
						<Heading
							as="h2"
							align="left"
							size="8"
							theme="gray"
							letterSpacing="tight"
						>
							{detailedFeaturesSection.title}
						</Heading>
						<Text size="4" className="mt-6">
							{detailedFeaturesSection.description}
						</Text>
						<dl className="mt-10 max-w-xl space-y-8 lg:max-w-none">
							{detailedFeaturesSection.features.map((feature) => (
								<div key={feature.name} className="relative pl-9">
									<dt className="flex">
										<feature.icon
											className="absolute top-1 left-1 h-5 w-5 text-primary-600"
											aria-hidden="true"
										/>
										<Heading
											as="span"
											weight="medium"
											size="4"
											align="left"
											className="text-gray-900"
										>
											{feature.name}
										</Heading>
									</dt>{" "}
									<dd className="mt-2">
										<Text as="p" size="3">
											{feature.description}
										</Text>
									</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
				<div className="lg:px-0 sm:px-6">
					<div className="relative isolate overflow-hidden bg-primary-500 px-6 pt-8 lg:mx-0 sm:mx-auto lg:max-w-none sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16">
						<div
							className="-inset-y-px -left-3 -z-10 absolute w-full origin-bottom-left skew-x-[-30deg] bg-primary-100 opacity-20 ring-1 ring-white ring-inset"
							aria-hidden="true"
						/>
						<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
							<Image
								src={detailedFeaturesSection.image}
								alt="Detailed Features Image"
								width={2432}
								height={1442}
								placeholder="blur"
								className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-gray-50"
							/>
						</div>
						<div
							className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
							aria-hidden="true"
						/>
					</div>
				</div>
			</Container>
		</div>
	);
}
