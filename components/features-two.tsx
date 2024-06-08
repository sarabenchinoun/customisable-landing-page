import { Container } from "@/components/container";
import { featuresSection } from "@/lib/config";
import { Heading } from "./heading";
import { Icons } from "./icons";
import { Text } from "./text";

export function FeaturesTwo() {
	return (
		<div id="features" className="bg-primary-700 pt-20 pb-28 sm:py-32">
			<Container>
				<div className="mx-auto max-w-2xl lg:text-center">
					<Heading as="h2" theme="white" className="text-left lg:text-center">
						{featuresSection.title}
					</Heading>
					<Text size="4" theme="primary" className="mt-6 lg:text-center">
						{featuresSection.description}
					</Text>
				</div>
				<div className="mx-auto mt-16 max-w-2xl lg:mt-24 sm:mt-20 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{featuresSection.features.map((feature) => (
							<div key={feature.title} className="flex flex-col">
								<dt className="flex items-center gap-x-3">
									<Icons.Check
										className="h-5 w-5 flex-none text-white"
										aria-hidden="true"
									/>
									<Heading
										weight="medium"
										as="h3"
										size="4"
										align="left"
										theme="white"
									>
										{feature.title}
									</Heading>
								</dt>
								<dd className="mt-4 flex flex-auto flex-col">
									<Text theme="primary" className="flex-auto">
										{feature.description}
									</Text>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</Container>
		</div>
	);
}
