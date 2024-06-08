import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ctaSection } from "@/lib/config";
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
