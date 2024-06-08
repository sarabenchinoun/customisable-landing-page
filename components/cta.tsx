import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ctaAction, ctaSection } from "@/lib/config";
import { TopBackground } from "./background";
import { Heading } from "./heading";
import { Text } from "./text";

export function CTA() {
	return (
		<section id="cta" className="relative overflow-hidden bg-primary-600 py-32">
			<TopBackground light center />
			<Container className="relative">
				<div className="mx-auto flex max-w-lg flex-col items-center justify-center">
					<Heading as="h2" theme="white">
						{ctaSection.title}
					</Heading>
					<Text theme="white" size="4" className="mt-4" align="center">
						{ctaSection.description}
					</Text>
					<Button
						href={ctaSection.ctaAction.href}
						color="white"
						className="mt-10"
						target="_blank"
					>
						{ctaSection.ctaAction.label}
					</Button>
				</div>
			</Container>
		</section>
	);
}

export function CTATwo() {
	return (
		<div id="cta" className="bg-white">
			<Container className="py-24">
				<div className="relative isolate overflow-hidden bg-primary-700 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
					<Heading weight="medium" theme="white" className="mx-auto max-w-2xl">
						{ctaSection.title}
					</Heading>
					<Text
						align="center"
						size="4"
						className="mx-auto mt-6 max-w-xl text-gray-300"
					>
						{ctaSection.description}
					</Text>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Button color="white" href={ctaAction.href}>
							{ctaAction.label}
						</Button>
					</div>
					<svg
						viewBox="0 0 1024 1024"
						className="-z-10 -translate-x-1/2 absolute top-1/2 left-1/2 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)]"
						aria-hidden="true"
					>
						<circle
							cx={512}
							cy={512}
							r={512}
							fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
							fillOpacity="0.7"
						/>
						<defs>
							<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
								<stop className="stop-primary-light" />
								<stop offset={1} className="stop-secondary-light" />
							</radialGradient>
						</defs>
					</svg>
				</div>
			</Container>
		</div>
	);
}
